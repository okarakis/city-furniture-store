# Jira MCP Server

A comprehensive Model Context Protocol (MCP) server for Jira Cloud that provides full CRUD operations on issues, projects, comments, and users.

## 🚀 Quick Start

**New to this project?** Start with [INSTALL.md](INSTALL.md) for step-by-step installation instructions.

Already installed? Jump to [Usage Examples](#usage-examples) to see what you can do!

## Features

- **Issue Management**: Create, read, update, delete, search, and transition issues
- **Project Management**: List, get, create, update, and delete projects
- **Comment Management**: Add, list, update, and delete comments
- **User Management**: Search users, get user details, and assign issues
- **Secure Authentication**: Uses Jira Cloud API tokens
- **Type-Safe**: Full TypeScript implementation with Zod validation
- **Error Handling**: Comprehensive error messages and retry logic

## Installation

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

## Configuration

### Get Your Jira API Token

1. Go to https://id.atlassian.com/manage-profile/security/api-tokens
2. Click "Create API token"
3. Give it a name (e.g., "MCP Server")
4. Copy the token (you won't see it again!)

### Configure MCP Settings

Add to `~/.bob/settings/mcp_settings.json`:

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

**See [mcp-config-example.json](mcp-config-example.json) for a template and [INSTALL.md](INSTALL.md) for detailed setup instructions.**

**Important**: 
- `JIRA_HOST` should be just the domain (e.g., `company.atlassian.net`), without `https://`
- `JIRA_EMAIL` is your Atlassian account email
- `JIRA_API_TOKEN` is the token you created above

## Available Tools

### Issue Management (7 tools)

- `create_issue` - Create a new issue
- `get_issue` - Get issue details
- `update_issue` - Update an existing issue
- `delete_issue` - Delete an issue
- `search_issues` - Search issues using JQL
- `transition_issue` - Move issue through workflow
- `get_transitions` - Get available transitions for an issue

### Project Management (5 tools)

- `list_projects` - List all accessible projects
- `get_project` - Get project details
- `create_project` - Create a new project
- `update_project` - Update project details
- `delete_project` - Delete a project

### Comment Management (4 tools)

- `add_comment` - Add a comment to an issue
- `get_comments` - Get all comments for an issue
- `update_comment` - Update an existing comment
- `delete_comment` - Delete a comment

### User Management (3 tools)

- `search_users` - Search for users
- `get_user` - Get user details
- `assign_issue` - Assign an issue to a user

## Usage Examples

### Create and Track a Bug

```typescript
// 1. Create a bug
use_mcp_tool("jira", "create_issue", {
  project_key: "PROJ",
  summary: "Login button not responding",
  issue_type: "Bug",
  priority: "High",
  description: "Users report login button does nothing when clicked"
})

// 2. Assign to developer
use_mcp_tool("jira", "assign_issue", {
  issue_key: "PROJ-123",
  account_id: "developer-account-id"
})

// 3. Move to In Progress
use_mcp_tool("jira", "transition_issue", {
  issue_key: "PROJ-123",
  transition_id: "In Progress"
})

// 4. Add comment
use_mcp_tool("jira", "add_comment", {
  issue_key: "PROJ-123",
  body: "Found the issue - event listener not attached"
})

// 5. Complete
use_mcp_tool("jira", "transition_issue", {
  issue_key: "PROJ-123",
  transition_id: "Done"
})
```

### Search Issues

```typescript
// Search with JQL
use_mcp_tool("jira", "search_issues", {
  jql: "project = PROJ AND status = 'In Progress' ORDER BY priority DESC",
  max_results: 20
})
```

### Manage Projects

```typescript
// List all projects
use_mcp_tool("jira", "list_projects", {})

// Get project details
use_mcp_tool("jira", "get_project", {
  project_key: "PROJ"
})
```

## Development

### Build
```bash
npm run build
```

### Watch Mode
```bash
npm run watch
```

## Troubleshooting

### "Missing required environment variables"
Ensure all three environment variables are set in your MCP settings:
- JIRA_HOST
- JIRA_EMAIL
- JIRA_API_TOKEN

### "401 Unauthorized"
- Verify your API token is correct
- Ensure the email matches your Atlassian account
- Check if the API token has expired

### "404 Not Found"
- Verify the JIRA_HOST is correct (without https://)
- Check if you have access to the project/issue
- Ensure you're using Jira Cloud (not Server) endpoints

## API Documentation

- [Jira Cloud REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)
- [JQL Guide](https://support.atlassian.com/jira-software-cloud/docs/use-advanced-search-with-jira-query-language-jql/)
- [MCP Protocol](https://modelcontextprotocol.io/)

## License

MIT