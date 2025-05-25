import { SecurityApi } from '../apis/SecurityApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new SecurityApi(config);
  try {
    const result = await api.getSecurityConfiguration();
    console.log('SecurityApi.getSecurityConfiguration result:', result);
  } catch (error) {
    console.error('SecurityApi.getSecurityConfiguration error:', error);
  }
})();
