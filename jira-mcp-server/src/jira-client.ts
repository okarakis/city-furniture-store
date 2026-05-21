import axios, { AxiosInstance, AxiosError } from 'axios';
import { JiraErrorResponse } from './types.js';

export class JiraClient {
  private client: AxiosInstance;
  private host: string;

  constructor() {
    const host = process.env.JIRA_HOST;
    const email = process.env.JIRA_EMAIL;
    const apiToken = process.env.JIRA_API_TOKEN;

    if (!host || !email || !apiToken) {
      throw new Error(
        'Missing required environment variables: JIRA_HOST, JIRA_EMAIL, JIRA_API_TOKEN'
      );
    }

    this.host = host;

    // Create Basic Auth token
    const authToken = Buffer.from(`${email}:${apiToken}`).toString('base64');

    this.client = axios.create({
      baseURL: `https://${host}/rest/api/3`,
      headers: {
        'Authorization': `Basic ${authToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError<JiraErrorResponse>) => {
        return Promise.reject(this.formatError(error));
      }
    );
  }

  private formatError(error: AxiosError<JiraErrorResponse>): Error {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;

      let message = `Jira API Error (${status}): `;

      if (data?.errorMessages && data.errorMessages.length > 0) {
        message += data.errorMessages.join(', ');
      } else if (data?.errors) {
        message += Object.entries(data.errors)
          .map(([key, value]) => `${key}: ${value}`)
          .join(', ');
      } else {
        message += error.message;
      }

      return new Error(message);
    } else if (error.request) {
      return new Error(`Network error: Unable to reach Jira at ${this.host}`);
    } else {
      return new Error(`Request error: ${error.message}`);
    }
  }

  getClient(): AxiosInstance {
    return this.client;
  }

  getHost(): string {
    return this.host;
  }
}

