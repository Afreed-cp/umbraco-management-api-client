import { SearcherApi } from '../apis/SearcherApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new SearcherApi(config);
  try {
    const result = await api.getSearcher({ skip: 0, take: 10 });
    console.log('SearcherApi.getSearcher result:', result.items);
  } catch (error) {
    console.error('SearcherApi.getSearcher error:', error);
  }
})();
