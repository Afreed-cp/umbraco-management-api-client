import { MemberTypeApi } from '../apis/MemberTypeApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new MemberTypeApi(config);
  try {
    const result = await api.getItemMemberTypeSearch({ skip: 0, take: 10 });
    console.log('MemberTypeApi.getItemMemberTypeSearch result:', result.items);
  } catch (error) {
    console.error('MemberTypeApi.getItemMemberTypeSearch error:', error);
  }
})();
