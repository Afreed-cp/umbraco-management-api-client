import { IndexerApi } from '../apis/IndexerApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new IndexerApi(config);
  try {
    const result = await api.getIndexer({ skip: 0, take: 10 });
    console.log('IndexerApi.getIndexer result:', result);
  } catch (error) {
    console.error('IndexerApi.getIndexer error:', error);
  }
})();
