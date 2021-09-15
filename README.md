#stcok_server  

**原型图**  
![Image text](https://github.com/robin-phoe/stock_server/blob/master/data_image/%E5%8E%9F%E5%9E%8B%E5%9B%BE(%E4%B8%BB%E9%A1%B5%E9%9D%A2).png)  
说明文档图片资料在data_image文件夹下  

##端口说明:

###/k_line

**描述**：查询绘制日K线的历史数据。  

**日K完整图例子：**  
![Image text](https://github.com/robin-phoe/stock_server/blob/master/data_image/%E6%97%A5k%E7%BA%BF%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B.png)  
图中上部为股票K线图，黑色虚折线为涨跌趋势线，使用point_type参数绘制，在转折日标点连接。  
图中下部柱状图为股票换手率，turn_over_rate参数。
（echarts代码参看 /example_code/K_line.html ）  

**请求参数: -POST**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| type  | str    |   Y  |type_option (见下)|
|target| str |   N |'YYYY-mm-dd',查询指定日期的监控结果，监控类type必填，None为最后交易日|
|start_date| str |   Y |k线数据查询起始日期 'YYYY-mm-dd'(包含当日)|
|end_date| str |   Y |k线数据查询截至日期 'YYYY-mm-dd'(包含当日)|
|stock_id| str |   N |股票编号，当type为'single'时必填,eg:'002963'|

type_option：

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| all  | str    |   N  |查询全部股票的K线数据|
|single| str |   N |查询单个股票的K线数据|
| monitor  | str    |   N  |查询全部监控股票的K线数据（retracement,single_limit···是monitor 的子集）|
|retracement| str |   N |查询热门回撤类中所有股票的K线数据|
|single_limit| str |   N |查询单涨停回撤类中所有股票的K线数据|

需求示例：查询最后一个交易日所有monitor类型股票从2021-02-01 到 2021-09-08 的K线数据。

**请求示例：**

```
{  
    "type:"monitor",  
    "traget_date":"None" #有监控结果的最后一日  
    "start_date":"2021-02-01",
    "end_date":"2021-09-08",
    "stock_id":""
}
```

**回报参数：**  

|  参数名 | 类型 | 说明 |
|  ----  | ----  | ---- |
| id          | str    |股票编号|
| trade_date  | str    |日期 'YYYY-mm-dd'|
| open_price  | float    |开盘价|
| close_prcie | float    |收盘价|
| low_price   | float    |当日最低价|
| high_price  | float    |当日最高价|
| turn_over_rate | float |当日换手率|
| point_type  | str    |趋势辅助线描点，'h':高点,'l':低点,'n':无|
| 0  | float    |占位|
| 0  | float    |占位|
| 0  | float    |占位|

**回报示例：**

```
// id:[id,trade_date,open_price,close_price,low_price,high_price,turnover_rate,point_type,0,0,0]
{
    "code":"200",
    "message":"请求成功",
    "data":{  
        "002962":[
           ["002962","2020-01-03",12.1,12.5,11.9,12.9,2.1,"n",0,0,0],
           ["002962","2020-01-04",12.5,12.7,12.1,12.85,2.3,"h",0,0,0],
           ···
          ]
        "002963":[
           ···
          ]
        }
}
```

###/algo_monitor  

**描述**：获取实时的监控变动数据。  

**请求参数: -POST**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| type  | str    |   Y  |{监控:"monitor", 热门回撤:"retracement", 单涨停回撤："single_limit"}|
|target| str |   Y |'YYYY-mm-dd',查询指定日期的监控结果，None为最后交易日|

需求示例：请求最后交易日所有监控类中股票的algo信息（股票横栏中信息）
**请求示例：**

```
{  
    "type:"monitor",  
    "traget_date":"None" #有监控结果的最后一日  
}
```

**回报参数：**  

|  参数名 | 类型 | 说明 |
|  ----  | ----  | ---- |
| id          | str    |股票编号|
| name  | str    |股票名称|
| grade  | float    |当前分数|
| price | float    |当前价|
| increase   | float    |当前涨幅|
| bk  | str    |板块|
| bk_increase | float |板块当前涨幅|
| bk_sort  | int    |板块在所有板块中排名|
| in_sort  | int    |股票在当前板块中排名|
| concept  | str    |热门概念(股票所有概念中涨幅最高的概念)|
| concept_increase | float    |热门概念当前涨幅|
| monitor_type | str    |监控的类型|

**回报示例：**

```
{
    "code":"200",
    "message":"请求成功",
    "data":{  
        "003853":{
                "id":"003853",
                "name":"洪都航空",
                "grade":105.1,
                "price":39.5,
                "increase":9.0,
                "bk":"航空航天",
                "bk_increase":3.25,
                "bk_sort":2,
                "in_sort":5,
                "concept":"大飞机",
                "concept_increase":5,
                "monitor_type":"热门回撤",
            }
        "002963":{
                ···
            }
        }
}