import { RedirectManagementApi } from '../apis/RedirectManagementApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new RedirectManagementApi(config);
  try {
    const result = await api.getRedirectManagement({ skip: 0, take: 10 });
    console.log('RedirectManagementApi.getRedirectManagement result:', result.items);
  } catch (error) {
    console.error('RedirectManagementApi.getRedirectManagement error:', error);
  }
})();
