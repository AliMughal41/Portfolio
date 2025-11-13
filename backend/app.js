// app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import messageRoutes from "./routes/messageRoutes.js";
import cvRoutes from "./routes/cvRoutes.js";

dotenv.config();

const app = express();

// Connect to database
connectDatabase();

// Middleware
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || "http://localhost:5173",
      "https://your-frontend.vercel.app", // Add your frontend Vercel URL here after deployment
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (for CV)
app.use(express.static("public"));

// Routes
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/cv", cvRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend API is running!",
  });
});

// Health check route
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  });
});

export default app;