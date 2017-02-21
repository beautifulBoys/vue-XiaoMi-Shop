<template>
  <div class="footer">
    <div class="item icon1">首页</div>
    <div class="item icon2">分类</div>
    <div class="item icon3">购物车</div>
    <div class="item icon4">我</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {};
    },
    components: {}
  };
</script>

<style lang="less" scoped>
  .footer {
    display: flex;
    height: 50px;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ddd;
    background: #fff;
    .item {
      width: 100%;
      height: 100%;
      line-height: 75px;
      color: #888;
      font-size: 12px;
      text-align: center;
      &.icon1 {
        background: url("../../images/svg/footer_home1.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.icon2 {
        background: url("../../images/svg/footer_lei1.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.icon3 {
        background: url("../../images/svg/footer_cart1.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.icon4 {
        background: url("../../images/svg/footer_me1.svg") no-repeat center 25%;
        background-size: 20px;
      }
    }
  }
</style>
