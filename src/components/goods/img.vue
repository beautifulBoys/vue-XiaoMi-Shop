<template>
  <div class="img">
    <div class="control">
      <div class="left hook" @click="goBackEvent"></div>
      <div class="right hook" @click="goodSearchEvent"></div>
    </div>

    <div class="swiper-container" ref="a">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList"><img :src="item"/></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!--<img :src="img"/>-->
  </div>
</template>
<script>
  import Swiper from '../../../lib/swiper.js';
  import data from '../../../data.json';
  export default {
    data () {
      return {
        bannerList: []
      };
    },
    components: {},
    created () {
      this.bannerList = data.detail.img;
    },
    methods: {
      goBackEvent () {
        this.$router.go(-1);
      },
      goodSearchEvent () {
        this.$router.push({path: '/index', query: {sign: 1}});
      }
    },
    mounted () {
      var mySwiper = new Swiper(this.$refs.a, {
        loop: true,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false
      });
      console.log(mySwiper);
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../lib/swiper.css";

  .img {
    font-family: "Microsoft YaHei";
    width: 100%;
    .control {
      width: 100%;
      height: 30px;
      position: fixed;
      top: 10px;
      left: 0;
      z-index: 10;
      padding: 0 10px;
      box-sizing: border-box;
      div.hook {
        width: 30px;
        height: 30px;
        display: block;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        color: #fff;
        &.left {
          float: left;
          background: rgba(0, 0, 0, 0.5) url("../../images/svg/back1.svg") no-repeat center center;
          background-size: 15px;
        }
        &.right {
          float: right;
          background: rgba(0, 0, 0, 0.5) url("../../images/svg/search1.svg") no-repeat center center;
          background-size: 15px;
        }
      }
    }
  }

  .swiper-container {
    width: 100%;
    .swiper-slide {
      position: relative;
      height: 0;
      padding-top: 115%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
<style>
  .swiper-pagination-bullet-active {
    background: #ff8b0f;
  }
</style>
