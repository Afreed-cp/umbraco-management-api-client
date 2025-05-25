import { MediaTypeApi } from '../apis/MediaTypeApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new MediaTypeApi(config);
  try {
    const result = await api.getItemMediaTypeSearch({ skip: 0, take: 10 });
    console.log('MediaTypeApi.getItemMediaTypeSearch result:', result);
  } catch (error) {
    console.error('MediaTypeApi.getItemMediaTypeSearch error:', error);
  }
})();
