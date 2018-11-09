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

app.model({ namespace: 'geographic', ...(require('D:/react/antpro/mypro/src/models/geographic.js').default) });
app.model({ namespace: 'global', ...(require('D:/react/antpro/mypro/src/models/global.js').default) });
app.model({ namespace: 'setting', ...(require('D:/react/antpro/mypro/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('D:/react/antpro/mypro/src/models/user.js').default) });
app.model({ namespace: 'login', ...(require('D:/react/antpro/mypro/src/pages/Login/models/login.js').default) });
app.model({ namespace: 'constructionAccount', ...(require('D:/react/antpro/mypro/src/pages/Admin/models/constructionAccount.js').default) });
app.model({ namespace: 'fiveEnter', ...(require('D:/react/antpro/mypro/src/pages/Admin/models/fiveEnter.js').default) });
