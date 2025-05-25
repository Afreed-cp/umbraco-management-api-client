import { UserDataApi } from '../apis/UserDataApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new UserDataApi(config);
  try {
    const result = await api.getUserData();
    console.log('UserDataApi.getUserData result:', result);
  } catch (error) {
    console.error('UserDataApi.getUserData error:', error);
  }
})();
