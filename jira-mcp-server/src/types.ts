// Core Jira types
export interface JiraUser {
  accountId: string;
  displayName: string;
  emailAddress?: string;
  active: boolean;
  avatarUrls?: {
    '48x48': string;
    '24x24': string;
    '16x16': string;
    '32x32': string;
  };
}

export interface JiraProject {
  id: string;
  key: string;
  name: string;
  projectTypeKey: string;
  description?: string;
  lead?: JiraUser;
  avatarUrls?: Record<string, string>;
}

export interface JiraIssueType {
  id: string;
  name: string;
  description: string;
  subtask: boolean;
  iconUrl: string;
}

export interface JiraStatus {
  id: string;
  name: string;
  statusCategory: {
    id: number;
    key: string;
    name: string;
    colorName: string;
  };
}

export interface JiraPriority {
  id: string;
  name: string;
  iconUrl: string;
}

export interface JiraComponent {
  id: string;
  name: string;
  description?: string;
}

export interface JiraComment {
  id: string;
  author: JiraUser;
  body: any;
  created: string;
  updated: string;
}

export interface JiraAttachment {
  id: string;
  filename: string;
  author: JiraUser;
  created: string;
  size: number;
  mimeType: string;
  content: string;
}

export interface JiraIssueFields {
  summary: string;
  description?: any;
  issuetype: JiraIssueType;
  project: JiraProject;
  status: JiraStatus;
  priority?: JiraPriority;
  assignee?: JiraUser;
  reporter: JiraUser;
  created: string;
  updated: string;
  labels: string[];
  components: JiraComponent[];
  comment?: {
    comments: JiraComment[];
    total: number;
  };
  attachment?: JiraAttachment[];
  [key: string]: any; // For custom fields
}

export interface JiraIssue {
  id: string;
  key: string;
  self: string;
  fields: JiraIssueFields;
}

export interface JiraTransition {
  id: string;
  name: string;
  to: JiraStatus;
  hasScreen: boolean;
}

export interface JiraSprint {
  id: number;
  name: string;
  state: 'future' | 'active' | 'closed';
  startDate?: string;
  endDate?: string;
  completeDate?: string;
  goal?: string;
  originBoardId: number;
}

export interface JiraSearchResult {
  issues: JiraIssue[];
  total: number;
  startAt: number;
  maxResults: number;
}

export interface JiraCustomField {
  id: string;
  name: string;
  description?: string;
  type: string;
  searcherKey: string;
}

// API Error types
export interface JiraErrorResponse {
  errorMessages?: string[];
  errors?: Record<string, string>;
}

// Made with Bob
