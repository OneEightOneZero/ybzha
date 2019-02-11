<template>
  <div>
    <div id="box">
      <div :class="{cart_message:true,horizontal:true}" v-for="(tab,idx) in alldata" :key="tab._id">
        <div style="width: 16px; margin-right: 10px;">
          <div class="choice_btn"></div>
        </div>
        <div class="msg_content">
          <div class="pull-left img_cont">
            <div style="display: none;"></div>
            <img
              src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/thumb/2/oss_2_2018101817011444595_240.jpg"
              alt
            >
          </div>
          <div class="msg_title pull-left">
            <p v-text="tab.store_name"></p>
            <span v-text="`￥${tab.goods_id}`"></span>
          </div>
          <div class="clear"></div>
        </div>
        <div class="msg_right">
          <div class="delete_btn">
            <img src="/static/wapmall/images/common/icon_delete.png" alt>
          </div>
          <div class="horizontal cart_num">
            <span class="subtract_btn" @click="renum(idx)">-</span>
            <input type="text" :value="num" disabled="disabled" ref="num">
            <span class="add_btn" @click="addnum(idx)">+</span>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <!-- <div class="cart_message horizontal">
        <div style="width: 16px; margin-right: 10px;">
          <div class="choice_btn"></div>
        </div>
        <div class="msg_content">
          <div class="pull-left img_cont">
            <div style="display: none;"></div>
            <img
              src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/thumb/2/oss_2_2018101817011444595_240.jpg"
              alt
            >
          </div>
          <div class="msg_title pull-left">
            <p>安之若素和田玉点翠耳坠</p>
            <span>￥1909.00</span>
          </div>
          <div class="clear"></div>
        </div>
        <div class="msg_right">
          <div class="delete_btn">
            <img src="/static/wapmall/images/common/icon_delete.png" alt>
          </div>
          <div class="horizontal cart_num">
            <span class="subtract_btn">-</span>
            <input type="text" value="0" disabled="disabled">
            <span class="add_btn">+</span>
          </div>
        </div>
        <div class="clear"></div>
      </div> -->
    </div>

    <div class="closing_content" style="bottom: 55px;">
      <div :class="{chiose_all:true, choice_bg:change}" @click="change"></div>
      <p>
        已选(
        <span>1</span>)
      </p>

      <div class="total_money">
        <div class="left_bor" style="border-left: 1px solid rgb(219, 219, 219);">
          <p class="amount_num">
            <span>￥1,909.00</span>
          </p>
          <p class="condition_text">(已包含邮费)</p>
        </div>
      </div>

      <div class="clearing_btn" style>结算</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export default {
  data:()=>({
    alldata:'',
    num:0,
    change:false
  }),
  methods: {
    async getlists() {
      //后端地址
      // let data = { buyer_id: 219927 };
      // axios.post(`http://localhost:3000/users/goodlist`, data);

      const url = "http://localhost:3000/users/goodlist";
      var params = new URLSearchParams();
      params.append("_buyerid", "219927"); //你要传给后台的参数值 key/value

      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        // var box = document.getElementById("box");
        // var htmli = "";
        // for (var i = 0; i < res.data.length; i++) {
        //   htmli +=
        //      '<div class="cart_message horizontal"><div style="width: 16px; margin-right: 10px;"><div class="choice_btn"></div></div> <div class="msg_content"> <div class="pull-left img_cont"> <div style="display: none;"></div><img src="https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/thumb/2/oss_2_2018101817011444595_240.jpg"  ></div> <div class="msg_title pull-left"><p>'+res.data[i].store_name+'</p><span>￥'+res.data[i].goods_id+'</span></div><div class="clear"></div></div><div class="msg_right"> <div class="delete_btn"> <img src="/static/wapmall/images/common/icon_delete.png" alt></div><div class="horizontal cart_num"><span class="subtract_btn">-</span><input type="text" value="0" disabled="disabled"><span class="add_btn">+</span> </div></div><div class="clear"></div></div>';
        // }
        //  box.innerHTML = htmli;
        this.alldata=res.data;
        
      });
    },
    renum(idx){
      let {num}=this.$refs;
      num[idx].value <=0 ? 0 : num[idx].value--;
      
      // this.num--;
    },
    addnum(idx){
      let {num}=this.$refs;
      num[idx].value >=99 ? 99 : num[idx].value++;
      
    },
    change(){
      this.change=!this.change
    }
  },
  created() {
    this.getlists();
  }
};
</script>
<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.cart_message {
  height: 102px;
  background: #fff;
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
}
.msg_title {
  top: 10x;
  width: 200px;
  left: 120px;
  position: absolute;
  z-index: 9;
  height: 70px;
}
.msg_title span {
  display: inline-block;
  bottom: 0;
  position: absolute;
  z-index: 9;
  color: #ec1927;
}
.msg_content {
  width: 65%;
  position: relative;
}
.msg_content .img_cont {
  width: 70px;
  height: 70px;
  border-radius: 4px;
  overflow: hidden;
  top: 8x;
  left: 30px;
  position: absolute;
  z-index: 9;
}

.pull-left {
  float: left !important;
}
img {
  width: 100%;
  height: 100%;
}
img {
  border: 0;
  vertical-align: middle;
}

.choice_btn {
  width: 16px;
  height: 16px;
  border: 1px solid #c19a3b;
  border-radius: 3px;
  display: inline-block;
  top: 44px;
  left: 15px;
  position: absolute;
  z-index: 9;
}
.cart_num {
  width: 110px;
  height: 30px;
  right: 5px;
  bottom: 5px;
  position: absolute;
  z-index: 9;
}
.cart_num input {
  width: 50px;
  height: 20px;
  text-align: center;
  margin: 2px;
}
.cart_num span {
  display: inline-block;
  margin: 2px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #ccc;
}
.closing_content {
  height: 65px;
  position: fixed;
  bottom: 55px;
  left: 0;
  width: 100%;
  z-index: 9;
}
.closing_content_box {
  border-top: 1px solid #dbdbdb;
  height: 55px;
  background: #fff;
  max-width: 540px;
  margin: 0 auto;
  width: 100%;
}
.left_bor {
  width: 100%;
  float: left;
  text-align: center;
  padding-right: 20px;
}
.selected_text {
  width: 30%;
  border-right: 1px solid #dbdbdb;
  height: 50%;
  line-height: 25px;
  text-align: center;
  margin-top: 4%;
  padding-left: 15px;
}
.chiose_all {
  position: absolute;
  bottom: 45px;
  left: 13px;
  width: 16px;
  height: 16px;
  border: 1px solid #c19a3b;
  border-radius: 3px;
  display: inline-block;
}

.total_money {
  width: 33%;
  text-align: center;
  margin-top: 4%;
  line-height: 16px;
}
.condition_text {
  font-size: 10px;
  color: #999;
}
.clearing_btn {
  width: 37%;
  background: #cb9855;
  text-align: center;
  line-height: 55px;
  color: #fff;
  font-size: 18px;
  position: absolute;
  right: 0;
  bottom: 0;
}
.total_money {
  color: #ec1927;
  position: absolute;
  right: 150px;
  bottom: 0;
}
p {
  padding-left: 40px;
}
.choice_bg {
    background: url(../assets/checked_btn.png) no-repeat 0 center;
    background-size: 15px;
}
</style>
