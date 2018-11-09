import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from 'D:/react/antpro/mypro/src/pages/.umi/LocaleWrapper.jsx'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import('../../layouts/UserLayout'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
    "routes": [
      {
        "path": "/user/login",
        "component": dynamic({ loader: () => import('../Login/Login'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('D:/react/antpro/mypro/node_modules/_umi-build-dev@1.2.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import('../../layouts/BasicLayout'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
    "routes": [
      {
        "path": "/",
        "redirect": "/home",
        "exact": true
      },
      {
        "path": "/home",
        "name": "home",
        "icon": "check-circle-o",
        "component": dynamic({ loader: () => import('../Admin/Home'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "path": "/constructionAccount",
        "name": "constructionAccount",
        "icon": "check-circle-o",
        "component": dynamic({ loader: () => import('../Admin/ConstructionAccount'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "path": "/deviceMonitor",
        "name": "deviceMonitor",
        "icon": "check-circle-o",
        "routes": [
          {
            "path": "/deviceMonitor",
            "redirect": "/deviceMonitor/towerCrane",
            "exact": true
          },
          {
            "path": "/deviceMonitor/towerCrane",
            "name": "towerCrane",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/deviceMonitor/elevator",
            "name": "elevator",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/deviceMonitor/unloadingPlatform",
            "name": "unloadingPlatform",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/deviceMonitor/dustNoise",
            "name": "dustNoise",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/deviceMonitor/fogGun",
            "name": "fogGun",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/deviceMonitor/video",
            "name": "video",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/deviceMonitor/smoke",
            "name": "smoke",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/deviceMonitor/energy",
            "name": "energy",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/deviceMonitor/personPosition",
            "name": "personPosition",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/deviceMonitor/infraredRadiation",
            "name": "infraredRadiation",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/deviceMonitor/gasDetection",
            "name": "gasDetection",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/deviceMonitor/iris",
            "name": "iris",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/deviceMonitor/electricity",
            "name": "electricity",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/deviceMonitor/electric",
            "name": "electric",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "hideInMenu": true,
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/react/antpro/mypro/node_modules/_umi-build-dev@1.2.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/company",
        "name": "company",
        "icon": "check-circle-o",
        "routes": [
          {
            "path": "/company",
            "redirect": "/company/fiveEnter",
            "exact": true
          },
          {
            "path": "/company/fiveEnter",
            "name": "fiveEnter",
            "component": dynamic({ loader: () => import('../Admin/FiveEnter'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/react/antpro/mypro/node_modules/_umi-build-dev@1.2.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/jurisdiction",
        "name": "jurisdiction",
        "icon": "check-circle-o",
        "hideInMenu": true,
        "routes": [
          {
            "path": "/jurisdiction",
            "redirect": "/jurisdiction/member",
            "exact": true
          },
          {
            "path": "/jurisdiction/member",
            "name": "member",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/react/antpro/mypro/node_modules/_umi-build-dev@1.2.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/system",
        "name": "system",
        "icon": "check-circle-o",
        "routes": [
          {
            "path": "/system",
            "redirect": "/system/logs",
            "exact": true
          },
          {
            "path": "/system/logs",
            "name": "logs",
            "component": dynamic({ loader: () => import('../Admin/Empty'), loading: require('D:/react/antpro/mypro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/react/antpro/mypro/node_modules/_umi-build-dev@1.2.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('D:/react/antpro/mypro/node_modules/_umi-build-dev@1.2.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('D:/react/antpro/mypro/node_modules/_umi-build-dev@1.2.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
