import { DocumentBlueprintApi } from '../apis/DocumentBlueprintApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new DocumentBlueprintApi(config);
  try {
    const result = await api.getTreeDocumentBlueprintRoot({ skip: 0, take: 10 });
    console.log('DocumentBlueprintApi.getTreeDocumentBlueprintRoot result:', result);
  } catch (error) {
    console.error('DocumentBlueprintApi.getTreeDocumentBlueprintRoot error:', error);
  }
})();
