import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { JiraClient } from '../jira-client.js';
import {
  addCommentSchema,
  updateCommentSchema,
  issueKeySchema,
} from '../utils/validators.js';
import { handleJiraError } from '../utils/error-handler.js';
import { JiraComment } from '../types.js';
import { z } from 'zod';

export function registerCommentTools(server: McpServer, jiraClient: JiraClient) {
  const client = jiraClient.getClient();

  // Add Comment
  server.tool(
    'add_comment',
    addCommentSchema.shape,
    async (args) => {
      try {
        const payload = {
          body: {
            type: 'doc',
            version: 1,
            content: [
              {
                type: 'paragraph',
                content: [{ type: 'text', text: args.body }],
              },
            ],
          },
        };

        const response = await client.post<JiraComment>(
          `/issue/${args.issue_key}/comment`,
          payload
        );

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  success: true,
                  comment_id: response.data.id,
                  message: `Comment added to ${args.issue_key} successfully`,
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
              text: `Failed to add comment: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Get Comments
  server.tool(
    'get_comments',
    {
      issue_key: issueKeySchema,
      max_results: z.number().min(1).max(100).optional().default(50),
      start_at: z.number().min(0).optional().default(0),
    },
    async ({ issue_key, max_results, start_at }) => {
      try {
        const response = await client.get<{ comments: JiraComment[]; total: number }>(
          `/issue/${issue_key}/comment`,
          {
            params: {
              maxResults: max_results,
              startAt: start_at,
            },
          }
        );

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  issue_key,
                  total: response.data.total,
                  returned: response.data.comments.length,
                  comments: response.data.comments,
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
              text: `Failed to get comments: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Update Comment
  server.tool(
    'update_comment',
    updateCommentSchema.shape,
    async (args) => {
      try {
        const payload = {
          body: {
            type: 'doc',
            version: 1,
            content: [
              {
                type: 'paragraph',
                content: [{ type: 'text', text: args.body }],
              },
            ],
          },
        };

        await client.put(
          `/issue/${args.issue_key}/comment/${args.comment_id}`,
          payload
        );

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  success: true,
                  message: `Comment ${args.comment_id} updated successfully`,
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
              text: `Failed to update comment: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Delete Comment
  server.tool(
    'delete_comment',
    {
      issue_key: issueKeySchema,
      comment_id: z.string().min(1),
    },
    async ({ issue_key, comment_id }) => {
      try {
        await client.delete(`/issue/${issue_key}/comment/${comment_id}`);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  success: true,
                  message: `Comment ${comment_id} deleted successfully`,
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
              text: `Failed to delete comment: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );
}

// Made with Bob
