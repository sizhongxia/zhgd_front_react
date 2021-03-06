import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'geographic', ...(require('D:/react/git/zhgd_front_react/src/models/geographic.js').default) });
app.model({ namespace: 'global', ...(require('D:/react/git/zhgd_front_react/src/models/global.js').default) });
app.model({ namespace: 'setting', ...(require('D:/react/git/zhgd_front_react/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('D:/react/git/zhgd_front_react/src/models/user.js').default) });
app.model({ namespace: 'login', ...(require('D:/react/git/zhgd_front_react/src/pages/Login/models/login.js').default) });
app.model({ namespace: 'constructionAccount', ...(require('D:/react/git/zhgd_front_react/src/pages/Admin/models/constructionAccount.js').default) });
app.model({ namespace: 'fiveEnter', ...(require('D:/react/git/zhgd_front_react/src/pages/Admin/models/fiveEnter.js').default) });
app.model({ namespace: 'towerCrane', ...(require('D:/react/git/zhgd_front_react/src/pages/MonitorDevice/models/towerCrane.js').default) });
