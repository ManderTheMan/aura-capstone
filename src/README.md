# Source Code Directory

This directory contains production-ready Python modules and packages for the AURA Marketing Platform.

## Organization

- **data/**: Scripts for data loading, preprocessing, and transformation
- **features/**: Feature engineering and feature extraction code
- **models/**: Model training, prediction, and evaluation scripts
- **visualization/**: Plotting and visualization utilities
- **utils/**: Helper functions and utilities

## Guidelines

1. Write modular, reusable code
2. Follow PEP 8 style guide for Python code
3. Include docstrings for all functions and classes
4. Add type hints for better code clarity
5. Keep functions small and focused on a single task
6. Write unit tests in the `tests/` directory for all modules

## Example Structure

```
src/
├── __init__.py
├── data/
│   ├── __init__.py
│   ├── loader.py
│   └── preprocessor.py
├── features/
│   ├── __init__.py
│   └── builder.py
└── models/
    ├── __init__.py
    ├── train.py
    └── predict.py
```
