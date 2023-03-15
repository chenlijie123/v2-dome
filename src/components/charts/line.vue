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

          //       {
          //   name: "资源数量统计",
          //   type: "bar",
          //   showSymbol: false,
          //   hoverAnimation: false,
          //   data: [120, 200, 150, 80, 70, 110, 130],
          //   barWidth: 10, //柱图宽度
          //   // barCategoryGap:'60%',
          //   itemStyle: { //左面
          //     normal: {
          //       color:function() { 
          //         let colorList = ["red"];
          //         return colorList[0];
          //       },
          //       barBorderRadius:[4,0,0,100],
          //     }
          //   }
          // },{ 
          //   name:'资源数量统计',
          //   tooltip:{
          //     show:true 
          //   },
          //   type: 'bar',
          //   barWidth:10, 
          //   // barCategoryGap:'60%',
          //   itemStyle:{       //右面
          //       // normal:{
          //       //   color:function() { 
          //       //     let colorList = ["#48D9F5"];
          //       //     return colorList[0];
          //       //   },
          //       //   borderWidth:0.1,
          //       //   barBorderRadius:[0,5,100,0]
          //       // }
          //       color: new echarts.graphic.LinearGradient(
          //       0, 0, 0, 1,
          //       [
          //         { offset: 0, color: 'rgba(255,224,102,1)' },
          //         { offset: 0.5, color: 'rgba(255,224,102,0.8)' },
          //         { offset: 1, color: 'rgba(255,224,102,0)' },                   //柱图高亮渐变色
          //       ]
          //     ),
          //         borderWidth:0.1,
          //         barBorderRadius:[0,5,100,0]
          //   },
          //   data: [120, 200, 150, 80, 70, 110, 130],
          //   barGap:0
          // },{ 
          //   name:'b',
          //   tooltip:{
          //     show:false 
          //   },
          //   type: 'pictorialBar',
          //   itemStyle: {  //顶部
          //       normal: {
          //       color:function() { 
          //         let colorList = ["#48D9F5"];
          //         return colorList[0];
          //       },
          //       borderColor:'#000',
          //       borderWidth:0.1,
          //       label: {
          //         show: true, //开启显示
          //         position: 'top', //在上方显示
          //         textStyle: { //数值样式
          //           color :'#FFFFFF',
          //           fontSize: 14,
          //           fontFamily:'微软雅黑',
          //         },
          //         offset:[0,-2]
          //       }
          //     }
          //   },
          //   symbol: 'diamond',
          //   symbolSize: ['20.5','13'],
          //   symbolOffset:[0,'-38%'],
          //   symbolPosition: 'end',
          //   data: [120, 200, 150, 80, 70, 110, 130],
          //   z:3
          // },{ 
          //   name:'d',
          //   tooltip:{
          //      show:false 
          //   },
          //   type: 'pictorialBar',
          //   itemStyle: {  //底部
          //       normal: {
          //       color:function() { 
          //         let colorList = ["#48D9F5"];
          //         return colorList[0];
          //       },
          //       borderColor:'#000',
          //       borderWidth:0.1,
          //       label: {
          //         show: false, //开启显示
          //         position: 'top', //在上方显示
          //         textStyle: { //数值样式
          //           color :'#FFFFFF',
          //           fontSize: 14,
          //           fontFamily:'微软雅黑',
          //         },
          //         offset:[0,-2]
          //       }
          //     }
          //   },
          //   symbol: 'diamond',
          //   symbolSize: ['20.5','17'],
          //   symbolOffset:[0,'2.5'],
          //   symbolPosition: 'start',
          //   data: [120, 200, 150, 80, 70, 110, 130],
          //   z:0
          // }

        
          { // 柱体系列数据
            name: '左面',
            data:[120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 15, // 宽度
            itemStyle: {
              // color: {
              //   type: 'linear',
              //   x: 0,
              //   y: 0,
              //   x2: 0,
              //   y2: 1,
              //   global: false,
              //   colorStops: [
              //     { offset: 0, color: 'rgba(10,92,164,1)' },// 0% 处的颜色
              //     { offset: 1, color: 'rgba(10,92,164,.1)' }// 100% 处的颜色
              //   ]
              // }
              color:'red',
                // borderWidth:2,
                //   barBorderRadius:[5,5,5,5]
            },
            // label: { // 图形上的文本标签
            //   show: true,
            //   position: 'top', // 标签的位置。可选top，left等
            //   distance: 10, // 距离图形元素的距离。默认值5
            //   color: '#fff'
            // }
          },
         
          { // 柱体系列数据
            name: '右面',
            data:[120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth:15,
            itemStyle: {
              // color: {
              //   type: 'linear',
              //   x: 0,
              //   y: 0,
              //   x2: 0,
              //   y2: 1,
              //   global: false,
              //   colorStops: [
              //     { offset: 0, color: 'rgba(8,137,251,1)' },// 0% 处的颜色
              //     { offset: 1, color: 'rgba(8,137,251,0.1)' }// 100% 处的颜色
              //   ]
              // }
              color:'green'
            },
            // label: { // 图形上的文本标签
            //   show: true,
            //   position: 'top', // 标签的位置。可选top，left等
            //   distance: 10, // 距离图形元素的距离。默认值5
            //   color: '#fff'
            // },
            barGap:0
          },
          { // 柱顶
          name:'顶部',
            data:[120, 200, 150, 80, 70, 110, 130],
            type: 'pictorialBar', // 象形柱图
            //图形的定位位置。柱子结束的地方。可选start,end,center
            symbolPosition: 'end',
            symbol: 'diamond', //图形类型。可选'circle','rect'等
            // 把图形向上移动了自身尺寸的一半的位置。
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 10], // 图形的大小
            itemStyle: {
              // color:'#61b5ff',
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                global: false,
                colorStops: [
                  { offset: 0, color: 'black' },// 0% 处的颜色
                  { offset: 1, color: 'white' }// 100% 处的颜色
                ]
              }
            },
            z: 3
          },
            { // 柱底
          name:'底部',

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
              color:'transparent'
              // color: {
              //   type: 'linear',
              //   x: 0,
              //   y: 0,
              //   x2: 0,
              //   y2: 1,
              //   global: false,
              //   colorStops: [
              //     { offset: 0, color: 'rgba(8,131,245,0.3)' },// 0% 处的颜色
              //     { offset: 1, color: 'rgba(8,131,245,0.3)' }// 100% 处的颜色
              //   ]
              // }
            },
          },

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
