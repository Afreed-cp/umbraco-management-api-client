import { HelpApi } from '../apis/HelpApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new HelpApi(config);
  try {
    const result = await api.getHelp({ skip: 0, take: 10 });
    console.log('HelpApi.getHelp result:', result);
  } catch (error) {
    console.error('HelpApi.getHelp error:', error);
  }
})();
