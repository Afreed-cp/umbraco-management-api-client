import { Configuration } from './runtime';
import { LanguageApi } from './apis/LanguageApi';

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
      })
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

async function main() {
  const apiClient = new ApiClient();

  // Pass the token provider as accessToken
  const config = new Configuration({
    basePath: host,
    accessToken: async () => `Bearer ${await apiClient.getToken()}`
  });

  const languageApi = new LanguageApi(config);

  try {
    // Use the generated method to fetch languages
    const result = await languageApi.getLanguage({ skip: 0, take: 100 });
    console.log('Languages:', result.items);
  } catch (error) {
    console.error('API Error:', error);
  }
}

main();
