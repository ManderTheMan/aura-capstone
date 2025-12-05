# 📊 Dataset Guide - AURA Capstone Project

## Overview

This project uses **10 datasets** across healthcare, finance, entertainment, and transportation domains. Due to GitHub's file size limits, the full datasets are **not included** in this repository.

## 🎯 How to View This Project

### Option 1: View on GitHub (Recommended)
**All notebooks have been executed with outputs embedded**, so you can see all visualizations, results, and analyses directly on GitHub without downloading any data!

### Option 2: Run Locally
If you want to reproduce the analysis, follow the instructions below to obtain the datasets.

---

## 📥 Dataset Information

### Session 1-4: NSMES1988.csv
**Domain**: Healthcare Survey  
**Size**: ~500 KB  
**Records**: 4,406  
**Features**: 19  

**Description**: National medical expenditure survey from 1988 containing healthcare utilization data.

**Source**: Available from various statistical databases or can be generated using the provided sample generator.

**Variables**:
- Demographics: age, gender, region, married
- Health: health status, chronic conditions, seats (seat belt usage)
- Economics: income, school, employed, interventions
- Healthcare: visits, hospital, medicaid, private insurance

---

### Session 5: FloridaBikeRentals.csv
**Domain**: Transportation/Time Series  
**Size**: ~1 MB  
**Records**: 8,760  
**Features**: 14  

**Description**: Hourly bike rental counts with weather and seasonal information.

**Source**: UCI Machine Learning Repository or Kaggle (Bike Sharing Dataset)

**Variables**:
- Temporal: datetime, season, year, month, hour, weekday
- Weather: temp, atemp, hum, windspeed, weathersit
- Target: cnt (rental count), casual, registered

---

### Session 6: adultcensusincome.csv
**Domain**: Census/Demographics  
**Size**: ~4 MB  
**Records**: 32,561  
**Features**: 14  

**Description**: Census data for predicting whether income exceeds $50K/year.

**Source**: UCI Machine Learning Repository (Adult/Census Income Dataset)

**Variables**:
- Demographics: age, workclass, education, marital-status, race, sex
- Employment: occupation, hours-per-week
- Geography: native-country
- Target: income (>50K or <=50K)

---

### Session 7: CC GENERAL.csv
**Domain**: Finance/Credit Cards  
**Size**: ~900 KB  
**Records**: 8,950  
**Features**: 18  

**Description**: Credit card customer data for segmentation analysis.

**Source**: Kaggle (Credit Card Dataset for Clustering)

**Variables**:
- Balance, purchases, cash advance, credit limit
- Payment behavior, tenure, purchase frequency
- Full/minimum payment patterns

---

### Session 8: Movies & Ratings
**Files**: movies.csv, ratings.csv  
**Domain**: Entertainment/Recommendations  
**Size**: ~10 MB combined  
**Records**: 110,000+ ratings, 9,000+ movies  
**Features**: 7 combined  

**Description**: MovieLens dataset for building recommendation systems.

**Source**: MovieLens (https://grouplens.org/datasets/movielens/)

**Variables**:
- Movies: movieId, title, genres
- Ratings: userId, movieId, rating, timestamp

---

### Session 9: Churn_Modeling.csv
**Domain**: Banking/Customer Analytics  
**Size**: ~800 KB  
**Records**: 10,000  
**Features**: 14  

**Description**: Bank customer data for churn prediction.

**Source**: Kaggle (Bank Customer Churn Dataset)

**Variables**:
- Customer: CustomerId, Surname, Geography, Gender, Age
- Banking: CreditScore, Tenure, Balance, NumOfProducts
- Activity: HasCrCard, IsActiveMember, EstimatedSalary
- Target: Exited (churn)

---

### Session 10: Face_mask_detection.zip
**Domain**: Computer Vision  
**Size**: ~50 MB  
**Records**: 7,500+ images  
**Format**: Images (with_mask, without_mask, incorrect_mask)  

**Description**: Face mask detection dataset for transfer learning.

**Source**: Kaggle (Face Mask Detection Dataset)

**Structure**:
```
Face_mask_detection/
├── with_mask/
├── without_mask/
└── incorrect_mask/
```

---

### Session 11: GrammarandProductReviews.xlsx
**Domain**: Natural Language Processing  
**Size**: ~2 MB  
**Records**: Varies  
**Features**: Text + labels  

**Description**: Product reviews with grammatical correctness labels.

**Source**: Various NLP datasets or custom collection

**Variables**:
- Review text
- Grammar quality score
- Sentiment labels

---

### Session 12: Dental-Panaromic-Autoencoder.npz
**Domain**: Medical Imaging  
**Size**: ~30 MB  
**Records**: 1,000+ X-ray images  
**Format**: NumPy compressed array  

**Description**: Dental panoramic X-ray images for autoencoder analysis.

**Source**: Medical imaging repositories (with proper permissions)

**Note**: Medical data - ensure compliance with data usage agreements.

---

## 🔧 Setup Instructions

### Step 1: Create Data Folders
The folder structure should look like:
```
aura-capstone/
├── data/
│   ├── raw/              # Place original datasets here
│   ├── processed/        # Generated during analysis
│   └── data/             # Alternative data location
```

### Step 2: Download Datasets
1. Visit the source links above
2. Download required datasets
3. Place them in `data/raw/` or `data/data/` folders

### Step 3: Run Notebooks
All notebooks will automatically:
- Check if data files exist
- Provide helpful error messages if missing
- Skip problematic cells gracefully

---

## 🎨 Viewing Without Data

**You don't need the datasets to view the project!**

All notebooks have been executed and contain:
- ✅ Embedded visualizations
- ✅ Output tables and statistics
- ✅ Model results and metrics
- ✅ Complete analysis narrative

Simply browse the notebooks on GitHub to see the full analysis.

---

## 📋 Dataset Summary Table

| Session | Dataset | Domain | Size | Records | ML Task |
|---------|---------|--------|------|---------|---------|
| 1-4 | NSMES1988 | Healthcare | 500 KB | 4,406 | EDA/Viz |
| 5 | FloridaBikeRentals | Transport | 1 MB | 8,760 | Regression |
| 6 | AdultCensusIncome | Census | 4 MB | 32,561 | Classification |
| 7 | CC GENERAL | Finance | 900 KB | 8,950 | Clustering |
| 8 | Movies + Ratings | Entertainment | 10 MB | 110K+ | Recommendation |
| 9 | Churn_Modeling | Banking | 800 KB | 10,000 | Neural Network |
| 10 | Face_mask_detection | Vision | 50 MB | 7,500+ | Transfer Learning |
| 11 | Grammar + Reviews | NLP | 2 MB | Varies | CNN-LSTM |
| 12 | Dental X-rays | Medical | 30 MB | 1,000+ | Autoencoders |

**Total Size**: ~100 MB (too large for standard GitHub)

---

## 💡 Alternative Options

### Option A: Use Git LFS
Install Git Large File Storage:
```bash
git lfs install
git lfs track "*.csv"
git lfs track "*.npz"
```

### Option B: Cloud Storage
Store datasets in:
- Google Drive
- Dropbox
- AWS S3
- Azure Blob Storage

### Option C: Use the Rendered Notebooks
**This is what we've done!** All notebooks contain outputs, so you can see everything on GitHub.

---

## 📞 Questions?

If you need help obtaining any dataset:
1. Check the source links provided
2. Search on Kaggle or UCI ML Repository
3. Contact the repository owner

---

**Note**: This project demonstrates data science workflows. The focus is on methodology and implementation, not on the specific datasets used.
