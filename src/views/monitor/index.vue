<template>
  <div class="monitor-wrapper">
    <el-button-group>
      <el-button icon="el-icon-edit">全部</el-button>
      <el-button icon="el-icon-share">热门回撤</el-button>
      <el-button icon="el-icon-delete">单涨停回撤</el-button>
      <el-button icon="el-icon-delete">热门波形</el-button>
      <el-button icon="el-icon-delete">热门小波形</el-button>
    </el-button-group>
    <el-divider content-position="left"></el-divider>
    <div class="monitor-content">
      <div class="content-left">
          <div class="table-item table-head">
            <div class="table-cell">
                name
            </div>
            <div class="table-cell">
               id
            </div>
            <div class="table-cell">
                分数
            </div>
            <div class="table-cell">
                价格
            </div>
            <div class="table-cell">
                涨幅
            </div>
            <div class="table-cell cell-chart">
                分数图
            </div>
            <div class="table-cell cell-chart">
                分时图
            </div>
            <div class="table-cell cell-chart">
                日K
            </div>
            <div class="table-cell">
                板块
            </div>
            <div class="table-cell">
                板块涨幅
            </div>
            <div class="table-cell">
                板块排名
            </div>
            <div class="table-cell">
                板块内排名
            </div>
            <div class="table-cell">
                热门概念
            </div>
            <div class="table-cell">
                概念涨幅
            </div>
            <div class="table-cell">
                监控类型
            </div>
          </div>
          <div class="table-center">
            <div class="grade-cell">
              <div class="grade-title" @click="is_show_grate = !is_show_grate">
                <p>大于100</p>
                <i class="el-icon-arrow-right" :class="is_show_grate?'trans':''"></i>
              </div>
              <div class="grade-center" v-if="is_show_grate">
                  <div v-for="(item) in grate" :key="item.id">
                    <table-item :itemInfo="item"></table-item>
                  </div>
              </div>
            </div>
            <div class="grade-cell">
              <div class="grade-title" style="background:#fdf6ec" @click="is_show_good = !is_show_good">
                <p>90~100</p>
                <i class="el-icon-arrow-right" :class="is_show_good?'trans':''"></i>
              </div>
              <div class="grade-center" v-if="is_show_good">
                  <div v-for="(item) in good" :key="item.id">
                    <table-item :itemInfo="item"></table-item>
                  </div>
              </div>
            </div>
            <div class="grade-cell">
              <div class="grade-title"  style="background:#f4f4f5" @click="is_show_nomal = !is_show_nomal">
                <p>70~90</p>
                <i class="el-icon-arrow-right" :class="is_show_nomal?'trans':''"></i>
              </div>
              <div class="grade-center" v-if="is_show_nomal">
                  <div v-for="(item) in nomal" :key="item.id">
                    <table-item :itemInfo="item"></table-item>
                  </div>
              </div>
            </div>
            <div class="grade-cell">
              <div class="grade-title" style="background:#f0f9eb" @click="is_show_notPass = !is_show_notPass">
                <p>小于70</p>
                <i class="el-icon-arrow-right" :class="is_show_notPass?'trans':''"></i>
              </div>
              <div class="grade-center" v-if="is_show_notPass">
                  <div v-for="(item) in notPass" :key="item.id">
                    <table-item :itemInfo="item"></table-item>
                  </div>
              </div>
            </div>
          </div>
          
      </div>
      <!-- <div class="content-right">
        <div class="charts-item">
          <ChartsItem />
        </div>
        <div class="charts-item">
          <ChartsItem />
        </div>
        <div class="charts-item">
          <ChartsItem />
        </div>
      </div> -->
    </div>
    
  </div>
</template>

<script>
let timer
import GetInfo from '@/api/monitor/index'
import ChartsItem from './components/ChartItem.vue'
import TableItem from './components/TableItem.vue'
import Line from './components/Line.vue'

export default {
  components: {
    ChartsItem,
    TableItem,
    Line
  },
  methods:{
    handleClick(row) {
      console.log(row);
    },
    indexMethod(index){
      return index
    }
  },
  data(){
    return {
      tableHeight: 100,
      grate:[],
      is_show_grate:false,
      good:[],
      is_show_good:false,
      nomal:[],
      is_show_nomal:false,
      notPass:[],
     is_show_notPass:false
    }
  },
  mounted(){
    
    let updata = {  
      type:"monitor",  
      target_date:"None" 
    }
     GetInfo.get_info(updata).then(async (res)=> {
      let data = res.data.data
      let info = {
        type:"monitor",  
        target_date:"None" ,
      }
      let line_data = ''
      await GetInfo.get_line(info).then(re => {
          line_data = re.data.data
      })
      let info2 = {
        start_date:'2021-8-25',
        end_date:'2021-9-25',
        ...info
      }
      await GetInfo.get_k(info2).then(re => {

      })
      let grade_arr = ''
      await GetInfo.get_grade(info).then(re => {
        grade_arr = res.data.data
      })
      console.log(line_data,grade_arr)
      data.forEach(item => {
        item.grade_arr = grade_arr[item.id]
        item.line_arr = line_data[item.id]
         if(item.grade > 100) {
           this.grate.push(item)
         } else if( item.grade >= 90) {
           this.good.push(item)
         } else if( item.grade >= 70) {
           this.nomal .push(item)
         }else {
           this.notPass.push(item)
         }
       })
      console.log(this.grate)
    })
    this.$nextTick(() =>{
      // 根据浏览器高度设置初始高度
      this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 70
      // 监听浏览器高度变化，改变表格高度
      window.onresize = () =>{
        this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 70
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .monitor-wrapper {
    padding: 10px 10px;
    box-sizing: border-box;
  }
  .monitor-content {
    height: calc(100vh - 200px);
    width: 100%;
    display: flex;
    .content-left{
      // flex: 1;
      width: 100%;
    }
    .content-right {
      width: 400px;
      background: #fff;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
    }
    .charts-item {
      width: 100%;
      border: 1px solid #ccc;
      background: #fff;
      flex: 1;
      margin-bottom: 10px;
    }
  }
  .table-item {
    width: 100%;
    .table-cell {
        width: 100px;
        height: 60px;
        display: inline-block;
        line-height: 60px;
        text-align: center;
    }
    .cell-chart {
      width: 200px;
    }
  }
  .table-center {
    height: calc(100% - 100px);
    overflow-y: auto;
  }
  .grade-cell {
    width: 100%;
    // height: 40px;
    display: block;
    cursor: pointer;
    line-height: 40px;
    margin: 5px 0;
    .grade-title {
      width: 100%;
      position: sticky;
      top: 0;
      display: flex;
      background: #fef0f0;
      justify-content: space-between;
      align-items: center;
      p {
        margin-left: 20px;
      }
      >i {
        margin-right: 20px;
        transition: 0.5s;
      }
    }
    .grade-center{
      width: 100%;
       transition: 1s;
    }
  }
  .trans {
    transform:rotate(90deg);
  }
</style>