<template>
  <div class="swiper-wrp">
    <Swiper class="swiper" ref="mySwiper" :options="swiperOption">
      <SwiperSlide
        class="item"
        v-for="(item, index) in popularActList"
        :key="index"
      >
        <div class="content-img">
          <img :src="item.imgs.url" alt="" />
        </div>
        <div class="item-content">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-address">举办地：{{ item.address }}</div>
          <div class="item-time">举办时间：{{ item.time }}</div>
        </div>
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
export default {
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  // directives: {
  //   swiper: directive,
  // },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  data() {
    return {
      swiperOption: {
        speed: 1000,
        loop: true,
        grabCursor: true,
        pagination: {
          type: "fraction",
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          // prevEl: ".swiper-button-prev",
        },
      },
      popularActList: [
        {
          title: "白露|赴一场象山海边的司机送",
          address: "某某县某某村",
          time: "2021年8月31日",
          imgs: {
            url: require("./img/cs_img1.jpeg"),
            type: "img",
          },
        },
        {
          title: "白露|赴一场象山海边的司机送",
          address: "某某县某某村",
          time: "2021年8月31日",
          imgs: {
            url: require("./img/cs_img1.jpeg"),
            type: "img",
          },
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.swiper-wrp {
  position: relative;
  padding-right: 4px;
  .swiper {
    width: 520px;
    border-right: 2px solid #031f40;
  }
  .swiper-pagination {
    width: 48px;
    height: 24px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: #ffffff;
    line-height: 24px;
    position: absolute;
    left: 186px;
    bottom: 14px;
  }
  ::v-deep .swiper-button-next {
    position: absolute;
    width: 32px;
    height: 100%;
    background: #031f40;
    right: -2px;
    top: 0;
    margin-top: 0;

    &::after {
      font-size: 16px;
      color: #fff;
    }
  }
}

.item {
  width: 524px;
  height: 160px;
  display: flex;
  padding: 12px 0 12px 12px;
  box-sizing: border-box;
  .content-img {
    overflow: hidden;
    width: 231px;
    height: 136px;
    margin-right: 26px;
    img {
      width: 231px;
      height: 136px;
      border-radius: 2px;
    }
  }
  .item-content {
    width: 203px;
    display: flex;
    flex-direction: column;
    .item-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
      line-height: 24px;
      margin-bottom: 28px;
      margin-top: 18px;
    }
    .item-address {
      margin-bottom: 14px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 24px;
      opacity: 0.65;
    }
    .item-time {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 24px;
      opacity: 0.65;
    }
  }
}
</style>
