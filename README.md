# stock_server
前端页面及后台程序(不包括数据获取、策略计算)，包括web、后台(行情、盘中计算)

端口说明

描述：查询绘制日K线的历史数据。
k_line

请求参数：

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| type  | str    |   Y  |type_option (见下)|
|start_date| str |   Y |k线数据查询起始日期 'YYYY-mm-dd'(包含当日)|
|end_date| str |   Y |k线数据查询截至日期 'YYYY-mm-dd'(包含当日)|
|stock_id| str |   N |股票编号，当type为'single'时必填|

type_option：

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| all  | str    |   N  |查询全部股票的K线数据|
|single| str |   N |查询单个股票的K线数据|
| monitor  | str    |   N  |查询全部监控股票的K线数据（retracement,single_limit···是monitor 的子集）|
|retracement| str |   N |查询热门回撤类中所有股票的K线数据|
|single_limit| str |   N |查询单涨停回撤类中所有股票的K线数据|

回报参数：



需求示例：查询所有monitor类型股票从2021-02-01 到 2021-09-08 的K线数据。

请求示例：

{
    type:'monitor',
    start_date:'2021-02-01',
    end_date:'2021-09-08',
    stock_id:''
}





