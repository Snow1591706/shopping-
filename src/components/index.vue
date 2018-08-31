<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <!-- 使用路由链接 -->
                <router-link to="/index">首页</router-link>
                <!-- <a href="#/" class="router-link-active">首页</a> &gt; -->
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="item in catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="val in item.subcates" :key="val.id">
                                                {{val.title}}&nbsp;
                                            </span>

                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd>
                                                <a href="/goods/43.html" v-for="val in item.subcates" :key="val.id">{{val.title}}</a>

                                            </dd>
                                        </dl>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <!--中间的轮播图幻灯片-->
                    <!-- 调用element插件里面的轮播图,首先要下载插件安装包 -->
                 <!--幻灯片-->
                    <div class="left-705" height="341px">
                        <el-carousel :interval="5000" arrow="always">
                            <el-carousel-item v-for="item in sliderlist" :key="item">
                              
                                <img :src="item.img_url" alt="">
                                  <h3>{{ item.title }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!--/幻灯片-->

                    <!-- 右边的广告数据渲染 -->
                    
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item,index) in toplist" :key="item.id">
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{item.title}}</a>
                                    <!-- 使用时间格式化插件然后使用vue全局过滤器 -->
                                    <!-- 后面紧跟管道符 然后是全局过滤器的名字 -->
                                    <!-- 因是设置的是全局过滤器,注册放在main.js -->
                                    <span>{{item.add_time | filterTime}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for="item in productDetail" :key="item.catetitle">
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a href="/goods/43.html" v-for="val in item.datas" :key="val.artID">{{val.catetitle}}</a>
                   
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="val in item.datas" :key="val.artID">
                            <!-- 设置路由跳转,将id转进去 -->
                            <!-- 因需传参数,需要使用单向属性绑定v-bind -->
                            <!-- 因属于属性值,这个内容需要用双引号包裹起来,因有变量需因单引号包裹字符串,然后再拼接变量 -->
                            <router-link :to="'/detail/'+val.artID">
                            <!-- <a href="#/site/goodsinfo/87" class=""> -->
                                <div class="img-box">
                                    <img :src="val.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{val.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{val.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{val.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{val.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            <!-- </a> -->
                           </router-link>
                            
                          
                        </li>
                      
                    </ul>
                </div>
            </div>
        </div>
  
    </div>
</template>
<script>
export default {
  name: "index",
  //组件实例化的对象里面,data是一个函数,而在vue实例对象data是一个对象
  //组件里面的data为什么是一个函数,因为组件的复用性
  //每调用一次组件,即新创建一个实例对象,实例对象里面的数据修改是互不影响的
  data: function() {
    return {
      //声明一个变量存储左边的分类数据
      catelist: "",
      //声明一个变量存储中间的轮播图数据
      sliderlist: "",
      //声明一个变量存储右边的广告数据
      toplist: "",
      //声明一个变量存储底部的详情数据
      productDetail:""
    };
  },
  //在页面完成时就要渲染完页面
  //利用周期函数进行渲染,因beforeCreate表示实例还未创建时的钩子函数,所有的数据无法存储到实例的对象中
  //故此无法进行获取数据渲染,需调用created钩子函数(该函数是再实例化对象创建完成后调用的函数)
  created() {
    this.$axios.get("site/goods/gettopdata/goods").then(res => {
      //将请求回来的数据赋值给到组件的数据中,再进行页面的渲染
      this.catelist = res.data.message.catelist;
      this.sliderlist = res.data.message.sliderlist;
      this.toplist = res.data.message.toplist;
    });
    //获取首页下面分类列表详情数据
    this.$axios.get('site/goods/getgoodsgroup').then(res=>{
        //console.log(res)
        this.productDetail=res.data.message
    })
  }
};
</script>
<style>
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  position: absolute;
  bottom: 5px;
  left: 5px;
}
</style>


