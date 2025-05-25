import { UserGroupApi } from '../apis/UserGroupApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new UserGroupApi(config);
  try {
    const result = await api.getUserGroup({ skip: 0, take: 10 });
    console.log('UserGroupApi.getUserGroup result:', result.items);
  } catch (error) {
    console.error('UserGroupApi.getUserGroup error:', error);
  }
})();
