<template>
  <div class="">
    <el-button type="primary" @click="getList">appmain</el-button>
  </div>
</template>

<script>
import { list } from '@/api/test'
//  import * as Lockr from 'lockr'
export default {
  components: {},
  data () {
    return {

    }
  },
  methods: {

    getList() {
      // const info = ['13xx', 188, null, undefined, false, [123, 22, '44']]
      // Lockr.set('infoName',info)
      // console.log('Lockr',Lockr);
      let data = {
        pageNum:1,
        pageSize:15,
        projectState:0
      }
      list(data).then(res=>{

      if (res.code === 200  ) console.log('res',res);

      })
    }

  },
  created () {}
}
</script>
<style lang="scss" scoped></style>
