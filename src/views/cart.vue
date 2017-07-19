<template>
  <div class="cart">
    <mi-header></mi-header>
    <div class="main">
      <div class="login">登录后享受更多优惠<span style="float: right">去登录></span></div>
      <div class="item-box" v-for="(item, index) in list">
        <div class="item">
          <div class="left">
            <img :src="item.imgSrc"/>
          </div>
          <div class="right">
            <div class="title">{{`${item.title} ${item.rom} ${item.color}`}}</div>
            <div class="price">售价：{{item.price}}元</div>
            <div class="number">
              <span class="can" @click="resEvent(item)">-</span>
              <span>{{item.buyNum}}</span>
              <span class="can" @click="addEvent(item)">+</span>
              <span class="r" @click="deleteEvent(index)">删</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '../components/cart/header';
  import data from '../../data';
  export default {
    components: {
      'mi-header': header
    },
    created () {
      this.list = this.changeDataFunc(data.starGoods.starGoodsList);
    },
    data () {
      return {
        list: []
      };
    },
    methods: {
      changeDataFunc (arr) {
        for (let i = 0; i < arr.length; i++) {
          arr[i].buyNum = 1;
        }
        return arr;
      },
      resEvent (item) {
        if (item.buyNum > 1) item.buyNum--;
      },
      addEvent (item) {
        item.buyNum++;
      },
      deleteEvent (index) {
        this.list.splice(index, 1);
      }
    }
  };
</script>

<style lang="less" scoped>
  .cart {
    background: #eee;
    width: 100%;
    height: 100%;
    .main {
      width: 100%;
      overflow-y: scroll;
      background: #eee;
      padding-top: 40px;
      .item-box {
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
        background: #fff;
        border-bottom: 1px solid #eee;
        .item {
          width: 100%;
          display: flex;
          .left {
            width: 120px;
            height: 120px;
            padding: 10px;
            box-sizing: border-box;
            img {
              width: 100%;
            }
          }
          .right {
            flex: 1;
            padding: 10px;
            .title {
              font-size: 15px;
              height: 40px;
            }
            .price {
              font-size: 14px;
              color: #888;
              line-height: 25px;
            }
            .number {
              line-height: 30px;
              span {
                border: 1px solid #eee;
                text-align: center;
                width: 30px;
                height: 30px;
                display: inline-block;
                margin: 0 2px;
                &.can {
                  &:active {
                    background: #eee;
                  }
                }
                &.r {
                  float: right;
                  &:active {
                    background: #eee;
                  }
                }
              }
            }
          }
        }
      }
      .login {
        line-height: 50px;
        padding: 0 15px;
        font-size: 15px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        background: #fff;
        color: #333;
        span {
          color: #888;
          font-size: 14px;
        }
        &:active {
          background: #efefef;
          border-top: 1px solid #ddd;
        }
      }
    }
  }

</style>
