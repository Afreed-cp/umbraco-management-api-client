import { TemplateApi } from '../apis/TemplateApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new TemplateApi(config);
  try {
    const result = await api.getTreeTemplateRoot({ skip: 0, take: 10 });
    console.log('TemplateApi.getTreeTemplateRoot result:', result.items);
  } catch (error) {
    console.error('TemplateApi.getTreeTemplateRoot error:', error);
  }
})();
