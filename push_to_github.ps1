# 🚀 Automated Push to GitHub Script
# Run this after executing notebooks

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  🚀 AURA Capstone - GitHub Push Script" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in a git repository
if (-not (Test-Path .git)) {
    Write-Host "❌ Error: Not a git repository!" -ForegroundColor Red
    Write-Host "   Run 'git init' first" -ForegroundColor Yellow
    exit 1
}

# Show current status
Write-Host "📊 Checking repository status..." -ForegroundColor Blue
Write-Host ""
git status

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Ask for confirmation
$response = Read-Host "🤔 Ready to commit and push? (yes/no)"
if ($response -ne "yes" -and $response -ne "y") {
    Write-Host "⏸️  Cancelled by user" -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "📝 Staging all changes..." -ForegroundColor Blue
git add .

Write-Host "✅ Files staged" -ForegroundColor Green
Write-Host ""

# Show what will be committed
Write-Host "📋 Changes to be committed:" -ForegroundColor Blue
git status --short
Write-Host ""

# Commit with message
$commitMsg = "Complete AURA Capstone: All 12 sessions with outputs, documentation, and GitHub optimization"
Write-Host "💾 Committing changes..." -ForegroundColor Blue
Write-Host "   Message: $commitMsg" -ForegroundColor Gray
git commit -m $commitMsg

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Commit successful!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Commit had issues (might be nothing to commit)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Blue

# Get current branch
$branch = git rev-parse --abbrev-ref HEAD

Write-Host "   Branch: $branch" -ForegroundColor Gray
git push origin $branch

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Green
    Write-Host "  ✅ SUCCESS! Pushed to GitHub" -ForegroundColor Green
    Write-Host "============================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 View your repository at:" -ForegroundColor Cyan
    Write-Host "   https://github.com/ManderTheMan/aura-capstone" -ForegroundColor Blue
    Write-Host ""
    Write-Host "📊 Check that:" -ForegroundColor Yellow
    Write-Host "   • Notebooks display with outputs" -ForegroundColor Gray
    Write-Host "   • README looks professional" -ForegroundColor Gray
    Write-Host "   • Repository size is reasonable" -ForegroundColor Gray
    Write-Host "   • All documentation is present" -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Red
    Write-Host "  ❌ Push failed!" -ForegroundColor Red
    Write-Host "============================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Common issues:" -ForegroundColor Yellow
    Write-Host "   • Need to authenticate (gh auth login)" -ForegroundColor Gray
    Write-Host "   • Files too large (check .gitignore)" -ForegroundColor Gray
    Write-Host "   • Need to pull first (git pull origin main)" -ForegroundColor Gray
    Write-Host ""
}

Write-Host ""
