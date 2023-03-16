import Layout from '@/layout'

const layout = function(meta={},path=''){
  return {
    path:path,
    component:Layout,
    meta:{
      requiresAuth:true,
      ...meta
    }
  }
}
const components = [
  {
    ...layout(
      {
        meta: {
          title: '工作台',
          // requiresAuth: true,
          permissionList: ['crm', 'leads', 'assigned']
        }
      },
      '/task',
    ),
    component: () => import('@/views/work/visit'),
    hidden:true,
  },
  {
    path: '/meuns',
    premissionList: [],
    component: () => import('@/views/menu/index'),
    title: '菜单测试',
    children: [
      {
        path: 'keyboard',
        component: () => import('@/views/charts/keyboard'),
        name: 'keyboard',
        meta: { title: 'keyboardChart', noCache: true }
      },
      {
        path: 'lines',
        component: () => import('@/views/charts/line'),
        name: 'lines',
        meta: { title: 'lineChart', noCache: true }
      },
    ]

  }

]

export default components