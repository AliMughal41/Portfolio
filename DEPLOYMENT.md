# 🚀 Portfolio Deployment Guide

Your MERN Stack portfolio is ready for deployment on Railway!

## 📋 Pre-Deployment Checklist

- ✅ MongoDB Atlas account (free tier available)
- ✅ Railway account (https://railway.app)
- ✅ Git repository configured
- ✅ Environment variables set up

---

## 🔧 Step 1: Set Up MongoDB Atlas (Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (M0 free tier)
4. Wait for cluster to be ready (5-10 minutes)
5. Click "Connect" and get your connection string
6. Format: `mongodb+srv://username:password@cluster.mongodb.net/PORTFOLIO?retryWrites=true&w=majority`

---

## 📧 Step 2: Get Gmail App Password (For Emails)

1. Enable 2-Factor Authentication on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Select "Mail" and "Windows Computer"
4. Google will generate a 16-character password
5. Copy this password (you'll need it for deployment)

---

## 🚂 Step 3: Deploy on Railway

### Option A: Using GitHub (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [Railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub"
4. Select your repository
5. Railway will auto-detect the project structure

### Option B: Using Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Link to existing project
railway link

# Deploy
railway up
```

---

## 🌍 Step 4: Configure Environment Variables on Railway

1. Go to your Railway project dashboard
2. Click on "Variables"
3. Add these variables:

```
PORT=4000
FRONTEND_URL=https://your-railway-url.railway.app

# MongoDB Connection
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/PORTFOLIO?retryWrites=true&w=majority

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-16-char-app-password
MY_EMAIL=your-email@gmail.com

# CV Configuration
CV_URL=your-cloudinary-url-if-available
```

---

## 📱 Step 5: Update Frontend API URL

After deployment, update your frontend `.env` file:

**File: `frontend/.env`**
```
VITE_API_URL=https://your-railway-url.railway.app
```

Then rebuild:
```bash
npm --prefix frontend run build
```

---

## ✅ Step 6: Test Your Deployment

1. Visit your Railway URL: `https://your-railway-url.railway.app`
2. Check if portfolio loads
3. Test contact form (should send email)
4. Test CV download
5. Test all navigation links

---

## 🔐 Important Security Notes

- ✅ Never commit `.env` file to Git
- ✅ Use `.env.example` as template
- ✅ Keep sensitive data in Railway variables only
- ✅ Use app-specific passwords, not main password
- ✅ Enable HTTPS (Railway does this by default)

---

## 🛠️ Troubleshooting

### "Database connection failed"
- ✅ Check MongoDB URI in environment variables
- ✅ Verify IP whitelist in MongoDB Atlas (allow 0.0.0.0/0)
- ✅ Test connection string locally

### "Email not sending"
- ✅ Verify Gmail app password (16 characters)
- ✅ Enable 2FA on Gmail account
- ✅ Check SMTP settings

### "Frontend not loading"
- ✅ Rebuild frontend: `npm run build --prefix frontend`
- ✅ Check VITE_API_URL is correct
- ✅ Verify CORS configuration in backend

### "Port issues"
- ✅ Railway automatically assigns PORT via environment variable
- ✅ Use `process.env.PORT` in your code

---

## 📊 Monitoring Your Deployment

1. Railway Dashboard → Project Settings
2. View real-time logs
3. Monitor deployment status
4. Check resource usage

---

## 💡 Optional Enhancements

### Custom Domain
1. Railway → Project → Settings → Domains
2. Add your custom domain (requires DNS configuration)

### CI/CD Pipeline
Railway automatically deploys on every push to main branch!

### Database Backups
MongoDB Atlas offers automated backups in free tier

---

## 🎉 You're Done!

Your portfolio is now live! Share the URL:
```
https://your-railway-url.railway.app
```

---

**Need Help?**
- Railway Docs: https://docs.railway.app
- MongoDB Docs: https://docs.mongodb.com
- Express Docs: https://expressjs.com
