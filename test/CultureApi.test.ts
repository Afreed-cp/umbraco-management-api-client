import { CultureApi } from '../apis/CultureApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new CultureApi(config);
  try {
    const result = await api.getCulture({ skip: 0, take: 10 });
    console.log('CultureApi.getCulture result:', result);
  } catch (error) {
    console.error('CultureApi.getCulture error:', error);
  }
})();
