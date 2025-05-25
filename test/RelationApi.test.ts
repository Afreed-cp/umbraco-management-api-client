import { RelationApi } from '../apis/RelationApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new RelationApi(config);
  try {
    const result = await api.getRelationByRelationTypeId({
      id: "test-relation-type-id",
      skip: 0,
      take: 10
    });
    console.log('RelationApi.getRelationByRelationTypeId result:', result);
  } catch (error) {
    console.error('RelationApi.getRelationByRelationTypeId error:', error);
  }
})();
