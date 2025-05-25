import { ObjectTypesApi } from '../apis/ObjectTypesApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new ObjectTypesApi(config);
  try {
    const result = await api.getObjectTypes({ skip: 0, take: 10 });
    console.log('ObjectTypesApi.getObjectTypes result:', result.items);
  } catch (error) {
    console.error('ObjectTypesApi.getObjectTypes error:', error);
  }
})();
