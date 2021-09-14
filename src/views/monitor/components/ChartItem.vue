<template>
  <div ref="main" class="chart-item-wrapper">

  </div>
</template>

<script>
export default {
    methods:{
        init(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echart.init(this.$refs.main);
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '分时量图'
                },
                 xAxis: {
                    data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
                },
                yAxis: {},
                series: [{
                    type: 'k',
                    data: [
                        [20, 34, 10,38],
                        [40, 35, 30, 50],
                        [31, 38, 33, 44],
                        [38, 15, 5, 42]
                    ]
                }]
            });
        }
    },
    mounted(){
        this.$nextTick(()=>{
            setTimeout(()=>{
                this.init()
            },20)
        })
    }
}
</script>

<style lang="scss" scoped>
    .chart-item-wrapper{
        width: 100%;
        height: 100%;
        background: #fff;
        border:1px solid #ccc;
        margin-bottom: 10px;
    }
</style>