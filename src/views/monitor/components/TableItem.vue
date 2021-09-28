<template>
  <div class="table-item">
       <div class="table-cell">
           {{itemInfo.name}}
        </div>
        <div class="table-cell">
            {{itemInfo.id}}
        </div>
        <div class="table-cell" >
           {{itemInfo.grade}}
        </div>
        <div class="table-cell">
            {{itemInfo.price}}
        </div>
        <div class="table-cell" :class="itemInfo.increase>=0?'red':'green'">
           {{itemInfo.increase}}
        </div>
        <div class="table-cell cell-chart">
            <line-c :x_data="itemInfo.grade_arr.x_axis" :color="itemInfo.increase>=0?'red':'green'" :y_data="itemInfo.grade_arr.data"></line-c>
        </div>
        <div class="table-cell cell-chart">
            <line-c :x_data="itemInfo.line_arr.x_axis" :color="itemInfo.increase>=0?'red':'green'" :y_data="itemInfo.line_arr.data"></line-c>
        </div>
        <div class="table-cell cell-chart">
           <moni :e_data="itemInfo.k_arr"></moni>
        </div>
        <div class="table-cell">
            {{itemInfo.bk}}
        </div>
        <div class="table-cell" :class="itemInfo.bk_increase>=0?'red':'green'">
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
        <div class="table-cell" :class="itemInfo.hot_concept_increase>=0?'red':'green'">
            {{itemInfo.hot_concept_increase}}
        </div>
        <div class="table-cell">
            {{itemInfo.monitor_type}}
        </div>
  </div>
</template>

<script>
import LineC from './Line.vue'
import Moni from './moni.vue'

export default {
     components: {
        LineC,
        Moni
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
        margin: 3px 0;
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
.red {
    color: red;
}
.green {
    color: rgb(0, 255, 0);
}
.table-item:hover {
    background: #eeeeee;
}
</style>