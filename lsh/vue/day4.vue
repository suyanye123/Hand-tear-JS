//组件，跟嵌套组件怎么用
//一个重要的内置关系，VueComponent.prototype.__proto__ ===Vue.prototype
//什么要有这个关系：让组件的实例对象可以访问到vue的属性和方法
    <div id="root">
        <!-- 使用组件 -->
        <School></School>
    </div>
    Vue.config.productionTip = false
    const student = Vue.extend({
            name: 'student',
            template: `
        <div>
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        </div>
        `,
            data() {
                return {
                    name: '尚硅谷',
                    address: '北京'
                }
            }
        })
        //定义组件  template中要用div盒子包起来
    const school = Vue.extend({
        name: 'school',
        template: `
        <div>
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <student></student>//嵌套student组件
        </div>
        `,
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },//定义sutdent的标签
        components: {
            student,
        }
    })

    new Vue({
        el: '#root',
        data: {

        },
        //注册组件
        components: {
            school,

        }
    })

//暴露
统一暴露
export {school}
默认暴露
export default school
分别暴露
export const school = Vue.extend({

})

一般用默认暴露(只有一个组件的时候)，这样引入的时候只需要写 import ??? from ??? 
用分别暴露跟统一暴露，引入的时候就要写 import {???} from ???

//初始化脚手架
Vue脚手架是Vue官方提供的标准化开发工具（开发平台）
步骤：
第一步：全局安装 @vue/cli
npm install g @vue/cli

第二步：切换到你要创建项目的目录，然后使用命令创建项目：
vue create xxx

//vue.config.js配置文件
使用vue inspect > output.js可以查看到Vue脚手架的默认配置
使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh