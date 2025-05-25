import { ManifestApi } from '../apis/ManifestApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new ManifestApi(config);
  try {
    const result = await api.getManifestManifest();
    console.log('ManifestApi.getManifestManifest result:', result);
  } catch (error) {
    console.error('ManifestApi.getManifestManifest error:', error);
  }
})();
