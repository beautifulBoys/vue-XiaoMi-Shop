<template>
  <div class="footer">
    <div class="item" :class="{icon11: footerIndex === 0, icon1: footerIndex !== 0}" @click="footerEvent(0)">首页</div>
    <div class="item" :class="{icon22: footerIndex === 1, icon2: footerIndex !== 1}" @click="footerEvent(1)">分类</div>
    <div class="item" :class="{icon33: footerIndex === 2, icon3: footerIndex !== 2}" @click="footerEvent(2)">购物车</div>
    <div class="item" :class="{icon44: footerIndex === 3, icon4: footerIndex !== 3}" @click="footerEvent(3)">我</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        footerIndex: 0
      };
    },
    methods: {
      footerEvent (num) {
        this.footerIndex = num;
      }
    }
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
      &.icon11 {
        color: #ff6700;
        background: url("../../images/svg/footer_home.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.icon2 {
        background: url("../../images/svg/footer_lei1.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.icon22 {
        color: #ff6700;
        background: url("../../images/svg/footer_lei.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.icon3 {
        background: url("../../images/svg/footer_cart1.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.icon33 {
        color: #ff6700;
        background: url("../../images/svg/footer_cart.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.icon4 {
        background: url("../../images/svg/footer_me1.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.icon44 {
        color: #ff6700;
        background: url("../../images/svg/footer_me.svg") no-repeat center 25%;
        background-size: 20px;
      }
    }
  }
</style>
