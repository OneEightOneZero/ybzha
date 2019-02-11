<template>
  <div class="bg">
    <div class="products_header">
      <a href="javascript:history.go(-1)" class="products_header_back">
        <img src="../assets/back_icon.png">
      </a>
      <div class="products_header_title">
        <a href="javascript:;" class="products_header_item active">商品详情</a>
      </div>
    </div>
    <div class="detail">
      <mt-swipe :show-indicators="false" style="height:375px;">
        <mt-swipe-item>
          <div class="slide-item" style="width: 375px; pointer-events: auto;">
            <a href="http://m.ybzha.com/post/detail/6705">
              <img
                src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230726135.jpg"
                style="height: 375px;"
              >
            </a>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="slide-item" style="width: 375px; pointer-events: auto;">
            <img
              src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230614965.jpg"
              style="height: 375px;"
            >
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="slide-item" style="width: 375px; pointer-events: auto;">
            <a href="https://v.qq.com/x/page/c07830pefaz.html">
              <img
                src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230740249.jpg"
                style="height: 375px;"
              >
            </a>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="slide-item" style="width: 375px; pointer-events: auto;">
            <a href="http://wap.ybzha.com/creative/index">
              <img
                src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230728124.jpg"
                style="height: 375px;"
              >
            </a>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="product_info1">
      <div class="main_title">和田玉吊坠-吉祥如意</div>
      <div class="subtitle"></div>
      <div class="product_price">
        <div class="pull-left">
          <div class="pull-left new_price">
            <span class="money">￥</span>230.00
            <!---->
          </div>
          <!---->
        </div>
        <div class="pull-right">
          <div>
            <div class="price_cunt">
              库存
              <span class="price_cunt_mun">10</span>件
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="product_info2">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-3">尺寸：</div>
          <div class="col-xs-9">30*21*9mm</div>
        </div>
      </div>
      <div class="con-more" style="display: none;">
        <img src="/static/wapmall/images/common/more.png" alt>
      </div>
    </div>
    <div class="page_content">
      <p style="width:100%">
        <img
          src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230614965.jpg"
          alt
          style="width:100%;height:auto;"
        >
        <img
          src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230740249.jpg"
          alt
          style="width:100%;height:auto;"
        >
        <img
          src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230728124.jpg"
          alt
          style="width:100%;height:auto;"
        >
        <img
          src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230726135.jpg"
          alt
          style="width:100%;height:auto;"
        >
      </p>
    </div>
    <div class="page_content notice">
      <div class="notice_item_tit">关于产品</div>
      <div
        class="notice_item_con"
      >玉巴扎商城每一款产品来自于玉巴扎合作供应商和玉巴扎自营，均是玉企源头直供。每一款产品从原料到成品经过十几道工序，请您放心购买。产品支持复检，复检时请到具有专业检测资质和设备的国家级检测机构检测。</div>
      <div class="notice_item_tit">购买流程</div>
      <div class="notice_item_con">注册登录→选择商品→提交订单→支付货款→收货验货。</div>
      <div class="notice_item_tit">关于包装</div>
      <div class="notice_item_con">包含商品、包装盒、固定膜、购物清单。</div>
      <div class="notice_item_tit">关于发货时间和配送</div>
      <div class="notice_item_con">下单成功后，48小时内发货。</div>
      <div class="notice_item_tit">关于退换货</div>
      <div
        class="notice_item_con"
      >客户在收货后如对商品不满意或存在疑问，在保证商品全新，配件（包括但不限于鉴定证书、购物清单单据）齐全，不影响二次销售情况下，可在7日内（以订单状态变更为“已收货”日期为准）申请退换货，客服受理后请您在3日内寄出并将快递单号提供给客服，我们将在收到商品后3个工作日内为您处理。除商品本身存在质量问题，退换货往返运费客户自行承担。因商品本身较为贵重，我们只接收顺丰或EMS寄回，不接受到付及其他快递。</div>
      <div class="notice_item_tit">保养小贴士</div>
      <div
        class="notice_item_con"
      >1、避免与硬物碰撞和田玉硬度虽高，但是受碰撞后，有时虽然肉眼看不出裂纹，其实玉内部的分子结构已受破坏，有暗裂纹，将大大损害其完美程度和经济价值。
        <br>2、忌油烟、香水、化学剂，避免灰尘玉器表面若有灰尘，宜用软毛刷清洁；若有污垢或油渍等附于玉器表面，应以温的淡肥皂水洗刷，再用清水冲净。切忌使用化学除油剂。游泳洗澡以及运动建议摘除。
        <br>3、避免阳光长期直射、火烤。
        <br>4、定期检查挂绳是否牢固，一两年要更换系绳，防止丢失。
      </div>
    </div>
    <div class="go-top" :style="{'display':`${isshow}`}" @click="totop">
      <img src="../assets/back.png" alt>
    </div>
    <div id="appfooter" class="product_footer">
      <div class="product_footer_box">
        <div class="pull-left product_footer_left container-fluid">
          <div class="row">
            <div class="col-xs-6 line">
              <a
                href="javascript:;"
                onclick="easemobim.bind({configId: easemobim.config.configId})"
                class="product_footer_btn contact_btn"
              >客服</a>
            </div>
            <div class="col-xs-6">
              <a href="/wapmall/cart/index" class="product_footer_btn car_btn">购物车</a>
              <span class="car_num">1</span>
            </div>
          </div>
        </div>
        <div class="pull-right product_footer_right">
          <div class="add_car">加入购物车</div>
          <div class="immediately">立即购买</div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
import Vue from "vue";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data() {
    return {
      isshow: "none",
      scroll: ""
    };
  },
  methods: {
    totop() {
      scrollTo(0, 0);
    },
    menu() {
      this.scroll = window.scrollY;
      if (this.scroll >= 10) {
        this.isshow = "block";
      }
      if (this.scroll <= 10) {
        this.isshow = "none";
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  }
};
</script>
<style scoped>
.products_header {
  height: 40px;
  line-height: 40px;
  background: #fff;
  color: #333333;
  position: relative;
  font-size: 18px;
  border-bottom: 1px solid #e0e0e0;
}
.products_header_back {
  position: absolute;
  display: inline-block;
  top: 11px;
  left: 17px;
  line-height: 16.5px;
  width: 16.5px;
  z-index: 9;
  text-align: center;
}
a:visited {
  color: #333333;
  text-decoration: none;
}
.products_header_title {
  text-align: center;
  height: 100%;
}

.products_header_title .products_header_item {
  color: #333333;
  font-size: 18px;
  display: inline-block;
  /* border-bottom: 2px solid #fff; */
  height: 37px;
  line-height: 37px;
  margin: 0 8%;
  padding: 0 3px;
}
.products_header_title .active {
  color: #cb9855;
  border-color: #cb9855;
}
.product_info1,
.product_info2 {
  padding: 10px 15px;
  background: #fff;
  margin-bottom: 10px;
}
.main_title,
.subtitle {
  font-weight: bold;
  color: #333333;
  line-height: 18px;
  min-height: 18px;
  padding-bottom: px;
}
.main_title,
.subtitle {
  font-weight: bold;
  color: #333333;
  line-height: 18px;
  min-height: 18px;
  padding-bottom: px;
}
.subtitle {
  color: #999;
  padding-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.product_price {
  font-weight: bold;
}
.pull-left {
  float: left !important;
}
.new_price {
  padding-right: 20px;
  color: #ec1927;
}
.product_price .money {
  font-size: 12px;
}
.pull-right {
  float: right !important;
}
.price_cunt {
  color: #999;
}
.price_cunt_mun {
  color: #c19a3b;
}
.product_info2 .container-fluid {
  max-height: 200px;
  overflow-y: scroll;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.product_info2 .row {
  border-bottom: 1px solid #e0e0e0;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
}
.product_info2 .col-xs-3 {
  text-align: right;
  color: #999999;
}
.col-xs-9 {
  width: 75%;
}
.product_info1,
.product_info2 {
  padding: 10px 15px;
  background: #fff;
  margin-bottom: 10px;
}
.page_content {
  background: #fff;
}
.notice {
  padding: 10px;
  line-height: 22px;
  padding-bottom:10%;
}
.notice_item_tit {
  font-weight: bold;
  padding-top: 5px;
}
.go-top {
  position: fixed;
  bottom: 60px;
  right: 10px;
  width: 60px;
  height: 60px;
  color: #fff;
  display: none;
  cursor: pointer;
  z-index: 999;
}
.go-top img {
  width: 100%;
  height: auto;
}
.product_footer {
    position: fixed;
    width: 100%;
    height: 55px;
    left: 0;
    bottom: 0;
    z-index: 99;
}
.product_footer_box {
    border-top: 1px solid #dbdbdb;
    background: #fff;
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
}
.container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.pull-left {
    float: left !important;
}
.product_footer_left {
    width: 36%;
}
.product_footer_right {
    width: 59%;
    text-align: center;
    line-height: 35px;
    margin: 8px 0 12px;
    font-size: 15px;
    border: 1px solid #bbb;
    color: #fff;
    border-radius: 40px;
    overflow: hidden;
    margin-right: 1%;
}
.add_car, .no_add_car {
    float: left;
    width: 50%;
    background: #cb9855;
}
.immediately {
    width: 50%;
    float: left;
    background: #ed2424;
}
.product_footer_btn {
    padding-top: 25px;
    margin-top: 5px;
    position: relative;
}
.contact_btn {
    display: inline-block;
    background: url(../assets/contact_icon.png) no-repeat top center;
    background-size: 25px;
}
.car_btn {
    display: inline-block;
    background: url(../assets/car_icon.png) no-repeat top center;
    background-size: 25px;
}
.col-xs-6 {
    width: 50%;
}
.row {
    margin-right: -15px;
    margin-left: -15px;
}
.product_footer .col-xs-6 {
    text-align: center;
    height: 55px;
}
.car_num {
    position: absolute;
    top: 5px;
    left: 50%;
    display: inline-block;
    height: 14px;
    line-height: 14px;
    color: #e93a38;
    border: 1px solid #e93a38;
    border-radius: 6px;
    padding: 0 3px;
    font-size: 10px;
    background: #fff;
}
.product_footer .col-xs-6 {
    position: relative;
}
.bg{
    background-color: #EFEFF4;
}
</style>

