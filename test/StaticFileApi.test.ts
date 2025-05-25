import { StaticFileApi } from '../apis/StaticFileApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new StaticFileApi(config);
  try {
    const result = await api.getTreeStaticFileRoot({ skip: 0, take: 10 });
    console.log('StaticFileApi.getTreeStaticFileRoot result:', result.items);
  } catch (error) {
    console.error('StaticFileApi.getTreeStaticFileRoot error:', error);
  }
})();
