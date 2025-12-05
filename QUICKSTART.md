# Quick Start Guide

Welcome to the AURA Capstone Project! This guide will help you get started with the organized file structure.

## What's Been Set Up

Your repository now has a complete organizational structure for managing data science files:

```
aura-capstone/
├── config/          # Configuration files (.env, .yaml)
├── data/            # All data files (organized by type)
├── models/          # Trained machine learning models
├── notebooks/       # Jupyter notebooks for analysis
├── references/      # Papers, docs, and reference materials
├── reports/         # Generated reports and visualizations
├── src/             # Production-ready Python code
└── tests/           # Unit tests and integration tests
```

## Where Do Files Go?

### Adding Data Files

- **Raw data** → `data/raw/`
  - Original, unchanged data from any source
  - Examples: `customers_2025-12-05.csv`, `sales_data.xlsx`

- **Processed data** → `data/processed/`
  - Cleaned, transformed data ready for analysis
  - Examples: `clean_customers.parquet`, `features_v1.csv`

- **External data** → `data/external/`
  - Data from APIs, third-party sources, or external databases
  - Examples: `weather_api_data.json`, `census_data.csv`

### Creating Notebooks

Save to `notebooks/` with numbered prefixes:

- `01_exploration_*.ipynb` - Initial data exploration
- `02_preprocessing_*.ipynb` - Data cleaning
- `03_modeling_*.ipynb` - Model development
- `04_evaluation_*.ipynb` - Results and evaluation
- `05_visualization_*.ipynb` - Creating visualizations

Example: `01_exploration_customer_behavior.ipynb`

### Writing Code

Place in `src/` subdirectories by function:

- `src/data/` - Data loading and preprocessing
- `src/features/` - Feature engineering
- `src/models/` - Model training and prediction
- `src/utils/` - Helper functions
- `src/visualization/` - Plotting utilities

### Saving Models

Save to `models/` with version information:

Example: `random_forest_v1_2025-12-05.pkl`

### Creating Reports

- Reports → `reports/`
- Charts/figures → `reports/figures/`

Use dates: `2025-12-05_customer_analysis.pdf`

## How to Use This Structure

### 1. Starting a New Analysis

```bash
# Create a new notebook
touch notebooks/01_exploration_my_analysis.ipynb

# Open Jupyter
jupyter notebook
```

### 2. Adding Data

```bash
# Place raw data in the right folder
cp ~/Downloads/data.csv data/raw/customers_2025-12-05.csv

# Document where it came from in a notebook or README
```

### 3. Writing Reusable Code

```python
# In src/data/loader.py
def load_customer_data(filepath):
    """Load and validate customer data."""
    import pandas as pd
    return pd.read_csv(filepath)

# In your notebook
from src.data.loader import load_customer_data
df = load_customer_data('data/raw/customers.csv')
```

### 4. Saving Models

```python
import joblib
from datetime import date

# Train your model
model = train_model(X_train, y_train)

# Save with version info
today = date.today().strftime('%Y-%m-%d')
joblib.dump(model, f'models/random_forest_v1_{today}.pkl')
```

### 5. Generating Reports

```python
import matplotlib.pyplot as plt

# Create visualization
plt.figure(figsize=(10, 6))
plt.plot(data)
plt.title('Customer Trends')

# Save to reports
plt.savefig('reports/figures/customer_trends.png', dpi=300)
```

## Best Practices

### ✅ Do

- Keep raw data unchanged (read-only)
- Use descriptive filenames with dates
- Document your analysis in notebooks
- Write reusable code in `src/`
- Add tests for important functions
- Commit often with clear messages

### ❌ Don't

- Commit large data files (>50MB)
- Commit sensitive information (API keys, passwords)
- Modify raw data files
- Create files outside the structure
- Use vague filenames like `data.csv` or `model.pkl`

## Getting Help

- **Detailed guide**: See [STRUCTURE.md](STRUCTURE.md) for comprehensive documentation
- **Directory-specific help**: Check README.md in each directory
- **Examples**: Look at naming conventions in STRUCTURE.md

## Installation

```bash
# Clone the repo
git clone https://github.com/ManderTheMan/aura-capstone.git
cd aura-capstone

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start working!
jupyter notebook
```

## Questions?

- Not sure where a file goes? Check the directory structure above
- Need more detail? Read [STRUCTURE.md](STRUCTURE.md)
- Want to add a new type of file? Follow the existing patterns

---

**Remember**: This structure is here to help you stay organized. When you add files, just think about their purpose and place them in the appropriate directory. The README files in each directory will guide you!
