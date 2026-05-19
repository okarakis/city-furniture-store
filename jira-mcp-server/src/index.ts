#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { JiraClient } from './jira-client.js';
import { registerIssueTools } from './tools/issues.js';
import { registerProjectTools } from './tools/projects.js';
import { registerCommentTools } from './tools/comments.js';
import { registerUserTools } from './tools/users.js';

// Initialize Jira client
let jiraClient: JiraClient;

try {
  jiraClient = new JiraClient();
} catch (error) {
  console.error('Failed to initialize Jira client:', error);
  process.exit(1);
}

// Create MCP server
const server = new McpServer({
  name: 'jira-mcp-server',
  version: '1.0.0',
});

// Register all tool categories
registerIssueTools(server, jiraClient);
registerProjectTools(server, jiraClient);
registerCommentTools(server, jiraClient);
registerUserTools(server, jiraClient);

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);

console.error('Jira MCP server running on stdio');
console.error(`Connected to Jira instance: ${jiraClient.getHost()}`);

// Made with Bob
