import { UpgradeApi } from '../apis/UpgradeApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new UpgradeApi(config);
  try {
    const result = await api.getUpgradeSettings();
    console.log('UpgradeApi.getUpgradeSettings result:', result);
  } catch (error) {
    console.error('UpgradeApi.getUpgradeSettings error:', error);
  }
})();
