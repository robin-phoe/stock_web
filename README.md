#stcok_server


##端口说明:

###/k_line

**描述**：查询绘制日K线的历史数据。  

**请求参数: -POST**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| type  | str    |   Y  |type_option (见下)|
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

需求示例：查询所有monitor类型股票从2021-02-01 到 2021-09-08 的K线数据。

**请求示例：**

```
{  
    type:'monitor',  
    start_date:'2021-02-01',
    end_date:'2021-09-08',
    stock_id:''
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
// id:[id,trade_date,open_price,close_prcie,low_price,high_price,turn_over_rate,point_type,0,0,0]
{  
    "002962":[
       ["002962","2020-01-03",12.1,12.5,11.9,12.9,2.1,"n",0,0,0],
       ["002962","2020-01-04",12.5,12.7,12.1,12.85,2.3,"h",0,0,0],
       ···
      ]
    "002963":[
       ···
      ]
}
```
