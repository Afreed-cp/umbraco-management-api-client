import { PublishedCacheApi } from '../apis/PublishedCacheApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new PublishedCacheApi(config);
  try {
    const result = await api.getPublishedCacheRebuildStatus();
    console.log('PublishedCacheApi.getPublishedCacheRebuildStatus result:', result);
  } catch (error) {
    console.error('PublishedCacheApi.getPublishedCacheRebuildStatus error:', error);
  }
})();
