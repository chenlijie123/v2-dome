/*
 * @Author: chenlijie chen.lijie@hxss.com.cn
 * @Date: 2023-03-03 09:03:12
 * @LastEditors: chenlijie chen.lijie@hxss.com.cn
 * @LastEditTime: 2023-03-03 10:29:38
 * @FilePath: \v2-dome\src\router\modules\components.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const components = [
  {
        path: '/task', // 内外勤
        name:'task',
        component: () => import('@/views/work/visit'),
        meta: {
          title: '工作台',
          requiresAuth: true,
          permissions: ['crm', 'leads', 'assigned']
        }
  }
]

export default components