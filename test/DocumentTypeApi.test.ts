import { DocumentTypeApi } from '../apis/DocumentTypeApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new DocumentTypeApi(config);
  try {
    const result = await api.getItemDocumentType();
    console.log('DocumentTypeApi.getItemDocumentType result:', result);
  } catch (error) {
    console.error('DocumentTypeApi.getItemDocumentType error:', error);
  }
})();
