//1. v-if 和 v-show 有什么区别
// v -
//     if 跟 v - show 都是条件渲染

// v -
//     if 控制元素显示或隐藏把DOM元素整个的渲染或删除， 如果删除， 也就是页面不存在这个DOM元素， 以此达到隐藏的效果；
// 每次切换的时候都会重新创建或者销毁元素， 有效高的切换性能消耗；

// v - show 也是元素显示或隐藏， 无论你的初始条件是什么， 元素都会被渲染， 就是DOM元素始终是存在的， v - show只是通过控制css中的display属性来控制他的显示或隐藏；
// 拥有更高的初始渲染消耗；


//2. v-if 和 v-for  可以一起使用吗，为什么？ 谁的层级更高



//3.vue的生命周期是什么，大概有哪些

// vue的生命周期：
// 1， 生命周期回调函数、 生命周期函数、 生命周期钩子。
// 2， 是什么： Vue在关键时刻帮我们调用的一些特殊名称的函数
// 3， 生命周期函数的名字不可更改， 但函数的具体内容是程序员根据需求编写的。
// 4， 生命周期函数中的this指向的是vm或组件实例对象。

// vm的生命周期：
// 将要创建 === 》调用beforeCreate函数 
// 创建完毕 === 》调用created函数
// 将要挂载 === 》调用beforemount函数
// （重要）挂载完毕 === 》调用mounted函数。  =====》重要的钩子
// 将要更新 ===》 调用beforeUpdate函数
// 更新完毕 ===》 调用updated函数
// 将要销毁 ===》 调用beforeDestroy函数   =====》重要的钩子
// 销毁完毕 ===》 抵用destroyed函数


// 常用的生命周期钩子：
// 1，mounted:发送Ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】
// 2，beforeDestroy:清除定时器、解绑自定义事件，取消订阅消息等【收尾工作】

// 关于销毁Vue实例
// 1，销毁后借助Vue开发者工具看不到任何信息
// 2，销毁后自定义事件会失效，但原生DOM事件依然有效。
// 3，一般不会再BEFORdestroy操作数据，因为即便操作数据，也不会再触发更新流程了。



//4.computed和watch有什么区别？
// computed计算属性能做到的功能，watch也可以做到
// watch能做到的功能，computed不能做到,例如：异步操作
// computed: {
// fullName:{
//     get(){
//         console.log('get值改变了')
//         return this.firstName + '-'+ this.lastName;
//     }
//     set(value){
//         console.log('set值被修改了')
//         const arr = value.split('-')
//         this.firstName[0]
//         this.lastName[1]
//     }
// }

//简写（当你确定是只读不修改的情况下用）
// fullName(){
//     get(){
//         return this.firstName + '-' + this.lastName
//     }
// }

// info(){
//     return this.isHot ?:'炎热':'凉爽'
// }
// }

// watch： {
//     // 'isHot':{
//     //     immediate:true,//初始化时handler调用一下
//     //     handler(newValue,oldValue){
//     //         console.log('handler值被修改了',newValue,oldValue)
//     //     }
//     // }

//      简写
// 'isHot'(newValue,oldValue){
//     console.log('handler值被修改了',newValue,oldValue)
// }

//     firstName(val){
// 异步操作
//         setItemout(() => {
//           return  this.fullName = val + '-' + this.lastName
//         },1000)

//     }
//     lastName(val){
//         this.fullName = this.firstName + '-' +val
//     }
// }


//  computed:{
//     filsperson:{
//         const arr = this.person.filter((p) =>{
//             return p.name.index(this.keyword) !==-1
//         })
//         // 判断排序
//         if(this.sortype){
//             arr.sort((p1,p2) => {
//                 return this.sortype === 1 ? p2.age-p1.age:p1.age-p2.age;
//             })
//         }
//     }
// } 

//5.v-for 为什么要绑定 key值

// key的作用主要是为了高效地更新虚拟DOM， 另外vue中在使用相同标签名元素地过渡切换时，
// 也会用到key属性， 其目的也是为了让vue可以区分他们， 否则， 当数据发生变化时， vue会根据新数据
// 生成新的虚拟DOM， 随后vue进行新虚拟DOM与旧的虚拟DOM的差异比较。


// 1，虚拟DOM中key的作用：
// key是虚拟DOM对象的标识，当数据发生变化时，vue会根据【新数据】生成【新的虚拟DOM】
// 随后vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，

// 用index作为key可能会引发的问题：
// 1，若对数据进行：逆序添加、逆序删除等破坏顺序操作。
// 会产生没有必要的真实DOM更新  ==》界面效果没问题，但效率低

// 2，如果结构中还包含输入类的DOM：
// 会产生错误DOM更新==》界面有问题

// 4，开发中如何选择key?:
// 1，最好使用每条数据的唯一标识作为key,比如id、手机号、身份证，学号唯一值
// 2，如果不存在对数据的逆序添加，逆序删除等破摔顺序操作，仅用于渲染列表用于展示
// 使用index作为key是没有问题的。



//6.什么是组件，组件之间有哪些通信方式
// 组件： 就是实现局部功能代码的资源的集合
// 模块： 向外提供特定功能的js程序


// 组件之间有哪些通信方式:
// 配置项props （父传子）
// 功能：让组件接收外部传过来的数据
// （1）传递数据：
// <Demo name="xxx"></Demo>
// （2）接收数据：
// 第一种方式（只接收）：
// props:['name']

// 第二种方式（限制类型）：
// props:{
//     name:Number
// }

// 第三种方式（限制类型、限制必要性、指定默认值）：
// props:{
//     name:{
//         type:String,//类型
//         required:true,//必要性
//         default:99//默认值
//     }
// }

// 备注：props是只读的，Vue底层会监测你对props的修改，如果进行修改，就会发出警告
// 若业务需求确实需要修改，那么请复制props的内容到data中一份，然后修改data中的数据。


// mixin(混入)：
// 功能：可以把多个组件共用的配置提取成一个混入对象
// 使用方式：
// 第一步定义混合，例如：
// {
//     data(){...},
//     methods:{...}
//     ...
// }

// 第二步使用混入，例如：
// （1）.全局混入：Vue.mixin(xxx)
// （2）.局部混入：mixins:['xxx']


// 插件：
// 功能：用于增强Vue
// 本质：包含install方法的一个对象,install的第一个参数是Vue,第二个以后的参数是插件使用者传递的数据。

// 定义插件：
// 对象.install = function(Vue,options){
//     //1.添加全局过滤器
//     Vue.filter(...)

//     //2.添加全局指令
//     Vue.directive(...)

//     //3.配置全局混入（合）
//     Vue.mixin(...)

//     //4.添加实例方法
//     Vue.prototype.$myMethod = function(){...}
//     Vue.prototype.$myProperty = xxx
// }

// 使用插件:Vue.use()


// scoped样式
// 作用： 让样式在局部生效， 防止冲突。
// 写法： < style scoped > < /style>


// 组件的嵌套

// 第一步创建school组件
// const school = Vue.extend({
//     template: `
//         <div>
//         <h1>学校名称{{name}}</h1>
//         <h1>学校地址{{address}}</h1>
//         </div>
//         `,
//     data() {
//         return {
//             name: '尚硅谷'，
//             address: '上海'
//         }
//     }

// })
// const student = Vue.extend({
//         template: `
//     <div>
//     <h1>学生名字{{name}}</h1>
//     <h1>学生年龄{{age}}</h1>
//     </di>`,
//         data() {
//             return {
//                 name: '尚硅谷'，
//                 address: '上海'
//             }
//         }

//     })

// 第二步注册组件
// compents: {
//         school: school,
//         student: student
//     },

//第三步编写组件标签
//     <school> </school>
//     <student> </student>


// 关于VueComponent:
// 1,school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。

// 2，我们只需要写<school/> 或<school></school>,Vue解析时会帮我们创建school组建的实例对象，
// 即Vue帮我们执行的: new VueComponent(options)

// 3，特别注意：每次调用Vue.extend,返回的都是一个全新的VueComponent!!!!

// 4,关于this的指向
// （1）组件配置中：
// data函数、methods中的函数、watch中的函数、computed中的函数，他们的this均是【VueComponent实例对象】
// （2）new Vue()配置中：
// data函数、methods中的函数、watch中的函数、computed中的函数，他们的this均是【vue的实例对象】


// 5，VueComponent的实例对象，以后简称vc(也可称为：组件实例对象)
// Vue的实例对象，以后简称vm



//7. 终极扩展题： vue是怎么实现数据双向绑定和响应式的？
// 什么是数据劫持？vue2中的响应式存在什么缺点，他是如何弥补这些缺点的？




//8,vue数据的原理
// vue 会监测data中所有层次的数据。

// 2.如何监测对象中的数据
// 通过setter实现监视，且要在new Vue时传入要监测的数据
// （1）对象中后追加的属性，Vue默认不做响应式处理
// （2）如需给后添加的属性做响应，请使用如下API：
//         Vue.set(target.propertyName/index.value)或
//         Vue.$set(target.propertyName/index.value)

// 3.如何监测数组中的数据
// 通过包裹数组更新元素的方法实现，本质就是做了两件事：
// （1），调用原生对应的方法进行更新
// （2），更新解析模板，进而更新页面

// 4.在Vue修改数组中的某个元素一定要用如下方法：
// 1，使用这些API：push()/pop()/shift()/unshift()/splice()/slice()/sort()/reverse()/
// 2，Vue.set()或vm.$set()

// 特别注意：Vue.set() 和 vm.$set()不能给vm或vm的根数据对象添加属性


// v-model三个修饰符：
// lazy 失去焦点再手机数据
// number:输入字符串转为有效数字
// trim:输入首尾空格



// 关于不同版本的Vue：
// 1.vue.js与vue.runtime.xxx.js的区别：
// （1），vue.js是完整版的vue,包含：核心功能+模板解析器。
// （2），vue.runtime.xxx.js是运行版的Vue,只包含：核心功能+没有模板解析器

// 2，因为vue.runtime.xxx.js没有模板解析器，所有不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。


// ref属性
// 1, 被用来给元素或子组件注册引用信息（ id的替代者）
// 2, 应用在html标签上获取的是真实DOM元素， 应用在组件标签上是组件实例对象（ vc)
// 3, 使用方式：
// 打标识： < h1 ref = "xxx" > ...... < /h1>或<School ref = "xxx"></School >
// 获取： this.$refs.xxx



// 组件化编码流程（通用）
// 1，实现静态组件：抽取组件，使用组件实现静态页面

// 2，展示动态数据：
// 2.1.数据的类型、名称是什么？
// 2.2.数据保存在哪个组件？

// 3，交互---从绑定事件监听开始