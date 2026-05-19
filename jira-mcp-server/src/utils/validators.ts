import { z } from 'zod';

// Common validators
export const issueKeySchema = z.string().regex(
  /^[A-Z][A-Z0-9]+-\d+$/,
  'Invalid issue key format (expected: PROJ-123)'
);

export const projectKeySchema = z.string().regex(
  /^[A-Z][A-Z0-9]{1,9}$/,
  'Invalid project key (2-10 uppercase letters/numbers)'
);

export const jqlSchema = z.string().min(1, 'JQL query cannot be empty');

export const accountIdSchema = z.string().min(1, 'Account ID cannot be empty');

export const dateSchema = z.string().datetime({
  message: 'Invalid date format (expected ISO 8601)',
});

// Issue creation schema
export const createIssueSchema = z.object({
  project_key: projectKeySchema,
  summary: z.string().min(1).max(255),
  issue_type: z.string().min(1),
  description: z.string().optional(),
  priority: z.string().optional(),
  assignee: accountIdSchema.optional(),
  labels: z.array(z.string()).optional(),
  components: z.array(z.string()).optional(),
  custom_fields: z.record(z.any()).optional(),
});

// Issue update schema
export const updateIssueSchema = z.object({
  issue_key: issueKeySchema,
  summary: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  priority: z.string().optional(),
  assignee: accountIdSchema.optional(),
  labels: z.array(z.string()).optional(),
  custom_fields: z.record(z.any()).optional(),
});

// Search schema
export const searchIssuesSchema = z.object({
  jql: jqlSchema,
  max_results: z.number().min(1).max(100).optional().default(50),
  start_at: z.number().min(0).optional().default(0),
  fields: z.array(z.string()).optional(),
});

// Transition schema
export const transitionIssueSchema = z.object({
  issue_key: issueKeySchema,
  transition_id: z.string().min(1),
  comment: z.string().optional(),
});

// Comment schema
export const addCommentSchema = z.object({
  issue_key: issueKeySchema,
  body: z.string().min(1),
});

export const updateCommentSchema = z.object({
  issue_key: issueKeySchema,
  comment_id: z.string().min(1),
  body: z.string().min(1),
});

// Project schemas
export const createProjectSchema = z.object({
  key: projectKeySchema,
  name: z.string().min(1),
  project_type: z.enum(['software', 'business', 'service_desk']),
  lead_account_id: accountIdSchema,
  description: z.string().optional(),
});

export const updateProjectSchema = z.object({
  project_key: projectKeySchema,
  name: z.string().min(1).optional(),
  description: z.string().optional(),
  lead_account_id: accountIdSchema.optional(),
});

// Sprint schema
export const createSprintSchema = z.object({
  board_id: z.number().positive(),
  name: z.string().min(1),
  start_date: dateSchema.optional(),
  end_date: dateSchema.optional(),
  goal: z.string().optional(),
});

export const updateSprintSchema = z.object({
  sprint_id: z.number().positive(),
  name: z.string().min(1).optional(),
  start_date: dateSchema.optional(),
  end_date: dateSchema.optional(),
  goal: z.string().optional(),
  state: z.enum(['future', 'active', 'closed']).optional(),
});

// User schema
export const searchUsersSchema = z.object({
  query: z.string().min(1),
  max_results: z.number().min(1).max(100).optional().default(50),
});

// Epic schema
export const createEpicSchema = z.object({
  project_key: projectKeySchema,
  summary: z.string().min(1).max(255),
  description: z.string().optional(),
});

export const linkIssueToEpicSchema = z.object({
  issue_key: issueKeySchema,
  epic_key: issueKeySchema,
});

// Made with Bob
