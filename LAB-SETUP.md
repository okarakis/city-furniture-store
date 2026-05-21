# Lab Setup Instructions

Follow these steps to prepare your environment for the Bob Hands-On Lab.

## Step 1: Verify Prerequisites

### Check Git Installation
```bash
git --version
```
Expected: Git version 2.x or higher

### Check Node.js
```bash
node --version
npm --version
```
Expected: Node.js 16.x or higher, npm 8.x or higher

### Check Bob Installation
1. Open VS Code
2. Look for Bob icon in the sidebar
3. Verify Bob is active and responding

---

## Step 2: GitHub Setup

### Create GitHub Account
1. Go to https://github.com
2. Sign up for a free account (if you don't have one)
3. Verify your email address

### Generate Personal Access Token (for HTTPS)
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "Bob Lab Token"
4. Select scopes:
   - `repo` (all)
   - `workflow`
5. Click "Generate token"
6. **IMPORTANT**: Copy the token immediately (you won't see it again)

### Configure Git Credentials
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## Step 3: Jira Setup (Pre-configured)

**Good news!** The Jira instance is already set up for you. You'll be using a shared Jira workspace:

- **Jira URL**: `https://chauhanbvivek.atlassian.net`
- **Project Key**: `CITY` (City Furniture project)
- **Access**: Read and write access to create and manage issues

The Jira MCP server is already configured in `.bob/mcp.json` with the necessary credentials. You don't need to create a Jira account or API token.

### What You Can Do

You'll have access to:
- ✅ Create issues in the CITY project
- ✅ View and search all issues
- ✅ Add comments to issues
- ✅ Transition issues between statuses
- ✅ Assign issues
- ✅ Update issue details

---

## Step 4: Build the Jira MCP Server

The Jira MCP server needs to be built before use:

```bash
cd jira-mcp-server
npm install
npm run build
```



### Verify MCP Configuration

The `.bob/mcp.json` file is already configured with the shared Jira instance. You can verify it contains:

```json
{
  "mcpServers": {
    "jira": {
      "command": "node",
      "args": ["./jira-mcp-server/build/index.js"],
      "env": {
        "JIRA_HOST": "chauhanbvivek.atlassian.net",
        "JIRA_EMAIL": "chauhanbvivek@gmail.com",
        "JIRA_API_TOKEN": "[pre-configured]"
      },
      "alwaysAllow": ["search_issues"]
    }
  }
}
```

**Note**: The path uses `./jira-mcp-server/build/index.js` (relative path) which works from any location. The actual API token is pre-configured and hidden for security.

**No changes needed!** The configuration is ready to use.

---

## Step 5: Restart VS Code

1. Close VS Code completely
2. Reopen VS Code
3. Open the City-Furniture-Lab1 folder
4. Wait for Bob to initialize
5. Check that MCP servers are connected (look for Jira in Bob's available tools)

---

## Step 6: Test Your Setup

### Test Git
Ask Bob:
```
@bob What is my current git status?
```

### Test Jira Connection
Ask Bob:
```
@bob List all my Jira projects
```

You should see the "City Furniture (CITY)" project. If you do, you're ready to go! 🎉

---

## Troubleshooting

### Git Issues

**Problem**: Git not found
- **Solution**: Install Git from https://git-scm.com/downloads

**Problem**: Permission denied (publickey)
- **Solution**: Use HTTPS instead of SSH, or set up SSH keys

### Jira Connection Issues

**Problem**: "Cannot find module" or build errors
- **Solution**:
  1. `cd jira-mcp-server`
  2. `npm install`
  3. `npm run build`
  4. Restart VS Code

**Problem**: Jira tools not showing in Bob
- **Solution**:
  1. Verify `jira-mcp-server/build/index.js` exists
  2. Check `.bob/mcp.json` has correct path to build/index.js
  3. Restart VS Code completely
  4. Check Bob's output panel for errors (View → Output → select "Bob")

**Problem**: "Authentication failed" or "Unauthorized"
- **Solution**: The shared Jira instance credentials are pre-configured. If you see this error, contact the lab instructor.

### MCP Server Issues

**Problem**: MCP server not starting
- **Solution**:
  1. Check Node.js version: `node --version` (need 16+)
  2. Rebuild: `cd jira-mcp-server && npm run build`
  3. Check for errors in VS Code Output panel (select "Bob" from dropdown)
  4. Verify the path in `.bob/mcp.json` matches your actual project location

---

## Verification Checklist

Before starting the lab, verify:

- [ ] Git is installed and configured
- [ ] GitHub account created
- [ ] GitHub personal access token generated
- [ ] Node.js 16+ installed
- [ ] Jira MCP server built successfully (`jira-mcp-server/build/` exists)
- [ ] `.bob/mcp.json` configured (already done)
- [ ] VS Code restarted
- [ ] Bob can access Git status
- [ ] Bob can list Jira projects (should see CITY project)

---

## Quick Reference

### Important URLs
- GitHub: https://github.com
- Shared Jira: https://chauhanbvivek.atlassian.net
- GitHub Tokens: https://github.com/settings/tokens

### Important Files
- MCP Config: `.bob/mcp.json`
- Jira Server: `jira-mcp-server/build/index.js`
- Lab Guide: `LAB-GUIDE.md`

### Shared Jira Details
- **URL**: https://chauhanbvivek.atlassian.net
- **Project**: City Furniture (CITY)
- **Access**: Pre-configured, no setup needed

---

## Ready to Start!

Once all checks pass, open `LAB-GUIDE.md` and begin Part 1! 🚀