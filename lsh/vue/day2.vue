//computed watch的区别
computed能完成的功能，watch也能完成
watch能完成的功能，computed不一定能完成，例如：异步操作
vue管理的函数，最好写成普通函数，
不是vue管理的函数(promise回调函数，ajax回调函数，定时器回调函数)，最好写成箭头函数
<template>
  <div id="root">
    姓：<input type="text" v-model="firstName" /><br /><br />
    名：<input type="text" v-model="lastName" /><br /><br />
    全名：
    <div>{{ info }}</div>
  </div>
</template>

<script>
Vue.config.productionTip = false; //阻止vue生产提示
const vm = new Vue({
  el: "#root",
  data: {
    firstName: "张",
    lastName: "三",
    fullName: "",
  },
  //   computed: {
  //     fullName: {
  //       get() {
  //         return this.firstName + "-" + this.lastName;
  //       },
  //     },
  //   },
  watch: {
    firstName(val) {
      this.fullName = val + "-" + this.lastName;
    },
    lastName(val) {
      this.fullName = this.lastName + "-" + val;
    },
  },
});
</script>

//class样式绑定
<div id="root">
        //绑定样式，字符串写法，适用于：样式类名不确定，需要动态指定来选择
        <div class="basic" :class='a' @clcik='change'>{{name}}</div>

        //绑定样式,数组写法，适用于：样式个数不确定，名字也不确定
        <div class="basic" :class='classArr'>{{name}}</div>
        //绑定样式,对象写法，适用于：样式个数确定，名字也确定，但要动态绑定
        <div class="basic" :class='classArr'>{{name}}</div>
    </div>
new Vue({
        el: '#root',
        data:{
                name: '尚硅谷',
                a: 'normal',
                // classArr:['atguigu1','atguigu2','atguigu3']
                classArr: {
                    atguigu1: false,
                    atguigu2: false,
                } 
            
        },
        methods: {
            change() {
                this.a = 'happy'
            }
        }
    })
//style样式绑定
//style绑定样式,对象写法
<div class="basic" :style='ArrObj'></div>

//style绑定样式,数组写法
<div class="basic" :style='Arr'></div>

ArrObj: {
      fontSize: '40px',
      color: 'red'
},
ArrObj1: {
      backgroundColor: 'orange'
},
      Arr: ['ArrObj', 'ArrObj1']


//条件渲染
v-if v-show的区别
相同点：都是条件渲染
不同点：v-if渲染会移除整个dom节点，而v-show不会移除整个dom节点，仅仅是是隐藏起来

//列表渲染
<!-- v-for:遍历数据列表， v-for="（item,index） of xxx" :key="xxx" 可以遍历数组，字符串，对象，指定次数-->
        <!-- 遍历数组 -->
        <ul v-for="(list,index) of person" :key="index.id">
            <li>{{list.name}}==={{index}}</li>
        </ul>

        <!-- 遍历对象 需要注意的是，因为arr只写了一个对象，所以{{arr}}只写arr-->

        <ul v-for="(arr,index) of arr" :key="index.id">
            <li>{{arr}}==={{index}}</li>
        </ul>
        <!-- 遍历字符串 -->
        <ul v-for="(item,index) of item" :key="index.id">
            <li>{{item}}==={{index}}</li>
        </ul>
        <!-- 遍历次数 -->
        <ul v-for="(item,index) of 5" :key="index.id">
            <li>{{item}}==={{index}}</li>
        </ul>

        person: [{
                    id: '001',
                    name: '张三',
                    age: 16
                }, {
                    id: '002',
                    name: '张四',
                    age: 16
                }, {
                    id: '003',
                    name: '张五',
                    age: 16
                } ],
                arr: {
                    id: '001',
                    name: '张三',
                    age: 18
                },
                item: 'hello'


// 为什么v-for 要写key
key的主要作用就是更高效地更新虚拟DOM，另外也是为了能让vue更好的区分他们，最好使用每条数据作为唯一标识的key,比如id,学号等等
如果不写key,当数据发生变化，vue中会根据数据形成虚拟DOM，然后新的虚拟DOM跟旧的虚拟DOM进行差异比较，

<ul v-for="(arr,index) of arr" :key="index.id">
     <li>{{arr}}==={{index}}</li>
</ul>
person: [{
                    id: '001',
                    name: '张三',
                    age: 16
                }, {
                    id: '002',
                    name: '张四',
                    age: 16
                }, {
                    id: '003',
                    name: '张五',
                    age: 16
        } ],

        methods: {
            btnClick() {
                const p = {
                    id: '004',
                    name: '里斯',
                    age: 18
                }

                this.person.unshift(p)
            }
        }