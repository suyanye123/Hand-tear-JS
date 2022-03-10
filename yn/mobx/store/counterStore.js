//使用方法
// 1.安装 mobx 和 mobx-react-lite (只针对函数式组件)
// 2.引入

import { makeAutoObservable } from "mobx";

class Counter {
  //1.定义数据
  count = 0;
  list = [1, 2, 3, 4, 5, 6];
  //2.响应式处理
  constructor() {
    makeAutoObservable(this, { filterList: computed }); //做一个标记告诉mobx这个是计算属性
  }
  //3.定义action
  addCount = () => {
    this.count++;
  };
  addList = () => {
    this.list.push(7, 8, 9);
  };
  //计算属性
  get filterList() {
    return this.list.filter((item) => item > 2);
  }
}
//4.实例化并导出
let counterStore = new Counter();
export default counterStore;
