# AURA Capstone Project Structure

This document describes the organization and file management system for the AURA Marketing Platform Data Science Capstone Project.

## Directory Structure

```
aura-capstone/
├── config/                 # Configuration files and settings
├── data/                   # Data files (not committed to Git)
│   ├── external/          # Data from external sources
│   ├── processed/         # Cleaned and transformed data
│   └── raw/               # Original, immutable data
├── models/                 # Trained models and model artifacts
├── notebooks/             # Jupyter notebooks for exploration and analysis
├── references/            # Documentation, papers, and reference materials
├── reports/               # Generated analysis and visualizations
│   └── figures/          # Charts, graphs, and plots
├── src/                   # Source code for production use
│   ├── data/             # Data loading and processing scripts
│   ├── features/         # Feature engineering code
│   ├── models/           # Model training and prediction code
│   ├── utils/            # Utility functions
│   └── visualization/    # Plotting and visualization code
├── tests/                 # Unit tests and integration tests
├── .gitignore            # Git ignore file
├── LICENSE               # Project license
├── README.md             # Project overview
├── requirements.txt      # Python dependencies
└── STRUCTURE.md          # This file - project organization guide
```

## File Organization Guidelines

### Data Files

1. **Never commit large data files** to Git (they're in `.gitignore`)
2. **Raw data is read-only** - keep originals untouched
3. **Document data sources** - note where data came from and when
4. **Use descriptive filenames** with dates (e.g., `customers_2025-12-05.csv`)
5. **Consider data versioning** tools like DVC for large datasets

### Notebooks

1. **Use numbered prefixes** to indicate order:
   - `01_` - Exploration
   - `02_` - Preprocessing
   - `03_` - Modeling
   - `04_` - Evaluation
   - `05_` - Visualization

2. **Clear documentation** - use markdown cells to explain your work
3. **Run before committing** - ensure reproducibility
4. **Keep focused** - one analysis per notebook

### Source Code

1. **Write modular code** - functions should do one thing well
2. **Follow PEP 8** - Python style guide
3. **Add docstrings** - document all functions and classes
4. **Type hints** - use them for better code clarity
5. **Write tests** - aim for >80% coverage

### Models

1. **Version your models** - include date and version in filename
2. **Don't commit large models** - use model registries or DVC
3. **Document performance** - keep track of metrics
4. **Log hyperparameters** - record all model settings

### Reports

1. **Date your reports** - use YYYY-MM-DD prefix
2. **High-resolution figures** - export at 300 DPI for print
3. **Source references** - link to notebooks or scripts
4. **Version control text** - commit markdown reports

## Naming Conventions

### Files

- Use lowercase with underscores: `customer_analysis.py`
- Include dates for versioned content: `2025-12-05_report.md`
- Be descriptive: `preprocess_customer_data.py` not `process.py`

### Python Code

- Classes: `PascalCase` (e.g., `CustomerSegmentation`)
- Functions: `snake_case` (e.g., `load_customer_data()`)
- Constants: `UPPER_CASE` (e.g., `MAX_ITERATIONS`)
- Private: `_leading_underscore` (e.g., `_internal_helper()`)

### Git Branches

- Feature: `feature/descriptive-name`
- Bugfix: `bugfix/issue-description`
- Experiment: `experiment/model-name`

### Git Commits

Use conventional commit format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Example: `feat: add customer segmentation model`

## Workflow

### Starting a New Analysis

1. Create a new notebook in `notebooks/` with appropriate prefix
2. Load data from `data/raw/` or `data/processed/`
3. Document your approach and findings
4. Save visualizations to `reports/figures/`
5. If creating reusable code, move it to `src/`

### Developing Production Code

1. Write code in `src/` with appropriate module structure
2. Add docstrings and type hints
3. Write unit tests in `tests/`
4. Run tests: `pytest`
5. Update `requirements.txt` if adding dependencies
6. Commit with descriptive message

### Training Models

1. Prepare data in `data/processed/`
2. Define model in `src/models/`
3. Train and save model to `models/`
4. Log metrics and hyperparameters
5. Document in `models/models.md` (create if needed)
6. Create evaluation report in `reports/`

## Best Practices

### Version Control

- Commit early and often
- Write clear commit messages
- Don't commit sensitive data
- Don't commit large binary files
- Keep commits focused and atomic

### Code Quality

- Run linters: `ruff check src/`
- Format code: `black src/`
- Type check: `mypy src/`
- Test coverage: `pytest --cov=src`
- Review before committing

### Documentation

- Update README.md as project evolves
- Document complex algorithms
- Keep requirements.txt current
- Maintain data dictionaries
- Comment non-obvious code

### Collaboration

- Pull before starting work
- Create feature branches
- Use pull requests for review
- Resolve conflicts promptly
- Communicate changes to team

## Getting Started

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/ManderTheMan/aura-capstone.git
cd aura-capstone

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run tests
pytest
```

### Adding New Dependencies

```bash
# Install package
pip install package-name

# Update requirements
pip freeze > requirements.txt

# Or use pip-tools for better dependency management
pip-compile requirements.in
```

## Tools and Technologies

### Recommended Tools

- **Package Management**: pip, conda, or poetry
- **Testing**: pytest, pytest-cov
- **Linting**: ruff, pylint
- **Formatting**: black, isort
- **Type Checking**: mypy
- **Data Versioning**: DVC
- **Experiment Tracking**: MLflow, Weights & Biases
- **Documentation**: Sphinx, MkDocs

### Environment Management

Use `.env` files for environment-specific settings:

```bash
# .env (never commit this)
API_KEY=your-secret-key
DATABASE_URL=postgresql://localhost/aura
```

Load in Python:
```python
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv('API_KEY')
```

## Troubleshooting

### Large Files

If you accidentally commit large files:
```bash
# Remove from Git but keep locally
git rm --cached path/to/large/file
echo "path/to/large/file" >> .gitignore
git commit -m "Remove large file from tracking"
```

### Merge Conflicts

```bash
# Update your branch with main
git fetch origin
git merge origin/main

# Resolve conflicts, then
git add .
git commit -m "Resolve merge conflicts"
```

## Resources

- [Cookiecutter Data Science](https://drivendata.github.io/cookiecutter-data-science/)
- [PEP 8 Style Guide](https://pep8.org/)
- [Git Best Practices](https://git-scm.com/book/en/v2)
- [Python Testing](https://docs.pytest.org/)

## Questions?

If you have questions about where to put a file or how to organize something, refer to this document or ask the team.

---

*Last Updated: 2025-12-05*
