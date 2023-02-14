<template>
  <div class="home">
    <div @click="goabout">
      home
    </div>
     

       <transition>
    <button 
      v-if="isEditing"
      v-on:click="isEditing = false"
      key="save"
    >
      Save
    </button>
    <span 
    key="edit"
      v-else 
      v-on:click="isEditing = true"
    >
      Edit
    </span>
  </transition>
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
  data() {
    return {
      isEditing:true
    }
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
<style lang="scss" scoped>
.v-enter-active, .v-leave-active {
  transition: all 1s;
}
.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.v-leave-active {
  position: absolute;
}

</style>
