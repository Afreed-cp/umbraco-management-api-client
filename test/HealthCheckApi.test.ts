import { HealthCheckApi } from '../apis/HealthCheckApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new HealthCheckApi(config);
  try {
    const result = await api.getHealthCheckGroup({ skip: 0, take: 10 });
    console.log('HealthCheckApi.getHealthCheckGroup result:', result.items);
  } catch (error) {
    console.error('HealthCheckApi.getHealthCheckGroup error:', error);
  }
})();
