<template>
  <div class="products_header">
    <a href="javascript:history.go(-1)" class="products_header_back">
      <img src="../assets/back_icon.png">
    </a>
    <div class="products_header_title">
      <a href="javascript:;" class="products_header_item active">商品详情</a>
    </div>
  </div>
</template>
<script>
export default {
  
}
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
</style>
