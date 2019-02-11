<template>
  <div>
    <div class="header">
      <div class="head">
        <a class="header_back" onclick="window.history.back();">
          <img src="../assets/back_icon.png">
        </a>

        <div class="header_title">注册</div>
      </div>
    </div>
    <div id="app">
      <div class="ptag ptaG">
        <img src="../assets/banner.jpg" style="width: 100%;">
        <img src="../assets/ptag.jpg" style="width: 100%;">
      </div>
      <div class="login_cont">
        <div class="mobile_phone">
          <input maxlength="11" type="tel" placeholder="请输入您的手机号码" class="phone_num">
        </div>
        <div class="mobile_phone">
          <input type="password" placeholder="请输入6-16位密码" class="phone_num">
        </div>
        <div class="mobile_phone">
          <input type="password" placeholder="请再次输入密码" class="phone_num">
        </div>
        <div class="mobile_phone cellphone">
          <input type="text" placeholder="请输入验证码" class="phone_num code_input">
          <div class="get_code">获取验证码</div>
          <div class="get_code_unable" style="display: none;">秒后再试</div>
        </div>
        <div class="register_deal">
          <div class="pull-left deal_cont">
            <label class="register_label">
              <span class="checked_btn pull-left choice_btn"></span>
              <span>我已阅读并同意</span>
            </label>
            <a href="#" class="deal_a">《山石玉珠宝服务协议》</a>
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="login_area">
          <div class="auth_code" @click="login">已注册账号，马上登录&gt;</div>
          <div class="login_btn">立即注册</div>
        </div>
      </div>
      <div class="img_code" style="display: none;">
        <div class="img_code_box">
          <div class="img_code_top">
            验证码
            <span class="close"></span>
          </div>
          <div class="img_code_con">
            <div class="input_box">
              <input placeholder="请输入验证码" type="text" maxlength="4">
            </div>
            <div class="img_error_tip"></div>
            <div class="img_send_btn">发送短信</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 
  methods: {
    login() {
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Login" });
    },
    
  }
};

</script>
<style scoped>
.header {
  height: 40px;
  line-height: 40px;
  background: #fff;
  color: #333333;
  position: relative;
  font-size: 18px;
  /*width: 100%;*/
}
.header_back {
  position: absolute;
  display: inline-block;
  top: 11px;
  left: 17px;
  line-height: 16.5px;
  width: 16.5px;
  z-index: 9;
}
.header_back img {
  width: 16.5px;
  height: 16.5px;
  vertical-align: middle;
}
.header_back span {
  color: #fff;
  vertical-align: middle;
}

.header_title {
  text-align: center;
}
.header_item {
  position: absolute;
  top: 0.2rem;
  right: 0.3rem;
  display: inline-block;
  line-height: 0.5rem;
  font-size: 0.28rem;
  color: #fef5e0;
}
.header_item:hover {
  text-decoration: none;
  color: #fef5e0;
}

.header {
  background: #f0f0f0 !important;
}
.ptaG {
  background: #f0f0f0;
  padding-bottom: 5px;
}
.login_cont {
  width: 100%;
  padding: 0 35px;
}
.phone_num {
  width: 100%;
  margin-top: 13px;
}
/*修改input的placeholder颜色*/
input[type="text"],
input[type="password"],
input[type="number"],
input[type="tel"] {
  color: #999;
  height: 35px;
  line-height: 23px;
  padding: 6px;
  border: none;
  outline: none;
  -webkit-appearance: none;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
input[type="tel"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
.code_input {
  width: 65%;
}
.mobile_phone {
  border-bottom: 1px solid #dbdbdb;
  height: 50px;
}
.login_btn {
  height: 45px;
  color: #fff;
  background: #4c4c4c;
  line-height: 45px;
  border-radius: 5px;
  margin-top: 15px;
  font-size: 18px;
}
.auth_code {
  color: #cb9855;
  cursor: pointer;
  font-size: 12px;
}
.login_area {
  text-align: center;
  margin-top: 10px;
}
.cellphone {
  position: relative;
}
.get_code {
  border-radius: 15px;
  border: 1px solid #333;
  color: #333;
  text-align: center;
  padding: 0 5px;
  position: absolute;
  top: 14px;
  right: 0;
  line-height: 22px;
}
.get_code_unable {
  border-radius: 15px;
  border: 1px solid #cccccc;
  color: #cccccc;
  text-align: center;
  padding: 0 5px;
  position: absolute;
  top: 14px;
  right: 0;
  line-height: 22px;
}
.checked_btn {
  width: 14px;
  height: 14px;
  border: 1px solid #c19a3b;
  display: inline-block;
  border-radius: 3px;
  margin-top: 10px;
  margin-right: 3px;
}
.register_deal {
  line-height: 35px;
  font-size: 12px;
  color: #999;
}
.deal_a {
  color: #c19a3b;
  margin-left: 5px;
}
.deal_a:link {
  color: #c19a3b;
}
.deal_a:visited {
  color: #c19a3b;
}
.deal_a:hover {
  color: #c19a3b;
}
.deal_a:active {
  color: #c19a3b;
}
/*.deal_cont { padding-left: 10px;}*/
/* .choice_btn { background: url("../../images/common/checked_btn.png") no-repeat 0px center;background-size: 12px;} */
.register_label {
  margin-bottom: 0;
  font-weight: 100;
}

/*提示信息*/
.hint_cont span {
  background: #dbdbdb;
  padding: 10px 20px;
  border-radius: 30px;
  display: inline-block;
}
.hint_cont {
  text-align: center;
  height: 40px;
}

/*图形验证码*/
.img_code {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
}
.img_code_box {
  background: #fff;
  width: 80%;
  position: absolute;
  left: 50%;
  top: 40%;
  margin: -105px 0 0 -40%;
  border-radius: 8px;
}
.img_code_top {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #d0d0d0;
  padding: 0 20px;
  position: relative;
}
.img_code_top .close {
  display: inline-block;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 3px;
  top: 0;
  /* background: url("../../images/common/code_close.png") no-repeat center; */
  background-size: 40px;
}
.img_code_con {
  padding: 30px 20px;
}
.input_box {
  border: 1px solid #cfd2d2;
  height: 40px;
  line-height: 38px;
  position: relative;
}
.input_box input[type="text"] {
  height: 38px;
  line-height: 22px;
  width: 48%;
}
.input_box #yw0 {
  position: absolute;
  top: 0px;
  right: 38px;
}
.img_error_tip {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: #f00;
}
.shuaxin {
  position: absolute;
  top: 0px;
  right: 0;
  height: 38px;
}
.img_send_btn {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #333;
  border-radius: 5px;
  color: #fff;
}
</style>
