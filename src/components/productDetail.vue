<template>
   <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a> &gt;
                <a href="/goods/42/1.html">商品详情</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <div class="pic-box">
                                <!-- 复制插件的html -->
                                <!-- 如当没有图片的时候默认不显示图片,用v-if进行判断 -->
                                   <ProductZoomer v-if="images.normal_size.length!=0" :base-images="images" :base-zoomer-options="zoomerOptions">
                                </ProductZoomer>
                            </div>
                             <div class="goods-spec">
                                <h1>{{goodsinfo.title}}</h1>
                                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <div class="stock-box">
                                                <!-- 计数器用element-ui里面的计数器插件 -->
                                                <!-- 首先要下载安装包 -->
                                                <!-- 然后再main.js里面导入插件 -->
                                                <!-- 前面轮播图已下载插件,所以不需重复导入 -->
                                                <!-- 需要注意这里的label不可以省略,会报错 -->
                                                <!-- 双向绑定购买商品的数量,设置点击值改变事件 -->
                                                <!-- 双向绑定的数据需要在data数据里面定义才能跟踪使用 -->
                                                <el-input-number v-model="buynum" @change="buyNumChange" :min="0" :max="goodsinfo.stock_quantity" size="mini" label="描述文字"></el-input-number>
                                            </div>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div id="buyButton" class="btn-buy">
                                                <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                                                <!-- 购物车注册点击事件 -->
                                                <button  class="add" >加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                                <ul>
                                    <li>
                                        <a href="javascript:;" class="selected">商品介绍</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">商品评论</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content entry" style="display: block;">
                                内容
                            </div>
                            <div class="tab-content" style="display: block;">
                                <div class="comment-box">
                                    <div id="commentForm" name="commentForm" class="form-box">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="conn-box">
                                            <div class="editor">
                                                <textarea id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                                <span class="Validform_checktip"></span>
                                            </div>
                                            <div class="subcon">
                                                <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                                                <span class="Validform_checktip"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul id="commentList" class="list-box">
                                        <p style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);">暂无评论，快来抢沙发吧！</p>
                                        <li>
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>匿名用户</span>
                                                    <span>2017/10/23 14:58:59</span>
                                                </div>
                                                <p>testtesttest</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>匿名用户</span>
                                                    <span>2017/10/23 14:59:36</span>
                                                </div>
                                                <p>很清晰调动单很清晰调动单</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="page-box" style="margin: 5px 0px 0px 62px;">
                                        <div id="pagination" class="digg">
                                            <span class="disabled">« 上一页</span>
                                            <span class="current">1</span>
                                            <span class="disabled">下一页 »</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <ul class="side-img-list">
                                    <li v-for="item in hotgoodslist" :key="item.id">
                                        <div class="img-box">
                                            <!-- <a href="#/site/goodsinfo/90" class=""> -->
                                            <!-- 点击右边的图片更新左边的商品详情,用路由进行跳转 -->
                                            <router-link :to="'/detail/'+item.id">
                                                <img :src="item.img_url">
                                            <!-- </a> -->
                                            </router-link>
                                        </div>
                                        <div class="txt-box">
                                           <!-- 点击右边的文字详情更新左边的商品详情,用路由进行跳转 -->
                                             <router-link :to="'/detail/'+item.id">
                                             {{item.title}}
                                             </router-link>
                                            <span>2015-04-20</span>
                                        </div>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>

export default {
    name:"detail",
    data:function(){
        return{
            //声明一个变量存储商品id
        productId:"",
        //声明一个变量存储右边的广告详情
        hotgoodslist:"",
        //声明一个变量存储中间的详情购买
        goodsinfo:"",
        //声明一个变量存储放大镜的图片
        imglist:"",
        //声明一个变量存储商品的购买数量
        buynum:0,
        //设置放大镜
        //首先下载安装包网址:https://github.com/akulubala/vue-product-zoomer
        //执行命令cnpm install vue-product-zoomer
        //调用参阅文档https://github.com/akulubala/vue-product-zoomer/blob/master/src/App.vue
        //设置放大镜必需参数
        zoomerOptions: {
        zoomFactor: 5, // 放大倍数
        pane: "container-round", // container-round 小放大镜
        hoverDelay: 300,
        namespace: "zoomer",
        move_by_click: true, // true 点击切换
        scroll_items: 7,
        choosed_thumb_border_color: "yellowgreen" // 框的颜色
      },
      //声明一个变量存储放大镜数据
      //因放大镜的渲染数据有格式要求,需根据插件格式要求进行设置
      images: {
        normal_size: []//此属性为必需属性,详情查阅文档
      },
        }
    },
    //因在页面加载完成后即要完成渲染,需在生命周期函数created里面发送请求
    created() {
        //首先获取请求的商品id,因是用路由跳转,调用$route.params即可获取请求数据
        //console.log(this.$route)
        //将商品id存储到实例中,以便后期的使用
        this.productId=this.$route.params.id;
        //根据接口调用数据
       // console.log(this.productId)
        this.$axios.get(`site/goods/getgoodsinfo/${this.productId}`)
        .then(res=>{
            //console.log(res)
            this.goodsinfo=res.data.message.goodsinfo;
            this.hotgoodslist=res.data.message.hotgoodslist;
            this.imglist=res.data.message.imglist;
            //因图片的格式不符合放大镜插件的格式,需按要求转换成其格式
            //循环将相关数据存储到images里的normal_size里面
            this.imglist.forEach(v=>{
                this.images.normal_size.push({
                    id:v.id,
                     url: v.original_path
                })
            })
        })
    },
    methods:{
       buyNumChange(){
           //因计数器里面设置了双向绑定数据,数据变动vue实例会自动监测跟踪
           //只改变事件无需设置执行代码
       }
    }
}
</script>

<style lang="less">
    /* 使用less设置样式,需要设置lang属性,vue才能解析 */
    // 首先要下载less的loader,详情请查阅vue文档里面-生态系统-工具-vue-loader-预处理器
    /* 放大镜相关样式 */
.pic-box {
  width: 395px;
  .control-box .thumb-list {
    display: flex;
    justify-content: center;
    img {
      width: 80px;
      height: 80px;
      margin: 2px;
    }
  }
   .control {
    //   text-align:center;
    display: flex;
    // 主轴
    justify-content: center;
    // 纵轴 副轴 侧轴
    align-items: center;
  }
}

</style>

