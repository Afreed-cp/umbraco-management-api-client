import { LogViewerApi } from '../apis/LogViewerApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new LogViewerApi(config);
  try {
    const result = await api.getLogViewerLevel({ skip: 0, take: 10 });
    console.log('LogViewerApi.getLogViewerLevel result:', result);
  } catch (error) {
    console.error('LogViewerApi.getLogViewerLevel error:', error);
  }
})();
