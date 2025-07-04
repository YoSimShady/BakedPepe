@echo off
cd /d D:\PepeBaked

echo 🔄 Șterg .git vechi...
rmdir /s /q .git

echo 🧪 Reinitializez repo...
git init

echo ➕ Adaug remote...
git remote add origin https://github.com/YoSimShady/BakedPepe.git

echo 🧹 Creez .gitignore...
echo node_modules/> .gitignore
echo .next/>> .gitignore
echo .env>> .gitignore
echo .DS_Store>> .gitignore

echo 🔥 Șterg folder node_modules (dacă există)...
rmdir /s /q node_modules

echo ✅ Adaug fișiere în Git...
git add .

echo 📦 Commit schimbări...
git commit -m "Clean repo without node_modules"

echo ⏫ Trimit către GitHub (cu forțare)...
git push -u --force origin master

echo 🚀 Gata! Verifică Vercel pentru build automat.
pause
