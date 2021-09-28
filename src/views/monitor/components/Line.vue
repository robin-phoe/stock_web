<template>
  <div ref="main" class="chart-item-wrapper">

  </div>
</template>

<script>
export default {
    props:['x_data','y_data','color'],
    data() {
        return{
            myChart:'',
        }
    },
    methods:{
        init(){
            // 基于准备好的dom，初始化echarts实例
            this.myChart= this.$echart.init(this.$refs.main);
            // 绘制图表
            this.myChart.setOption({
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
                        color:this.color == 'red' ? 'rgba(255, 168, 168, 0.58)' :'rgba(0, 240, 100, 0.4)'
                    },
                    lineStyle:{
                        width:1,
                        color:this.color
                    },
                    showSymbol: false,
                    markLine:{
                        symbol:'none',
                        lineStyle:{
                            color:'#ccc'
                        },
                        label:{
                            show:false
                        },
                        data:[{
                            name:'',
                            yAxis:0
                        }]
                    }
                }]
            });
        }
    },
    watch:{
        'x_data': {
            handler:function(newValue,oldValue) {
                if(this.myChart != '') this.myChart.dispose();
                this.init()
                
            },
            deep:true
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
        // background: #eee;
        // border:1px solid #ccc;
        // margin-bottom: 10px;
    }
</style>