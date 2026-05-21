# Bob Lab Exercises - Step-by-Step Walkthrough

This document provides detailed, copy-paste ready commands for each lab exercise.

---

## Part 1: GitHub Setup & Code Review Workflow

### Exercise 1.1: Repository Setup

**Step 1: Create GitHub Repository**
1. Go to https://github.com/new
2. Repository name: `city-furniture-store`
3. Description: "Bob hands-on lab project"
4. Public or Private: Your choice
5. Do NOT check "Add a README file"
6. Click "Create repository"
7. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/city-furniture-store.git`)

**Step 2: Initialize with Bob**

Copy and paste this to Bob:
```
Initialize a new Git repository in the current directory, create a README.md file with project description, and connect it to my GitHub repository at https://github.com/YOUR_USERNAME/city-furniture-store.git (replace with your actual URL)
```

**Expected Result**: Bob will create README, initialize Git, add remote, and push to GitHub.

---

### Exercise 1.2: Create Homepage Feature

**Step 1: Create Feature Branch**

Ask Bob:
```
Create a new Git branch called 'feature/homepage' and switch to it
```

**Step 2: Create Homepage Files**

Ask Bob:
```
Create a furniture store homepage with these requirements:
- index.html with semantic HTML5 structure
- Header with logo and navigation (Home, Products, About, Contact)
- Hero section with welcome message and CTA button
- Product grid showing 6 furniture items (sofa, chair, table, bed, desk, cabinet)
- Footer with copyright
- styles.css with modern, responsive design using CSS Grid and Flexbox
- script.js with smooth scrolling and product card hover effects
Use modern best practices and make it mobile-responsive
```

**Expected Result**: Bob creates three files with complete, working code.

---

### Exercise 1.3: Review Changes

**Step 1: Check Git Status**

Ask Bob:
```
Show me the current Git status and what files have changed
```

**Step 2: View Detailed Diff**

Ask Bob:
```
Show me the detailed git diff of all changes
```

**Expected Result**: Bob shows you all new files and their content.

---

### Exercise 1.4: Commit and Push

**Step 1: Stage and Commit**

Ask Bob:
```
Stage all changes and commit them with the message "feat: Add furniture store homepage with responsive design"
```

**Step 2: Push to GitHub**

Ask Bob:
```
Push the feature/homepage branch to GitHub
```

**Expected Result**: Branch pushed to remote repository.

---

### Exercise 1.5: Code Review

**Step 1: Request Code Review**

Ask Bob:
```
Review all the code in the feature/homepage branch. Check for:
- HTML semantic structure and accessibility
- CSS best practices and responsiveness
- JavaScript code quality and performance
- Security issues
- Maintainability concerns
```

**Step 2: View Findings**

Bob will create review findings in the Bob Findings panel. Review each one.

**Step 3: Fix Issues (if any)**

Ask Bob:
```
Fix all the issues you found in the code review
```

**Step 4: Commit Fixes**

Ask Bob:
```
Commit the fixes with message "fix: Address code review findings"
```

---

### Exercise 1.6: Create Pull Request

**Step 1: Generate PR Description**

Ask Bob:
```
Generate a pull request description comparing feature/homepage to main branch
```

**Step 2: Create Pull Request**

Ask Bob:
```
Create a pull request from feature/homepage to main with title "Add Furniture Store Homepage" using the description you just generated
```

**Step 3: Verify on GitHub**

1. Go to your GitHub repository
2. Click "Pull requests" tab
3. View your new PR
4. Review the description and changes
5. Click "Merge pull request"
6. Click "Confirm merge"

---

## Part 2: Jira Integration with MCP Server

### Exercise 2.1: Verify Jira Connection

**Important**: You're using a shared Jira instance at `https://chauhanbvivek.atlassian.net`. All students will work in the same CITY project.

**Step 1: List Projects**

Ask Bob:
```
List all my Jira projects
```

**Expected Result**: You should see the "City Furniture" project (CITY) and possibly other projects.

**Step 2: Get Project Details**

Ask Bob:
```
Get the details of the CITY project from Jira
```

---

### Exercise 2.2: Create Jira Issues

**Step 1: Create Product Detail Page Issue**

Ask Bob:
```
Create a Jira issue in project CITY with:
- Summary: "Add product detail page - [Your Name]"
- Issue Type: Story
- Description: "As a customer, I want to view detailed information about a furniture item including multiple images, dimensions, materials, price, and add to cart functionality"
- Priority: High
```

**Note**: Add your name to the summary to identify your issues in the shared project.

**Step 2: Create Shopping Cart Issue**

Ask Bob:
```
Create a Jira issue in project CITY with:
- Summary: "Implement shopping cart functionality - [Your Name]"
- Issue Type: Story
- Description: "As a customer, I want to add items to a shopping cart, view cart contents, update quantities, and see the total price"
- Priority: Medium
```

**Step 3: Create Contact Form Issue**

Ask Bob:
```
Create a Jira issue in project CITY with:
- Summary: "Add contact form - [Your Name]"
- Issue Type: Task
- Description: "Create a contact form with fields for name, email, subject, and message. Include form validation and success message"
- Priority: Low
```

**Expected Result**: Three issues created with unique numbers (e.g., CITY-15, CITY-16, CITY-17). Note your issue numbers for the next steps.

---

### Exercise 2.3: Implement Feature from Jira

**Step 1: Fetch Issue Details**

Ask Bob (replace X with your actual issue number):
```
Get the details of issue CITY-X from Jira
```

**Step 2: Create Feature Branch**

Ask Bob (replace X with your issue number):
```
Switch to main branch, pull latest changes, and create a new branch called 'feature/CITY-X-product-detail'
```

**Step 3: Implement the Feature**

Ask Bob (replace X with your issue number):
```
Implement the product detail page for CITY-X. Create:
- product-detail.html with detailed product view including image gallery, specifications table, price, and add to cart button
- Update styles.css with product detail page styling
- Update script.js to handle navigation from product cards to detail page and back button functionality
- Make it responsive and match the existing design
```

**Expected Result**: Bob creates/updates files with product detail functionality.

---

### Exercise 2.4: Review Against Jira Requirements

**Step 1: Check Git Diff**

Ask Bob:
```
Show me the git diff for all changes in this branch
```

**Step 2: Verify Requirements**

Ask Bob (replace X with your issue number):
```
Review my changes and verify they meet all requirements specified in CITY-X. List what's implemented and what might be missing
```

**Step 3: Code Review**

Ask Bob:
```
Do a comprehensive code review of the product detail page implementation
```

---

### Exercise 2.5: Update Jira Issue

**Step 1: Add Progress Comment**

Ask Bob (replace X with your issue number):
```
Add a comment to CITY-X saying "Product detail page implemented with image gallery, specifications, pricing, and add to cart button. Ready for review."
```

**Step 2: Check Available Transitions**

Ask Bob (replace X with your issue number):
```
Get the available transitions for issue CITY-X
```

**Step 3: Transition Issue**

Ask Bob (replace X with your issue number and use the appropriate transition ID from the previous step):
```
Transition CITY-X to "In Progress" status
```

---

### Exercise 2.6: Complete the Workflow

**Step 1: Commit Changes**

Ask Bob (replace X with your issue number):
```
Stage all changes and commit with message "feat(CITY-X): Add product detail page with image gallery and specifications"
```

**Step 2: Push Branch**

Ask Bob (replace X with your issue number):
```
Push the feature/CITY-X-product-detail branch to GitHub
```

**Step 3: Create Pull Request**

Ask Bob (replace X with your issue number):
```
Generate a PR description for feature/CITY-X-product-detail to main, then create the pull request with title "feat(CITY-X): Add Product Detail Page"
```

**Step 4: Update Jira After PR**

Ask Bob (replace X with your issue number):
```
Add a comment to CITY-X with the pull request URL and transition it to "In Review"
```

---

## Part 3: Advanced Exercises

### Exercise 3.1: Implement Shopping Cart (CITY-2)

**Complete Workflow:**

1. Fetch CITY-2 details
2. Create branch `feature/CITY-2-shopping-cart`
3. Implement shopping cart functionality
4. Review code
5. Commit and push
6. Create PR
7. Update Jira issue

**Ask Bob:**
```
Let's implement CITY-2. Fetch the issue details, create a feature branch, implement the shopping cart functionality with add/remove items, quantity updates, and total calculation, review the code, commit, push, and create a PR with Jira reference
```

---

### Exercise 3.2: Search and Fix Issues

**Step 1: Search for TODO Comments**

Ask Bob:
```
Search all files for TODO comments or FIXME markers
```

**Step 2: Create Jira Issues for TODOs**

For each TODO found, ask Bob:
```
Create a Jira issue in CITY for this TODO: [describe the TODO]
```

**Step 3: Implement Fixes**

Pick one issue and ask Bob:
```
Implement the fix for CITY-X (replace X with issue number)
```

---

### Exercise 3.3: Bulk Issue Management

**Step 1: Search Jira Issues**

Ask Bob:
```
Search Jira issues in project CITY with JQL: "project = CITY AND status = 'To Do' ORDER BY priority DESC"
```

**Step 2: Assign Issues**

Ask Bob:
```
Assign issue CITY-X to me (replace X with issue number)
```

**Step 3: Bulk Update**

Ask Bob:
```
Add label "sprint-1" to issues CITY-1, CITY-2, and CITY-3
```

---

## Part 4: Testing Your Work

### Exercise 4.1: Local Testing

**Step 1: Open in Browser**

Ask Bob:
```
Launch a browser and open the index.html file to test the furniture store
```

**Step 2: Test Navigation**

Ask Bob:
```
Click on the first product card to navigate to the product detail page
```

**Step 3: Test Functionality**

Ask Bob:
```
Test the add to cart button and verify it works correctly
```

---

### Exercise 4.2: Final Review

**Step 1: Review All Changes**

Ask Bob:
```
Show me a summary of all changes made across all branches in this lab
```

**Step 2: Check Jira Status**

Ask Bob:
```
List all issues in CITY project and show their current status
```

**Step 3: Verify GitHub**

1. Go to your GitHub repository
2. Check all merged PRs
3. Verify main branch has all features

---

## Completion Checklist

### Part 1: Git Workflow ✓
- [ ] Created GitHub repository
- [ ] Initialized local Git repo
- [ ] Created feature branch
- [ ] Implemented homepage
- [ ] Reviewed code with Bob
- [ ] Fixed review findings
- [ ] Created and merged PR

### Part 2: Jira Integration ✓
- [ ] Connected to Jira MCP server
- [ ] Listed Jira projects
- [ ] Created 3 Jira issues
- [ ] Implemented CITY-1 feature
- [ ] Updated Jira with comments
- [ ] Transitioned issue status
- [ ] Created PR with Jira reference

### Part 3: Advanced Features ✓
- [ ] Implemented CITY-2 (shopping cart)
- [ ] Searched for TODOs
- [ ] Used JQL to search issues
- [ ] Managed issue assignments

### Part 4: Testing ✓
- [ ] Tested in browser
- [ ] Verified all functionality
- [ ] Reviewed final state

---

## Tips for Success

1. **Read Bob's responses carefully** - Bob provides detailed explanations
2. **Check the Findings panel** - Review issues Bob identifies
3. **Verify on GitHub/Jira** - Confirm changes are reflected
4. **Ask for clarification** - If something isn't clear, ask Bob to explain
5. **Experiment** - Try variations of the commands
6. **Take notes** - Document what works well for your workflow

---

## Common Commands Quick Reference

```
# Git Operations
@bob Show git status
@bob Create branch <name>
@bob Switch to branch <name>
@bob Commit changes with message "<message>"
@bob Push to GitHub
@bob Create pull request

# Code Review
@bob Review my code
@bob Fix the issues found

# Jira Operations
@bob List Jira projects
@bob Create Jira issue in CITY
@bob Get issue CITY-X
@bob Add comment to CITY-X
@bob Transition CITY-X to <status>

# Browser Testing
@bob Launch browser and open index.html
@bob Click on <element>
@bob Close browser
```

---

Congratulations on completing the Bob Hands-On Lab! 🎉