<template>
  <div id="app" style>
    <div class="screenlayer screenlayerTabbar">
      <div class="screenlayer_bg"></div>
      <span onclick="window.history.back();" class="screenlayer_close"></span>
      <div class="screenlayer_content">
        <div class="screenlayer_content_div">
          <div class="screen_item">
            <div class="screen_item_titel">品牌：</div>
            <div class="screen_item_con" style="height:250px">
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >玉巴扎自营</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">华玉盛世</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">拓颖珠宝</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">每一颗</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">钰时尚</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">梵润珠宝</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">玉尚金品</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >弘天和珠宝</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">石玉情缘</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >久保和田玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">琢玉工坊</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">牛犇玉雕</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">玉润阁</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >老兵和田玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">柯晗玉器</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">俊玉阁</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >和田玉原石阁</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">瑄缘玉器</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">水润玉阁</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">淘玉商城</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >藏物于心艺术</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >新疆玉無雙和田玉会所</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">戈壁七渡</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">阆苑仙葩</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">寻缘坊</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >一二三和田玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">玉缘</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">玉</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >七彩和田《浪子》</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">山石玉</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >帝王玉神阁</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">和田玉色</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">臻品玉雕</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >樊宇玉雕工作室</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >华子玉缘且末山料专卖</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">玉见你</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">沉香阁</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">洁洁玉艺</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >国玉大师堂</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">山河美玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">八号玉铺</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">藏宝馆</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >单掌柜卖和田玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">瑩玉</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >万万福珠宝</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >聚多福珠宝</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">湘宁玉器</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >睿玉缘珠宝</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">祥意缘</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">万祥珠宝</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">万隆玉业</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >金亮成珠宝</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">宝丽鑫</a>
              <div class="clearfix"></div>
            </div>
            <div class="screen_item_more" style="display: block;">
              <span class="screen_item_more_Left" @click="loadmore">更多</span>
              <span class="screen_item_more_Right"></span>
              
              <span class="screen_item_more_Btn"></span>
              <!-- <img src="../assets/more.png" alt> -->
            </div>
          </div>
          <div class="screen_item">
            <div class="screen_item_titel">颜色：</div>
            <div class="screen_item_con Height">
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">白玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">青玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">青白玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">黄玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">碧玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">墨玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">糖玉</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">其他</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">绿色</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >K黄/K红</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">青碧色</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">烟青色</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">白带糖</a>
              <div class="clearfix"></div>
            </div>
            <!-- <div class="screen_item_more" style="display: block;">
              <span class="screen_item_more_Left"></span>更多
              <span class="screen_item_more_Right"></span>
              <span class="screen_item_more_Btn">
                <img src="/static/wapmall/images/common/more.png" alt>
              </span>
            </div>-->
          </div>
          <div class="screen_item">
            <div class="screen_item_titel">礼物场景：</div>
            <div class="screen_item_con">
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">女士</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">男士</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">送礼</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">儿童</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">商务</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">平安</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">招财</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">养生</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">婚嫁</a>
              <div class="clearfix"></div>
            </div>
            <!-- <div class="screen_item_more">
              <span class="screen_item_more_Left"></span>更多
              <span class="screen_item_more_Right"></span>
              <span class="screen_item_more_Btn">
                <img src="/static/wapmall/images/common/more.png" alt>
              </span>
            </div>-->
          </div>
          <div class="screen_item">
            <div class="screen_item_titel">原料产地：</div>
            <div class="screen_item_con">
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">新疆料</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">青海料</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">俄罗斯料</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">韩国料</a>
              <div class="clearfix"></div>
            </div>
            <!-- <div class="screen_item_more">
              <span class="screen_item_more_Left"></span>更多
              <span class="screen_item_more_Right"></span>
              <span class="screen_item_more_Btn">
                <img src="/static/wapmall/images/common/more.png" alt>
              </span>
            </div>-->
          </div>
          <div class="screen_item">
            <div class="screen_item_titel">款式：</div>
            <div class="screen_item_con Height">
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">其他</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">原石</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">项链</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">摆件</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">戒指</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">把件</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">耳饰</a>
              <a
                @click="toshopping"
                href="javascript:void(0)"
                class="condition_item pull-left"
              >串珠/手链</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">手镯</a>
              <a @click="toshopping" href="javascript:void(0)" class="condition_item pull-left">挂件</a>
              <div class="clearfix"></div>
            </div>
            <!-- <div class="screen_item_more" style="display: block;">
              <span class="screen_item_more_Left"></span>更多
              <span class="screen_item_more_Right"></span>
              <span class="screen_item_more_Btn">
                <img src="/static/wapmall/images/common/more.png" alt>
              </span>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  methods: {
    toshopping() {
      this.$router.push({name:"goodlist"});
    },
    loadmore(e) {
      var el = e.target;
      if (el.nodeName == "SPAN") {
        el.parentNode.parentNode.children[1].style.height = "600px";
        el.style.display = "none";
      }
    }
  },
  // mounted() {
  //   this.toshopping();
  // }
};
</script>

<style scoped>
.screenlayer_content_div {
  height: 100%;
  overflow-y: scroll;
  /* padding-top: 20px; */
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  -webkit-overflow-scrolling: touch;
  padding-bottom: 40px;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.condition_item:hover,
.condition_item:visited {
  color: #333333;
}
a:visited {
  color: #333333;
  text-decoration: none;
}

.condition_item {
  height: 25px;
  line-height: 25px;
  display: inline-block;
  padding: 0 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin: 10px 15px 0 0;
  color: #333333;
}
.pull-left {
  float: left !important;
}

.screen_item_con {
  margin-bottom: 5px;
  overflow: hidden;
}
.screen_item_con:nth-child(0) {
  height: 250px;
  overflow: hidden;
}
.screen_item_more {
  text-align: center;
}

.screen_item_more {
  text-align: center;
  /* margin: 10px 20px 0 0; */
  position: relative;
  display: block;
}
.screen_item_more_Left,
.screen_item_more_Right {
  position: absolute;
  top: 50%;
  display: inline-block;
  width: 42%;
  /* border-bottom: 1px dashed #000; */
}
.screen_item_more_Left {
  left: 0;
}
.screen_item_more_Right {
  right: 0;
}
.screen_item_more_Btn {
  width: 18px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
}
</style>
