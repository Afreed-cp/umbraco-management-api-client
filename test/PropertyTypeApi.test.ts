import { PropertyTypeApi } from '../apis/PropertyTypeApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new PropertyTypeApi(config);
  try {
    const result = await api.getPropertyTypeIsUsed({ contentTypeId: 'test-content-type', propertyAlias: 'test-alias' });
    console.log('PropertyTypeApi.getPropertyTypeIsUsed result:', result);
  } catch (error) {
    console.error('PropertyTypeApi.getPropertyTypeIsUsed error:', error);
  }
})();
