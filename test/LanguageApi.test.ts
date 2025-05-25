import { LanguageApi } from '../apis/LanguageApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new LanguageApi(config);
  try {
    const result = await api.getLanguage({ skip: 0, take: 1 });
    console.log('LanguageApi.getLanguage result:', result.items);
  } catch (error) {
    console.error('LanguageApi.getLanguage error:', error);
  }
})();
