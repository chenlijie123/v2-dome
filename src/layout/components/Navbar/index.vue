<template>
  <div class="navbar">
    <Hamburger @toggleClick="toggleClick"></Hamburger>
  </div>
</template>

<script>
import  Hamburger from '@/components/Hamburger'
import {mapGetters} from 'vuex'
export default {
  components: {
    Hamburger
  },
  data () {
    return {

    }
  },
  computed:{
...mapGetters(['sidebar'])
  },
  methods: {
    toggleClick() {
      console.log('sidebar',this.sidebar);
      this.$store.dispatch('app/sidebar')
    }
  }

}
</script>
<style lang="scss" scoped>
.navbar{
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}
</style>
