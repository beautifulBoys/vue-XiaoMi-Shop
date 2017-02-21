<template>
  <div class="banner-box">
    <div ref="swipe" class='banner-img'>
      <!--<div class='swipe-wrap'>-->
        <!--<img :src="item" v-for="item in bannerTop"/>-->
      <!--</div>-->
      <img :src="banner.img1"/>
    </div>
    <div class="bottom">
      <img :src="banner.img2"/>
    </div>
  </div>

</template>
<script>
  import data from '../../../data';
  // import Swiper from '../../../lib/swiper.js';
  export default{
    props: ['banner'],
    data () {
      return {
        bannerTop: []
      };
    },
    created () {
      this.bannerTop = data.banner.bannerTop;
    }
//    mounted () {
//      var mySwiper = new Swiper('.swiper-container', {
//        loop: true,
//        autoplay: 2500
//      });
//      console.log(mySwiper);
//    }
  };
</script>

<style lang="less" scoped>
  .banner-box {
    width: 100%;
    font-size: 0;
    .banner-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .bottom {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }

</style>
