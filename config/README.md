# Configuration Directory

This directory contains configuration files for the project.

## Contents

- Model hyperparameters
- Data pipeline configurations
- Environment-specific settings
- API keys and credentials (use .env files, never commit)

## Guidelines

1. Use YAML or JSON for configuration files
2. Never commit sensitive information (API keys, passwords)
3. Use environment variables for secrets
4. Provide example config files (e.g., `config.example.yaml`)
5. Document all configuration options

## Example Files

- `config.yaml` - Main configuration file
- `.env.example` - Example environment variables (safe to commit)
- `.env` - Actual environment variables (never commit, in .gitignore)
- `logging.yaml` - Logging configuration
- `model_params.yaml` - Model hyperparameters
