# Tests Directory

This directory contains unit tests and integration tests for the project code.

## Organization

Mirror the structure of the `src/` directory:

```
tests/
├── __init__.py
├── test_data/
│   ├── test_loader.py
│   └── test_preprocessor.py
├── test_features/
│   └── test_builder.py
└── test_models/
    ├── test_train.py
    └── test_predict.py
```

## Naming Convention

- Test files: `test_{module_name}.py`
- Test functions: `test_{function_name}_{scenario}()`

Example: `test_preprocessor_handles_missing_values()`

## Running Tests

```bash
# Run all tests
pytest

# Run specific test file
pytest tests/test_data/test_loader.py

# Run with coverage
pytest --cov=src tests/
```

## Guidelines

1. Write tests for all critical functions
2. Use fixtures for common test data
3. Aim for >80% code coverage
4. Test edge cases and error conditions
5. Keep tests fast and independent
6. Use descriptive test names that explain the scenario
