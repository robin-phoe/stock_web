<template>
  <div class="table-item">
       <div class="table-cell">
           {{itemInfo.name}}
        </div>
        <div class="table-cell">
            {{itemInfo.id}}
        </div>
        <div class="table-cell">
           {{itemInfo.grade}}
        </div>
        <div class="table-cell">
            {{itemInfo.price}}
        </div>
        <div class="table-cell">
           {{itemInfo.increase}}
        </div>
        <div class="table-cell cell-chart">
            <line-c :x_data="itemInfo.grade_arr.x_axis" :y_data="itemInfo.grade_arr.data"></line-c>
        </div>
        <div class="table-cell cell-chart">
            <line-c :x_data="itemInfo.line_arr.x_axis" :y_data="itemInfo.line_arr.data"></line-c>
        </div>
        <div class="table-cell cell-chart">
            日K
        </div>
        <div class="table-cell">
            {{itemInfo.bk}}
        </div>
        <div class="table-cell">
            {{itemInfo.bk_increase}}
        </div>
        <div class="table-cell">
           {{itemInfo.bk_sort}}
        </div>
        <div class="table-cell">
            {{itemInfo.in_sort}}
        </div>
        
        <div class="table-cell">
            {{itemInfo.hot_concept}}
        </div>
        <div class="table-cell">
            {{itemInfo.hot_concept_increase}}
        </div>
        <div class="table-cell">
            {{itemInfo.monitor_type}}
        </div>
  </div>
</template>

<script>
import LineC from './Line.vue'

export default {
     components: {
        LineC
    },
    name:'table-item',
    props:['itemInfo'],
    methods:{
        
    },
    mounted(){
       
    }
}
</script>

<style lang="scss" scoped>
.table-item {
    width: 100%;
    .table-cell {
        width: 100px;
        height: 60px;
        display: inline-block;
        line-height: 60px;
        text-align: center;
        vertical-align: top;
    }
    .cell-chart {
      width: 200px;
    }
  }
.table-item:hover {
    background: #eeeeee;
}
</style>