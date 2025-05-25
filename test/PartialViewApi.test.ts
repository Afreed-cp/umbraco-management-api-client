import { PartialViewApi } from '../apis/PartialViewApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new PartialViewApi(config);
  try {
    const result = await api.getTreePartialViewRoot({ skip: 0, take: 10 });
    console.log('PartialViewApi.getTreePartialViewRoot result:', result.items);
  } catch (error) {
    console.error('PartialViewApi.getTreePartialViewRoot error:', error);
  }
})();
