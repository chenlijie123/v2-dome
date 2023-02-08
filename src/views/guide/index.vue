<template>
  <div class="page">
    <span id="guide" @click="btn">
      引导按钮
    </span>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' 

export default {
  components: {},
  data () {
    return {

    }
  },
  methods: {
    btn(){
      const driver = new Driver()
      driver.highlight({
        element:'#guide',
        popover:{
          title:'引导按钮',
          description:'Description for it',
          position:'bottom-center'
        }
      })
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
.page{
  width: 100%;
  height: 100%;
  #duide {
    display: inline-block;
    cursor: pointer;
    width: auto;
    border: 1px solid green;
  }
}
</style>
