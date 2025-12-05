# 🚀 Automation Scripts - Quick Reference

## The Easy Way: ONE Command Does Everything! ⚡

```powershell
.\complete_and_push.ps1
```

This single command will:
1. ✅ Execute all 12 notebooks with outputs
2. ✅ Stage all changes
3. ✅ Commit to Git
4. ✅ Push to GitHub

**Time: 35-55 minutes** (mostly automated, you just wait!)

---

## Alternative: Step-by-Step

### Step 1: Execute Notebooks Only
```powershell
python execute_all_notebooks.py
```

### Step 2: Push to GitHub
```powershell
.\push_to_github.ps1
```

---

## What Each Script Does

### `complete_and_push.ps1` ⭐ RECOMMENDED
- **All-in-one solution**
- Executes notebooks → Commits → Pushes
- Handles errors and confirmations
- Perfect for first-time setup

### `execute_all_notebooks.py`
- Finds all notebooks automatically
- Executes with proper timeouts
- Shows progress and summary
- Saves with embedded outputs

### `push_to_github.ps1`
- Stages all changes
- Creates professional commit message
- Pushes to GitHub
- Shows verification steps

---

## Requirements

Before running any script:

1. **Python packages:**
   ```powershell
   pip install -r requirements.txt
   pip install jupyter nbconvert nbformat
   ```

2. **Git authentication:**
   ```powershell
   gh auth login
   # or configure git credentials
   ```

3. **Datasets** (optional):
   - Place in `data/raw/` or `data/data/`
   - Or skip execution and push code-only notebooks

---

## Troubleshooting

### "jupyter: command not found"
```powershell
pip install jupyter nbconvert nbformat
```

### "git push failed"
```powershell
# Authenticate with GitHub
gh auth login

# Or set up credentials
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### "File too large for GitHub"
- Check `.gitignore` is working
- Remove large files: `git rm --cached path/to/file`
- See [DATASETS.md](./DATASETS.md) for data management

### "Notebook execution failed"
- Missing datasets (okay! Push anyway)
- Missing packages (`pip install -r requirements.txt`)
- Timeout (increase in `execute_all_notebooks.py`)

---

## Manual Alternative

Don't want to use scripts? Do it manually:

```powershell
# 1. Open Jupyter
jupyter notebook

# 2. For each notebook:
#    - Kernel → Restart & Run All
#    - Save (Ctrl+S)

# 3. Close Jupyter

# 4. Push to GitHub
git add .
git commit -m "Add notebook outputs"
git push origin main
```

---

## After Pushing

Visit your repository:
- **URL**: https://github.com/ManderTheMan/aura-capstone
- **Check**: Notebooks display with outputs
- **Verify**: README looks professional
- **Confirm**: No large file warnings

---

## Quick Command Reference

```powershell
# Complete automation (recommended)
.\complete_and_push.ps1

# Execute notebooks only
python execute_all_notebooks.py

# Push to GitHub only
.\push_to_github.ps1

# Check repository status
git status

# View commit history
git log --oneline

# Check remote URL
git remote -v
```

---

## Need Help?

- 📄 [DATASETS.md](./DATASETS.md) - Dataset information
- 📄 [HOW_TO_RUN.md](./HOW_TO_RUN.md) - Detailed setup guide
- 📄 [FINAL_PUSH_GUIDE.md](./FINAL_PUSH_GUIDE.md) - Manual instructions
- 📄 [EXECUTE_NOTEBOOKS.md](./EXECUTE_NOTEBOOKS.md) - Notebook execution details

---

**Ready? Just run:** `.\complete_and_push.ps1` 🚀
