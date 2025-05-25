import { DocumentVersionApi } from '../apis/DocumentVersionApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new DocumentVersionApi(config);
  try {
    const result = await api.getDocumentVersion({ documentId: '1234', skip: 0, take: 10 });
    console.log('DocumentVersionApi.getDocumentVersion result:', result);
  } catch (error) {
    console.error('DocumentVersionApi.getDocumentVersion error:', error);
  }
})();
