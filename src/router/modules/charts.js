
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
          title:'测试line',
          permissionList:[['crm','appToBeSet']],
      icon:'hxicon-unsettle'

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
          title: '测试line',
          requiresAuth: true,
          permissions: ['crm', 'appToBeSet', 'appToBeSetList']
        }
      }
    ]
  },
  {
    ...layout(
      {
        icon:'hxicon-unsettle',
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