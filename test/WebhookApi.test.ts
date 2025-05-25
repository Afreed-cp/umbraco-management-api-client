import { WebhookApi } from '../apis/WebhookApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new WebhookApi(config);
  try {
    const result = await api.getWebhook({ skip: 0, take: 10 });
    console.log('WebhookApi.getWebhook result:', result.items);
  } catch (error) {
    console.error('WebhookApi.getWebhook error:', error);
  }
})();
