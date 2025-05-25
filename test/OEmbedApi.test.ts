import { OEmbedApi } from '../apis/OEmbedApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new OEmbedApi(config);
  try {
    const result = await api.getOembedQuery({ url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', maxWidth: 800, maxHeight: 600 });
    console.log('OEmbedApi.getOembedQuery result:', result);
  } catch (error) {
    console.error('OEmbedApi.getOembedQuery error:', error);
  }
})();
