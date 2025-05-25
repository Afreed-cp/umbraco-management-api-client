import { ImportApi } from '../apis/ImportApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new ImportApi(config);
  try {
    const result = await api.getImportAnalyze({ temporaryFileId: 'temp-123' });
    console.log('ImportApi.getImportAnalyze result:', result);
  } catch (error) {
    console.error('ImportApi.getImportAnalyze error:', error);
  }
})();
