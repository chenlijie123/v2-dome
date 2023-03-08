<template>
  <div>
    <el-table v-skeleton="{ loading: loading, rows: 8 }" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>

    <el-skeleton animated>
      <template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
      </template>
    </el-skeleton>
    <el-button type="primary" @click="resetBtn">重置</el-button>

    <el-skeleton style="width: 240px" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="p" style="width: 50%" />
          <div style="display: flex; align-items: center; justify-items: space-between">
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
    </el-skeleton>

    <div class="notes">
      <img class="test1" src="@/assets/test.gif" alt="" srcset="" />

      <img class="test2" src="@/assets/123.svg" alt="" />
    </div>
  </div>
</template>

<script>
// import { map}
export default {
  data() {
    return {
      loading: false,
      tableData: []
    }
  },
  mounted() {
    // 模拟请求耗时2s
    let that = this
    that.loading = true
    setTimeout(function () {
      that.loading = false
      that.tableData = [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }, 1000)
  },
  methods: {
    resetBtn() {
      this.$store.dispatch('user/resetToken')
    }
  }
}
</script>
<style lang="scss" scoped>
.notes {
  position: relative;
  width: 500px;
    height: 500px;
  .test1 {
    // display: block;
    width: 100%;
    height: 100%;
  }
  .test2 {
    // display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50px,-50px);
  }
}
</style>
