<template>
  <div
    :id="id"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons')

import resize from './mixins/resize'
export default {
  components: {},
  mixins: [resize],
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
  data () {
    return {
      chart: null
    }
  },

  mounted () {
    this.chartHandler()
  },

  methods: {
    chartHandler () {
      this.chart = echarts.init(document.getElementById(this.id), 'macarons')

      // 绘制图表
      this.chart.setOption({
        // legend: {
        //   data: ['bar', 'bar2', 'bar3', 'bar4'],
        //   left: '10%'
        // },
        grid: {
          containLabel: false,
          top: '10%',
          bottom: '10%'
        },
        xAxis: {
          // type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            show: true,
            margin:20
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: 'red',
            }
          }
        },
        yAxis: {
          // type: 'value',
          name: '数据1',
          nameTextStyle: {
            color: 'red',
            padding: [0, 0, 10, 0],
            fontSize: 20
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: 'red',
            }
          },
          splitLine: {
            lineStyle: {
              color: 'red',
              width: 1,
              type: 'dashed',
              cap: 'round'
            }
          }
        },
        // legend: {
        //   show:true,
        //   data: ['春节', '元宵节', '端午节', '春节', '元宵节', '端午节', '中秋节'],
        //   right: '25',
        //   top: '18',
        //   icon: 'rect',
        //   itemHeight: 10,
        //   itemWidth: 10,
        //   textStyle: {
        //     color: '#000'
        //   }
        // },
        series: [
         { // 柱底
            data:[120, 200, 150, 80, 70, 110, 130],
            type: 'pictorialBar', // 象形柱图
            //图形的定位位置。柱子开始的地方。可选start,end,center
            symbolPosition: 'start',
            symbol: 'diamond', //图形类型。可选'circle','rect'等
            // 把图形向下移动了自身尺寸的一半的位置
            symbolOffset: [0, '50%'],
            symbolSize: [30, 15], // 图形的大小
            // itemStyle: {
            //   color: 'transparent',
              
            // },
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                global: false,
                colorStops: [
                  { offset: 0, color: 'rgba(8,131,245,0.3)' },// 0% 处的颜色
                  { offset: 1, color: 'rgba(8,131,245,0.3)' }// 100% 处的颜色
                ]
              }
            },
          },
          { // 柱体系列数据
            name: 'emo次数',
            data:[120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 30,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                global: false,
                colorStops: [
                  { offset: 0, color: 'rgba(8,131,245,1)' },// 0% 处的颜色
                  { offset: 1, color: 'rgba(8,131,245,0.3)' }// 100% 处的颜色
                ]
              }
            },
            label: { // 图形上的文本标签
              show: true,
              position: 'top', // 标签的位置。可选top，left等
              distance: 10, // 距离图形元素的距离。默认值5
              color: '#fff'
            }
          },
          { // 柱顶
            data:[120, 200, 150, 80, 70, 110, 130],
            type: 'pictorialBar', // 象形柱图
            //图形的定位位置。柱子结束的地方。可选start,end,center
            symbolPosition: 'end',
            symbol: 'diamond', //图形类型。可选'circle','rect'等
            // 把图形向上移动了自身尺寸的一半的位置。
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 15], // 图形的大小
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                global: false,
                colorStops: [
                  { offset: 0, color: '#61b5ff' },// 0% 处的颜色
                  { offset: 1, color: '#61b5ff' }// 100% 处的颜色
                ]
              }
            },
            z: 3
          }

          // {
          //   data: [120, 200, 150, 80, 70, 110, 130],
          //   type: 'pictorialBar',
          //   symbolPosition: 'start',
          //   symbol: 'diamond',
          //   symbolOffset: [0, '50%'],
          //   symbolSize: [30, 15],
          //   itemStyle: {
          //     color: new echarts.graphic.LinearGradient(
          //       0, 0, 0, 1,
          //       [
          //         { offset: 0, color: 'rgba(255,224,102,1)' },
          //         { offset: 0.5, color: 'rgba(255,224,102,0.8)' },
          //         { offset: 1, color: 'rgba(255,224,102,0)' },                   //柱图高亮渐变色
          //       ]
          //     )
          //   },
          //   z: 3
          // },
         
        ],
         tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(17,95,182,0.5)',
          textStyle: {
            color: '#fff',
             align:'left'
          },
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params) => {
            return ( // ${params[0].seriesName}
              `${params[0].name}<br />
              name：${params[0].value}<br />
              name：${params[0].value}<br />
              ${params[0].name}<br />
              `
            )
          }
        },
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
