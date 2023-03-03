<template>
<div>
  <router-view></router-view>
  <div class="tmp">
    {{'note1'}}
  </div>
</div>

</template>

<script>
export default {
  components: {},
  data () {
    return {

    }
  },
  methods: {},
  created () {}
}
</script>
<style lang="scss" scoped>
  .tmp {
    width: 200px;
    height: 200px;
    background-color: aquamarine;
  }
</style>
