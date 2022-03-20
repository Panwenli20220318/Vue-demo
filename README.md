# Vue-demo
基于Vue写得小案例：计数器、图片切换、记事本、天气查询

### 1.计数器
分析：

1. data中定义数据:比如num

2. methods中添加两个方法:比如add(递增),sub(递减)

3. 使用v-text将num设置给span标签

4. 使用v-on将add,sub分别绑定给+,-按钮

5. 累加的逻辑:小于10累加,否则提示

6. 递减的逻辑:大于0递减,否则提示

![1.gif](https://s2.loli.net/2022/03/20/e7uD4IQjXlKsVnL.gif)


### 2.图片切换
分析：

1. 定义图片数组
2. 添加图片索引
3. 绑定src属性
4. 图片切换逻辑

![2.gif](https://s2.loli.net/2022/03/20/rnLElUogR4cmy1k.gif)



### 3.记事本
功能分析：

- 新增
  1. 生成列表结构(v-for 数组)
  2. 获取用户输入(v-model)
  3. 回车,新增数据(v-on.enter 添加数据)

- 删除

    点击删除指定内容(v-on splice 索引)

- 统计

    统计信息个数(v-text length)

- 清空

    点击清除所有信息(v-on 清空数组)

- 隐藏

    没有数据时,隐藏元素(v-show v-if 数组非空)

![1.gif](https://s2.loli.net/2022/03/20/CILN3Bvmxw4khKr.gif)



#### 4.天气查询（vue+axios）

- 回车查询
- 点击查询

  ![1.gif](https://s2.loli.net/2022/03/20/j4YlStDhBTCQEMi.gif)







