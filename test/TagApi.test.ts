import { TagApi } from '../apis/TagApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new TagApi(config);
  try {
    const result = await api.getTag({ skip: 0, take: 10 });
    console.log('TagApi.getTag result:', result.items);
  } catch (error) {
    console.error('TagApi.getTag error:', error);
  }
})();
