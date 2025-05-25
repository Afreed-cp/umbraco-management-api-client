import { Configuration } from '../runtime';
import fetch from 'node-fetch';
import https from 'https';

// Disable SSL verification for development
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const host = 'https://localhost:44372'; // Change to your host

class ApiClient {
  private token: string | null = null;
  private tokenExpiryTime: Date | null = null;

  async getToken(): Promise<string> {
    if (this.token && this.tokenExpiryTime && new Date() < this.tokenExpiryTime) {
      return this.token!;
    }
    const response = await fetch(`${host}/umbraco/management/api/v1/security/back-office/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'client_id': 'umbraco-back-office-testkey',
        'client_secret': 'wKtd*gyIa!oHOw#ZqPwzwMCIqe2*1NG$L',
        'grant_type': 'client_credentials'
      }).toString()
    });
    if (!response.ok) {
      throw new Error('Failed to obtain token');
    }
    const data = await response.json();
    if (!data.access_token) {
      throw new Error('No access token in response');
    }
    this.token = data.access_token;
    this.tokenExpiryTime = new Date(new Date().getTime() + data.expires_in * 1000);
    return this.token!;
  }
}

export async function getConfig() {
  const apiClient = new ApiClient();
  return new Configuration({
    basePath: host,
    accessToken: async () => `Bearer ${await apiClient.getToken()}`,
    fetchApi: fetch as any
  });
}
