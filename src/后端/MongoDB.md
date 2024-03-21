:::info
之前的个人项目所使用的mongodb的语法
:::

| **语法** | **描述** |
| --- | --- |
| mongo http:.... | 连接远程服务器 |
| use shop | 新建数据库 |
| db.table.find({"name":/东/})（实际是正则匹配） | 模糊查询 |
| db.table.find({}, {age: 20}) // 只查age | 指定查询（只返回一种） |
| db.table.find({}).sort({age: 1[-1]}) | 升降序(1是升-1是降) |
| db.table.find().limit(5)查询前5条 | 指定查询范围 |
| db.collection.update({}, {$set: {otherkey: ‘otherval’}}, {multi: 1}) | 插入多条 |
| db.table.find().skip(2).limit(4) 查询3、4跳 | 跳过几条查询 |
| db.col.find({$or: [{key1: value1}, {key2:value2}]}).pretty() | or 或者查询 |
| db.table.find().limit(5).count() | count() 数量 |
| db.col.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}}) | 更新数据 |
| db.test.find().explain("executionStats") | 分析查询的时间等数据 |
| db.table.getIndexes()获取db.table.createIndex({name: 1})设置，可以同是设置多个 | 设置索引可以极大提升查询的速度 |
| db.createUser({user:'admin',pwd:'123456',roles:[{role:'root',db:'admin'}]})show users 查看用户 | 设置管理员 |
| db.test.aggregate([{$lookup:{ // lookuo可以多次使用from:'order_item'，//表名localField:''//当前表的字段foreignField:''//关联表的字段as:''//查询之后的键名}}]) | loopup 关联查询 |
| project:{order_id:1}}//只查询这个]) | ggregate 聚合管道 |
| db.test.aggregate([{![](https://g.yuque.com/gr/latex?project%3A%7Border_id%3A1%7D%7D%EF%BC%8C%0A%7B#card=math&code=project%3A%7Border_id%3A1%7D%7D%EF%BC%8C%0A%7B&id=XXnPz)match:{order:{$gte:'2'}}}]) | match 查询符合条件的字段 |


:::info
封装model静态方法以及校验参数
:::

![](/images/backend/yuque_diagram.jpg)

