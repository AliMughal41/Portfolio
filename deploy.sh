#!/bin/bash

# Portfolio Deployment Script
# This script helps deploy your portfolio to Railway

echo "🚀 Portfolio Deployment Setup"
echo "=============================="
echo ""

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js is installed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm --prefix backend install
npm --prefix frontend install
echo "✅ Dependencies installed"
echo ""

# Build frontend
echo "🔨 Building frontend..."
npm --prefix frontend run build
echo "✅ Frontend build complete"
echo ""

echo "🎉 All set for deployment!"
echo ""
echo "Next steps:"
echo "1. Read DEPLOYMENT.md for detailed instructions"
echo "2. Create accounts on MongoDB Atlas and Railway.app"
echo "3. Push to GitHub"
echo "4. Deploy on Railway"
echo ""
echo "Good luck! 🚀"
