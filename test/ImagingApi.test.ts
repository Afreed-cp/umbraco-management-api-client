import { ImagingApi } from '../apis/ImagingApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new ImagingApi(config);
  try {
    const result = await api.getImagingResizeUrls({ width: 800, height: 600 });
    console.log('ImagingApi.getImagingResizeUrls result:', result);
  } catch (error) {
    console.error('ImagingApi.getImagingResizeUrls error:', error);
  }
})();
