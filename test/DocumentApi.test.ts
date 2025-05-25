import { DocumentApi } from '../apis/DocumentApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new DocumentApi(config);
  try {
    const result = await api.getItemDocumentSearch({ skip: 0, take: 10 });
    console.log('DocumentApi.getItemDocumentSearch result:', result);
  } catch (error) {
    console.error('DocumentApi.getItemDocumentSearch error:', error);
  }
})();
