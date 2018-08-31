import Vue from 'vue';
import App from './App.vue';
//因要使用到路由
//需下载路由安装包
//然后在全局导入路由
import VueRouter from 'vue-router';
//因每个页面都需要用到异步请求,需导入异步请求插件axios
//首先下载axios安装包网址:https://github.com/axios/axios
//执行命令:cnpm install axios
//导入axios安装包
const axios = require('axios');
//并且将前面相同的根目录设置为一个默认的根网址
//后期发送请求的时候,直接调用接口即可
axios.defaults.baseURL = 'http://47.106.148.205:8899';
//因异步请求,默认不携带cookies凭证,需要将默认属性值修改为true
//请求数据的时候才会携带cookies 
axios.defaults.withCredentials=true;
//因子组件都需使用axios文件将其设置在实例的原型链上,方便调用
//子组件调用该方法时,实例化对象.$axios
Vue.prototype.$axios=axios;
//首先安装element第三包网址http://element.eleme.io/#/zh-CN/component/installation
//执行命令:cnpm i element-ui -S
//导入element插件
import ElementUI from 'element-ui';
//导入element样式
import 'element-ui/lib/theme-chalk/index.css';
//注册element实例对象
Vue.use(ElementUI);
//导入放大镜安装包

import ProductZoomer from 'vue-product-zoomer';
Vue.use(ProductZoomer);
//因为要使用时间格式化插件,首先要下载安装包
//网址:http://momentjs.cn 执行命令:cnpm install moment --save 
//导入安装包
var moment = require('moment');
Vue.filter('filterTime', function (value) {
  return moment(value).format('YYYY年MM月DD日');
})


//导入首页路由组件
import Index from "./components/index.vue";
//导入商品详情路由
import Detail from "./components/productDetail.vue"
//注册路由
Vue.use(VueRouter)
//匹配路由规则
const routes = [
  // 默认打开根目录直接显示首页
  {
    path: '/',
    // component: Index,
    // 解析到/ 直接修改路由地址为/index
    redirect:'/index'
  },
  { path: '/index', component: Index },
  //配置详情路由,因需携带参数,path路由后面需要加/:参数,才能进行跳转
  { path: '/detail/:id', component: Detail}
]
//实例化路由对象,传入路由匹配规则
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //将路由实例化对象挂载在vue实例对象里面
  router
}).$mount('#app')
