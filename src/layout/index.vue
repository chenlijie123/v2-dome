<template>
  <el-container class="h-100">
    <el-aside width="210px" class="aside">
      <Aside class="sidebar-container"></Aside>
    </el-aside>
    <el-container>
      <el-header height="60px">
        <Navbar></Navbar>
      </el-header>
      <el-main>
         <AppMain></AppMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './components/Aside'
import Navbar from './components/Navbar'
import { AppMain } from './components'
 
export default {
  name: 'layout',
  components: {
    Aside,
    Navbar,
    AppMain
  },
  data() {
    return {}
  },
  methods: {


  },
  created() {}
}
</script>
<style lang="scss" scoped></style>
