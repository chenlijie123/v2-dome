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
          icon:'hxicon-unsettle',
          title:'测试',
          permissionList: [['crm','auditReport']]
      },
      '/component',
      ),
      redirect:'/component/keyboard',
      children: [
        {
          path: 'keyboard',
          component: () => import('@/views/charts/keyboard'),
          name: 'keyboard',
          meta: { 
          title: 'keyboardChart',
          requiresAuth:true,
          permissions:['crm','auditReport','projectFollow']
        }
        },
        {
          path: 'lines',
          component: () => import('@/views/charts/line'),
          name: 'lines',
          meta: { title: 'lineChart',
          requiresAuth:true,
          permissions:['crm','auditReport','projectRecommend']}
        },
      ]

  }
]

export default components