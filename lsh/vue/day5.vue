//ref属性
1,用来给元素或者子组件注册用户信息（id的替代者）
2,应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
<div id="root">
        <h1 v-text='msg' ref='title'></h1>
        <button @click='show'>获取上方的DOM元素</button>
    </div>
Vue.config.productionTip = false
    new Vue({
        el: '#root',
        data() {
            return {
                msg: '欢迎来到xxx'
            }
        },
        methods: {
            show() {
                console.log(this.$refs.title)
            }
        }
    })

//props配置
让组件接收外部传过来的数据
student组件：
<h2>
学生名字:{{name}}
</h2>
<h2>
学生年龄:{{age}}
</h2>
<button @click = 'show'>加年龄</button>
data(){
    return{
        // 如果要改年龄
        isAge:this.age
    }
},
methods:{
    show(){
        this.isAge++
    }
}
// props:['name','age']//pros优先级更高
// props:
    {
        name:String,
        age:name
    }
// props:
    {
        name:String,
        default:99
        
    }
    {
        age:Number,
        required:true
    }

app父组件
<Sutdent name='李四' :age=18></Student>


//mixin混入
可以把多个组件共用的配置提取成一个混入对象
你有的，我也有，咱们都一样，那么就重新创建一个mixin.js文件
mixin.js:export const hunhe = {
    methods:{
        show(){
            alert(this.name)
        }

    }
}

//student:
引入
import {hunhe} from './mixin'

data:{},
hunhe:[hunhe]

//school:
引入
import {hunhe} from './mixin'

data:{},
hunhe:[hunhe]




//插件
可以用全局过滤器，全局自定义指令，mixin混入，给原型上一个方法(vm和vc都能用)vue.prototype.hello = () => {alert('你好啊')}

使用插件vue.use(plugins)

功能：用于增强Vue
本质：包含install方法的一个对象，install的第一个参数是Vue,第二个以后的参数是
插件使用者传递的数据。
定义插件：
对象.install = function(Vue,options){
    1,添加全局过滤器
    Vue.filter(...)

    2,添加全局指令
    Vue.directive(...)

    3,配置全局混入（合）
    Vue.mixin(...)

    4,添加实例方法
    Vue.prototype.$myMethod = function(){...}
    Vue.prototype.$myProperty = xxx
}
使用插件：Vue.use()


plugins.js：
export default{
    install(value){
        // console.log('@@@',value)
        // 全局过滤器
        vue.filter('myslice',function(value){
            return value.slice(0,4)
        })
        }
    }
}
//slice()返回一个新数组，返回被选中的元素，选择给定的参数start参数开始的元素，end参数决定，但不包括end参数




**nonaid://id全球唯一的字符串**

```
e.target.value(每次触发DOM事件时会产生一个事件对象（也称event对象），此处的参数e接收事件对象。而事件对象也有很多属性和方法，其中target属性是获取触发事件对象的目标，也就是绑定事件的元素，e.target表示该DOM元素，然后在获取其相应的属性值。)
```

```javascript
const obj = {id:nanoid(),title:e.target.value}
```



儿子给父亲传数据，用props的话，先父亲要偷偷的给儿子一个函数，然后儿子用props:接受这个函数，进行传参