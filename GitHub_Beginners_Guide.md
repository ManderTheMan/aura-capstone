# 🐙 GitHub Complete Beginner's Guide
## For the AURA Capstone Portfolio

**Your Personal Reference Document**

---

## 📋 Table of Contents

1. [What is GitHub?](#1-what-is-github)
2. [Key Concepts](#2-key-concepts)
3. [Setting Up Your Repository](#3-setting-up-your-repository)
4. [Uploading Your Portfolio Files](#4-uploading-your-portfolio-files)
5. [Understanding the GitHub Interface](#5-understanding-the-github-interface)
6. [Organizing Your Project](#6-organizing-your-project)
7. [Writing Great READMEs](#7-writing-great-readmes)
8. [Common Git Commands](#8-common-git-commands)
9. [Best Practices](#9-best-practices)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. What is GitHub?

### The Simple Explanation

Think of GitHub as **Google Drive for code** - but with superpowers:

| Feature | Google Drive | GitHub |
|---------|--------------|--------|
| Store files | ✅ | ✅ |
| Share with others | ✅ | ✅ |
| Track ALL changes ever made | ❌ | ✅ |
| Go back to any previous version | ❌ | ✅ |
| See WHO changed WHAT and WHEN | ❌ | ✅ |
| Collaborate without overwriting | ❌ | ✅ |

### Why Data Scientists Use GitHub

1. **Portfolio** - Recruiters WILL check your GitHub
2. **Version Control** - Never lose work, always recoverable
3. **Collaboration** - Work with teams on the same code
4. **Documentation** - Show your thought process, not just results
5. **Credibility** - Proves you actually wrote the code

---

## 2. Key Concepts

### 🏠 Repository (Repo)
A **folder** that contains all your project files plus the entire history of changes.

```
Your Computer          GitHub (Cloud)
┌──────────────┐       ┌──────────────┐
│ Local Repo   │ ←──→  │ Remote Repo  │
│ (your copy)  │ sync  │ (backup)     │
└──────────────┘       └──────────────┘
```

### 📸 Commit
A **snapshot** of your project at a specific moment. Like saving a game - you can always load that save point.

```
Commit 1        Commit 2        Commit 3
   │               │               │
   ▼               ▼               ▼
[Start] ───────► [Add data] ───► [Fix bug]
                                    │
                            You are here
```

### 🌿 Branch
A **parallel version** of your project. Like a "what if" timeline.

```
main branch:     ●───●───●───●───●
                          \
feature branch:            ●───●───● (experimenting)
```

### ⬆️ Push
**Upload** your local changes to GitHub.

### ⬇️ Pull
**Download** changes from GitHub to your computer.

### 🔀 Merge
**Combine** changes from different branches.

---

## 3. Setting Up Your Repository

### Step 1: Go to GitHub.com

1. Open your browser
2. Navigate to: `https://github.com`
3. Sign in to your account (or create one if needed)

### Step 2: Create a New Repository

1. Click the **+** icon in the top-right corner
2. Select **"New repository"**

![Location: Top-right corner of GitHub]

### Step 3: Configure Your Repository

Fill in the form:

```
┌─────────────────────────────────────────────────────────────┐
│  Create a new repository                                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Repository name*: [aura-capstone            ]              │
│                                                              │
│  Description:      [Data Science Capstone - AURA Platform   ]│
│                                                              │
│  ◉ Public   ○ Private                                       │
│                                                              │
│  ☑ Add a README file                                        │
│                                                              │
│  Add .gitignore: [Python ▼]                                 │
│                                                              │
│  Choose a license: [MIT License ▼]                          │
│                                                              │
│         [ Create repository ]                                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Recommended Settings:**

| Setting | Choice | Why |
|---------|--------|-----|
| Repository name | `aura-capstone` | Clear, lowercase, hyphenated |
| Public/Private | **Public** | Employers can see it! |
| Add README | **Yes** | We'll replace it with our nice one |
| .gitignore | **Python** | Ignores unnecessary files |
| License | **MIT** | Standard open-source license |

### Step 4: Click "Create repository"

🎉 **Congratulations!** You now have a GitHub repository!

---

## 4. Uploading Your Portfolio Files

### Method 1: Web Interface (Easiest for Beginners)

#### Step 1: Navigate to Your Repository
- Go to: `https://github.com/YOUR-USERNAME/aura-capstone`

#### Step 2: Upload Files
1. Click **"Add file"** button (near the green "Code" button)
2. Select **"Upload files"**

```
┌─────────────────────────────────────────────────────────┐
│  your-username / aura-capstone                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  [Code ▼]  [Issues]  [Pull requests]  [Actions]        │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 📁 aura-capstone          [Add file ▼] [Code ▼]│   │
│  │                            ↓                    │   │
│  │                     ┌─────────────┐             │   │
│  │                     │ Create file │             │   │
│  │                     │ Upload files│ ← Click!    │   │
│  │                     └─────────────┘             │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Step 3: Drag and Drop Your Files

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│    Drag files here to add them to your repository       │
│                                                         │
│         ┌─────────────────────────────────┐            │
│         │                                 │            │
│         │     📁 Drop files here          │            │
│         │                                 │            │
│         │   or click to choose files      │            │
│         │                                 │            │
│         └─────────────────────────────────┘            │
│                                                         │
│  Files to upload:                                       │
│  ☑ Aura_Executive_Summary.docx                         │
│  ☑ Skills_Showcase.ipynb                               │
│  ☑ PORTFOLIO_README.md                                 │
│  ☑ portfolio_showcase.html                             │
│  ☑ requirements.txt                                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Step 4: Write a Commit Message

```
┌─────────────────────────────────────────────────────────┐
│  Commit changes                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  [Add initial portfolio files                    ]     │
│   ↑ Short description (required)                        │
│                                                         │
│  [Added executive summary, skills showcase notebook,   ]│
│  [portfolio README, HTML showcase, and requirements    ]│
│   ↑ Extended description (optional but helpful!)        │
│                                                         │
│  ◉ Commit directly to the main branch                  │
│  ○ Create a new branch                                 │
│                                                         │
│         [ Commit changes ]                              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Good Commit Message Examples:**
- ✅ "Add initial portfolio files"
- ✅ "Complete Session 3 notebook with pivot tables"
- ✅ "Fix typo in README"
- ❌ "stuff"
- ❌ "changes"
- ❌ "asdfasdf"

#### Step 5: Click "Commit changes"

🎉 **Your files are now on GitHub!**

---

## 5. Understanding the GitHub Interface

### Repository Home Page

```
┌─────────────────────────────────────────────────────────────────┐
│  your-username / aura-capstone                     ⭐ Star  Fork│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [<> Code]  [◉ Issues]  [↩ Pull requests]  [▶ Actions]  [⚙]   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📁 aura-capstone              [Add file ▼]  [<> Code ▼]       │
│  │                                                              │
│  ├── 📁 milestone_1_data_analysis/    ← Folders you create     │
│  ├── 📁 data/                                                   │
│  ├── 📄 README.md                     ← Shows below!           │
│  ├── 📄 requirements.txt                                        │
│  └── 📄 Skills_Showcase.ipynb                                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📖 README.md                         ← Auto-displays here     │
│  ──────────────────                                             │
│  # 🚀 AURA - Data Science Portfolio                            │
│                                                                 │
│  [Your README content appears here automatically]               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Key Interface Elements

| Element | Location | Purpose |
|---------|----------|---------|
| **Code** tab | Top | View and browse files |
| **Issues** tab | Top | Track bugs and tasks |
| **Add file** | Above file list | Upload or create files |
| **<> Code** (green) | Above file list | Clone/download repo |
| **README.md** | Bottom | Auto-displays as homepage |
| **Commits** | Above file list | View change history |

---

## 6. Organizing Your Project

### Recommended Folder Structure

Create this structure by uploading files to specific paths:

```
aura-capstone/
│
├── 📄 README.md                    ← Main portfolio README
├── 📄 requirements.txt             ← Dependencies
├── 📄 .gitignore                   ← Auto-created
│
├── 📁 portfolio/
│   ├── 📄 Skills_Showcase.ipynb
│   ├── 📄 Aura_Executive_Summary.docx
│   └── 📄 portfolio_showcase.html
│
├── 📁 milestone_1_data_analysis/
│   ├── 📁 session_01_import_cleaning/
│   │   ├── 📄 session_1.ipynb
│   │   └── 📄 session_1_notes.md
│   ├── 📁 session_02_statistics/
│   ├── 📁 session_03_pandas/
│   └── 📁 session_04_visualization/
│
├── 📁 milestone_2_modeling/
│   └── (sessions 5-8)
│
├── 📁 milestone_3_deep_learning/
│   └── (sessions 9-12)
│
└── 📁 data/
    ├── 📁 raw/
    │   └── 📄 NSMES1988.csv
    └── 📁 processed/
        └── 📄 NSMES1988_clean.csv
```

### How to Create Folders on GitHub Web

**Trick:** GitHub creates folders automatically when you include "/" in a filename!

1. Click "Add file" → "Create new file"
2. In the filename box, type: `milestone_1_data_analysis/session_01/README.md`
3. GitHub automatically creates the folders!

```
┌─────────────────────────────────────────────────────────┐
│  Name your file...                                      │
│                                                         │
│  aura-capstone / [milestone_1_data_analysis/session_01/│
│                   README.md                    ]        │
│                   ↑                                     │
│            Type path with slashes!                      │
└─────────────────────────────────────────────────────────┘
```

---

## 7. Writing Great READMEs

### The README.md File

This is the **most important file** in your repository. It's your project's "front page."

### What Makes a Great README?

```markdown
# Project Title

Brief description of what this project does.

## 🎯 Overview
What problem does this solve?

## 📊 Key Features
- Feature 1
- Feature 2

## 🛠️ Technologies Used
- Python
- pandas
- etc.

## 🚀 Getting Started
How to run your code

## 📁 Project Structure
Explain your folder organization

## 📈 Results
Show off your findings!

## 👤 Author
Your name and contact
```

### Markdown Quick Reference

```markdown
# Heading 1
## Heading 2
### Heading 3

**bold text**
*italic text*
`inline code`

- Bullet point
1. Numbered list

[Link text](https://url.com)

![Image alt text](image-url.png)

| Column 1 | Column 2 |
|----------|----------|
| Data     | Data     |

```python
# Code block
print("Hello!")
```
```

---

## 8. Common Git Commands

### If Using Command Line (Advanced)

```bash
# Clone a repository to your computer
git clone https://github.com/username/repo-name.git

# Check status of your files
git status

# Add files to staging area
git add filename.py        # Add specific file
git add .                  # Add all files

# Commit your changes (save a snapshot)
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes from GitHub
git pull origin main

# Create a new branch
git checkout -b new-feature

# Switch branches
git checkout main
```

### Visual Workflow

```
┌─────────────┐    git add    ┌─────────────┐   git commit   ┌─────────────┐
│  Working    │ ───────────►  │   Staging   │ ─────────────► │   Local     │
│  Directory  │               │    Area     │                │   Repo      │
└─────────────┘               └─────────────┘                └─────────────┘
                                                                    │
                                                              git push
                                                                    │
                                                                    ▼
                                                             ┌─────────────┐
                                                             │   GitHub    │
                                                             │   (Remote)  │
                                                             └─────────────┘
```

---

## 9. Best Practices

### ✅ DO

1. **Commit often** - Small, frequent commits are better
2. **Write clear messages** - Future you will thank present you
3. **Keep README updated** - It's your project's resume
4. **Use .gitignore** - Don't upload unnecessary files
5. **Organize with folders** - Makes navigation easy

### ❌ DON'T

1. **Don't commit sensitive data** - No passwords, API keys, personal info
2. **Don't commit large files** - Keep datasets under 100MB (use .gitignore)
3. **Don't commit messy code** - Clean up before sharing
4. **Don't use vague commit messages** - "stuff" tells you nothing
5. **Don't forget to push** - Local commits aren't backed up until pushed!

### Files to Add to .gitignore

```gitignore
# Python
__pycache__/
*.py[cod]
.ipynb_checkpoints/
venv/
.env

# Data files (if too large)
*.csv
*.xlsx
data/raw/

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
```

---

## 10. Troubleshooting

### Common Issues and Solutions

#### "I uploaded to the wrong folder!"

1. Navigate to the file
2. Click the file name
3. Click the trash icon 🗑️
4. Commit the deletion
5. Re-upload to correct location

#### "My README isn't showing!"

- Make sure filename is exactly `README.md` (case-sensitive!)
- It must be in the root folder (not inside another folder)

#### "I made a typo in my commit message!"

- Unfortunately, you can't edit commit messages on the web interface
- Don't worry - it's not a big deal, just be more careful next time!

#### "I accidentally committed a secret/password!"

1. **Don't panic**
2. Delete the file from GitHub
3. Change the password/key immediately
4. The old version is still in history - for sensitive data, you may need to contact GitHub support

#### "GitHub says my file is too large!"

- GitHub has a 100MB file limit
- Add large files to `.gitignore`
- Consider using Git LFS for large files
- Or store data elsewhere and link to it

---

## 📚 Additional Resources

- [GitHub Docs](https://docs.github.com/)
- [GitHub Skills](https://skills.github.com/) - Interactive tutorials
- [Pro Git Book](https://git-scm.com/book/en/v2) - Free, comprehensive guide

---

## 🎯 Your Action Checklist

- [ ] Create GitHub account (if needed)
- [ ] Create `aura-capstone` repository
- [ ] Upload portfolio files
- [ ] Replace README with PORTFOLIO_README.md
- [ ] Create folder structure
- [ ] Upload session notebooks
- [ ] Share your repo link! 🎉

---

*This guide is part of your AURA Capstone Learning Journey*
*Created: December 2025*
