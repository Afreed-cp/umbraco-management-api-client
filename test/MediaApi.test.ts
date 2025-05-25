import { MediaApi } from '../apis/MediaApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new MediaApi(config);
  try {
    const result = await api.getItemMediaSearch({ skip: 0, take: 10 });
    console.log('MediaApi.getItemMediaSearch result:', result);
  } catch (error) {
    console.error('MediaApi.getItemMediaSearch error:', error);
  }
})();
