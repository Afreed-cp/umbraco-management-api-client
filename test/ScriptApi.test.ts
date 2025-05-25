import { ScriptApi } from '../apis/ScriptApi';
import { getConfig } from './testConfig';

(async () => {
  const config = await getConfig();
  const api = new ScriptApi(config);
  try {
    const result = await api.getTreeScriptRoot({ skip: 0, take: 10 });
    console.log('ScriptApi.getTreeScriptRoot result:', result.items);
  } catch (error) {
    console.error('ScriptApi.getTreeScriptRoot error:', error);
  }
})();
