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
    this.chartHandler(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],[120, 200, 150, 80, 70, 110, 130])
  },

  methods: {

      chartHandler(xdata, data) {
          var myChart = echarts.init(document.getElementById(this.id), 'macarons')
          var colorData = ['#08C5B8', '#4AF1DB', '#24DCF7']
          let numData = parseInt(Math.max.apply(null, data)) + parseInt(Math.max.apply(null, data)) * 0.25
          // 绘制左侧面
          const CubeLeft = echarts.graphic.extendShape({
              shape: {
                  x: 0,
                  y: 0
              },
              buildPath: function(ctx, shape) {
                  // 会canvas的应该都能看得懂，shape是从custom传入的
                  const xAxisPoint = shape.xAxisPoint
                  const c0 = [shape.x, shape.y]
                  const c1 = [shape.x - 13, shape.y - 13]
                  const c2 = [xAxisPoint[0] - 13, xAxisPoint[1] - 13]
                  const c3 = [xAxisPoint[0], xAxisPoint[1]]
                  ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1])
                      .closePath()
              }
          })
          // 绘制右侧面
          const CubeRight = echarts.graphic.extendShape({
              shape: {
                  x: 0,
                  y: 0
              },
              buildPath: function(ctx, shape) {
                  const xAxisPoint = shape.xAxisPoint
                  const c1 = [shape.x, shape.y]
                  const c2 = [xAxisPoint[0], xAxisPoint[1]]
                  const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
                  const c4 = [shape.x + 18, shape.y - 9]
                  ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1])
                      .closePath()
              }
          })
          // 绘制顶面
          const CubeTop = echarts.graphic.extendShape({
              shape: {
                  x: 0,
                  y: 0
              },
              buildPath: function(ctx, shape) {
                  const c1 = [shape.x, shape.y]
                  const c2 = [shape.x + 18, shape.y - 9]
                  const c3 = [shape.x + 5, shape.y - 22]
                  const c4 = [shape.x - 13, shape.y - 13]
                  ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1])
                      .closePath()
              }
          })
          // 注册三个面图形
          echarts.graphic.registerShape('CubeLeft', CubeLeft)
          echarts.graphic.registerShape('CubeRight', CubeRight)
          echarts.graphic.registerShape('CubeTop', CubeTop)

          const MAX = [numData, numData, numData, numData]
          const VALUE = data
          const option = {
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow',
                  },
                  borderColor: 'rgba(255,255,255,.3)',
                  backgroundColor: 'rgba(13,5,30,.6)',
                  textStyle: {
                      color: 'white', //设置文字颜色
                      fontSize: "12"
                  },
                  borderWidth: 1,
                  padding: 5,
                  formatter: function(parms) {
                      var str =
                          '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                          colorData[1] + '"></span>' + parms[0].name + '年<br/>' +
                          '大数据企业' +
                          parms[1].value +
                          '家</br>';
                      return str;
                  },
              },

              grid: {
                  left: '10%',
                  right: '10%',
                  top: '20%',
                  bottom: '10%',
              },
              xAxis: {
                  type: 'category',
                  data: xdata,
                  axisLabel: {
                      show: false,
                      fontSize: 16,
                       color: '#B5D1F4 ',
                      opacity: "0.7",
                      fontFamily: "D-DIN"
                  },
                  axisTick: {
                      show: false, //不显示刻度线
                  },
                  // axisLabel: {
                      
                  // },
                  axisLine: {
                      show: false,
                      lineStyle: {
                          width: 2,
                          color: '#B5D1F4 ',
                          opacity: "0.3"
                      }
                  },
                  splitLine: {
                      show: false
                  }
              },
              yAxis: {
                  show: true,
                  name: '数量：家',
                  splitNumber: 5,
                  nameTextStyle: {
                      fontSize: 12,
                      fontFamily: "Microsoft YaHei",
                      color: "#B5D1F4",
                      opacity: "0.5",
                      padding: [0, 0, 15, -20]
                  },
                  axisLine: {
                      show: false,
                  },
                  splitLine: {
                      show: true,
                      lineStyle: {
                          type: 'dashed',
                          color: '#075858'
                      },
                  },
                  axisLabel: {
                      fontSize: 14,
                      fontFamily: "D-DIN",
                      color: "#B5D1F4",
                      opacity: "0.7",
                  }
              },
              series: [{
                  type: 'custom',
                  renderItem: function(params, api) {
                      const location = api.coord([api.value(0), api.value(1)])
                      return {
                          type: 'group',
                          children: [{
                              type: 'CubeLeft',
                              shape: {
                                  api,
                                  x: location[0],
                                  y: location[1],
                                  xAxisPoint: api.coord([api.value(0), 0])
                              },
                              style: {
                                  fill: 'rgba(47,102,192,.27)'
                              }
                          }, {
                              type: 'CubeRight',
                              shape: {
                                  api,
                                  x: location[0],
                                  y: location[1],
                                  xAxisPoint: api.coord([api.value(0), 0])
                              },
                              style: {
                                  fill: 'rgba(59,128,226,.27)'
                              }
                          }, {
                              type: 'CubeTop',
                              shape: {
                                  api,
                                  x: location[0],
                                  y: location[1],
                                  xAxisPoint: api.coord([api.value(0), 0])
                              },
                              style: {
                                  fill: 'rgba(72,156,221,.27)'
                              }
                          }]
                      }
                  },
                  data: MAX
              }, {
                  type: 'custom',
                  renderItem: (params, api) => {
                      const location = api.coord([api.value(0), api.value(1)])
                      return {
                          type: 'group',
                          children: [{
                              type: 'CubeLeft',
                              shape: {
                                  api,
                                  x: location[0],
                                  y: location[1],
                                  xAxisPoint: api.coord([api.value(0), 0])
                              },
                              style: {
                                  fill: colorData[0]
                              }
                          }, {
                              type: 'CubeRight',
                              shape: {
                                  api,
                                  x: location[0],
                                  y: location[1],
                                  xAxisPoint: api.coord([api.value(0), 0])
                              },
                              style: {
                                  fill: colorData[1]
                              }
                          }, {
                              type: 'CubeTop',
                              shape: {
                                  api,
                                  x: location[0],
                                  y: location[1],
                                  xAxisPoint: api.coord([api.value(0), 0])
                              },
                              style: {
                                  fill: colorData[1]
                              }
                          }]
                      }
                  },
                  data: VALUE
              }, {
                  type: 'bar',
                  label: {
                      normal: {
                          show: true,
                          position: 'top',
                          fontFamily: "DIN Alternate",
                          fontSize: 16,
                          color: colorData[2],
                          fontWeight: "bold",
                          offset: [2, -25]
                      }
                  },
                  itemStyle: {
                      color: 'transparent'
                  },
                  tooltip: {

                  },
                  data: VALUE
              }]
          }
          if (option && typeof option === 'object') {
              myChart.setOption(option)
          }
      }


  }
}
</script>
<style lang="scss" scoped></style>
