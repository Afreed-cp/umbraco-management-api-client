import { TelemetryApi } from '../apis/TelemetryApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new TelemetryApi(config);
  try {
    const result = await api.getTelemetryLevel();
    console.log('TelemetryApi.getTelemetryLevel result:', result);
  } catch (error) {
    console.error('TelemetryApi.getTelemetryLevel error:', error);
  }
})();
