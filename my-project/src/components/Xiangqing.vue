<template>
  <div class="products_header">
    <div class="products_header_title">
      <a href="javascript:history.go(-1)" class="products_header_back">《</a>
      <a href="javascript:;" class="products_header_item active">商品详情</a>
    </div>
    <div id="lbt"></div>
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
    <div class="page_content">
      <p>
        <img
          src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230614965.jpg"
        >
        <img
          src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230740249.jpg"
        >
        <img
          src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230728124.jpg"
        >
        <img
          src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342018110917230726135.jpg"
        >
      </p>
    </div>
    <div class="page_content notice">
      <div class="notice_item_tit"><b>关于产品</b></div>
      <div
        class="notice_item_con"
      >玉巴扎商城每一款产品来自于玉巴扎合作供应商和玉巴扎自营，均是玉企源头直供。每一款产品从原料到成品经过十几道工序，请您放心购买。产品支持复检，复检时请到具有专业检测资质和设备的国家级检测机构检测。</div>
      <div class="notice_item_tit"><b>购买流程</b></div>
      <div class="notice_item_con">注册登录→选择商品→提交订单→支付货款→收货验货。</div>
      <div class="notice_item_tit"><b>关于包装</b></div>
      <div class="notice_item_con">包含商品、包装盒、固定膜、购物清单。</div>
      <div class="notice_item_tit"><b>关于发货时间和配送</b></div>
      <div class="notice_item_con">下单成功后，48小时内发货。</div>
      <div class="notice_item_tit"><b>关于退换货</b></div>
      <div
        class="notice_item_con"
      >客户在收货后如对商品不满意或存在疑问，在保证商品全新，配件（包括但不限于鉴定证书、购物清单单据）齐全，不影响二次销售情况下，可在7日内（以订单状态变更为“已收货”日期为准）申请退换货，客服受理后请您在3日内寄出并将快递单号提供给客服，我们将在收到商品后3个工作日内为您处理。除商品本身存在质量问题，退换货往返运费客户自行承担。因商品本身较为贵重，我们只接收顺丰或EMS寄回，不接受到付及其他快递。</div>
      <div class="notice_item_tit"><b>保养小贴士</b></div>
      <div
        class="notice_item_con"
      >1、避免与硬物碰撞和田玉硬度虽高，但是受碰撞后，有时虽然肉眼看不出裂纹，其实玉内部的分子结构已受破坏，有暗裂纹，将大大损害其完美程度和经济价值。
        <br>2、忌油烟、香水、化学剂，避免灰尘玉器表面若有灰尘，宜用软毛刷清洁；若有污垢或油渍等附于玉器表面，应以温的淡肥皂水洗刷，再用清水冲净。切忌使用化学除油剂。游泳洗澡以及运动建议摘除。
        <br>3、避免阳光长期直射、火烤。
        <br>4、定期检查挂绳是否牢固，一两年要更换系绳，防止丢失。
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style scoped>
.products_header_title {
  text-align: center;
  height: 100%;
  position: relative;
}
.products_header_back {
  position: absolute;
  left: 20px;
}
.products_header_title .active {
  color: #cb9855;
  border-color: #cb9855;
}
.products_header_title .products_header_item {
  color: #333333;
  font-size: 18px;
  /* display: inline-block; */
  height: 37px;
  line-height: 37px;
  margin: 0 8%;
  padding: 0 3px;
}

.products_header {
  height: 40px;
  line-height: 40px;
  background: #fff;
  color: #333333;
  position: relative;
  font-size: 18px;
  border-bottom: 1px solid #e0e0e0;
}
#lbt {
  height: 300px;
  background: yellow;
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
  padding-bottom: 0 px;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.new_price {
  padding-right: 20px;
  color: #ec1927;
}
.pull-left {
  float: left !important;
}
.price_cunt {
  color: #999;
  position: absolute;
  right: 10px;
}
.product_price {
  font-weight: bold;
}
.price_cunt_mun {
  color: #c19a3b;
}
img {
  width: 100%;
}
.page_content{
    padding: 10px;
}
</style>
