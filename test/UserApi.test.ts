import { UserApi } from '../apis/UserApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new UserApi(config);
  try {
    // This is a generic test; you may need to provide a valid id for real data
    const result = await api.getUser({ skip: 0, take: 1 });
    console.log('UserApi.getUser result:', result.items);
  } catch (error) {
    console.error('UserApi.getUser error:', error);
  }
})();
