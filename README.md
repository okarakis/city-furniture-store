# City Furniture Store - Bob Hands-On Lab

Welcome to the Bob AI Assistant Hands-On Lab! This project is designed to teach you how to use Bob for real-world development workflows including Git operations, code reviews, and Jira integration.

## 🎯 What You'll Learn

- **Git Workflow**: Initialize repos, create branches, commit changes, and create pull requests using Bob
- **Code Review**: Use Bob to review code quality, security, and best practices
- **Jira Integration**: Connect Bob to Jira via MCP server to manage issues and track work
- **Browser Testing**: Test your web applications using Bob's browser automation
- **AI-Assisted Development**: Learn how to effectively collaborate with Bob on real projects

## 📚 Lab Structure

This lab consists of three main documents:

### 1. [LAB-SETUP.md](./LAB-SETUP.md)
**Start here!** Complete setup instructions including:
- Prerequisites verification
- GitHub account setup
- Jira account configuration
- MCP server installation
- Environment configuration

### 2. [LAB-GUIDE.md](./LAB-GUIDE.md)
Comprehensive lab guide with:
- Detailed explanations of each exercise
- Learning objectives
- Key concepts
- Troubleshooting tips
- Advanced exercises

### 3. [LAB-EXERCISES.md](./LAB-EXERCISES.md)
Step-by-step walkthrough with:
- Copy-paste ready commands
- Expected results for each step
- Quick reference commands
- Completion checklist

## 🚀 Quick Start

1. **Setup** (30 minutes)
   ```bash
   # Follow LAB-SETUP.md to configure your environment
   ```

2. **Part 1: Git Workflow** (20 minutes)
   - Create GitHub repository
   - Build furniture store homepage
   - Review and commit changes
   - Create pull request

3. **Part 2: Jira Integration** (30 minutes)
   - Connect to Jira MCP server
   - Create and manage issues
   - Implement features from Jira
   - Update issue status

4. **Part 3: Advanced** (20 minutes)
   - Multi-issue workflows
   - Code quality improvements
   - Browser testing

## 📋 Prerequisites

- [ ] VS Code with Bob AI Assistant installed
- [ ] Git installed and configured
- [ ] Node.js 16+ and npm
- [ ] GitHub account
- [ ] **Jira access provided** (shared instance - no account needed!)

## 🛠️ Project Structure

```
City-Furniture-Lab1/
├── README.md                 # This file
├── LAB-SETUP.md             # Setup instructions
├── LAB-GUIDE.md             # Comprehensive lab guide
├── LAB-EXERCISES.md         # Step-by-step exercises
├── .bob/
│   └── mcp.json             # MCP server configuration
├── jira-mcp-server/         # Jira MCP server implementation
│   ├── src/
│   ├── build/
│   └── README.md
└── shoe-store/              # Reference implementation
    ├── index.html
    ├── styles.css
    └── script.js
```

## 🎓 Learning Path

### Beginner Track
1. Complete LAB-SETUP.md
2. Follow Part 1 of LAB-EXERCISES.md (Git Workflow)
3. Complete Part 2 of LAB-EXERCISES.md (Jira Integration)

### Advanced Track
1. Complete Beginner Track
2. Work through Part 3 (Advanced Exercises)
3. Experiment with custom workflows
4. Create your own MCP server

## 💡 Key Bob Commands

### Git Operations
```
@bob Initialize Git repository
@bob Create branch feature/my-feature
@bob Show git diff
@bob Commit changes with message "feat: add feature"
@bob Push to GitHub
@bob Create pull request
```

### Code Review
```
@bob Review my code
@bob Check for security issues
@bob Fix the issues found
```

### Jira Operations
```
@bob List Jira projects
@bob Create Jira issue in CITY
@bob Get issue CITY-1
@bob Add comment to CITY-1
@bob Transition CITY-1 to "In Progress"
```

## 🔧 Troubleshooting

### Common Issues

**Jira Connection Failed**
- Jira credentials are pre-configured in the shared instance
- Rebuild MCP server: `cd jira-mcp-server && npm run build`
- Restart VS Code
- Contact instructor if issues persist

**Git Push Failed**
- Check GitHub token permissions
- Verify remote URL is correct
- Ensure you have write access to repository

**MCP Server Not Found**
- Rebuild: `cd jira-mcp-server && npm run build`
- Check `.bob/mcp.json` paths
- Restart VS Code

See [LAB-SETUP.md](./LAB-SETUP.md) for detailed troubleshooting.

## 📖 Additional Resources

- [Bob Documentation](https://docs.bob.ai)
- [Jira MCP Server README](./jira-mcp-server/README.md)
- [Git Best Practices](https://git-scm.com/book/en/v2)
- [Jira API Documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)

## 🎯 Lab Objectives

By the end of this lab, you will be able to:

- ✅ Use Bob to manage Git workflows efficiently
- ✅ Create and review pull requests with Bob's assistance
- ✅ Integrate Bob with Jira for issue tracking
- ✅ Implement features based on Jira requirements
- ✅ Use Bob for code review and quality checks
- ✅ Test web applications using Bob's browser automation
- ✅ Understand MCP server architecture and usage

## 🤝 Contributing

This is a learning lab, but if you find issues or have suggestions:

1. Create a GitHub issue
2. Submit a pull request
3. Share your feedback

## 📝 License

This lab is provided for educational purposes. Feel free to use and modify for your learning.

## 🎉 Getting Started

Ready to begin? Start with [LAB-SETUP.md](./LAB-SETUP.md)!

---

**Happy Learning with Bob!** 🤖

For questions or issues, refer to the troubleshooting sections in each lab document.