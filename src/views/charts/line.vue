<template>
  <div class="chart-container">
    <el-row :gutter="12">
      <el-col :lg="8" :xs="24"  :sm="24">
        <ChartsLine height="400px"></ChartsLine>
      </el-col>
      <el-col :lg="8" :xs="24"  :sm="24">
        <ChartsLine height="400px"></ChartsLine>
      </el-col>
      <el-col  :lg="8" :xs="24"  :sm="24">
        <ChartsLine height="400px"></ChartsLine>
      </el-col>
    </el-row>
    
    <!-- <ChartsLine height="50%" width="50%"></ChartsLine> -->
  </div>
</template>

<script>
import ChartsLine from '@/components/charts/line'
 
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
