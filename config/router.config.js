export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user/login', component: './Login/Login' },
    ],
  },
  // admin
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/home' },
      // home
      {
        path: '/home',
        name: 'home',
        icon: 'check-circle-o',
        component: './Admin/Home',
      },
      // 工地账号
      {
        path: '/constructionAccount',
        name: 'constructionAccount',//工地账号
        icon: 'check-circle-o',
        component: './Admin/ConstructionAccount',
      },
      // 设备监控
      {
        path: '/deviceMonitor',
        name: 'deviceMonitor',
        icon: 'check-circle-o',
        routes: [
          { path: '/deviceMonitor', redirect: '/deviceMonitor/towerCrane' },
          {
            path: '/deviceMonitor/towerCrane',
            name: 'towerCrane',//塔机
            component: './MonitorDevice/TowerCrane',
          },
          {
            path: '/deviceMonitor/elevator',
            name: 'elevator',//升降机
            component: './Admin/Empty',
          },
          {
            path: '/deviceMonitor/unloadingPlatform',
            name: 'unloadingPlatform',//卸料平台
            component: './Admin/Empty',
          },
          {
            path: '/deviceMonitor/dustNoise',
            name: 'dustNoise',//扬尘噪音
            component: './Admin/Empty',
          },
          {
            path: '/deviceMonitor/fogGun',
            name: 'fogGun',//雾炮喷淋
            component: './Admin/Empty',
          },
          {
            path: '/deviceMonitor/video',
            name: 'video',//视频
            component: './Admin/Empty',
          },
          {
            path: '/deviceMonitor/smoke',
            name: 'smoke',//烟感
            component: './Admin/Empty',
            hideInMenu: true
          },
          {
            path: '/deviceMonitor/energy',
            name: 'energy',//能源
            component: './Admin/Empty',
            hideInMenu: true
          },
          {
            path: '/deviceMonitor/personPosition',
            name: 'personPosition',//人员定位
            component: './Admin/Empty',
          },
          {
            path: '/deviceMonitor/infraredRadiation',
            name: 'infraredRadiation',//红外对射
            component: './Admin/Empty',
            hideInMenu: true
          },
          {
            path: '/deviceMonitor/gasDetection',
            name: 'gasDetection',//气体检测
            component: './Admin/Empty',
            hideInMenu: true
          },
          {
            path: '/deviceMonitor/iris',
            name: 'iris',//虹膜一体机
            component: './Admin/Empty',
            hideInMenu: true
          },
          {
            path: '/deviceMonitor/electricity',
            name: 'electricity',//强电检测
            component: './Admin/Empty',
            hideInMenu: true
          },
          {
            path: '/deviceMonitor/electric',
            name: 'electric',//电表
            component: './Admin/Empty',
            hideInMenu: true
          }
        ],
      },
      // 企业信息
      {
        path: '/company',
        name: 'company',
        icon: 'check-circle-o',
        routes: [
          { path: '/company', redirect: '/company/fiveEnter' },
          {
            path: '/company/fiveEnter',
            name: 'fiveEnter',//五方单位
            component: './Admin/FiveEnter',
          },
        ],
      },
      // 权限管理
      {
        path: '/jurisdiction',
        name: 'jurisdiction',
        icon: 'check-circle-o',
        hideInMenu: true,
        routes: [
          { path: '/jurisdiction', redirect: '/jurisdiction/member' },
          {
            path: '/jurisdiction/member',
            name: 'member',
            component: './Admin/Empty',
          },
        ],
      },
      // 系统管理
      {
        path: '/system',
        name: 'system',
        icon: 'check-circle-o',
        routes: [
          { path: '/system', redirect: '/system/logs' },
          {
            path: '/system/logs',
            name: 'logs',
            component: './Admin/Empty',
          }
        ],
      },
    ],
  },
];
