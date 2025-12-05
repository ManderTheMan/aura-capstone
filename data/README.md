# Data Directory

This directory contains all data files for the AURA Marketing Platform project.

## Subdirectories

- **raw/**: Original, immutable data files. Never modify files in this directory.
- **processed/**: Cleaned and transformed data ready for analysis or modeling.
- **external/**: Data from third-party sources or external APIs.

## Guidelines

1. Keep raw data unchanged - treat it as read-only
2. Document data sources and collection dates
3. Use descriptive filenames with dates (e.g., `customer_data_2025-12-05.csv`)
4. Add a `.gitignore` entry for large data files (>50MB)
5. Consider using data versioning tools like DVC for large datasets
