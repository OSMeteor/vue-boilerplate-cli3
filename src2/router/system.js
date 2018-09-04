export default [{
    path: '/404',
    component: () =>
      import('@/pages/system/404.vue'),
    // component(resolve) {
    //   require.ensure([], function (require) {
    //     resolve(require('../pages/system/404.vue'));
    //   }, 'modules/status')
    // }
  },
  {
    path: '/500',
     component: () =>
       import('@/pages/system/500.vue'),
    // component(resolve) {
    //   require.ensure([], function (require) {
    //     resolve(require('../pages/system/500.vue'));
    //   }, 'modules/status')
    // }
  },
  {
    path: '*',
    redirect: '/404'
  }
];
