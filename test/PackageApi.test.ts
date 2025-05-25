import { PackageApi } from '../apis/PackageApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new PackageApi(config);
  try {
    const result = await api.getPackageCreated({ skip: 0, take: 10 });
    console.log('PackageApi.getPackageCreated result:', result.items);
  } catch (error) {
    console.error('PackageApi.getPackageCreated error:', error);
  }
})();
