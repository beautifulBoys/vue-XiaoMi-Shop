<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>
<script>
  import index from './components/index/index';
  export default {
    name: 'app',
    components: {
      'mi-index': index
    },
    data () {
      return {};
    }
  };
</script>

<style lang="less" scoped>

</style>
