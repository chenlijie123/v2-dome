<template>
  <div class="chart-container">
    <ChartsLine height="100%" width="100%"></ChartsLine>
  </div>
</template>

<script>
import ChartsLine from '@/components/charts/line'
export default {
  components: {
    ChartsLine
  },
  data () {
    return {

    }
  },
  methods: {},
  created () {}
}
</script>
<style lang="scss" scoped>
.chart-container {
  width: 100%;
  height: 50%;
}
</style>
