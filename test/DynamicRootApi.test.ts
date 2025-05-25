import { DynamicRootApi } from '../apis/DynamicRootApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new DynamicRootApi(config);
  try {
    const result = await api.getDynamicRootSteps();
    console.log('DynamicRootApi.getDynamicRootSteps result:', result);
  } catch (error) {
    console.error('DynamicRootApi.getDynamicRootSteps error:', error);
  }
})();
