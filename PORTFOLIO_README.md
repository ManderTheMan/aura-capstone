# 🚀 Data Science Portfolio - AURA Capstone Project

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-11557c?style=for-the-badge&logo=python&logoColor=white)
![Seaborn](https://img.shields.io/badge/Seaborn-3776AB?style=for-the-badge&logo=python&logoColor=white)

[![Status](https://img.shields.io/badge/Status-In%20Progress-yellow?style=flat-square)](/)
[![Sessions](https://img.shields.io/badge/Sessions%20Completed-3%2F12-blue?style=flat-square)](/)
[![Milestone](https://img.shields.io/badge/Current%20Milestone-1%20of%203-green?style=flat-square)](/)

---

### 🎯 Building an Intelligent Marketing Data Engine

*A comprehensive data science journey from foundational analytics to advanced deep learning*

[📄 Executive Summary](./Aura_Executive_Summary.pdf) • [📓 Skills Showcase](./Skills_Showcase.ipynb) • [📊 Visualizations](#visualizations)

</div>

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Progress Dashboard](#-progress-dashboard)
- [Technical Highlights](#-technical-highlights)
- [Skills Matrix](#-skills-matrix)
- [Project Structure](#-project-structure)
- [Key Deliverables](#-key-deliverables)

---

## 🎯 Project Overview

**AURA** (Advanced User Response Analytics) is an AI/ML-based digital marketing platform designed for ClickO, a Boston-based email marketing company. This capstone project demonstrates the complete data science workflow through 12 progressive sessions.

### Business Objectives

| Objective | Description | Techniques |
|-----------|-------------|------------|
| 📈 **Demand Prediction** | Forecast product/service demand | Regression, Time Series |
| ✨ **Content Optimization** | Optimize for target audiences | NLP, Classification |
| 🎨 **Campaign Stitching** | Multi-channel campaign design | Clustering, Segmentation |
| 🤖 **Real-Time Recommendations** | Behavioral recommendations | Collaborative Filtering |

---

## 📊 Progress Dashboard

### Milestone Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROJECT PROGRESS                              │
├─────────────────────────────────────────────────────────────────┤
│  Milestone 1: Data Analysis      [████████░░░░] 75%             │
│  Milestone 2: ML Modeling        [░░░░░░░░░░░░]  0%             │
│  Milestone 3: Deep Learning      [░░░░░░░░░░░░]  0%             │
├─────────────────────────────────────────────────────────────────┤
│  Overall Progress                [███░░░░░░░░░] 25%             │
└─────────────────────────────────────────────────────────────────┘
```

### Session Status

<table>
<tr>
<th>Milestone 1: Data Analysis</th>
<th>Milestone 2: ML Modeling</th>
<th>Milestone 3: Deep Learning</th>
</tr>
<tr>
<td>

| # | Topic | Status |
|---|-------|--------|
| 1 | Data Import & Cleaning | ✅ |
| 2 | Statistical Analysis | ✅ |
| 3 | Pandas Operations | ✅ |
| 4 | Data Visualization | 🔄 |

</td>
<td>

| # | Topic | Status |
|---|-------|--------|
| 5 | Regression | ⏳ |
| 6 | Classification | ⏳ |
| 7 | Clustering (PCA) | ⏳ |
| 8 | Recommendations | ⏳ |

</td>
<td>

| # | Topic | Status |
|---|-------|--------|
| 9 | Neural Networks | ⏳ |
| 10 | Transfer Learning | ⏳ |
| 11 | CNN-LSTM | ⏳ |
| 12 | Autoencoders | ⏳ |

</td>
</tr>
</table>

---

## 🔧 Technical Highlights

### Session 1: Data Import & Cleaning

**Dataset**: NSMES1988 Healthcare Survey (4,406 records × 19 features)

```python
# Memory Optimization Strategy
def optimize_dataframe(df):
    """Reduce memory footprint through intelligent type conversion."""
    for col in df.select_dtypes(include=['object']):
        if df[col].nunique() / len(df) < 0.5:
            df[col] = df[col].astype('category')
    return df

# Result: ~40% memory reduction
```

**Key Achievements:**
- ✅ Comprehensive data quality assessment
- ✅ Memory optimization (object → category, int64 → int8)
- ✅ JSON and CSV export workflows
- ✅ Data documentation standards

---

### Session 2: Statistical Analysis

**Focus**: Descriptive statistics, correlations, and data transformations

```python
# Custom Statistics Function
def analyze_distribution(series):
    return {
        'mean': series.mean(),
        'median': series.median(),
        'std': series.std(),
        'skewness': series.skew(),
        'kurtosis': series.kurtosis()
    }
```

**Key Findings:**
- Strong correlation between chronic conditions and healthcare visits
- Right-skewed income distribution indicating inequality
- Clear health status impact on emergency utilization

---

### Session 3: Advanced Pandas Operations

**Focus**: GroupBy, pivot tables, cross-tabulation

```python
# Multi-dimensional Healthcare Analysis
pivot = pd.pivot_table(
    df,
    values='visits',
    index='health',
    columns='region',
    aggfunc=['mean', 'count'],
    margins=True
)
```

**Techniques Mastered:**
- Multi-level groupby aggregations
- Pivot tables with margins
- Cross-tabulation with normalized values
- Custom aggregation functions

---

## 🎓 Skills Matrix

<div align="center">

| Category | Skills | Proficiency |
|----------|--------|-------------|
| **Data Wrangling** | pandas, data cleaning, type optimization | ⭐⭐⭐⭐⭐ |
| **Statistical Analysis** | descriptive stats, correlations, hypothesis testing | ⭐⭐⭐⭐⭐ |
| **Visualization** | matplotlib, seaborn, dashboard design | ⭐⭐⭐⭐☆ |
| **Machine Learning** | scikit-learn, model evaluation, cross-validation | ⭐⭐⭐☆☆ |
| **Deep Learning** | TensorFlow, Keras, CNN, LSTM | ⭐⭐☆☆☆ |

</div>

### Technology Stack

```
Data Processing    │  pandas • numpy • scipy
Visualization      │  matplotlib • seaborn • plotly
Machine Learning   │  scikit-learn • imbalanced-learn • surprise
Deep Learning      │  TensorFlow • Keras
Transfer Learning  │  EfficientNetB0 • ResNet50
Version Control    │  Git • GitHub
```

---

## 📁 Project Structure

```
aura-capstone/
├── 📄 README.md                    # This file
├── 📄 EXECUTIVE_SUMMARY.pdf        # Project overview
├── 📄 SYSTEM_ARCHITECTURE.md       # Technical blueprint
├── 📄 LEARNING_JOURNAL.md          # Growth documentation
│
├── 📂 milestone_1_data_analysis/
│   ├── session_01_import_cleaning/
│   │   ├── session_1.ipynb         # Main notebook
│   │   └── outputs/                # Generated files
│   ├── session_02_statistics/
│   ├── session_03_pandas/
│   └── session_04_visualization/
│
├── 📂 milestone_2_modeling/
│   ├── session_05_regression/
│   ├── session_06_classification/
│   ├── session_07_clustering/
│   └── session_08_recommendations/
│
├── 📂 milestone_3_deep_learning/
│   ├── session_09_neural_networks/
│   ├── session_10_transfer_learning/
│   ├── session_11_cnn_lstm/
│   └── session_12_autoencoders/
│
├── 📂 portfolio/
│   ├── Skills_Showcase.ipynb       # Technical demonstration
│   └── visualizations/             # Key charts and dashboards
│
└── 📂 data/
    ├── raw/                        # Original datasets
    └── processed/                  # Cleaned datasets
```

---

## 📦 Key Deliverables

### Documents

| Document | Description | Link |
|----------|-------------|------|
| 📄 Executive Summary | Project overview and progress | [View](./Aura_Executive_Summary.pdf) |
| 📓 Skills Showcase | Technical demonstration notebook | [View](./Skills_Showcase.ipynb) |
| 📋 System Architecture | Technical design document | [View](./SYSTEM_ARCHITECTURE.md) |
| 📝 Learning Journal | Growth and insights tracking | [View](./LEARNING_JOURNAL.md) |

### Datasets Used

| Dataset | Domain | Records | Features | Session |
|---------|--------|---------|----------|---------|
| NSMES1988 | Healthcare | 4,406 | 19 | 1-4 |
| FloridaBikeRentals | Transportation | 8,760 | 14 | 5 |
| AdultCensusIncome | Census | 32,561 | 14 | 6 |
| CC_GENERAL | Finance | 8,950 | 18 | 7 |
| Movies + Ratings | Entertainment | 110K+ | 7 | 8 |
| Churn_Modelling | Banking | 10,000 | 14 | 9 |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/[username]/aura-capstone.git

# Navigate to project directory
cd aura-capstone

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Launch Jupyter
jupyter notebook
```

---

## 📈 Future Roadmap

- [ ] Complete Session 4: Data Visualization
- [ ] Begin Milestone 2: ML Modeling
- [ ] Integrate interactive Plotly dashboards
- [ ] Add model comparison frameworks
- [ ] Deploy recommendation engine prototype

---

<div align="center">

### 💡 This project demonstrates the journey from data analyst to data scientist

*Building with precision, learning with purpose*

---

**Mander** | December 2025

[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=social&logo=github)](/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=social&logo=linkedin)](/)

</div>
