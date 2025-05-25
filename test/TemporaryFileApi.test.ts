import { TemporaryFileApi } from '../apis/TemporaryFileApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new TemporaryFileApi(config);
  try {
    const result = await api.getTemporaryFileConfiguration();
    console.log('TemporaryFileApi.getTemporaryFileConfiguration result:', result);
  } catch (error) {
    console.error('TemporaryFileApi.getTemporaryFileConfiguration error:', error);
  }
})();
