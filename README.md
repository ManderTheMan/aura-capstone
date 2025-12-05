# AURA Capstone

Data Science Capstone Project - AURA Marketing Platform

## Overview

This repository contains the capstone project for developing data science solutions for the AURA Marketing Platform. The project focuses on analyzing marketing data, building predictive models, and delivering actionable insights.

## Project Structure

The repository is organized to support efficient data science workflows:

```
aura-capstone/
├── config/          # Configuration files
├── data/            # Data files (raw, processed, external)
├── models/          # Trained models
├── notebooks/       # Jupyter notebooks for analysis
├── references/      # Documentation and papers
├── reports/         # Generated reports and figures
├── src/             # Source code for production
└── tests/           # Unit and integration tests
```

**📖 New to the project?** Start with [QUICKSTART.md](QUICKSTART.md) for a simple guide on where to put your files!

See [STRUCTURE.md](STRUCTURE.md) for detailed organization guidelines and best practices.

## Getting Started

### Prerequisites

- Python 3.8 or higher
- pip or conda package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ManderTheMan/aura-capstone.git
   cd aura-capstone
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Quick Start

1. **Explore data**: Start with notebooks in `notebooks/01_exploration_*.ipynb`
2. **Add your data**: Place raw data in `data/raw/`
3. **Run analysis**: Create notebooks following the naming convention
4. **Develop code**: Write reusable code in `src/`
5. **Document findings**: Save reports to `reports/`

## File Organization

This project follows a structured approach to file management:

- **Data files** go in `data/` subdirectories (raw, processed, external)
- **Notebooks** go in `notebooks/` with numbered prefixes (e.g., `01_exploration_*.ipynb`)
- **Source code** goes in `src/` organized by module (data, models, features, etc.)
- **Models** are saved in `models/` with version information
- **Reports** and visualizations go in `reports/` and `reports/figures/`

For complete guidelines, see [STRUCTURE.md](STRUCTURE.md).

## Development

### Running Tests

```bash
pytest
```

### Code Quality

```bash
# Format code
black src/

# Lint code
ruff check src/

# Type checking
mypy src/
```

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes following the project structure
3. Run tests and ensure code quality
4. Commit with descriptive messages: `git commit -m "feat: description"`
5. Push and create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Documentation

- [STRUCTURE.md](STRUCTURE.md) - Detailed project organization guide
- Individual README files in each directory explain their specific purpose

## Questions?

Refer to [STRUCTURE.md](STRUCTURE.md) for detailed guidelines on where to place files and how to organize your work.
