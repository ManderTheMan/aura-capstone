# 🚀 Quick Execution Guide

## Execute All Notebooks Automatically

Run this single command to execute all notebooks with embedded outputs:

```powershell
python execute_all_notebooks.py
```

This script will:
- ✅ Find all 12 notebooks automatically
- ✅ Check which ones already have outputs
- ✅ Execute each notebook in order
- ✅ Save with embedded outputs for GitHub
- ✅ Handle errors gracefully
- ✅ Show progress and summary

## What You'll See

```
🚀 AURA Capstone - Notebook Executor
====================================

ℹ️ Scanning for notebooks...
✅ Found 12 notebooks

Notebooks to execute:
  1. milestone_1_data_analysis/session_01_import_cleaning/session_1.ipynb (has outputs)
  2. milestone_1_data_analysis/session_04_visualization/session_4_visualization.ipynb (no outputs)
  ...

⚠️  This will execute all notebooks. Large datasets required!

Proceed? (yes/no):
```

## Requirements

Make sure you have:
1. ✅ All datasets in `data/raw/` or `data/data/`
2. ✅ Python packages installed: `pip install -r requirements.txt`
3. ✅ Jupyter installed: `pip install jupyter nbconvert nbformat`

## Time Estimate

- Sessions 1-4: ~5-10 minutes total
- Sessions 5-8: ~10-15 minutes total
- Sessions 9-12: ~20-30 minutes total
- **Total: 35-55 minutes**

## Tips

- The script will ask before re-executing notebooks that already have outputs
- You can skip individual notebooks if needed
- Deep learning sessions take longer (automatically given more time)
- If a notebook fails, you can continue with the rest

## After Execution

Once complete, just push to GitHub:

```powershell
git add .
git commit -m "Add all notebook outputs for GitHub viewing"
git push origin main
```

## Alternative: Manual Execution

If you prefer to run notebooks individually:

1. Open Jupyter: `jupyter notebook`
2. For each notebook:
   - Kernel → Restart & Run All
   - Wait for completion
   - Save (Ctrl+S)
3. Close Jupyter
4. Push to GitHub

---

**Ready? Just run:** `python execute_all_notebooks.py`
