import { RelationTypeApi } from '../apis/RelationTypeApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new RelationTypeApi(config);
  try {
    const result = await api.getRelationType({ skip: 0, take: 10 });
    console.log('RelationTypeApi.getRelationType result:', result.items);
  } catch (error) {
    console.error('RelationTypeApi.getRelationType error:', error);
  }
})();
