/*
 * @Author: chenlijie chen.lijie@hxss.com.cn
 * @Date: 2023-03-02 13:32:36
 * @LastEditors: chenlijie chen.lijie@hxss.com.cn
 * @LastEditTime: 2023-03-03 10:01:44
 * @FilePath: \v2-dome\src\router\modules\charts.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const charts =
  [{
    path: '/echart',
    name: 'echart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/charts/line.vue'),
    children: [
      {
        path: 'line',
        name: 'line',
        component: () => import(/* webpackChunkName: "about" */ '@/views/charts/echart-line/index.vue'),
      }
    ]
    // children:[
    //   {
    //     path:'/line',
    //     name:'line',
    //     component:()=> import ( '@/views/charts/line.vue')
    //   }

    // ]
  },
  {
    // permissions: ['crm', 'customer']
    // permissionList: [['crm', 'work']],
    // title: '任务管理',
    // icon: 'icongongzuo',
    // path: '',
    // children: [
    //   {
        path: 'visit', // 拜访计划管理
        name: 'visit',
        component: () => import('@/views/work/visit'),
        meta: {
          title: '外勤管理',
          requiresAuth: true,
          permissions: ['crm', 'work', 'visited']
        }
      // }]
  }

  ]

export default charts