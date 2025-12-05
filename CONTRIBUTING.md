# 🤝 Contributing to AURA Portfolio

First off, thank you for considering contributing to the AURA Portfolio! It's people like you that make this a great learning resource for everyone. 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)

## 🌟 Code of Conduct

This project aims to be welcoming, inclusive, and harassment-free for everyone. By participating, you are expected to:

- Be respectful and considerate
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members

## 💡 How Can I Contribute?

There are many ways to contribute to this project:

### 1. Reporting Bugs 🐛

Found a bug? Help us fix it!

- Check if the bug has already been reported in [Issues](https://github.com/ManderTheMan/aura-capstone/issues)
- If not, create a new issue with:
  - A clear title and description
  - Steps to reproduce the bug
  - Expected vs actual behavior
  - Screenshots if applicable
  - Browser/OS information

### 2. Suggesting Enhancements 💡

Have an idea to make this better?

- Check existing [Issues](https://github.com/ManderTheMan/aura-capstone/issues) and [Discussions](https://github.com/ManderTheMan/aura-capstone/discussions)
- Create a new issue with:
  - A clear description of the enhancement
  - Why it would be useful
  - Examples of how it would work

### 3. Writing GitHub Guides 📚

This is one of the most valuable contributions!

- Add new learning guides for GitHub features
- Improve existing guides with more examples
- Translate guides to other languages
- Add video tutorials or interactive demos

### 4. Adding Project Examples 🚀

Help expand the portfolio:

- Add templates for different types of projects
- Create example project cards
- Share your own project showcase structure

### 5. Improving Design 🎨

Make it even more beautiful:

- Enhance CSS animations
- Improve responsive design
- Add accessibility features
- Create a dark mode
- Optimize performance

## 🚀 Getting Started

### Prerequisites

- A GitHub account
- Git installed on your computer
- A text editor (VS Code, Sublime Text, etc.)
- A web browser

### Setup

1. **Fork the repository**
   - Click the "Fork" button at the top right of the repository page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/aura-capstone.git
   cd aura-capstone
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ManderTheMan/aura-capstone.git
   ```

4. **Open and view locally**
   ```bash
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

## 🔄 Development Workflow

### Working on a Feature

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Edit files as needed
   - Test in multiple browsers
   - Check responsive design

3. **Test your changes**
   - Open `index.html` in your browser
   - Check all interactive elements
   - Verify on mobile viewport

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: your descriptive commit message"
   ```

5. **Keep your fork updated**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

## 🎨 Style Guidelines

### HTML Guidelines

- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Include meaningful `id` and `class` names
- Add comments for complex sections
- Ensure accessibility (alt text, ARIA labels)

### CSS Guidelines

- Follow existing variable naming conventions
- Use CSS custom properties (variables) for colors
- Keep selectors specific but not overly complex
- Group related styles together
- Comment major sections

Example:
```css
/* ============================================
   SECTION NAME
   ============================================ */

.class-name {
    property: value;
}
```

### JavaScript Guidelines

- Use ES6+ features (const, let, arrow functions)
- Write descriptive variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Handle errors gracefully

Example:
```javascript
// Function description
function doSomething() {
    // Implementation
}
```

## 📝 Commit Message Guidelines

Write clear, descriptive commit messages:

### Format

```
Type: Brief description

Detailed explanation if needed
- Bullet points for multiple changes
- More context about why the change was made
```

### Types

- **Add:** New feature or file
- **Update:** Changes to existing feature
- **Fix:** Bug fix
- **Docs:** Documentation changes
- **Style:** CSS/styling changes
- **Refactor:** Code restructuring
- **Test:** Adding or updating tests

### Examples

Good ✅:
```
Add: GitHub Actions guide with CI/CD examples

- Created new guide card for GitHub Actions
- Added examples of common workflows
- Included copy-to-clipboard snippets
```

Not great ❌:
```
updated stuff
```

## 🔀 Pull Request Process

### Before Submitting

- [ ] Test your changes locally
- [ ] Check responsive design (mobile, tablet, desktop)
- [ ] Verify no console errors
- [ ] Update documentation if needed
- [ ] Follow code style guidelines
- [ ] Write clear commit messages

### Submitting

1. **Push your branch to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template

3. **PR Description Should Include**
   - What changes were made
   - Why these changes are needed
   - Screenshots (if UI changes)
   - Related issues (if any)

4. **After Submitting**
   - Respond to review comments
   - Make requested changes
   - Keep the conversation respectful

### PR Review Process

- Maintainers will review your PR
- They may request changes
- Once approved, your PR will be merged
- Your contribution will be credited! 🎉

## 🎯 Good First Issues

Look for issues labeled:
- `good first issue` - Great for newcomers
- `help wanted` - Extra attention needed
- `documentation` - Docs improvements
- `enhancement` - New features

## 📚 Additional Resources

### Learning Git & GitHub

- [GitHub Guides](https://guides.github.com/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Pro Git Book](https://git-scm.com/book/en/v2)

### Web Development

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

## 🙏 Thank You!

Every contribution, no matter how small, makes a difference. Thank you for helping make this project better!

### Contributors

See [GitHub's contributor graph](https://github.com/ManderTheMan/aura-capstone/graphs/contributors) for all amazing contributors!

---

**Questions?** Open an issue or start a discussion. We're here to help! 💬

**Want to chat?** Feel free to reach out through GitHub discussions!

Happy Contributing! 🚀✨
