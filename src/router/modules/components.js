/*
 * @Author: chenlijie chen.lijie@hxss.com.cn
 * @Date: 2023-03-03 09:03:12
 * @LastEditors: chenlijie chen.lijie@hxss.com.cn
 * @LastEditTime: 2023-03-08 13:26:43
 * @FilePath: \v2-dome\src\router\modules\components.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const layout = function(meta={},path=''){
  return {
    path: path,
    // component: Layout,
    meta: {
      requiresAuth: true,
      ...meta
    }
  }
}
const components = [
  {...layout(
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
   

},
  // {
  //       path: "/task", // 内外勤
  //       name:'task',
  //       component: () => import('@/views/work/visit'),
  //       meta: {
  //         title: '工作台',
  //         requiresAuth: true,
  //         permissions: ['crm', 'leads', 'assigned']
  //       }
  // },
  {
    path:'/meuns',
    premissionList:[],
    component: () => import('@/views/menu/index'),
    title: '菜单测试',
    children:[
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