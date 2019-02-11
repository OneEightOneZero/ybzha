<template>
  <div id="back">
    <div id="top">
      <img src="../assets/logo.png" class="account_user_img pull-left">
      <div class="personal_text pull-left">
        <div class="account_name">
          <span>a41004368</span>
        </div>
        <div class="account_user_name">156****3089</div>
      </div>
      <div class="clear"></div>
      <span class="row_a account_user_into"></span>
    </div>

    <div id="nav">
      <div class="border_top container-fluid">
        <div class="block row">
          <p class="block_p col-xs-3">我的订单</p>
          <a href="#" class="block_a col-xs-9">查看全部</a>
        </div>

        <div class="account_fluid">
          <div class="row">
            <div class="col-xs-3">
              <a href="#" class="fluid_item fluid_item_1">待付款</a>
              <!---->
            </div>
            <div class="col-xs-3">
              <a href="#" class="fluid_item fluid_item_2">待发货</a>
              <!---->
            </div>
            <div class="col-xs-3">
              <a href="#" class="fluid_item fluid_item_3">待收货</a>
              <!---->
            </div>
            <div class="col-xs-3">
              <a href="#" class="fluid_item fluid_item_4">售后管理</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="banner">
      <div class="border_top container-fluid">
        <div class="block row income">
          <div class="col-xs-4">
            <a href="javascript:;" class="block_p">
              <p class="red">0.00</p>
              <p>推广红利</p>
            </a>
          </div>
          <div class="col-xs-4">
            <a href="/wapmall/redenvelopes/infDividend" class="block_p">
              <p class="red">0.00</p>
              <p>现金红包</p>
            </a>
          </div>
          <div class="col-xs-4">
            <a href="/wapmall/gift" class="block_p">
              <p class="red">3张可用</p>
              <p>优惠券</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="charge">
      <div class="border_top container-fluid">
        <div class="block row">
          <a href="#" class="block_p row_a">马上去推广</a>
        </div>
        <div class="block row">
          <a href="#" class="block_p row_a">
            <span class="income_icon">我是推广大使</span>
          </a>
        </div>
      </div>
    </div>
    <div id="footer">
      <div class="border_top container-fluid">
        <div class="block row">
          <a href="/wapmall/address" class="block_p row_a">地址管理</a>
        </div>
        <div class="block row">
          <a href="/wapmall/User/safety" class="block_p row_a">设置</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped>
* {
  overflow: hidden;
  box-sizing: border-box;
}

#top {
  padding: 15px;
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  height: 70px;
  margin-bottom: 10px;
}
.account_user {
  position: relative;
  height: 80px;
  padding: 15px;
  background: #fff;
  display: block;
}
.account_user_img {
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 50%;
}
.pull-left {
  float: left !important;
}
img {
  vertical-align: middle;
}
.account_name {
  font-size: 14px;
  color: #333;
}
.personal_text {
  display: inline-block;
  padding-left: 10px;
  line-height: 25px;
}
.personal_text {
  display: inline-block;
  padding-left: 10px;
  line-height: 25px;
}

#nav {
  height: 100px;
  display: flex;
  flex-direction: row;
  background: white;
}
#nav > .block,
.row {
  line-height: 100%;
  height: 40px;
  padding: 2px;
  box-sizing: border-box;
  margin: 0;
}
#nav > .block {
  flex: 1;
  position: relative;
}
.block_a {
  flex: 1;
  position: absolute;
  right: 10px;
  font-size: 14px;
}
#nav .account_fluid {
  flex: 3;
  height: 70%;
  line-height: height;
}
#nav .account_fluid > .row {
  height: 100%;
  display: flex;
  flex-direction: row;
  line-height: 100%;
}
#nav .account_fluid > .row > .col-xs-3 {
  text-align: center;
  float: left;
  flex: 1;

  box-sizing: border-box;
  position: relative;
  padding-top: 0px;
  padding-bottom: 0px;
  height: 50px;
}
#nav .account_fluid > .row > .col-xs-3 > a {
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  color: black;
}
#banner {
  margin-top: 10px;
  height: 60px;
  background: white;
}
#banner .container-fluid {
  height: 100%;
  border: none;
}
#banner .container-fluid .income {
  height: 100%;
  display: flex;
  flex-direction: row;
}
#banner .container-fluid .income .col-xs-4 {
  flex: 1;
}
.col-xs-4 p {
  line-height: 16px;
}
#charge .block_p {
  text-align: left;
  margin-left: 10px;margin-top: 8px;}
#charge .block_p .income_icon {
  padding: 0;
}
#footer a{margin-left: 10px;margin-top: 8px;}
</style>
