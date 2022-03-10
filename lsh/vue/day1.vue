//数组有哪些方法，怎么用
pop() push() shift() unshift() resever() slice() splice() filter() 

//watch computed怎么用
computed 计算属性，读取已有的属性，利用Object.difine的对象的getter,setter属性
优势：跟methos相比，内有缓存机制，效率高，方便复用
什么调用：1，初次读取的时候调用，2，依赖的数据发生变化的时候调用
<!--<template>
  <div>
    姓：<input type="text" v-model="firstName"><br><br>
    名：<input type="text" v-model="lastName"><br><br>
    全名：<div>{{fullName}}</div>
  </div>
</template>
<script>
export default {
  data: {
      firstName: '三',
      lastName: '张',
      

  },
  methods: {

  },
  // computed: {
  //   fullName: {//当有人读取fullName时，get()就会被调用，返回值作为fullName的值
  //     get() {
  //       return this.firstName + "-" + this.lastName
  //     },
  //     set(value) {//当修改set()属性时，fullName才会被调用
  //       const arr = value.split('-')
  //       this.firstName = arr[0],
  //         this.lastName = arr[1]
  //     }
  //   }
  // },

  //简写 当只考虑读取，不考虑修改的时候，用简写
  computed: {
    fullName() {
      return this.firstName + '-' + this.lastName
    }
  }

}
</script>-->

//天气案例，用computed来实现
<template>
  <div>
    <h2>今天天气很{{ info }}</h2>
    <button @click="changeClick">按钮</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHot: flase,
    };
  },
  methods: {
    changeClick() {
      this.isHot = !this.isHot;
    },
  },
  computed: {
    info() {
      //用三元运算符来判断天气炎热还是凉爽,记住，一定要获取你要的数据，this.isHot而不是isHot = true
      return this.isHot ? "炎热" : "凉爽";
    },
  },
};
</script>


//watch 监视数据变化，监视已有的属性的
有两种写法，可以通过watch来写，也可以通过vm.$watch写法
watch:{//watch也是一个对象
  info:{
    immediate:true//初始化时让handle调用一下
    handler(newValue,oldValue){//当info属性发生变化时，handler被调用
      console.log('info属性被修改了',newValue,oldValue)
    }
  }
}

//通过vm 来实现监视
//需要注意的是，当用vm.$watch来实现监视的时候，一定要写在vue的最外面，并且'isHot',{}监视这个属性的时候，一定要加大括号

vm.$watch('isHot',{
  immediate:true
  handler(newValue,oldValue){
    console.log('isHot被修改了',newValue,oldValue)
  }
})