import { ProfilingApi } from '../apis/ProfilingApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new ProfilingApi(config);
  try {
    const result = await api.getProfilingStatus();
    console.log('ProfilingApi.getProfilingStatus result:', result);
  } catch (error) {
    console.error('ProfilingApi.getProfilingStatus error:', error);
  }
})();
