<template>
  <div>
    <div class="header">
      <div class="head">
        <a class="header_back">
          <img src="../assets/back_icon.png">
        </a>
        <div class="header_title">登录</div>
      </div>
    </div>
    <div id="app">
      <div class="login_cont">
        <div class="mobile_phone">
          <input maxlength="11" type="tel" placeholder="请输入您的手机号码" class="phone_num">
        </div>
        <div class="mobile_phone">
          <input type="password" placeholder="请输入您的密码" class="phone_num">
        </div>
        <div class="remember_login">
          <input id="re_checkbox" type="checkbox" class="re_checkbox">
          <label for="re_checkbox">记住登录</label>
        </div>
        <div class="login_area">
          <div class="login_btn" @click="login">登录</div>
          <div class="register_btn" @click="register">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
    register() {
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Register" });
    },
    login(){
      this.$router.push({ name: "Toppage" });
      localStorage.setItem("token",123456);
    }
  }

}
</script>
<style scoped>
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
body {
  background: #fff !important;
}
.header {
  background: #f0f0f0 !important;
}
.login_cont {
  width: 100%;
  padding: 0 35px;
  margin-top: 80px;
}
.phone_num {
  width: 100%;
  margin-top: 13px;
}
.code_input {
  width: 65%;
}
.mobile_phone {
  border-bottom: 1px solid #dbdbdb;
  height: 50px; /*line-height: 50px;*/
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
.register_btn {
  height: 45px;
  color: #333;
  border: 2px solid #333;
  line-height: 45px;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 18px;
}
.auth_code {
  color: #cb9855;
  cursor: pointer;
}
.login_area {
  text-align: center;
  margin-top: 50px;
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
  border: 1px solid #ccc;
  color: #ccc;
  text-align: center;
  padding: 0 5px;
  position: absolute;
  top: 14px;
  right: 0;
  line-height: 22px;
}

.login_error {
  position: fixed;
  text-align: center;
  width: 100%;
  left: 0;
  top: 50%;
  z-index: 999;
}
.error_tip {
  display: inline-block;
  margin: 0 auto;
  line-height: 18px;
  background: #dbdbdb;
  color: #333333;
  padding: 13px 15px;
  border-radius: 25px;
}

.remember_login {
  height: 35px;
  line-height: 35px;
  margin-top: 10px;
}
.remember_login label {
  margin-bottom: 0px;
  font-weight: 100;
}
.remember_login .re_checkbox {
  vertical-align: middle;
  margin: 0;
}


</style>
