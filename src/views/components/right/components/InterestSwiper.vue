<template>
  <div class="swiper-wrp">
    <Swiper
      class="swiper"
      ref="mySwiper"
      :options="swiperOption"
      @click-slide="handleClickSlide"
      @slideChangeTransitionEnd="slideChangeTransitionEnd"
    >
      <SwiperSlide class="item" v-for="(item, index) in data" :key="index">
        <div class="content-img">
          <img :src="getOSSImgResize(item.imgs[0], 150)" alt="" />
          <span class="pagination">1 / {{ item.imgs.length }}</span>
        </div>
        <div class="item-content">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-address" :title="item.address">举办地：{{ item.addressB }}</div>
          <div class="item-time">举办时间：{{ item.time }}</div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-button-next"></div>
    <ImageModal :show.sync="modalShow" :data="modalData" />
  </div>
</template>
<script>
import { getOSSImgResize } from "@/utils/data"
import ImageModal from "@/components/ImageModal";
export default {
  components: { ImageModal },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
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
        autoplay: true,
        navigation: {
          nextEl: ".swiper-button-next",
          // prevEl: ".swiper-button-prev",
        },
      },

      // 弹窗
      modalShow: false,
      modalData: [],
    };
  },

  methods: {
    // 图片压缩
    getOSSImgResize(src, h) {
      return getOSSImgResize(src, h);
    },
    slideChangeTransitionEnd() {
      this.swiper.autoplay.start();
    },
    handleClickSlide(index, reallyIndex) {
      const data = this.data[reallyIndex];
      this.showModal(data);
    },
    showModal(data) {
      this.modalShow = true;
      this.modalData = data.imgs;
    },
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
    cursor: pointer;
    position: relative;
    img {
      width: 231px;
      height: 136px;
      border-radius: 2px;
      object-fit: cover;
    }
    .pagination {
      width: 48px;
      height: 24px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 12px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      color: #ffffff;
      line-height: 24px;
      position: absolute;
      left: 180px;
      bottom: 10px;
      text-align: center;
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
      margin-bottom: 20px;
      margin-top: 14px;
    }
    .item-address {
      margin-bottom: 14px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;
      opacity: 0.65;
      //display: -webkit-box;
      //-webkit-box-orient: vertical;
      //-webkit-line-clamp: 2;
      //overflow: hidden;
      //text-overflow: ellipsis;
      //white-space: nowrap;
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
