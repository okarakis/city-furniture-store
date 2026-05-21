# Bob Hands-On Lab: Git Workflow & Jira Integration

Welcome to the Bob hands-on lab! This lab will teach you how to use Bob for real-world development workflows including Git operations and Jira integration.

## Lab Overview

This lab consists of two main parts:
1. **Part 1**: GitHub Setup & Code Review Workflow
2. **Part 2**: Jira Integration with MCP Server

**Estimated Time**: 60-90 minutes

---

## Prerequisites

- [ ] Bob AI Assistant installed in VS Code
- [ ] Git installed on your system
- [ ] GitHub account created
- [ ] **Jira access provided** (shared instance - no account setup needed!)
- [ ] Node.js installed (for the Jira MCP server)

---

## Part 1: GitHub Setup & Code Review Workflow

### Objective
Learn how to use Bob to manage Git operations, create branches, commit changes, and review code.

### Lab 1.1: Initial Repository Setup

**Step 1: Create a GitHub Repository**

1. Go to GitHub and create a new repository named `city-furniture-store`
2. Make it public or private (your choice)
3. Do NOT initialize with README (we'll create it locally)

**Step 2: Initialize Local Repository**

Ask Bob to help you:
```
@bob Initialize a new Git repository in the current directory and connect it to my GitHub repository at https://github.com/YOUR_USERNAME/city-furniture-store.git
```

**Expected Outcome**: Bob will:
- Initialize Git repository
- Add remote origin
- Create initial commit
- Push to GitHub

---

### Lab 1.2: Create a Simple Feature

**Scenario**: You're building a furniture store website. Let's create the homepage.

**Step 1: Create Feature Branch**

Ask Bob:
```
@bob Create a new branch called 'feature/homepage' and switch to it
```

**Step 2: Create Homepage Files**

Ask Bob:
```
@bob Create a simple furniture store homepage with:
- HTML file with header, hero section, and product grid
- CSS file with modern styling
- JavaScript file for basic interactivity
Use the shoe-store as a reference but make it for furniture
```

**Step 3: Review Your Changes**

Ask Bob:
```
@bob Show me what files have changed and what the differences are
```

Bob will use the `obtain_git_diff` tool to show you the changes.

---

### Lab 1.3: Commit and Push Changes

**Step 1: Stage and Commit**

Ask Bob:
```
@bob Stage all changes and commit them with the message "Add furniture store homepage"
```

**Step 2: Push to GitHub**

Ask Bob:
```
@bob Push the feature/homepage branch to GitHub
```

---

### Lab 1.4: Code Review with Bob

**Step 1: Review Your Code**

Ask Bob:
```
@bob Review the code I just wrote for the homepage. Check for:
- Code quality issues
- Best practices
- Security concerns
- Performance issues
```

Bob will analyze your code and provide feedback using the `submit_review_findings` tool.

**Step 2: Address Review Findings**

If Bob finds issues, ask:
```
@bob Fix the issues you found in the code review
```

---

### Lab 1.5: Create Pull Request

**Step 1: Generate PR Description**

Ask Bob:
```
@bob Generate a pull request description comparing feature/homepage to main
```

Bob will use `generate_description_from_diff` to create a comprehensive PR description.

**Step 2: Create the Pull Request**

Ask Bob:
```
@bob Create a pull request from feature/homepage to main with the title "Add Furniture Store Homepage"
```

**Step 3: Review on GitHub**

1. Go to your GitHub repository
2. View the pull request
3. See the description Bob generated
4. Merge the pull request

---

## Part 2: Jira Integration with MCP Server

### Objective
Learn how to use Bob with the Jira MCP server to fetch issues, create tasks, and implement features.

### Lab 2.1: Jira MCP Server Setup

**Step 1: Configure Jira Credentials**

1. Get your Jira credentials:
   - Jira URL: `https://your-domain.atlassian.net`
   - Email: Your Jira account email
   - API Token: Create one at https://id.atlassian.com/manage-profile/security/api-tokens

2. The Jira MCP server is already configured in your `.bob/mcp.json` file

**Step 2: Verify Connection**

Ask Bob:
```
@bob List all my Jira projects
```

Bob will use the `use_mcp_tool` with the `list_projects` tool from the Jira server.

---

### Lab 2.2: Create a Jira Issue

**Step 1: Create a New Feature Issue**

Ask Bob:
```
@bob Create a Jira issue in project CITY with:
- Summary: "Add product detail page"
- Issue Type: Story
- Description: "Create a detailed product page that shows furniture item details, images, price, and add to cart button"
- Priority: High
```

Bob will use the `create_issue` tool from the Jira MCP server.

**Step 2: View the Issue**

Ask Bob:
```
@bob Show me the details of the issue we just created
```

---

### Lab 2.3: Implement Feature from Jira

**Step 1: Fetch the Issue**

Ask Bob:
```
@bob Fetch Jira issue CITY-1 and analyze if my current code changes align with it
```

Bob will use `fetch_github_issue` (which also works with Jira URLs) to fetch and analyze the issue.

**Step 2: Create Feature Branch**

Ask Bob:
```
@bob Create a new branch called 'feature/CITY-1-product-detail-page' from main
```

**Step 3: Implement the Feature**

Ask Bob:
```
@bob Implement the product detail page as described in CITY-1. Create:
- product-detail.html with detailed product view
- Update styles.css with product detail styling
- Update script.js to handle product detail navigation
```

**Step 4: Review Against Jira Issue**

Ask Bob:
```
@bob Review my changes and check if they fully address the requirements in CITY-1
```

---

### Lab 2.4: Update Jira Issue

**Step 1: Add Comment to Issue**

Ask Bob:
```
@bob Add a comment to CITY-1 saying "Product detail page implemented and ready for review"
```

Bob will use the `add_comment` tool.

**Step 2: Transition Issue**

Ask Bob:
```
@bob Show me available transitions for CITY-1
```

Then:
```
@bob Transition CITY-1 to "In Review" status
```

---

### Lab 2.5: Complete the Workflow

**Step 1: Commit Changes**

Ask Bob:
```
@bob Commit all changes with message "feat(CITY-1): Add product detail page"
```

**Step 2: Push and Create PR**

Ask Bob:
```
@bob Push the branch and create a pull request with reference to CITY-1
```

**Step 3: Final Review**

Ask Bob:
```
@bob Do a final code review of all changes in this branch
```

---

## Advanced Exercises

### Exercise 1: Multi-Issue Sprint

1. Create 3 Jira issues for different features
2. Implement each in separate branches
3. Use Bob to review each before merging
4. Update Jira issues as you progress

### Exercise 2: Bug Fix Workflow

1. Create a Jira bug issue
2. Use Bob to help diagnose the issue
3. Create a hotfix branch
4. Fix the bug and link to Jira issue
5. Create PR and update Jira

### Exercise 3: Code Quality Improvement

1. Ask Bob to review entire codebase
2. Create Jira issues for each finding
3. Implement fixes in separate branches
4. Track progress in Jira

---

## Lab Completion Checklist

### Part 1: Git Workflow
- [ ] Created GitHub repository
- [ ] Initialized local Git repository
- [ ] Created feature branch
- [ ] Implemented homepage feature
- [ ] Reviewed changes with Bob
- [ ] Committed and pushed changes
- [ ] Created pull request
- [ ] Merged to main

### Part 2: Jira Integration
- [ ] Connected to Jira MCP server
- [ ] Listed Jira projects
- [ ] Created Jira issue
- [ ] Fetched and analyzed issue
- [ ] Implemented feature from Jira
- [ ] Updated Jira issue with comments
- [ ] Transitioned issue status
- [ ] Created PR with Jira reference

---

## Key Bob Commands Reference

### Git Operations
```
@bob Initialize Git repository
@bob Create branch <branch-name>
@bob Show git diff
@bob Commit changes with message "<message>"
@bob Push to GitHub
@bob Create pull request
@bob Generate PR description
```

### Code Review
```
@bob Review my code
@bob Fix issues found in review
@bob Check for security issues
@bob Analyze code quality
```

### Jira Operations
```
@bob List Jira projects
@bob Create Jira issue in <project>
@bob Get issue <issue-key>
@bob Search Jira issues with JQL "<query>"
@bob Add comment to <issue-key>
@bob Transition <issue-key> to <status>
@bob Fetch GitHub/Jira issue <url>
```

---

## Troubleshooting

### Git Issues
- **Problem**: Remote already exists
  - **Solution**: Ask Bob to remove and re-add remote

### Jira Connection Issues
- **Problem**: Authentication failed
  - **Solution**: Verify API token and email in Jira settings
  - Check `.bob/mcp.json` configuration

### MCP Server Issues
- **Problem**: Jira tools not available
  - **Solution**: Restart VS Code to reload MCP servers

---

## Next Steps

After completing this lab, you can:

1. **Explore More Bob Features**
   - Browser automation for testing
   - Multi-file refactoring
   - Architecture planning

2. **Integrate with Your Workflow**
   - Use Bob in your real projects
   - Customize review criteria
   - Create custom MCP servers

3. **Advanced Jira Integration**
   - Automate sprint planning
   - Generate reports
   - Sync with other tools

---

## Resources

- [Bob Documentation](https://docs.bob.ai)
- [Jira MCP Server README](./jira-mcp-server/README.md)
- [Git Best Practices](https://git-scm.com/book/en/v2)
- [Jira API Documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)

---

## Feedback

After completing this lab, consider:
- What workflows did Bob make easier?
- Where could Bob improve?
- What features would you like to see?

Happy coding with Bob! 🤖