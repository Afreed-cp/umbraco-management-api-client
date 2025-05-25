import { InstallApi } from '../apis/InstallApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new InstallApi(config);
  try {
    const result = await api.getInstallSettings();
    console.log('InstallApi.getInstallSettings result:', result);
  } catch (error) {
    console.error('InstallApi.getInstallSettings error:', error);
  }
})();
