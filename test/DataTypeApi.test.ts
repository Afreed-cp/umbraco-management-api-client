import { DataTypeApi } from '../apis/DataTypeApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new DataTypeApi(config);
  try {
    const result = await api.getFilterDataType({ skip: 0, take: 1 });
    console.log('DataTypeApi.getFilterDataType result:', result.items);
  } catch (error) {
    console.error('DataTypeApi.getFilterDataType error:', error);
  }
})();
