<template>
  <div ref="main" class="chart-item-wrapper">

  </div>
</template>

<script>
export default {
    props:['e_data'],
    methods:{
        init(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echart.init(this.$refs.main);
            // 绘制图表
            let arr = []
            this.e_data.forEach(item => {
                arr.push('')
            })
            myChart.setOption({
                title: {
                },
                 xAxis: {
                    data:arr,
                    show:false
                },
                grid: {
                    top: 3,
                    left: 6,
                    right: 6,
                    bottom: 2
                },
                yAxis: {
                    show:false
                },
                series: [{
                    type: 'candlestick',
                    data: this.e_data
                }]
            });
        }
    },
    mounted(){
       this.init()
    }
}
</script>

<style lang="scss" scoped>
    .chart-item-wrapper{
        width: 100%;
        height: 100%;
        // background: #fff;
        // border:1px solid #ccc;
        // margin-bottom: 10px;
    }
</style>