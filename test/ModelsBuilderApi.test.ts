import { ModelsBuilderApi } from '../apis/ModelsBuilderApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new ModelsBuilderApi(config);
  try {
    const result = await api.getModelsBuilderDashboard();
    console.log('ModelsBuilderApi.getModelsBuilderDashboard result:', result);
  } catch (error) {
    console.error('ModelsBuilderApi.getModelsBuilderDashboard error:', error);
  }
})();
