<template>
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
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
import Vue from "vue";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {};
</script>
<style scoped>

</style>
