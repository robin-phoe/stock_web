<template>
  <div ref="main" class="chart-item-wrapper">

  </div>
</template>

<script>
export default {
    props:['x_data','y_data'],
    methods:{
        init(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echart.init(this.$refs.main);
            // 绘制图表
            myChart.setOption({
                 xAxis: {
                    data: this.x_data,
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
                    type: 'line',
                    data: this.y_data,
                    areaStyle: {
                        color:'rgba(255, 168, 168, 0.58)'
                    },
                    markLine:{
                        data:[{
                            name:'',
                            yAxis:0
                        }]
                    }
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
        height: 60px;
        background: #fff;
        // border:1px solid #ccc;
        // margin-bottom: 10px;
    }
</style>