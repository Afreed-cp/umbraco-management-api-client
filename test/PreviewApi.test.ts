import { PreviewApi } from '../apis/PreviewApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new PreviewApi(config);
  try {
    await api.postPreview();
    console.log('PreviewApi.postPreview completed successfully');
  } catch (error) {
    console.error('PreviewApi.postPreview error:', error);
  }
})();
