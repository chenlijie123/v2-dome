
import debounce  from 'loadsh/debounce'


export default{
  data(){
    return {
      $_resizeHandler : null
    }
  },
  mounted() {
    this.listenershandler()
  },
  activated() {
    this.listenershandler()
  },
  beforeDestroy() {
    this.listenershandler()
  },
  methods: {
    listenershandler() {
      this.$_resizeHandler = debounce(()=>{
        if (this.chart) {
          this.chart.resize()
        }

      },1000)
      addEventListener('resize',this.$_resizeHandler)
    },
  },

}