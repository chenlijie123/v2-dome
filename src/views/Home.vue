<template>
  <div class="home">
    <div @click="goabout">
      home
    </div>
     
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  created(){
    console.log(this.$route);
  },
  methods:{
    goabout(){
      this.$router.push('/about')
    }
  }
}
</script>
