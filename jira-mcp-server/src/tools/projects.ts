import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { JiraClient } from '../jira-client.js';
import {
  createProjectSchema,
  updateProjectSchema,
  projectKeySchema,
} from '../utils/validators.js';
import { handleJiraError } from '../utils/error-handler.js';
import { JiraProject } from '../types.js';
import { z } from 'zod';

export function registerProjectTools(server: McpServer, jiraClient: JiraClient) {
  const client = jiraClient.getClient();

  // List Projects
  server.tool(
    'list_projects',
    {
      max_results: z.number().min(1).max(100).optional().default(50),
      start_at: z.number().min(0).optional().default(0),
    },
    async ({ max_results, start_at }) => {
      try {
        const response = await client.get<JiraProject[]>('/project/search', {
          params: {
            maxResults: max_results,
            startAt: start_at,
          },
        });

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  total: response.data.length,
                  projects: response.data,
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
              text: `Failed to list projects: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Get Project
  server.tool(
    'get_project',
    { project_key: projectKeySchema },
    async ({ project_key }) => {
      try {
        const response = await client.get<JiraProject>(`/project/${project_key}`);

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
              text: `Failed to get project: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Create Project
  server.tool(
    'create_project',
    createProjectSchema.shape,
    async (args) => {
      try {
        const payload = {
          key: args.key,
          name: args.name,
          projectTypeKey: args.project_type,
          leadAccountId: args.lead_account_id,
          description: args.description,
        };

        const response = await client.post<JiraProject>('/project', payload);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  success: true,
                  project_key: response.data.key,
                  project_id: response.data.id,
                  message: `Project ${response.data.key} created successfully`,
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
              text: `Failed to create project: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Update Project
  server.tool(
    'update_project',
    updateProjectSchema.shape,
    async (args) => {
      try {
        const payload: any = {};

        if (args.name) {
          payload.name = args.name;
        }

        if (args.description !== undefined) {
          payload.description = args.description;
        }

        if (args.lead_account_id) {
          payload.leadAccountId = args.lead_account_id;
        }

        await client.put(`/project/${args.project_key}`, payload);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  success: true,
                  message: `Project ${args.project_key} updated successfully`,
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
              text: `Failed to update project: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Delete Project
  server.tool(
    'delete_project',
    { project_key: projectKeySchema },
    async ({ project_key }) => {
      try {
        await client.delete(`/project/${project_key}`);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  success: true,
                  message: `Project ${project_key} deleted successfully`,
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
              text: `Failed to delete project: ${handleJiraError(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );
}

// Made with Bob
