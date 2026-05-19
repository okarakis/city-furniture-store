# Jira MCP Server - Installation Guide

## Quick Start for New Users

This guide will help you install and configure the Jira MCP Server on your system.

## Prerequisites

- Node.js (v18 or higher)
- A Jira Cloud account
- Bob AI with MCP support

## Step 1: Extract and Install

1. **Extract the ZIP file** to a location of your choice, for example:
   - macOS/Linux: `~/jira-mcp-server/`
   - Windows: `C:\Users\YourName\jira-mcp-server\`

2. **Open a terminal** in the extracted directory

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Build the project**:
   ```bash
   npm run build
   ```

   This will create a `build/` directory with the compiled JavaScript files.

## Step 2: Get Your Jira Credentials

### 2.1 Create a Jira API Token

1. Go to https://id.atlassian.com/manage-profile/security/api-tokens
2. Click **"Create API token"**
3. Enter a label (e.g., "MCP Server")
4. Click **"Create"**
5. **Copy the token immediately** - you won't see it again!

### 2.2 Find Your Jira Information

You need three pieces of information:

- **JIRA_HOST**: Your Jira domain (e.g., `company.atlassian.net`)
  - Find this in your Jira URL: `https://YOUR-DOMAIN.atlassian.net`
  - Use only the domain part, **without** `https://`
  
- **JIRA_EMAIL**: Your Atlassian account email

- **JIRA_API_TOKEN**: The token you just created

## Step 3: Configure Bob's MCP Settings

### 3.1 Locate Your MCP Settings File

The location depends on your operating system:

- **macOS**: `~/.bob/settings/mcp_settings.json`
- **Linux**: `~/.bob/settings/mcp_settings.json`
- **Windows**: `%USERPROFILE%\.bob\settings\mcp_settings.json`

### 3.2 Add Jira Server Configuration

Open the `mcp_settings.json` file and add the Jira server configuration.

**If the file doesn't exist**, create it with this content:

```json
{
  "mcpServers": {
    "jira": {
      "command": "node",
      "args": ["/FULL/PATH/TO/jira-mcp-server/build/index.js"],
      "env": {
        "JIRA_HOST": "your-domain.atlassian.net",
        "JIRA_EMAIL": "your-email@example.com",
        "JIRA_API_TOKEN": "your-api-token-here"
      }
    }
  }
}
```

**If the file already exists** with other servers, add the `jira` entry to the existing `mcpServers` object:

```json
{
  "mcpServers": {
    "existing-server": {
      ...
    },
    "jira": {
      "command": "node",
      "args": ["/FULL/PATH/TO/jira-mcp-server/build/index.js"],
      "env": {
        "JIRA_HOST": "your-domain.atlassian.net",
        "JIRA_EMAIL": "your-email@example.com",
        "JIRA_API_TOKEN": "your-api-token-here"
      }
    }
  }
}
```

### 3.3 Replace Placeholders

**IMPORTANT**: Replace the following placeholders with your actual values:

1. **Path to build/index.js**:
   - macOS/Linux example: `/Users/yourname/jira-mcp-server/build/index.js`
   - Windows example: `C:\\Users\\YourName\\jira-mcp-server\\build\\index.js`
   - Use the **full absolute path** to where you extracted the files

2. **JIRA_HOST**: Replace `your-domain.atlassian.net` with your actual Jira domain
   - ✅ Correct: `mycompany.atlassian.net`
   - ❌ Wrong: `https://mycompany.atlassian.net/`

3. **JIRA_EMAIL**: Replace with your Atlassian account email

4. **JIRA_API_TOKEN**: Replace with the API token you created

### 3.4 Example Configuration

Here's a complete example:

```json
{
  "mcpServers": {
    "jira": {
      "command": "node",
      "args": ["/Users/john/jira-mcp-server/build/index.js"],
      "env": {
        "JIRA_HOST": "acmecorp.atlassian.net",
        "JIRA_EMAIL": "john.doe@acmecorp.com",
        "JIRA_API_TOKEN": "ATATT3xFfGF0..."
      }
    }
  }
}
```

## Step 4: Restart Bob

After saving the configuration file, **restart Bob** to load the Jira MCP server.

## Step 5: Verify Installation

Once Bob restarts, you should see the Jira server in the "Connected MCP Servers" section with 19 available tools.

### Test the Connection

Try a simple command:
```
"List all my Jira projects"
```

Bob should use the `list_projects` tool to fetch your projects.

## Platform-Specific Notes

### macOS

- Use forward slashes in paths: `/Users/yourname/jira-mcp-server/build/index.js`
- The `~` shortcut may not work in MCP settings, use full path: `/Users/yourname/...`

### Linux

- Use forward slashes in paths: `/home/yourname/jira-mcp-server/build/index.js`
- Ensure the build/index.js file has execute permissions: `chmod +x build/index.js`

### Windows

- Use double backslashes in paths: `C:\\Users\\YourName\\jira-mcp-server\\build\\index.js`
- Or use forward slashes: `C:/Users/YourName/jira-mcp-server/build/index.js`

## Troubleshooting

### Error: "Cannot find module"

**Problem**: The path to build/index.js is incorrect.

**Solution**:
1. Verify the path is correct and uses the full absolute path
2. Check that you ran `npm run build` successfully
3. Verify the `build/index.js` file exists

### Error: "Missing required environment variables"

**Problem**: One or more environment variables are not set.

**Solution**:
1. Check all three variables are present: JIRA_HOST, JIRA_EMAIL, JIRA_API_TOKEN
2. Ensure there are no typos
3. Restart Bob after making changes

### Error: "401 Unauthorized"

**Problem**: Authentication failed.

**Solution**:
1. Verify your API token is correct
2. Ensure the email matches your Atlassian account
3. Try creating a new API token

### Error: "404 Not Found"

**Problem**: Cannot reach Jira instance.

**Solution**:
1. Verify JIRA_HOST is correct (no `https://` or trailing slash)
2. Ensure you're using Jira Cloud (not Server/Data Center)
3. Check your internet connection

### Server Not Appearing

**Problem**: Jira server doesn't show up in Bob.

**Solution**:
1. Check the mcp_settings.json file for syntax errors (valid JSON)
2. Ensure the file is saved
3. Restart Bob completely
4. Check Bob's logs for error messages

## Getting Help

If you encounter issues:

1. Check the [README.md](README.md) for usage examples
2. Review the [SETUP.md](SETUP.md) for detailed configuration
3. Verify your Jira permissions (you need appropriate access)
4. Check the [Jira Cloud REST API docs](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)

## Security Best Practices

1. **Never share your API token** - it's like a password
2. **Don't commit tokens to version control** - they're in .gitignore
3. **Rotate tokens periodically** - create new ones and revoke old ones
4. **Use separate tokens** for different applications
5. **Revoke unused tokens** in your Atlassian account settings

## Next Steps

Once installed, you can:

- Create and manage issues
- Search with JQL queries
- Manage projects
- Add comments
- Assign issues to users

See [README.md](README.md) for complete usage examples and available tools.

## Updating

To update to a new version:

1. Extract the new ZIP file
2. Run `npm install` (in case dependencies changed)
3. Run `npm run build`
4. Restart Bob

Your configuration in `mcp_settings.json` will remain unchanged.