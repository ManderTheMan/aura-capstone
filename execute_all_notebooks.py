"""
AURA Capstone - Automated Notebook Executor
============================================
This script executes all Jupyter notebooks in the project and saves them
with embedded outputs for GitHub viewing.

Usage:
    python execute_all_notebooks.py

Requirements:
    pip install jupyter nbconvert nbformat
"""

import os
import sys
import time
from pathlib import Path
import subprocess
import json

# Color codes for terminal output
GREEN = '\033[92m'
YELLOW = '\033[93m'
RED = '\033[91m'
BLUE = '\033[94m'
RESET = '\033[0m'
BOLD = '\033[1m'

def print_header():
    print("\n" + "="*70)
    print(f"{BOLD}{BLUE}🚀 AURA Capstone - Notebook Executor{RESET}")
    print("="*70 + "\n")

def print_status(message, status="info"):
    """Print colored status messages"""
    colors = {
        "info": BLUE,
        "success": GREEN,
        "warning": YELLOW,
        "error": RED
    }
    color = colors.get(status, RESET)
    symbols = {
        "info": "ℹ️",
        "success": "✅",
        "warning": "⚠️",
        "error": "❌"
    }
    symbol = symbols.get(status, "•")
    print(f"{color}{symbol} {message}{RESET}")

def find_all_notebooks(root_dir="."):
    """Find all Jupyter notebooks in the project"""
    notebooks = []
    exclude_dirs = {'venv', 'ENV', 'env', '.venv', '__pycache__', '.ipynb_checkpoints', 'node_modules'}
    
    for root, dirs, files in os.walk(root_dir):
        # Remove excluded directories
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        for file in files:
            if file.endswith('.ipynb') and '.ipynb_checkpoints' not in root:
                notebook_path = os.path.join(root, file)
                notebooks.append(notebook_path)
    
    return sorted(notebooks)

def check_notebook_has_outputs(notebook_path):
    """Check if notebook already has outputs"""
    try:
        with open(notebook_path, 'r', encoding='utf-8') as f:
            nb = json.load(f)
        
        # Check if any code cell has outputs
        for cell in nb.get('cells', []):
            if cell.get('cell_type') == 'code' and cell.get('outputs'):
                return True
        return False
    except Exception as e:
        print_status(f"Error checking {notebook_path}: {e}", "warning")
        return False

def execute_notebook(notebook_path, timeout=600):
    """Execute a single notebook and save with outputs"""
    print(f"\n{BOLD}Executing: {notebook_path}{RESET}")
    
    try:
        # Use jupyter nbconvert to execute
        cmd = [
            'jupyter', 'nbconvert',
            '--to', 'notebook',
            '--execute',
            '--inplace',
            '--ExecutePreprocessor.timeout=' + str(timeout),
            '--ExecutePreprocessor.kernel_name=python3',
            notebook_path
        ]
        
        start_time = time.time()
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout+30)
        elapsed = time.time() - start_time
        
        if result.returncode == 0:
            print_status(f"Completed in {elapsed:.1f}s", "success")
            return True
        else:
            print_status(f"Failed: {result.stderr[:200]}", "error")
            return False
            
    except subprocess.TimeoutExpired:
        print_status(f"Timeout after {timeout}s", "warning")
        return False
    except Exception as e:
        print_status(f"Error: {str(e)}", "error")
        return False

def main():
    print_header()
    
    # Check if jupyter is installed
    try:
        subprocess.run(['jupyter', '--version'], capture_output=True, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        print_status("Jupyter not found! Installing required packages...", "warning")
        subprocess.run([sys.executable, '-m', 'pip', 'install', 'jupyter', 'nbconvert', 'nbformat'])
    
    # Find all notebooks
    print_status("Scanning for notebooks...", "info")
    notebooks = find_all_notebooks()
    
    if not notebooks:
        print_status("No notebooks found!", "warning")
        return
    
    print_status(f"Found {len(notebooks)} notebooks", "success")
    
    # Ask user for confirmation
    print(f"\n{BOLD}Notebooks to execute:{RESET}")
    for i, nb in enumerate(notebooks, 1):
        has_outputs = check_notebook_has_outputs(nb)
        status = f"{GREEN}(has outputs){RESET}" if has_outputs else f"{YELLOW}(no outputs){RESET}"
        print(f"  {i}. {nb} {status}")
    
    print(f"\n{YELLOW}⚠️  This will execute all notebooks. Large datasets required!{RESET}")
    response = input(f"\n{BOLD}Proceed? (yes/no): {RESET}").lower().strip()
    
    if response not in ['yes', 'y']:
        print_status("Cancelled by user", "info")
        return
    
    # Execute notebooks
    print(f"\n{BOLD}Starting execution...{RESET}\n")
    results = {
        'success': [],
        'failed': [],
        'skipped': []
    }
    
    for i, notebook in enumerate(notebooks, 1):
        print(f"\n{'='*70}")
        print(f"{BOLD}[{i}/{len(notebooks)}] {notebook}{RESET}")
        print('='*70)
        
        # Check if notebook already has outputs
        if check_notebook_has_outputs(notebook):
            response = input(f"{YELLOW}Notebook has outputs. Re-execute? (y/n): {RESET}").lower().strip()
            if response not in ['yes', 'y']:
                print_status("Skipped", "info")
                results['skipped'].append(notebook)
                continue
        
        # Determine timeout based on session type
        timeout = 300  # 5 minutes default
        if 'deep_learning' in notebook:
            timeout = 900  # 15 minutes for deep learning
        elif 'transfer_learning' in notebook or 'autoencoder' in notebook:
            timeout = 1200  # 20 minutes for transfer learning
        
        success = execute_notebook(notebook, timeout=timeout)
        
        if success:
            results['success'].append(notebook)
        else:
            results['failed'].append(notebook)
            response = input(f"\n{YELLOW}Continue with remaining notebooks? (y/n): {RESET}").lower().strip()
            if response not in ['yes', 'y']:
                break
    
    # Print summary
    print(f"\n\n{'='*70}")
    print(f"{BOLD}{BLUE}📊 EXECUTION SUMMARY{RESET}")
    print('='*70)
    
    print(f"\n{GREEN}✅ Successfully executed: {len(results['success'])}{RESET}")
    for nb in results['success']:
        print(f"   • {nb}")
    
    if results['skipped']:
        print(f"\n{YELLOW}⏭️  Skipped: {len(results['skipped'])}{RESET}")
        for nb in results['skipped']:
            print(f"   • {nb}")
    
    if results['failed']:
        print(f"\n{RED}❌ Failed: {len(results['failed'])}{RESET}")
        for nb in results['failed']:
            print(f"   • {nb}")
    
    # Final instructions
    print(f"\n{'='*70}")
    if results['failed']:
        print(f"{YELLOW}⚠️  Some notebooks failed. This is often due to:{RESET}")
        print("   • Missing datasets")
        print("   • Missing dependencies (pip install -r requirements.txt)")
        print("   • Insufficient memory/timeout")
        print(f"\n{BLUE}ℹ️  You can still push to GitHub. Failed notebooks will show code without outputs.{RESET}")
    else:
        print(f"{GREEN}✅ All notebooks executed successfully!{RESET}")
    
    print(f"\n{BOLD}Next steps:{RESET}")
    print("   1. Review the executed notebooks")
    print("   2. git add .")
    print("   3. git commit -m 'Add notebook outputs'")
    print("   4. git push origin main")
    print("\n" + "="*70 + "\n")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print(f"\n\n{YELLOW}⚠️  Interrupted by user{RESET}")
        sys.exit(1)
    except Exception as e:
        print(f"\n{RED}❌ Fatal error: {e}{RESET}")
        sys.exit(1)
