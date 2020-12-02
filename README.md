# Tab_demo
  因为大多时候后端传回来的数据不是很好用,所以运用了偏函数的思想封装了一个归类数据的函数。
  做了一个Tab切换来测试
#### sortDatas函数的参数配置
   * sort 以什么归类
   * data 要归类的数据
   * foreign_key 关联的字段
   * sortType 归类模式 single（单一） multi（复合）
#### 归类模式
##### 单一归类
```
 var users = [
       {"id": "1","name": "zdr", "sex": "1"},
       {"id": "2","name": "xy", "sex": "2"},
       {"id": "3","name": "yzh", "sex": "1"},
       {"id": "4","name": "yym", "sex": "2"}
    ]
    // MAPPING 关联 映射
    var sex = [
       {"id": "1","sex": "male"},
       {"id": "2","sex": "female"}
    ]
```
