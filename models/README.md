# Models Directory

This directory stores trained machine learning models and model artifacts.

## Organization

- Save models with descriptive names including version/date
- Include model metadata (hyperparameters, performance metrics)
- Store model serialization files (.pkl, .joblib, .h5, etc.)

## Naming Convention

`{model_type}_{version}_{date}.{ext}`

Example: `random_forest_v1_2025-12-05.pkl`

## Guidelines

1. Never commit large model files directly to Git (add to .gitignore)
2. Use model versioning tools like MLflow or DVC
3. Document model performance metrics in a separate file
4. Keep a changelog of model versions
5. Include model requirements (scikit-learn version, etc.)

## Model Registry

Consider maintaining a `models.md` file to track:
- Model name and version
- Training date
- Performance metrics
- Hyperparameters
- Training data version
