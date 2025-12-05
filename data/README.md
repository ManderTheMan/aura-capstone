# 📂 Data Directory

## Structure

```
data/
├── raw/              # Original datasets (gitignored)
├── processed/        # Cleaned/transformed data (gitignored)
├── data/             # Alternative data location (gitignored)
└── samples/          # Small sample datasets (included in repo)
```

## ⚠️ Large Files Not Included

The original datasets (~100 MB total) are **not included** in this GitHub repository due to file size limitations.

## 🎯 How to View This Project

**No data needed!** All notebooks have been executed with outputs embedded, so you can see all visualizations and results directly on GitHub.

## 📥 To Run Locally

If you want to reproduce the analysis:

1. **See [DATASETS.md](../DATASETS.md)** for detailed information on obtaining each dataset
2. Place datasets in the appropriate folders:
   - `raw/` - Original downloaded files
   - `data/` - Alternative location used by some notebooks
3. Run the notebooks - they will handle the rest!

## 📊 Datasets Used

| Dataset | Location | Size | Status |
|---------|----------|------|--------|
| NSMES1988.csv | raw/ or data/ | 500 KB | Not in repo |
| FloridaBikeRentals.csv | data/ | 1 MB | Not in repo |
| adultcensusincome.csv | data/ | 4 MB | Not in repo |
| CC GENERAL.csv | data/ | 900 KB | Not in repo |
| movies.csv | data/ | 2 MB | Not in repo |
| ratings.csv | data/ | 8 MB | Not in repo |
| Churn_Modeling.csv | data/ | 800 KB | Not in repo |
| Face_mask_detection.zip | data/ | 50 MB | Not in repo |
| GrammarandProductReviews.xlsx | data/ | 2 MB | Not in repo |
| Dental-Panaromic-Autoencoder.npz | data/ | 30 MB | Not in repo |

## 🔒 .gitignore

Large data files are excluded via `.gitignore` to keep the repository lightweight and professional.

```gitignore
# Exclude large data files
data/raw/*.csv
data/raw/*.xlsx
data/raw/*.zip
data/raw/*.npz
data/processed/*.csv
data/data/*.csv
data/data/*.xlsx
data/data/*.zip
data/data/*.npz
```

## ✅ What's Included

- ✅ Folder structure (.gitkeep files)
- ✅ This README
- ✅ Sample datasets (if created)
- ✅ Documentation

## 💡 Why This Approach?

1. **Professional**: Clean, lightweight GitHub repo
2. **Viewable**: All outputs embedded in notebooks
3. **Reproducible**: Instructions to obtain data
4. **Flexible**: Works with or without datasets
5. **Standard Practice**: Common in data science portfolios

---

See [DATASETS.md](../DATASETS.md) for complete dataset information and download instructions.
