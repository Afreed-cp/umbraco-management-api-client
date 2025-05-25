import { ServerApi } from '../apis/ServerApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new ServerApi(config);
  try {
    const result = await api.getServerStatus();
    console.log('ServerApi.getServerStatus result:', result);
  } catch (error) {
    console.error('ServerApi.getServerStatus error:', error);
  }
})();
