<template>

  <div class="chart-container">
    <router-view></router-view>
    <el-row :gutter="12">
      <el-col :span="24">
        <ChartsLine id="echart1" height="400px"></ChartsLine>
      </el-col>
      <!-- <el-col :lg="8" :xs="24"  :sm="24">
        <ChartsLine id="echart2" height="400px"></ChartsLine>
      </el-col>
      <el-col  :lg="8" :xs="24"  :sm="24">
        <ChartsLine id="echart3" height="400px"></ChartsLine>
      </el-col> -->
    </el-row>
    
    <!-- <ChartsLine height="50%" width="50%"></ChartsLine> -->
  </div>
</template>

<script>
import ChartsLine from '@/components/charts/lines'
 
export default {
  components: {
    ChartsLine
  },
  data () {
    return {

    }
  },
  methods: {},
  created () {}
}
</script>
<style lang="scss" scoped>
.chart-container {
  width: 100%;
  height: 50%;
}
</style>
