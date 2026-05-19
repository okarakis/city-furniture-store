import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { JiraClient } from '../jira-client.js';
import {
  searchUsersSchema,
  accountIdSchema,
  issueKeySchema,
} from '../utils/validators.js';
import { handleJiraError } from '../utils/error-handler.js';
import { JiraUser } from '../types.js';
import { z } from 'zod';

export function registerUserTools(server: McpServer, jiraClient: JiraClient) {
  const client = jiraClient.getClient();

  // Search Users
  server.tool(
    'search_users',
    searchUsersSchema.shape,
    async (args) => {
      try {
        const response = await client.get<JiraUser[]>('/user/search', {
          params: {
            query: args.query,
            maxResults: args.max_results,
          },
        });

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  total: response.data.length,
                  users: response.data,
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
              text: `Failed to search users: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Get User
  server.tool(
    'get_user',
    { account_id: accountIdSchema },
    async ({ account_id }) => {
      try {
        const response = await client.get<JiraUser>('/user', {
          params: {
            accountId: account_id,
          },
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
              text: `Failed to get user: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Assign Issue
  server.tool(
    'assign_issue',
    {
      issue_key: issueKeySchema,
      account_id: z.union([
        accountIdSchema,
        z.literal('-1'),
        z.literal('null'),
      ]),
    },
    async ({ issue_key, account_id }) => {
      try {
        let payload: any;

        if (account_id === 'null') {
          payload = { accountId: null };
        } else if (account_id === '-1') {
          payload = { accountId: '-1' };
        } else {
          payload = { accountId: account_id };
        }

        await client.put(`/issue/${issue_key}/assignee`, payload);

        const assigneeText =
          account_id === 'null'
            ? 'unassigned'
            : account_id === '-1'
            ? 'automatic assignee'
            : `user ${account_id}`;

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  success: true,
                  message: `Issue ${issue_key} assigned to ${assigneeText}`,
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
              text: `Failed to assign issue: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );
}

// Made with Bob
