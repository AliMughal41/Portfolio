# 🆘 Emergency Help - Quick Fixes
## Deployment Troubleshooting Guide

---

## 🚨 Problem: Nothing Works - Start Here!

### Step 1: Is the site loading at all?

```bash
# Check Railway status
curl https://your-railway-url.railway.app

# If response = 500+ error → Server problem
# If response = blank → Frontend not served
# If response = normal page → Basic load works
```

---

## ⚠️ Common Errors & Quick Fixes

### ❌ Error 1: Site Won't Load / Blank Page

**Symptoms:**
- Blank white page
- Errors in browser console (F12)
- Infinite loading

**Quick Fix:**
```bash
# 1. Clear browser cache
Ctrl + Shift + Delete  # or Cmd + Shift + Delete on Mac

# 2. Hard refresh browser
Ctrl + Shift + R       # or Cmd + Shift + R on Mac

# 3. Rebuild frontend locally
cd frontend
npm run build
cd ..

# 4. Push to GitHub (Railway auto-redeploys)
git add .
git commit -m "Fix: rebuild frontend"
git push
```

**Check:**
1. Does `frontend/dist/` folder exist?
2. Does `frontend/dist/index.html` exist?
3. Are permissions correct (Railway can read)?

---

### ❌ Error 2: "Cannot POST /api/v1/message/send"

**Symptoms:**
- API endpoint returns 404
- Contact form doesn't send
- Console shows: `POST /api/v1/message/send 404`

**Quick Fix:**
```bash
# Verify routes exist
# File: backend/routes/messageRoutes.js

# Should have:
router.post('/send', sendMessage);

# Verify controller exists
# File: backend/controller/messageController.js

# Should export sendMessage function
```

**Check:**
1. Are routes file correct?
2. Is controller imported in app.js?
3. Is app.js using `app.use("/api/v1/message", messageRoutes)`?

**Full Check:**
```
✓ backend/routes/messageRoutes.js exists
✓ backend/controller/messageController.js exists
✓ Routes imported in backend/app.js
✓ CORS configured to allow POST
✓ Content-Type: application/json
```

---

### ❌ Error 3: "Error: connect ECONNREFUSED 127.0.0.1:27017"

**Symptoms:**
- MongoDB won't connect
- Server crashes on startup
- Error: `MongooseError: connect ECONNREFUSED`

**Root Cause:** MONGO_URI is wrong or MongoDB Atlas not accessible

**Quick Fix:**
```
In Railway Variables, check MONGO_URI:

WRONG:
mongodb://127.0.0.1:27017/PORTFOLIO

CORRECT:
mongodb+srv://portfolio_user:YOUR_PASSWORD@cluster-name.mongodb.net/PORTFOLIO?retryWrites=true&w=majority
```

**Step-by-step Fix:**

1. Go to MongoDB Atlas dashboard
2. Click "Database" → "Connect"
3. Choose "Drivers"
4. Copy connection string
5. Replace in Railway Variables:
   - `portfolio_user` → Your database user
   - `YOUR_PASSWORD` → Your password (no special chars issues)
   - `cluster-name` → Your cluster name
6. Test connection:
```bash
# Local testing
mongosh "connection-string-here"
```

**Check MongoDB Setup:**
- [ ] Cluster created (M0 free)
- [ ] Database user created
- [ ] Password doesn't have special characters like @ or #
- [ ] IP whitelist allows 0.0.0.0/0
- [ ] Connection string has 3 slashes: mongodb+srv://

---

### ❌ Error 4: "Error: Invalid login: 535-5.7.8"

**Symptoms:**
- Contact form doesn't send
- Error in logs: `Invalid login`
- Gmail authentication fails

**Root Cause:** App password wrong

**Quick Fix:**

1. **Remove spaces from password:**
   ```
   WRONG: abcd efgh ijkl mnop  (16 char with spaces)
   RIGHT: abcdefghijklmnop     (16 char no spaces)
   ```

2. **Regenerate app password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Delete old password
   - Generate new one
   - Copy without spaces
   - Update in Railway Variables

3. **Verify settings:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_EMAIL=your-email@gmail.com
   SMTP_PASSWORD=your-16-char-password-here
   ```

**Check Gmail:**
- [ ] 2FA enabled
- [ ] App password is 16 characters
- [ ] No spaces in password
- [ ] Password copied correctly from Google
- [ ] SMTP settings match exactly

---

### ❌ Error 5: "CORS Error / Access denied"

**Symptoms:**
- Frontend loads but API calls fail
- Console error: `Access to XMLHttpRequest blocked by CORS`
- Contact form doesn't work

**Root Cause:** CORS not configured correctly

**Quick Fix:**

Check `backend/app.js`:
```javascript
// Should look like:
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || "http://localhost:5173",
      "https://your-railway-url.railway.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
```

**Railway Variables Fix:**
```
FRONTEND_URL=https://your-railway-url.railway.app
```

**Verify:**
- [ ] FRONTEND_URL correct in variables
- [ ] CORS middleware before routes
- [ ] No typos in domain
- [ ] https:// not http://

---

### ❌ Error 6: "Cannot find module..."

**Symptoms:**
- Server crashes on startup
- Error: `Cannot find module 'express'`
- Error: `Cannot find module 'mongoose'`

**Root Cause:** Dependencies not installed

**Quick Fix:**

```bash
# 1. Local fix
cd backend
npm install
cd ..

# 2. Force rebuild on Railway
# Go to Railway → Deployments
# Click "Redeploy" button

# 3. If still failing, check package.json
# All packages should be in "dependencies"
# NOT "devDependencies"
```

**Check:**
- [ ] `backend/package.json` has all modules
- [ ] `npm install` runs without errors
- [ ] `node_modules` folder created
- [ ] `package-lock.json` committed to Git

---

### ❌ Error 7: "Port already in use"

**Symptoms:**
- Server won't start
- Error: `EADDRINUSE :::4000`
- Port 4000 occupied

**Local Fix:**
```bash
# Find process using port 4000
netstat -ano | findstr :4000

# Kill it (replace PID with actual number)
taskkill /PID 1234 /F

# Or change port in .env
PORT=5000
```

**Production (Railway):**
- Remove PORT variable (Railway assigns it)
- Use `process.env.PORT` in code

---

### ❌ Error 8: "Build failed on Railway"

**Symptoms:**
- Deployment shows "Failed"
- Build log has errors
- Older version still running

**Quick Fix:**

1. Check deployment logs:
   - Go to Railway → Deployments
   - Click on failed deployment
   - Read full error message

2. Common causes:
   ```
   ✗ Node version mismatch
   ✗ Missing dependencies
   ✗ Syntax errors in code
   ✗ .env file committed
   ✗ package.json missing
   ```

3. Fix locally and push:
   ```bash
   npm install  # Verify no errors
   npm run build --prefix frontend  # Verify build works
   git add .
   git commit -m "Fix: resolve build issues"
   git push
   ```

---

### ❌ Error 9: "Cannot GET /"

**Symptoms:**
- Frontend files not served
- Error: `Cannot GET /`
- API works but homepage shows 404

**Root Cause:** Frontend dist not served

**Fix:**

Check `backend/app.js`:
```javascript
// Should have:
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));
```

**Verify:**
- [ ] `frontend/dist/` exists
- [ ] `frontend/dist/index.html` exists
- [ ] Backend serves static files
- [ ] No errors in build

---

### ❌ Error 10: "CV Download Not Working"

**Symptoms:**
- Download button doesn't work
- No file downloads
- 404 error on /api/v1/cv/download

**Fix:**

Check `backend/routes/cvRoutes.js`:
```javascript
router.get('/download', downloadCV);
```

Check `backend/controller/cvController.js`:
- Should have downloadCV function
- Should reference correct file path

**Verify:**
- [ ] CV file exists in backend/public/cv/
- [ ] Routes configured correctly
- [ ] Controller function defined
- [ ] Correct file name used

---

## 🔍 Debug Checklist

### Check 1: Is Server Running?
```bash
# Test health endpoint
curl https://your-railway-url.railway.app/api/v1/health

# Expected response:
# {"success": true, "message": "Server is healthy"}
```

### Check 2: Is Frontend Loading?
```bash
# Visit homepage
https://your-railway-url.railway.app

# Check:
- Page loads (not blank)
- Styles apply (colors, layout correct)
- Images appear
- No console errors (F12)
```

### Check 3: Can Frontend Connect to API?
```bash
# In browser console (F12):
fetch('https://your-railway-url.railway.app/api/v1/health')
  .then(r => r.json())
  .then(d => console.log(d))

# Should show: {"success": true, ...}
```

### Check 4: Can API Connect to Database?
```bash
# Visit: https://your-railway-url.railway.app/api/v1/health
# Should return success (proves DB connection works)
```

### Check 5: Can Email Send?
```bash
# Fill contact form and send
# Check email inbox
# If received → Email works
# If not received → Check Gmail settings
```

---

## 📋 Full Diagnostic

Run this when everything is broken:

```bash
# 1. Check local code
cd d:\portfolio
npm install
npm --prefix backend install
npm --prefix frontend install
npm --prefix frontend run build

# 2. Check Git status
git status
git log --oneline  # See recent commits

# 3. Push to GitHub
git add .
git commit -m "Rebuild - diagnostics"
git push

# 4. Check Railway
# Go to https://railway.app
# - View logs
# - Check variables
# - Check deployment status

# 5. Test endpoints
# Health: /api/v1/health
# Homepage: /
# Contact: /api/v1/message/send (POST)

# 6. Manual test in browser
# F12 → Console tab
# Test API calls with fetch()
```

---

## 📞 Emergency Contact Points

### When to Check What:

| Issue | Check | Solution |
|-------|-------|----------|
| Site won't load | Browser console (F12) | Clear cache, rebuild |
| API not working | Network tab (F12) | Check routes, controller |
| Database error | Railway logs | Verify MONGO_URI |
| Email not sending | Railway logs | Fix app password |
| CORS error | Network tab | Update CORS config |
| Build failed | Deployment logs | Check for syntax errors |

---

## 🚨 Nuclear Option (Reset Everything)

Only do this if nothing else works:

```bash
# 1. Delete node_modules
rm -r backend/node_modules
rm -r frontend/node_modules

# 2. Clean install
npm install --prefix backend
npm install --prefix frontend

# 3. Fresh build
npm run build --prefix frontend

# 4. Push to GitHub
git add .
git commit -m "Clean rebuild"
git push

# 5. Force rebuild on Railway
# Go to Railway → Deployments
# Click "Redeploy" on latest
```

---

## 📖 Escalation Path

1. **Check this file** ← You are here
2. **Check browser console** (F12 → Console)
3. **Check Railway logs** (Deployments → Logs)
4. **Check MongoDB Atlas** (Network Access, Connection)
5. **Check Gmail** (App passwords, 2FA)
6. **Check code locally** (npm run dev)
7. **Ask for help** (Stack Overflow, GitHub Issues)

---

## 💾 Backup Your Data

Before making big changes:

```bash
# Backup database
# Go to MongoDB Atlas → Backup
# Create manual backup

# Backup code
git push  # Always have latest on GitHub

# Backup locally
# Copy entire portfolio folder
```

---

## 🔄 Rollback Plan

If deployment broke things:

```bash
# 1. Check previous deployments
git log --oneline

# 2. Revert to working version
git revert HEAD  # Undo last commit

# 3. Push new version
git push

# 4. Railway auto-redeploys with old code
```

---

## ✅ Health Check After Each Fix

After fixing any issue, verify:

- [ ] Homepage loads
- [ ] No console errors (F12)
- [ ] API returns health check
- [ ] Contact form sends
- [ ] CV downloads
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] No 404 errors

---

## 📊 Issue Severity Levels

```
🔴 CRITICAL (Site completely down)
   → Check health endpoint first
   → Restart deployment
   → Contact Railway support

🟠 HIGH (Major feature broken)
   → Check logs
   → Review recent changes
   → Rollback if necessary

🟡 MEDIUM (Some features don't work)
   → Check specific component
   → Review error messages
   → Test locally

🟢 LOW (Minor issue)
   → Does it affect users?
   → Document for later fix
   → Monitor
```

---

## 🎯 Prevention Tips

```
✓ Test locally before pushing
✓ Keep .env out of Git
✓ Use environment variables
✓ Commit working code only
✓ Read error messages carefully
✓ Check logs regularly
✓ Backup important data
✓ Document changes
✓ Keep dependencies updated
✓ Test on multiple devices
```

---

## 📞 When to Get Help

**Do these yourself:**
- Clear cache, hard refresh
- Check environment variables
- Review error messages
- Test locally

**Ask for help if:**
- Same error persists after trying 3 times
- You're stuck for > 1 hour
- Multiple things broken simultaneously
- Production data at risk

---

**Last Updated: June 2026**
**Emergency Help v1.0**

*Remember: Stay calm, read errors carefully, check one thing at a time* 🚀
