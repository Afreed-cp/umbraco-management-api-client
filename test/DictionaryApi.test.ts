import { DictionaryApi } from '../apis/DictionaryApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new DictionaryApi(config);
  try {
    const result = await api.getDictionary({ skip: 0, take: 10 });
    console.log('DictionaryApi.getDictionary result:', result);
  } catch (error) {
    console.error('DictionaryApi.getDictionary error:', error);
  }
})();
