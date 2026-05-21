# Bob Lab Cheat Sheet

Quick reference for all Bob commands used in the lab.

## 🔧 Git Commands

### Repository Setup
```
@bob Initialize Git repository
@bob Add remote origin https://github.com/username/repo.git
@bob Push to GitHub
```

### Branch Management
```
@bob Create branch feature/my-feature
@bob Switch to branch main
@bob List all branches
@bob Delete branch feature/old-feature
```

### Viewing Changes
```
@bob Show git status
@bob Show git diff
@bob Show git log
@bob Show changes in file path/to/file.js
```

### Committing
```
@bob Stage all changes
@bob Commit with message "feat: add new feature"
@bob Stage and commit with message "fix: resolve bug"
```

### Pull Requests
```
@bob Generate PR description comparing feature/branch to main
@bob Create pull request from feature/branch to main with title "Add Feature"
```

## 📝 Code Review Commands

### Basic Review
```
@bob Review my code
@bob Review file path/to/file.js
@bob Review all changes in current branch
```

### Specific Checks
```
@bob Check for security issues
@bob Check for performance issues
@bob Check code quality
@bob Check for accessibility issues
```

### Fixing Issues
```
@bob Fix the issues found in the review
@bob Fix security issues in file.js
@bob Address all review findings
```

## 🎫 Jira Commands

### Projects
```
@bob List all Jira projects
@bob Get project CITY details
@bob Create Jira project with key PROJ and name "Project Name"
```

### Issues
```
@bob Create Jira issue in CITY with summary "Task title" and type Story
@bob Get issue CITY-1
@bob Update issue CITY-1 with description "New description"
@bob Delete issue CITY-1
```

### Searching
```
@bob Search Jira issues with JQL "project = CITY AND status = 'To Do'"
@bob Search Jira issues assigned to me
@bob Search Jira issues in sprint
```

### Comments
```
@bob Add comment to CITY-1 saying "Work completed"
@bob Get comments for CITY-1
@bob Update comment 12345 on CITY-1 with "Updated comment"
```

### Transitions
```
@bob Get transitions for CITY-1
@bob Transition CITY-1 to "In Progress"
@bob Transition CITY-1 to "Done"
```

### Assignments
```
@bob Assign CITY-1 to me
@bob Assign CITY-1 to user@example.com
@bob Search users with query "john"
```

## 🌐 Browser Commands

### Basic Operations
```
@bob Launch browser and open https://example.com
@bob Launch browser and open index.html
@bob Click at coordinates 450,300 on the screenshot
@bob Type "search query" in the input field
@bob Press Enter
@bob Scroll down
@bob Close browser
```

### Testing Workflows
```
@bob Launch browser, open index.html, click the first product card, and take a screenshot
@bob Test the contact form by filling it out and submitting
```

## 📁 File Operations

### Reading Files
```
@bob Read file path/to/file.js
@bob Read files src/app.js and src/utils.js
@bob Read lines 1-50 of file.js
```

### Writing Files
```
@bob Create file path/to/new-file.js with content
@bob Update file.js by replacing old code with new code
```

### Searching
```
@bob Search for "TODO" in all files
@bob Search for function definitions in src/ directory
@bob List all files in current directory
@bob List code definitions in src/app.js
```

## 🔍 Analysis Commands

### Code Analysis
```
@bob Analyze the architecture of this project
@bob Explain how file.js works
@bob Find all dependencies in package.json
@bob List all API endpoints in the project
```

### Issue Detection
```
@bob Find all TODO comments
@bob Find all console.log statements
@bob Find hardcoded values
@bob Find unused variables
```

## 🚀 Workflow Commands

### Feature Implementation
```
@bob Implement feature from Jira issue CITY-1
@bob Create branch, implement CITY-2, commit, and push
```

### Complete Workflows
```
@bob Fetch CITY-1, create branch, implement feature, review code, commit, push, and create PR
```

### Bug Fixes
```
@bob Find the bug causing [describe issue]
@bob Fix the bug in file.js
@bob Create hotfix branch, fix bug, and create PR
```

## 💡 Pro Tips

### Combining Commands
You can ask Bob to do multiple things in one request:
```
@bob Create branch feature/new-feature, implement the login form, review the code, commit with message "feat: add login", and push to GitHub
```

### Context-Aware Requests
Bob understands context, so you can be conversational:
```
@bob The button isn't working. Can you find and fix the issue?
@bob Make this code more efficient
@bob Refactor this to follow best practices
```

### Asking for Explanations
```
@bob Explain what this code does
@bob Why did you make this change?
@bob What's the best way to implement [feature]?
```

## 🎯 Common Workflows

### New Feature Workflow
1. `@bob Fetch Jira issue CITY-X`
2. `@bob Create branch feature/CITY-X-description`
3. `@bob Implement the feature from CITY-X`
4. `@bob Review my code`
5. `@bob Fix any issues found`
6. `@bob Commit with message "feat(CITY-X): description"`
7. `@bob Push and create PR`
8. `@bob Add comment to CITY-X and transition to "In Review"`

### Bug Fix Workflow
1. `@bob Search for [bug description]`
2. `@bob Create branch hotfix/fix-description`
3. `@bob Fix the bug in [file]`
4. `@bob Review the fix`
5. `@bob Commit with message "fix: description"`
6. `@bob Push and create PR`

### Code Review Workflow
1. `@bob Show git diff`
2. `@bob Review all changes`
3. `@bob Check for security issues`
4. `@bob Fix all issues found`
5. `@bob Commit fixes`

## 📊 Status Checks

### Project Status
```
@bob Show current git status
@bob List all open Jira issues in CITY
@bob Show all branches
@bob List recent commits
```

### Progress Tracking
```
@bob Show what I've completed today
@bob List all my assigned Jira issues
@bob Show all open pull requests
```

## 🔐 Security Commands

```
@bob Check for security vulnerabilities
@bob Find hardcoded credentials
@bob Check for SQL injection risks
@bob Review authentication implementation
```

## ⚡ Performance Commands

```
@bob Check for performance issues
@bob Find inefficient algorithms
@bob Analyze bundle size
@bob Suggest optimizations
```

## 📱 Responsive Design

```
@bob Make this component responsive
@bob Test on mobile viewport
@bob Add media queries
@bob Check accessibility
```

## 🧪 Testing Commands

```
@bob Launch browser and test the homepage
@bob Test all form validations
@bob Check if all links work
@bob Verify responsive design
```

---

## Quick Command Templates

### Create Issue + Implement
```
@bob Create Jira issue in CITY: "[title]", then create branch, implement it, and create PR
```

### Full Feature Cycle
```
@bob Implement CITY-X: create branch, code the feature, review, fix issues, commit, push, create PR, and update Jira
```

### Emergency Fix
```
@bob Create hotfix branch, fix [issue], review, commit, and push immediately
```

---

## Keyboard Shortcuts

- `Cmd/Ctrl + Shift + P` → Open Command Palette
- Type "Bob" to see all Bob commands
- `@bob` in chat to start a Bob command

---

## Remember

- Bob works best with clear, specific requests
- You can combine multiple actions in one request
- Bob will ask for clarification if needed
- Always review Bob's changes before committing
- Use Bob's review features before pushing code

---

**Print this cheat sheet or keep it handy during the lab!** 📋