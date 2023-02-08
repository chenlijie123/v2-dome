<template>
  <div class="page">
    <div id="guide" @click="btn">
      引导按钮
    </div>
    <el-button id="guidetwo" type="primary" size="default" @click="next">下一步</el-button>
    
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' 
import  steps from './steps'
export default {
  components: {},
  data () {
    return {

    }
  },
  mounted() {
    this.btn()
  },
  methods: {
    btn(){
      const driver = new Driver()
      // driver.highlight({
      //   element:'#guide',
      //   popover:{
      //     title:'引导按钮',
      //     description:'Description for it',
      //     position:'left-bottom'
      //   }
      // })
      driver.defineSteps(steps)
      driver.start()
    },
    next(){

    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
.page{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  #duide {
    display: inline-block;
    cursor: pointer;
    width: auto;
    border: 1px solid green;
  }
}
</style>
