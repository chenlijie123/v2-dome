<template>
  <div class="menu">
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      active-text-color="#ffd04b"
      :collapse-transition="false"
      mode="vertical"
    >
      <!-- :active-text-color="variables.menuActiveText" -->
      <sidebar-item v-for="route in routers" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'

import variables from '@/styles/variables.scss'
import {mapGetters} from 'vuex'

export default {
  components:{
    SidebarItem
  },
  data() {
    return {
      isCollapse: true
    }
  },
  computed:{
    ...mapGetters(['routers']),
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
  mounted(){
    console.log('routers',this.routers);
  },
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
