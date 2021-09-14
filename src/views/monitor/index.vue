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
        <el-table
          :data="tableData"
          ref="table"
          border
          :height="tableHeight"
          style="width: 100%;">
          <el-table-column
            fixed
            type="index"
            :index="indexMethod">
          </el-table-column>
          <el-table-column
            prop="date"
            label="名称"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="ID"
            width="120">
          </el-table-column>
          <el-table-column
            prop="province"
            label="分数"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="价格"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="涨幅"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="分时图"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="content-right">
        <div class="charts-item">
          <ChartsItem />
        </div>
        <div class="charts-item">
          <ChartsItem />
        </div>
        <div class="charts-item">
          <ChartsItem />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
let timer
import {test} from '@/api/monitor/index'
import ChartsItem from './components/ChartItem.vue'
export default {
  components: {
    ChartsItem
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
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
    }
  },
  mounted(){
    test().then(res=>{
      console.log(res)
    })
    // if(this.tableData.length < 50){
    //   timer = setInterval(()=>{
        
    //       if(this.tableData.length < 50){
    //         this.tableData.push({
    //           date: '2016-05-03',
    //           name: '王小虎',
    //           province: '上海',
    //           city: '普陀区',
    //           address: '上海市普陀区金沙江路 1516 弄',
    //           zip: 200333
    //         })
    //       }else{
    //         clearInterval(timer)
    //       }
    //   }, 10)
    // }
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
      flex: 1;
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
  
</style>