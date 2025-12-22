$ErrorActionPreference = "Continue"

Write-Host "===========================================" -ForegroundColor Cyan
Write-Host "PERATSIM INNOVATION - VERCEL DEPLOYMENT" -ForegroundColor Green
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host ""

# Change directory
$projectPath = "c:\Users\perat\OneDrive\Documents\Entreprise\Pératsim Innovation\Site\peratsim.github.io"
Set-Location $projectPath
Write-Host "📁 Directory: $projectPath" -ForegroundColor Yellow

Write-Host ""
Write-Host "🔨 Building project..." -ForegroundColor Cyan
npm run build 2>&1 | Select-Object -Last 20

Write-Host ""
Write-Host "📦 Staging files..." -ForegroundColor Cyan
git add -A
git status

Write-Host ""
Write-Host "💾 Committing..." -ForegroundColor Cyan
git commit -m "feat: Deploy real Peratsim premium homepage to Vercel"

Write-Host ""
Write-Host "🚀 Pushing to GitHub (Vercel will auto-deploy)..." -ForegroundColor Green
git push origin main

Write-Host ""
Write-Host "===========================================" -ForegroundColor Green
Write-Host "✅ DEPLOYMENT PUSHED!" -ForegroundColor Green
Write-Host "Vercel will auto-deploy in 1-2 minutes" -ForegroundColor Green
Write-Host "Check: https://console.vercel.com" -ForegroundColor Green
Write-Host "===========================================" -ForegroundColor Green

Read-Host "Press Enter to close"
