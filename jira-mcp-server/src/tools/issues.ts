import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { JiraClient } from '../jira-client.js';
import {
  createIssueSchema,
  updateIssueSchema,
  searchIssuesSchema,
  transitionIssueSchema,
  issueKeySchema,
} from '../utils/validators.js';
import { handleJiraError } from '../utils/error-handler.js';
import { JiraIssue, JiraSearchResult, JiraTransition } from '../types.js';
import { z } from 'zod';

export function registerIssueTools(server: McpServer, jiraClient: JiraClient) {
  const client = jiraClient.getClient();

  // Create Issue
  server.tool(
    'create_issue',
    createIssueSchema.shape,
    async (args) => {
      try {
        const payload: any = {
          fields: {
            project: { key: args.project_key },
            summary: args.summary,
            issuetype: { name: args.issue_type },
          },
        };

        if (args.description) {
          payload.fields.description = {
            type: 'doc',
            version: 1,
            content: [
              {
                type: 'paragraph',
                content: [{ type: 'text', text: args.description }],
              },
            ],
          };
        }

        if (args.priority) {
          payload.fields.priority = { name: args.priority };
        }

        if (args.assignee) {
          payload.fields.assignee = { accountId: args.assignee };
        }

        if (args.labels) {
          payload.fields.labels = args.labels;
        }

        if (args.components) {
          payload.fields.components = args.components.map((id: string) => ({ id }));
        }

        if (args.custom_fields) {
          Object.assign(payload.fields, args.custom_fields);
        }

        const response = await client.post<JiraIssue>('/issue', payload);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  success: true,
                  issue_key: response.data.key,
                  issue_id: response.data.id,
                  message: `Issue ${response.data.key} created successfully`,
                },
                null,
                2
              ),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Failed to create issue: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Get Issue
  server.tool(
    'get_issue',
    {
      issue_key: issueKeySchema,
      fields: z.array(z.string()).optional(),
    },
    async ({ issue_key, fields }) => {
      try {
        const params: any = {};
        if (fields && fields.length > 0) {
          params.fields = fields.join(',');
        }

        const response = await client.get<JiraIssue>(`/issue/${issue_key}`, {
          params,
        });

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(response.data, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Failed to get issue: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Update Issue
  server.tool(
    'update_issue',
    updateIssueSchema.shape,
    async (args) => {
      try {
        const payload: any = { fields: {} };

        if (args.summary) {
          payload.fields.summary = args.summary;
        }

        if (args.description !== undefined) {
          payload.fields.description = {
            type: 'doc',
            version: 1,
            content: [
              {
                type: 'paragraph',
                content: [{ type: 'text', text: args.description }],
              },
            ],
          };
        }

        if (args.priority) {
          payload.fields.priority = { name: args.priority };
        }

        if (args.assignee) {
          payload.fields.assignee = { accountId: args.assignee };
        }

        if (args.labels) {
          payload.fields.labels = args.labels;
        }

        if (args.custom_fields) {
          Object.assign(payload.fields, args.custom_fields);
        }

        await client.put(`/issue/${args.issue_key}`, payload);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  success: true,
                  message: `Issue ${args.issue_key} updated successfully`,
                },
                null,
                2
              ),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Failed to update issue: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Search Issues
  server.tool(
    'search_issues',
    searchIssuesSchema.shape,
    async (args) => {
      try {
        const response = await client.get<JiraSearchResult>(
          '/search/jql',
          {
            params: {
              jql: args.jql,
              startAt: args.start_at,
              maxResults: args.max_results,
              fields: args.fields ? args.fields.join(',') : 'summary,status,assignee,priority,created,updated',
            }
          }
        );

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  total: response.data.total,
                  returned: response.data.issues.length,
                  issues: response.data.issues,
                },
                null,
                2
              ),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Failed to search issues: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Transition Issue
  server.tool(
    'transition_issue',
    transitionIssueSchema.shape,
    async (args) => {
      try {
        const payload: any = {
          transition: { id: args.transition_id },
        };

        if (args.comment) {
          payload.update = {
            comment: [
              {
                add: {
                  body: {
                    type: 'doc',
                    version: 1,
                    content: [
                      {
                        type: 'paragraph',
                        content: [{ type: 'text', text: args.comment }],
                      },
                    ],
                  },
                },
              },
            ],
          };
        }

        await client.post(`/issue/${args.issue_key}/transitions`, payload);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  success: true,
                  message: `Issue ${args.issue_key} transitioned successfully`,
                },
                null,
                2
              ),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Failed to transition issue: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Get Available Transitions
  server.tool(
    'get_transitions',
    { issue_key: issueKeySchema },
    async ({ issue_key }) => {
      try {
        const response = await client.get<{ transitions: JiraTransition[] }>(
          `/issue/${issue_key}/transitions`
        );

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  issue_key,
                  transitions: response.data.transitions.map((t) => ({
                    id: t.id,
                    name: t.name,
                    to_status: t.to.name,
                  })),
                },
                null,
                2
              ),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Failed to get transitions: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Delete Issue
  server.tool(
    'delete_issue',
    { issue_key: issueKeySchema },
    async ({ issue_key }) => {
      try {
        await client.delete(`/issue/${issue_key}`);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  success: true,
                  message: `Issue ${issue_key} deleted successfully`,
                },
                null,
                2
              ),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Failed to delete issue: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );
}

// Made with Bob
