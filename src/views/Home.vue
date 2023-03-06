<template>
  <div class="home">
    <div class="flex">
      <el-button type="primary" @click="decrement">decrement--</el-button>
      <div>{{count }}</div>
      <div>{{ num }}</div>
      <el-button type="primary" @click="increment">increment++</el-button>


      
    </div>
      <div>{{ 'counts:' +  counts }}</div>
      <div>{{ 'nums:' + nums }}</div>

    <!-- <transition>
      <button v-if="isEditing" v-on:click="isEditing = false" key="save">Save</button>
      <span key="edit" v-else v-on:click="isEditing = true"> Edit </span>
    </transition> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-link to="/echart/line">22222</router-link> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapMutations ,mapGetters,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      isEditing: true
    }
  },
   created(){
    console.log('router',this.$router);
   },
  computed: {
    // 获取state
   ...mapState({
      count : state => state.app.count,
      num :state => state.num
   }),
   // 数据处理state
   ...mapGetters(['counts','nums'])
  },
  methods: {
    // 修改satte
    ...mapMutations(['INCREMENT','DECREMENT']),

    //
    ...mapActions(['syncAdd','asynclogin']),

    increment() {
      // this.INCREMENT(2)
      this.$store.dispatch('app/asynclogin',555555555).then(res=>{
          console.log(res);
      }).catch(err=>{err})
    },
    decrement() {
      // this.DECREMENT(1)
      this.$store.dispatch('app/syncAdd',2222222).then(res=>{
        console.log(res);
      }).catch(err=>{err})
    },

  }
}
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.v-leave-active {
  position: absolute;
}
.flex {
  margin: 30px auto;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
