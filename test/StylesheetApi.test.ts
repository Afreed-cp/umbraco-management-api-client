import { StylesheetApi } from '../apis/StylesheetApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new StylesheetApi(config);
  try {
    const result = await api.getTreeStylesheetRoot({ skip: 0, take: 10 });
    console.log('StylesheetApi.getTreeStylesheetRoot result:', result.items);
  } catch (error) {
    console.error('StylesheetApi.getTreeStylesheetRoot error:', error);
  }
})();
