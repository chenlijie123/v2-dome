<template>
  <div :class="classObj" class="app-wrapper">
    <Aside class="sidebar-container"></Aside>
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <Navbar></Navbar>
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
import Aside from './components/Aside'
import Navbar from './components/Navbar'
import { AppMain } from './components'
import { mapState } from 'vuex'

export default {
  name: 'layout',
  components: {
    Aside,
    Navbar,
    AppMain
  },
  data() {
    return {
      fixedHeader:true
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
    }),
    classObj() {
      return {
        hideSidebar: this.sidebar.openBar,
        openSidebar: !this.sidebar.openBar,
      }
    }
  },
  methods: {


  },
  created() {}
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
}
</style>
