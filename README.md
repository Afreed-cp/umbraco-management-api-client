# Umbraco Management API Client

A TypeScript client for the Umbraco Management API, auto-generated using OpenAPI Generator.

## Installation

```bash
npm install @umbraco/management-api-client
```

## Usage

```typescript
import { LanguageApi } from "@umbraco/management-api-client";

// Initialize the API with your configuration
const config = {
  basePath: "https://your-umbraco-site.com",
  accessToken: "your-access-token",
};

// Create an instance of the API
const api = new LanguageApi(config);

// Use the API
try {
  const languages = await api.getLanguage({ skip: 0, take: 10 });
  console.log("Languages:", languages);
} catch (error) {
  console.error("Error:", error);
}
```

## Initialize API Client
```typescript
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

```
## Available APIs

The client includes TypeScript classes for all Umbraco Management API endpoints:

- ContentApi
- DataTypeApi
- DictionaryApi
- DocumentBlueprintApi
- LanguageApi
- MediaApi
- MemberApi
- UserApi
- And many more...

Each API class provides strongly-typed methods for interacting with the corresponding Umbraco endpoints.

## Configuration

The client can be configured with the following options:

```typescript
{
  basePath: string;          // The base URL of your Umbraco installation
  accessToken?: string;      // OAuth access token for authentication
  username?: string;         // Basic auth username
  password?: string;         // Basic auth password
  apiKey?: string;          // API key for authentication
  headers?: object;         // Additional headers to include in requests
}
```

## Error Handling

All API methods return promises that may reject with detailed error information:

```typescript
try {
  await api.someMethod();
} catch (error) {
  if (error.status === 401) {
    console.error("Authentication failed");
  } else if (error.status === 404) {
    console.error("Resource not found");
  } else {
    console.error("An error occurred:", error);
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
