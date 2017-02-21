<template>
  <div class="app">
    <div :style="indexStyle" ref="index">
      <mi-load :load="load"></mi-load>
      <mi-header @searchEvent="searchHandle" :opac="headerOpacity"></mi-header>
      <div v-show="a"><!--模拟loading效果-->
        <mi-banner :banner="banner" id="bannerImg"></mi-banner>
        <mi-menu :menu="menu"></mi-menu>
        <mi-body :body="body"></mi-body>
        <div style="width: 100%;height: 60px;background: #eee;"></div>
        <mi-footer></mi-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import util from '../../../lib/util';
  import load from '../loading';
  import header from './header';
  import banner from './banner';
  import menu from './menu';
  import body from './body';
  import footer from './footer';
  import data from '../../../data';
  export default {
    components: {
      'mi-header': header,
      'mi-banner': banner,
      'mi-menu': menu,
      'mi-body': body,
      'mi-load': load,
      'mi-footer': footer
    },
    created () {
      var me = this;
      setTimeout(function () {
        me.a = true;
      }, 2000);
      me.banner = data.banner;
      me.menu = data.menu;
      me.body = data;
      me.bannerList = data.banner.bannerTop;
    },
    mounted () {
      var me = this;
      console.log(util.screenSize());
      this.c_height = 0.711 * util.screenSize().width;
      var height = util.screenSize().width * 256 / 360;
      this.$refs.index.onscroll = function () {
        me.headerOpacity = this.scrollTop / height;
      };
    },
    data () {
      return {
        banner: {},
        menu: {},
        body: {},
        bannerList: [],
        scrollX: 0,
        scrollY: 0,
        searchState: false,
        headOpac: '',
        load: false,
        a: false,
        c_height: 0,
        indexStyle: {
          height: util.screenSize().height + 'px',
          'overflow-y': 'scroll',
          width: '100%'
        },
        headerOpacity: 0
      };
    },
    methods: {
      searchHandle (Boolean) {
        if (Boolean) {
          this.searchState = true;
        } else {
          this.searchState = false;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .app {
    background: #fff;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }

  .banner-img {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>
