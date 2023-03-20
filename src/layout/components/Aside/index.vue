<template>
     <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" :background-color="variables.menuBg" :text-color="variables.menuText" :collapse="isCollapse" active-text-color="#ffd04b">
      <!-- :active-text-color="variables.menuActiveText" -->
      <sidebar-item v-for="route in routers" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
     </el-scrollbar>
</template>

<script>
import SidebarItem from './SidebarItem'

import variables from '@/styles/variables.scss'
import { mapGetters } from 'vuex'

export default {
  components: {
    SidebarItem
  },
  data() {
    return {
      // isCollapse: false // 菜单 默认展开
    }
  },
  computed: {
    ...mapGetters(['routers', 'sidebar']), // asyncRouter concat constantRouter
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
    },
    isCollapse() {
      return this.sidebar.openBar
    }
  },
  // mounted(){
  //   console.log('routers',this.routers);
  // },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/*隐藏文字*/
.el-menu--collapse .el-submenu__title span {
  display: none;
}
/*隐藏 > */
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>
