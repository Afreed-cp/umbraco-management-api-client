import { MemberApi } from '../apis/MemberApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new MemberApi(config);
  try {
    const result = await api.getFilterMember({ skip: 0, take: 10 });
    console.log('MemberApi.getFilterMember result:', result.items);
  } catch (error) {
    console.error('MemberApi.getFilterMember error:', error);
  }
})();
