import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// Layout
import Layout from '@/views/layout/index';

export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/errorPage/404')
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        meta: {
          title: '组件列表'
        },
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/demo',
    component: Layout,
    name: 'Demo',
    children: [
      {
        path: 'network',
        meta: {
          title: '当前网络状态'
        },
        name: 'network',
        component: () => import('@/views/demo/network.vue')
      },
      {
        path: 'countDown',
        meta: {
          title: '倒计时组件'
        },
        name: 'CountDown',
        component: () => import('@/views/demo/countDown.vue')
      },
      {
        path: 'sticky',
        meta: {
          title: '浮动组件'
        },
        name: 'Sticky',
        component: () => import('@/views/demo/sticky.vue')
      },
      {
        path: 'dialog',
        meta: {
          title: '弹窗'
        },
        name: 'Dialog',
        component: () => import('@/views/demo/dialog.vue')
      },
      {
        path: 'progress',
        meta: {
          title: '进度条'
        },
        name: 'Progress',
        component: () => import('@/views/demo/progress.vue')
      },
      {
        path: 'calendar',
        meta: {
          title: '日历'
        },
        name: 'Calendar',
        component: () => import('@/views/demo/calendar.vue')
      },
      {
        path: 'datetimePicker',
        meta: {
          title: '时间'
        },
        name: 'DatetimePicker',
        component: () => import('@/views/demo/datetimePicker.vue')
      },
      {
        path: 'banner',
        meta: {
          title: 'Banner'
        },
        name: 'Banner',
        component: () => import('@/views/demo/banner.vue')
      },
      {
        path: 'steps',
        meta: {
          title: '步骤条'
        },
        name: 'steps',
        component: () => import('@/views/demo/steps.vue')
      },
      {
        path: 'mock',
        meta: {
          title: 'Mock'
        },
        name: 'Mock',
        component: () => import('@/views/demo/mock.vue')
      },
      {
        path: 'chart1',
        meta: {
          title: '净值折线图（多条折线共存）'
        },
        name: 'Chart1',
        component: () => import('@/views/demo/charts/chart1.vue')
      },
      {
        path: 'chart2',
        meta: {
          title: '估值折线图（支持双边坐标，左边估值，右边涨幅）'
        },
        name: 'Chart2',
        component: () => import('@/views/demo/charts/chart2.vue')
      },
      {
        path: 'chart7',
        meta: {
          title: '分时图'
        },
        name: 'Chart7',
        component: () => import('@/views/demo/charts/chart7.vue')
      },
      {
        path: 'chart3',
        meta: {
          title: '雷达图'
        },
        name: 'Chart3',
        component: () => import('@/views/demo/charts/chart3.vue')
      },
      {
        path: 'chart4',
        meta: {
          title: '饼状图'
        },
        name: 'Chart4',
        component: () => import('@/views/demo/charts/chart4.vue')
      },
      {
        path: 'chart5',
        meta: {
          title: '柱状图'
        },
        name: 'Chart5',
        component: () => import('@/views/demo/charts/chart5.vue')
      },
      {
        path: 'chart6',
        meta: {
          title: '圆环图'
        },
        name: 'Chart6',
        component: () => import('@/views/demo/charts/chart6.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });
const router = createRouter();

export default router;
