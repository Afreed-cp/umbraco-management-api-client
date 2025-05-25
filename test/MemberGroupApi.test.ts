import { MemberGroupApi } from '../apis/MemberGroupApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new MemberGroupApi(config);
  try {
    const result = await api.getMemberGroup({ skip: 0, take: 10 });
    console.log('MemberGroupApi.getMemberGroup result:', result.items);
  } catch (error) {
    console.error('MemberGroupApi.getMemberGroup error:', error);
  }
})();
