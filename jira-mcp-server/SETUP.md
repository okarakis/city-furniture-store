# Jira MCP Server - Setup Guide

## Step 1: Get Your Jira API Credentials

### 1.1 Create API Token

1. Go to https://id.atlassian.com/manage-profile/security/api-tokens
2. Click **"Create API token"**
3. Enter a label (e.g., "MCP Server for Bob")
4. Click **"Create"**
5. **Copy the token immediately** - you won't be able to see it again!

### 1.2 Get Your Jira Information

You'll need:
- **JIRA_HOST**: Your Jira Cloud domain (e.g., `company.atlassian.net`)
  - Find this in your Jira URL: `https://YOUR-DOMAIN.atlassian.net`
  - Use only the domain part, without `https://`
- **JIRA_EMAIL**: Your Atlassian account email
- **JIRA_API_TOKEN**: The token you just created

## Step 2: Configure Bob's MCP Settings

### 2.1 Locate MCP Settings File

The file is located at: `~/.bob/settings/mcp_settings.json`

### 2.2 Add Jira Server Configuration

Open the file and add the Jira server configuration. If the file already has other servers, add the `jira` entry to the existing `mcpServers` object:

```json
{
  "mcpServers": {
    "jira": {
      "command": "node",
      "args": ["/Users/vivek/City-Furniture-Lab1/Jira-mcp/build/index.js"],
      "env": {
        "JIRA_HOST": "your-domain.atlassian.net",
        "JIRA_EMAIL": "your-email@example.com",
        "JIRA_API_TOKEN": "your-api-token-here"
      }
    }
  }
}
```

**Important Notes:**
- Replace `/Users/vivek/City-Furniture-Lab1/Jira-mcp/build/index.js` with the actual path to your build/index.js file
- Replace `your-domain.atlassian.net` with your actual Jira domain
- Replace `your-email@example.com` with your Atlassian account email
- Replace `your-api-token-here` with the API token you created

### 2.3 Example Complete Configuration

If you have other MCP servers, your file might look like this:

```json
{
  "mcpServers": {
    "weather": {
      "command": "node",
      "args": ["/path/to/weather-server/build/index.js"],
      "env": {
        "OPENWEATHER_API_KEY": "your-weather-key"
      }
    },
    "jira": {
      "command": "node",
      "args": ["/Users/vivek/City-Furniture-Lab1/Jira-mcp/build/index.js"],
      "env": {
        "JIRA_HOST": "mycompany.atlassian.net",
        "JIRA_EMAIL": "user@mycompany.com",
        "JIRA_API_TOKEN": "ATATT3xFfGF0..."
      }
    }
  }
}
```

## Step 3: Restart Bob

After saving the MCP settings file, restart Bob to load the new Jira MCP server.

## Step 4: Verify Installation

Once Bob restarts, you should see the Jira server listed in the "Connected MCP Servers" section with all available tools:

### Issue Management Tools (7)
- `create_issue`
- `get_issue`
- `update_issue`
- `delete_issue`
- `search_issues`
- `transition_issue`
- `get_transitions`

### Project Management Tools (5)
- `list_projects`
- `get_project`
- `create_project`
- `update_project`
- `delete_project`

### Comment Management Tools (4)
- `add_comment`
- `get_comments`
- `update_comment`
- `delete_comment`

### User Management Tools (3)
- `search_users`
- `get_user`
- `assign_issue`

## Step 5: Test the Connection

Try a simple command to verify everything works:

```
List all my Jira projects
```

Bob should use the `list_projects` tool to fetch your projects.

## Troubleshooting

### Error: "Missing required environment variables"

**Problem**: One or more environment variables are not set correctly.

**Solution**: 
1. Check that all three variables are present in mcp_settings.json:
   - JIRA_HOST
   - JIRA_EMAIL
   - JIRA_API_TOKEN
2. Ensure there are no typos in the variable names
3. Restart Bob after making changes

### Error: "401 Unauthorized"

**Problem**: Authentication failed.

**Solution**:
1. Verify your API token is correct
2. Ensure the email matches your Atlassian account
3. Check if the API token has expired (tokens don't expire by default, but can be revoked)
4. Try creating a new API token

### Error: "404 Not Found"

**Problem**: Cannot reach Jira instance.

**Solution**:
1. Verify JIRA_HOST is correct (should be just the domain, no `https://`)
2. Ensure you're using Jira Cloud (not Jira Server/Data Center)
3. Check your internet connection

### Error: "Cannot find module"

**Problem**: The path to build/index.js is incorrect.

**Solution**:
1. Verify the path in the `args` field is correct
2. Ensure you've run `npm run build` in the Jira-mcp directory
3. Check that the build/index.js file exists

### Server Not Appearing in Bob

**Problem**: Jira server doesn't show up in Connected MCP Servers.

**Solution**:
1. Check the mcp_settings.json file for syntax errors (valid JSON)
2. Ensure the file is saved
3. Restart Bob completely
4. Check Bob's logs for error messages

## Security Best Practices

1. **Never commit your API token** to version control
2. **Rotate tokens periodically** - create new tokens and revoke old ones
3. **Use separate tokens** for different applications
4. **Revoke tokens** you're no longer using
5. **Monitor token usage** in your Atlassian account settings

## Getting Help

If you encounter issues:

1. Check the [Jira Cloud REST API documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)
2. Review the [MCP Protocol documentation](https://modelcontextprotocol.io/)
3. Check Bob's error logs for detailed error messages
4. Verify your Jira permissions (you need appropriate access to projects/issues)

## Next Steps

Once configured, you can:

1. **Create issues**: "Create a bug in project PROJ about login issues"
2. **Search issues**: "Show me all high priority bugs in PROJ"
3. **Update issues**: "Update PROJ-123 to set priority to High"
4. **Manage projects**: "List all my Jira projects"
5. **Add comments**: "Add a comment to PROJ-123 saying 'Working on this'"
6. **Assign issues**: "Assign PROJ-123 to user with account ID xyz"

Refer to the [README.md](README.md) for more usage examples and available tools.