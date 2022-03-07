//列表过滤，怎么做
应用了filter()方法，filter()方法创建一个新的数组，新数组中的元素通过检查指定数组中符合条件的所有元素（不会改变原数组）
indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。

//用watch侦听属性
<h2>人员列表</h2>
        <input type="text" v-model='keyword'>
        <!-- 记住要将of 后面的数组改成personfile空数组 -->
        <ul v-for='(list,index) of personfile' :key='index'>
            <li>
                {{list.name}}---{{list.age}}
            </li>
        </ul>
data: {
            keyword: '',
            person: [{
                id: '001',
                name: '马冬梅',
                age: 18
            }, {
                id: '001',
                name: '周冬雨',
                age: 28
            }, {
                id: '001',
                name: '周杰伦',
                age: 38
            }, {
                id: '001',
                name: '张一三',
                age: 68
            }, ],
            personfile: []
        },
// watch: {//如果不写personfile的空数组的话，那么没写一个就会减少一个
     keyword(val) {
     console.log('val被修改了', val)
     this.personfile = this.person.filter((p) => {
      return p.name.indexOf(val) !== -1
     })
    }
}

//用computed方法来完成
computed:{
    personfile(){
        return this.personfile = this.person.filter((p) => {
       return p.name.indexOf(this.keyword) !== -1
      })
    }
}


//列表排序
<div id="root">
        <h2>人员列表</h2>
        <input type="text" v-model='keyword'>
        <button @click='sortype = 2'>升序</button>
        <button @click='sortype = 1'>降序</button>
        <button @click='sortype = 0'>原顺序</button>
        <!-- 记住要将of 后面的数组改成personfile空数组 -->
        <ul v-for='(list,index) of personfile' :key='index'>
            <li>
                {{list.name}}---{{list.age}}
            </li>
        </ul>
    </div>

computed: {
            personfile() {//这个声明变量，然后写在下面作为判断arr.sort
                const arr = this.person.filter((p) => {
                    return p.name.indexOf(this.keyword) !== -1
                })
                if (this.sortype) {
                    arr.sort((a, b) => {
                        return this.sortype === 1 ? b.age - a.age : a.age - b.age
                    })
                }
                return arr
            }
        }


//vue.set()

<div id="root">
        <h2>学校信息</h2>
        <h4>学校名称：{{name}}</h4>
        <h4>学校地址：{{address}}</h4>
        <h4>校长是：</h4>
        <hr>
        <h2>学生信息</h2>
        <button @click="addSex">添加一个性别属性，默认值是男</button>
        <h4>姓名：{{sutdent.name}}</h4>
        <h2 v-if="sutdent.sex">性别:{{sutdent.sex}}</h2>
        <h4>年龄：真实{{sutdent.ager.age1}}，对外29{{sutdent.ager.age2}}</h4>
        <h4>朋友们</h4>
        <h5 v-for='(list,index) in sutdent.frient' :key='index'>
            {{list.name}} --- {{list.age}}
        </h5>
    </div>
    data: {
            name: '尚硅谷',
            address: '北京',
            sutdent: {
                name: 'tom',
                sex: '',
                ager: {
                    age1: 40,
                    age2: 29
                },
                frient: [{
                    name: 'jerry',
                    age: 35
                }, {
                    name: 'tony',
                    age: 36
                }]
            }
        },
        methods: {
            addSex() {
                // Vue.set(this.sutdent, 'sex', '男')
                this.$set(this.sutdent, 'sex', '男')
            }
        }

//vue监测的数据，
vue能够监测data层所有的数据

vue监测对象中的数据
    对象后添加的属性，vue是不做响应式处理的
vue监测数组中的数据

//过滤器
对要显示的数据进行特殊格式化后再显示（是用于一些简单的处理）
注册过滤器 new Vue({filters:{}}),或者Vue.filter(name,callback)
使用过滤器  {{xxx | 过滤器名}} v-bind:属性='xxx | 过滤器名'

<div id="root">
        <h2>显示格式化的时间</h2>
        <!-- 用计算属性实现 -->
        <h3>现在是：{{fmtime}}</h3>
        <!-- 用方法属性实现 -->
        <h3>现在是：{{getfmtime}}</h3>
        <!-- 用过滤器实现 -->
        <h3>现在是：{{time | timeformat}}</h3>
        <!-- 用过滤器(传参)实现 -->
        <h3>现在是：{{time | timeformat('YYYY_MM_DD') | mysilce}}</h3>
        <h3>现在是：{{msg | mysilce') | mysilce}}</h3>
    </div>

Vue.config.productionTip = false
        //全局过滤器
    Vue.filter('myslice', function(val) {
        return val.slice(0, 4)
    })
    new Vue({
        el: '#root',
        data: {
            time: 1621561377603,
        },
        computed: {
            fmtime() {
                return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
            }
        },
        methods: {
            getfmtime() {
                return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
            }
        },
        filters: {
            timeformat(val, str = 'YYYY年MM月DD日 HH:mm:ss') {
                // console.log('@', value)
                return dayjs(val).format(str)
            },
            mysilce(value) {
                return value.slice(0, 4)
            }
        }

    })


//v-text指令 (内置指令，就是作者给我们做好了，我们用就行)
会在其所在的文档渲染内容，跟{{}}的区别就是会替换其所在的文本内容，而{{}}不会，
<h2 v-text='msg'></h2>

//v-html 会在其所在的文档渲染包含html结构，会替换其所在的文本内容，存在一定的安全性
//v-once 初次渲染动态页面后，转为静态
//v-pre  跳出其所在的页面编程，
//v-clock   没有值，本质是一个特殊指令，跟css配合使用，解决页面闪烁问题

//自定义指令-函数
定义一个v-big指令，和v-text功能类似，单会把绑定的数值放大10倍
//全局定义函数
    Vue.directive('big', function(element, binding) {
        console.log('big')
        element.innerText = binding.value * 10
    }, )
<div id="root">
        <h2>当前的值是：<span v-text="n"></span></h2>
        <h2>放大10倍的值：<span v-big="n"></span></h2>
        <button @click='n++'>点我加1</button>
    </div>
data: {
    n: 10
      },
    directives: { //big函数什么时候调用？1，当指令跟元素成功绑定时（一上来），2，指令所在的模板重新解析时
    big(element, binding) {
        console.log('big')
        element.innerText = binding.value * 10
      }
      }

//v-fbind,跟v-bind有些类似，不同的是，可以让其所绑定的input默认获取焦点
//全局定义对象
        // Vue.directive('fbind', { //vue会帮我们解析这些函数
        //     //1，当指令跟元素成功绑定时（一上来）
        //     bind(element, binding) {
        //         element.value = binding.value * 10
        //     },
        //     //2，指令所在元素插入页面时
        //     inserted(element, binding) {
        //         element.focus()
        //     },
        //     //3，指令所在的模板重新解析时
        //     update(element, binding) {
        //         element.value = binding.value * 10
        //     }
        // })
fbind: { //vue会帮我们解析这些函数
                //1，当指令跟元素成功绑定时（一上来）
                bind(element, binding) {
                    element.value = binding.value * 10
                },
                //2，指令所在元素插入页面时
                inserted(element, binding) {
                    element.focus()
                },
                //3，指令所在的模板重新解析时
                update(element, binding) {
                    element.value = binding.value * 10
                }
  }


//生命周期
mounted://vue完成模板的解析并把初始的真实DOM放入页面后（挂载完毕）调用mounted
mounted() { //vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
                setInterval(() => {
                    vm.opacity -= 0.01
                    if (vm.opacity <= 0) vm.opacity = 1
                }, 16);
            }

//组件
就是局部实现特定功能代码的集合
模块就是js文件

//非单文件组件：一个文件包含n个组件
//单文件组件：一个文件只包含1个组件
