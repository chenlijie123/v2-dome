<template>
  <div :id="id" :style="{ width: width, height: height }"></div>
</template>

<script>
import * as echarts from 'echarts'

import resize from './mixins/resize'

export default {
  components: {},
  mixins:[resize],
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    id: {
      type: String,
      default: 'chart'
    }
  },
  data() {
    return {
      chart: null
    }
  },

  mounted() {
    this.chartHandler()
  },

  methods: {
    chartHandler() {
      this.chart = echarts.init(document.getElementById(this.id), 'dark')

      // 绘制图表
      this.chart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
