import { SegmentApi } from '../apis/SegmentApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new SegmentApi(config);
  try {    const result = await api.getSegment({});
    console.log('SegmentApi.getSegment result:', result);
  } catch (error) {
    console.error('SegmentApi.getSegment error:', error);
  }
})();
