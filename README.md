# 📱 Muhammad Ali - Full Stack Developer Portfolio

A modern, fully responsive MERN Stack portfolio website showcasing projects, skills, education, and contact information.

## 🌟 Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Modern Tech Stack**: React, Node.js, Express, MongoDB
- **Real-time Features**: Contact form with email notifications
- **CV Management**: Download CV functionality
- **Project Showcase**: Display all major projects with technologies
- **Skills Display**: Categorized skills with proficiency levels
- **Smooth Animations**: Beautiful transitions and scroll effects
- **Contact Form**: Direct messaging with email notifications

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **FontAwesome** - Icons

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Nodemailer** - Email service
- **Cloudinary** - File storage
- **CORS** - Cross-origin support

## 📂 Project Structure

```
portfolio/
├── backend/                 # Node.js Backend
│   ├── config/             # Database and email config
│   ├── controller/         # Route controllers
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── public/             # Static files
│   ├── app.js              # Express app config
│   ├── server.js           # Server entry point
│   └── package.json        # Backend dependencies
│
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── styles/         # Component styles
│   │   ├── config/         # API configuration
│   │   ├── App.jsx         # Main app
│   │   └── main.jsx        # Entry point
│   ├── dist/               # Production build
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite config
│
├── package.json            # Root package.json
├── Procfile                # Deployment config
├── railway.json            # Railway deployment
├── .env.example            # Environment variables template
├── DEPLOYMENT.md           # Deployment guide
├── QUICK_START.md          # Quick start guide
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` in root directory
   - Create `.env` in backend folder with your MongoDB URI and email credentials
   - Create `.env` in frontend folder with backend API URL

4. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend: http://localhost:4000
   - Frontend: http://localhost:5173

## 📦 Available Scripts

### Root Level
```bash
npm run install:all    # Install all dependencies
npm run dev           # Start both servers in development
npm run build:all     # Build everything for production
npm start             # Start production server
```

### Backend
```bash
cd backend
npm run dev           # Development with nodemon
npm start             # Production server
```

### Frontend
```bash
cd frontend
npm run dev           # Vite development server
npm run build         # Production build
npm run preview       # Preview production build
npm run lint          # Run ESLint
```

## 🌐 Deployment

### Deploy on Railway (Recommended)

1. **Prepare your code**
   ```bash
   npm run build:all
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

3. **Deploy on Railway**
   - Go to https://railway.app
   - Create new project from GitHub repository
   - Add environment variables
   - Deploy!

See **DEPLOYMENT.md** for detailed instructions.

## 📧 Email Configuration

This portfolio uses Gmail for sending contact form messages:

1. Enable 2-Factor Authentication on Gmail
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Add to backend `.env`:
   ```
   SMTP_EMAIL=your-email@gmail.com
   SMTP_PASSWORD=your-16-char-password
   MY_EMAIL=your-email@gmail.com
   ```

## 🗄️ Database

Uses MongoDB Atlas (free tier):

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create M0 free cluster
3. Get connection string
4. Add to backend `.env`:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/PORTFOLIO
   ```

## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```
PORT=4000
FRONTEND_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password
MY_EMAIL=your-email@gmail.com
```

**Frontend (.env)**
```
VITE_API_URL=http://localhost:4000
```

## 📱 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API health check |
| GET | `/api/v1/health` | Server health status |
| POST | `/api/v1/message/send` | Send contact message |
| GET | `/api/v1/cv/download` | Download CV |

## 🎨 Customization

### Update Portfolio Content

1. **About Section**: [frontend/src/components/About.jsx](frontend/src/components/About.jsx)
2. **Projects**: [frontend/src/components/Projects.jsx](frontend/src/components/Projects.jsx)
3. **Skills**: [frontend/src/components/Skills.jsx](frontend/src/components/Skills.jsx)
4. **Education**: [frontend/src/components/Education.jsx](frontend/src/components/Education.jsx)
5. **Contact Info**: [frontend/src/components/Contact.jsx](frontend/src/components/Contact.jsx)

### Update Personal Information

Edit these files with your information:
- Hero section: Update in [Hero.jsx](frontend/src/components/Hero.jsx)
- Social links: Update in [Footer.jsx](frontend/src/components/Footer.jsx)
- Contact details: Update in [Contact.jsx](frontend/src/components/Contact.jsx)

## 🐛 Troubleshooting

### Email Not Sending
- Verify Gmail 2FA is enabled
- Check app password is correct (16 characters)
- Review SMTP settings

### Database Connection Failed
- Verify MongoDB URI is correct
- Check IP whitelist in MongoDB Atlas
- Ensure database credentials are correct

### Frontend Build Issues
- Clear node_modules: `rm -rf frontend/node_modules`
- Reinstall: `npm install --prefix frontend`
- Rebuild: `npm run build --prefix frontend`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Muhammad Ali**
- Email: alimghal41@gmail.com
- Phone: +92 344 4133108
- LinkedIn: linkedin.com/in/ali-mughal
- GitHub: github.com/AliMughal41
- Location: Walton Road, Lahore, Pakistan

## 🙏 Acknowledgments

- MERN Stack Community
- FontAwesome for icons
- Tailwind CSS for styling
- MongoDB Atlas for database hosting
- Railway for deployment platform

---

**Happy coding! 🚀**

For deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)
For quick start guide, see [QUICK_START.md](QUICK_START.md)
