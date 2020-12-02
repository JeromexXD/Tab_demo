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
];
// MAPPING 关联 映射
 var sex = [
  {"id": "1","sex": "male"},
  {"id": "2","sex": "female"}
 ];
 sort -> sex
 data -> users
 foreign_key -> 'sex'
 sortTyoe -> 'single'
```
##### 复合归类
```
var hobby = [
  {"id":"1","name":"LoL"},
  {"id":"2","name":"eat"},
  {"id":"3","name":"drink"},
  {"id":"4","name":"play"},
  {"id":"5","name":"sleep"},
  {"id":"6","name":"study"}
 ];
var person = [
  {"name":"zdr","hobby":"1,2,5"},
  {"name":"mmg","hobby":"1,2,5"},
  {"name":"ccg","hobby":"2,4,6"},
  {"name":"xxg","hobby":"1,4"},
  {"name":"jjg","hobby":"1,2,3,6"},
  {"name":"hhg","hobby":"1,3,4,6"}
];
sort -> hobby
 data -> person
 foreign_key -> 'hobby'
 sortTyoe -> 'multi'
```
