<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      > -->
      <div v-for="i in 60" :key="i">{{ i + 11111111111111111111111111 }}</div>
        <!-- <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" /> -->
      <!-- </el-menu> -->
    </el-scrollbar>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  components: {},
  data () {
    return {
      isCollapse:true
    }
  },
  computed:{
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    }
  },
  methods: {},
  created () {}
}
</script>
<style lang="scss" scoped>
// ::v-deep .el-scrollbar__wrap {
//   overflow-x: hidden;
//  }
</style>
