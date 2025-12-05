# 🎯 ONE-COMMAND COMPLETE SCRIPT
# This does EVERYTHING: Execute notebooks + Push to GitHub

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  🎯 AURA Capstone - Complete Automation" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "This script will:" -ForegroundColor Yellow
Write-Host "  1. Execute all notebooks with outputs" -ForegroundColor Gray
Write-Host "  2. Stage all changes" -ForegroundColor Gray
Write-Host "  3. Commit to Git" -ForegroundColor Gray
Write-Host "  4. Push to GitHub" -ForegroundColor Gray
Write-Host ""

# Confirm
$response = Read-Host "Ready to proceed? (yes/no)"
if ($response -ne "yes" -and $response -ne "y") {
    Write-Host "⏸️  Cancelled" -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  STEP 1: Execute Notebooks" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Check if datasets exist
if (-not (Test-Path "data/raw/*.csv") -and -not (Test-Path "data/data/*.csv")) {
    Write-Host "⚠️  WARNING: No datasets found!" -ForegroundColor Yellow
    Write-Host "   Notebooks may fail without data." -ForegroundColor Gray
    Write-Host "   Continue anyway? Code will still be visible on GitHub." -ForegroundColor Gray
    $continue = Read-Host "   Proceed? (yes/no)"
    if ($continue -ne "yes" -and $continue -ne "y") {
        Write-Host "⏸️  Cancelled" -ForegroundColor Yellow
        exit 0
    }
}

# Execute notebooks
Write-Host "🚀 Executing notebooks..." -ForegroundColor Blue
python execute_all_notebooks.py

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "⚠️  Some notebooks may have failed" -ForegroundColor Yellow
    Write-Host "   Continue with push? (yes/no)" -ForegroundColor Gray
    $continue = Read-Host
    if ($continue -ne "yes" -and $continue -ne "y") {
        Write-Host "⏸️  Cancelled" -ForegroundColor Yellow
        exit 0
    }
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  STEP 2: Push to GitHub" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Run push script
.\push_to_github.ps1

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  🎉 ALL DONE!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your portfolio is now live at:" -ForegroundColor Cyan
Write-Host "https://github.com/ManderTheMan/aura-capstone" -ForegroundColor Blue
Write-Host ""
