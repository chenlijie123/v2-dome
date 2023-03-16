
import Layout from '@/layout'

const layout = function(meta = {}, path = '/') {
  return {
    path: path,
    component: Layout,
    meta: {
      requiresAuth: true,
      ...meta
    }
  }
}
const charts =
  [
    {
      ...layout(
        {
          title:'echarts',
          permissionList:[['crm','appToBeSet']]
        },
        '/echart'
      ),
    redirect:'/echart/line',
    children: [
      {
        path: 'line',
        name:'测试三',
        component: () => import('@/views/charts/echart-line/index.vue'),
        meta:{
          title: 'line',
          requiresAuth: true,
          permissions: ['crm', 'appToBeSet', 'appToBeSetList']
        }
      }
    ]
  },
  {
    ...layout(
      {
        title:'components',
        permissionList:[['crm','customer']]
      },
      '/components'
    ),
  redirect:'/components/work',
  children: [
    {
      path: 'work',
      name:'测试四',

      component: () => import('@/views/components-dome/work.vue'),
      meta:{
        title: 'work',
        requiresAuth: true,
        permissions: ['crm', 'customer', 'conCustomer']
      }
    }
  ]
}

  ]

export default charts