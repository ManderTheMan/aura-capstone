# 🚀 How to Run This Project

## Quick Start - Just Viewing? ✨

**Good news!** You don't need to run anything to see the project.

All notebooks have been **executed with outputs embedded**, so you can:
1. Browse the repository on GitHub
2. Click any `.ipynb` notebook file
3. See all visualizations, tables, and results immediately!

---

## Want to Run It Yourself? 

Follow these steps:

### 1️⃣ Prerequisites

- **Python 3.8+** installed
- **Git** installed
- **Text editor or IDE** (VS Code recommended)

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/ManderTheMan/aura-capstone.git
cd aura-capstone
```

### 3️⃣ Create Virtual Environment

**Windows (PowerShell):**
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

**macOS/Linux:**
```bash
python -m venv venv
source venv/bin/activate
```

### 4️⃣ Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

**Requirements include:**
- pandas, numpy, scipy
- matplotlib, seaborn, plotly
- scikit-learn, imbalanced-learn
- tensorflow, keras
- surprise (for recommendations)
- opencv-python

### 5️⃣ Get the Datasets

**Option A: Skip This Step** ✅
- Just view the notebooks with embedded outputs
- No datasets needed!

**Option B: Run Notebooks Yourself**
- See [DATASETS.md](./DATASETS.md) for dataset sources
- Download required datasets
- Place them in `data/raw/` or `data/data/`

### 6️⃣ Launch Jupyter

```bash
jupyter notebook
```

Or open in VS Code:
```bash
code .
```

### 7️⃣ Run Notebooks

Navigate to any session folder and open the notebook:

**Milestone 1: Data Analysis**
- `milestone_1_data_analysis/session_01_import_cleaning/session_1.ipynb`
- `milestone_1_data_analysis/session_04_visualization/session_4_visualization.ipynb`

**Milestone 2: Machine Learning**
- `milestone_2_modeling/session_05_regression/session_5_regression.ipynb`
- `milestone_2_modeling/session_06_classification/session_6_classification.ipynb`
- `milestone_2_modeling/session_07_clustering/session_7_clustering.ipynb`
- `milestone_2_modeling/session_08_recommendations/session_8_recommendations.ipynb`

**Milestone 3: Deep Learning**
- `milestone_3_deep_learning/session_09_neural_networks/session_9_neural_networks.ipynb`
- `milestone_3_deep_learning/session_10_transfer_learning/session_10_transfer_learning.ipynb`
- `milestone_3_deep_learning/session_11_cnn_lstm/session_11_cnn_lstm.ipynb`
- `milestone_3_deep_learning/session_12_autoencoders/session_12_autoencoders.ipynb`

---

## 🐛 Troubleshooting

### "Module not found" errors
```bash
pip install <module-name>
```

### "File not found" errors
- Check dataset paths in notebooks
- Ensure datasets are in correct folders
- See [DATASETS.md](./DATASETS.md) for help

### Style warnings (seaborn-whitegrid)
Modern matplotlib may not have `seaborn-whitegrid`. Update to:
```python
plt.style.use('seaborn-v0_8-whitegrid')
# or
import seaborn as sns
sns.set_style('whitegrid')
```

### GPU not available (TensorFlow)
- TensorFlow will use CPU automatically
- Deep learning will be slower but still work

---

## 📊 Project Structure

```
aura-capstone/
├── README.md                    # Project overview
├── DATASETS.md                  # Dataset information
├── HOW_TO_RUN.md               # This file
├── COMPLETION_SUMMARY.md        # Final summary
├── PROJECT_OUTLINE.md           # Complete roadmap
├── requirements.txt             # Dependencies
├── .gitignore                   # Git exclusions
│
├── milestone_1_data_analysis/   # Sessions 1-4
├── milestone_2_modeling/        # Sessions 5-8
├── milestone_3_deep_learning/   # Sessions 9-12
│
├── data/                        # Data folder (gitignored)
│   ├── raw/                     # Original datasets
│   ├── processed/               # Cleaned data
│   └── data/                    # Alternative location
│
└── portfolio/                   # Portfolio showcase
    └── Skills_Showcase.ipynb
```

---

## ⚡ Quick Commands

```bash
# Activate environment
.\venv\Scripts\Activate.ps1  # Windows
source venv/bin/activate     # macOS/Linux

# Install packages
pip install -r requirements.txt

# Launch Jupyter
jupyter notebook

# Deactivate environment
deactivate
```

---

## 🎯 What Each Session Does

| Session | Topic | Dataset | Key Techniques |
|---------|-------|---------|----------------|
| 1 | Data Import & Cleaning | NSMES1988 | pandas, data quality |
| 2 | Statistical Analysis | NSMES1988 | descriptive stats, correlations |
| 3 | Pandas Operations | NSMES1988 | groupby, pivot tables |
| 4 | Visualization | NSMES1988 | seaborn, matplotlib |
| 5 | Regression | BikeRentals | Linear, Polynomial, Ridge, Lasso |
| 6 | Classification | CensusIncome | Logistic, Tree, Forest, Gradient Boost |
| 7 | Clustering | CC_GENERAL | K-Means, Hierarchical, DBSCAN |
| 8 | Recommendations | Movies | Collaborative Filtering, SVD |
| 9 | Neural Networks | Churn | Deep Learning, TensorFlow |
| 10 | Transfer Learning | FaceMasks | VGG16, ResNet, EfficientNet |
| 11 | CNN-LSTM | BikeRentals | Time Series, Text Classification |
| 12 | Autoencoders | Dental X-rays | VAE, Denoising, Anomaly Detection |

---

## 💡 Tips

1. **Start with Milestone 1** - Build foundation first
2. **Read markdown cells** - They explain everything
3. **Run cells in order** - Dependencies matter
4. **Check outputs** - Compare with embedded outputs
5. **Experiment** - Modify parameters and rerun!

---

## 📞 Need Help?

1. Check [DATASETS.md](./DATASETS.md) for data issues
2. Check [COMPLETION_SUMMARY.md](./COMPLETION_SUMMARY.md) for project overview
3. Review notebook markdown for explanations
4. Check requirements.txt for dependencies

---

## ✨ Remember

**This is a portfolio project!** The goal is to demonstrate skills, not just run code. Feel free to:
- Explore the embedded outputs on GitHub
- Modify and extend the analyses
- Use as a learning resource
- Adapt for your own projects

---

**Happy Coding! 🎓**
