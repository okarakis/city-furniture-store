# Git Automation with Bob

Bob has built-in Git capabilities that allow you to automate various Git workflows. Here's a comprehensive guide on what you can do:

## Built-in Git Tools

Bob provides several Git-related tools that you can use directly:

### 1. **obtain_git_diff**
View changes in your working directory or compare branches.

**Examples:**

```
# View uncommitted changes
"Show me what files have changed"

# Compare current branch with main
"Show diff between my branch and main"

# View changes in a specific file
"Show changes in src/app.js"

# Compare with remote branch including local changes
"Compare my branch with origin/main including uncommitted changes"
```

### 2. **generate_description_from_diff**
Automatically generate PR descriptions based on code changes.

**Examples:**

```
# Generate PR description for current branch
"Generate a PR description comparing my feature branch to main"

# Use a specific PR template
"Create PR description using template 0"
```

### 3. **create_pull_request**
Create pull requests directly from Bob.

**Examples:**

```
# Create a PR
"Create a pull request from feature-branch to main with title 'Add new feature'"

# Create a draft PR
"Create a draft PR from my branch to main"
```

### 4. **fetch_github_issue**
Fetch and analyze GitHub issues, then verify if your changes align with the issue.

**Examples:**

```
# Fetch by issue number
"Fetch issue #123 and check if my changes match"

# Fetch by URL
"Review https://github.com/owner/repo/issues/456"

# Search assigned issues
"Show me all issues assigned to me"
```

## Common Git Automation Workflows

### Workflow 1: Review Changes Before Commit

```
You: "Show me what I've changed"
Bob: [Shows git diff]

You: "Looks good, commit these changes with message 'Fix login bug'"
Bob: [Executes git commit]
```

### Workflow 2: Create PR with Auto-Generated Description

```
You: "I'm ready to create a PR from feature-login to main"
Bob: [Generates description from diff]
Bob: [Creates PR with generated description]
```

### Workflow 3: Issue-Driven Development

```
You: "Fetch issue #42 and check if my changes address it"
Bob: [Fetches issue]
Bob: [Analyzes your local changes]
Bob: [Reports alignment with issue requirements]
```

### Workflow 4: Branch Management

```
You: "Create a new branch called feature-payment"
Bob: [Executes: git checkout -b feature-payment]

You: "Push this branch to origin"
Bob: [Executes: git push -u origin feature-payment]
```

### Workflow 5: Merge Conflict Resolution

```
You: "Show me the merge conflicts"
Bob: [Shows conflicted files]

You: "Help me resolve conflicts in app.js"
Bob: [Reads file, suggests resolution]
Bob: [Applies fixes]
```

## Advanced Git Commands

Bob can execute any Git command through the `execute_command` tool:

### Stashing Changes
```
You: "Stash my current changes"
Bob: [Executes: git stash]

You: "Apply the last stash"
Bob: [Executes: git stash pop]
```

### Branch Operations
```
You: "List all branches"
Bob: [Executes: git branch -a]

You: "Delete branch old-feature"
Bob: [Executes: git branch -d old-feature]
```

### Commit History
```
You: "Show me the last 5 commits"
Bob: [Executes: git log -5 --oneline]

You: "Show commits by author John"
Bob: [Executes: git log --author="John"]
```

### Rebasing
```
You: "Rebase my branch on main"
Bob: [Executes: git rebase main]
```

### Cherry-picking
```
You: "Cherry-pick commit abc123"
Bob: [Executes: git cherry-pick abc123]
```

## Git + Jira Integration

Combine Git automation with Jira for complete workflow automation:

```
You: "Fetch Jira issue KAN-4 and create a branch for it"
Bob: [Fetches issue details]
Bob: [Creates branch: git checkout -b KAN-4-make-ibm-great]

You: "I've finished the work, create a PR and transition the issue to In Progress"
Bob: [Creates PR with issue reference]
Bob: [Transitions Jira issue]
```

## Best Practices

1. **Always review diffs before committing**
   ```
   "Show me the diff before I commit"
   ```

2. **Use descriptive commit messages**
   ```
   "Commit with message 'feat: add user authentication with JWT'"
   ```

3. **Keep PRs focused**
   ```
   "Generate PR description and make sure it's focused on the login feature"
   ```

4. **Link commits to issues**
   ```
   "Commit with message 'fix: resolve login timeout (fixes #123)'"
   ```

5. **Review before pushing**
   ```
   "Show me what commits I'm about to push"
   ```

## Git Hooks Automation

You can ask Bob to create Git hooks for you:

```
You: "Create a pre-commit hook that runs tests"
Bob: [Creates .git/hooks/pre-commit with test command]

You: "Add a commit-msg hook to enforce conventional commits"
Bob: [Creates hook to validate commit messages]
```

## Troubleshooting

### Undo Last Commit
```
You: "Undo my last commit but keep the changes"
Bob: [Executes: git reset --soft HEAD~1]
```

### Fix Commit Message
```
You: "Change the last commit message to 'fix: correct typo in README'"
Bob: [Executes: git commit --amend -m "fix: correct typo in README"]
```

### Recover Deleted Branch
```
You: "I accidentally deleted my branch, can you recover it?"
Bob: [Executes: git reflog]
Bob: [Helps identify and restore branch]
```

## Tips for Effective Git Automation

1. **Be specific**: "Show diff for src/app.js" is better than "show changes"
2. **Use natural language**: Bob understands conversational requests
3. **Chain operations**: "Commit changes and push to origin"
4. **Ask for explanations**: "What does this git command do?"
5. **Review before executing**: Bob will show you what it plans to do

## Example: Complete Feature Development Workflow

```
1. You: "Create a branch for issue KAN-4"
   Bob: [Creates branch KAN-4-make-ibm-great]

2. You: "I've made changes, show me the diff"
   Bob: [Shows git diff]

3. You: "Commit with message 'feat: implement IBM improvements'"
   Bob: [Commits changes]

4. You: "Push to origin"
   Bob: [Pushes branch]

5. You: "Generate PR description and create PR to main"
   Bob: [Generates description from diff]
   Bob: [Creates PR]

6. You: "Transition KAN-4 to In Progress in Jira"
   Bob: [Updates Jira issue status]
```

## Conclusion

Bob's Git automation capabilities allow you to:
- Execute any Git command through natural language
- Generate PR descriptions automatically
- Integrate with GitHub issues
- Combine Git operations with Jira workflows
- Streamline your entire development process

Just ask Bob what you want to do with Git, and it will help you accomplish it!