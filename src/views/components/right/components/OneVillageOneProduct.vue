<template>
  <div class="content">
    <div class="title">
      <div class="title-content">
        <div class="item-name">产品</div>
        <div class="item-address">所属村庄</div>
      </div>
    </div>
    <div class="bottom-content"
        @mouseenter="mouseEnter(listData)"
        @mouseleave="mouseleave(listData)">
      <swiper ref="mySwiper"
              :options="swiperOption"
              v-if="listData.length > 2">
        <swiper-slider v-for="(item, index) in listData" :key="index">
          <div class="item">
            <div class="item-name">
              {{item.name}}
            </div>
            <div class="item-address">{{item.address}}</div>
          </div>
        </swiper-slider>
      </swiper>
      <div v-else class="item" v-for="(item, index) in listData" :key="index" >
        <div class="item-name">
          {{item.name}}
        </div>
        <div class="item-address">{{item.address}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from '@/components/Swiper';
import SwiperSlider from '@/components/SwiperSlider';
export default {
  components: {
    swiper,
    SwiperSlider,
  },
  props: {
    listData: {
      type: Array,
      default: () => {}
    },
    title: {
      type: String,
    }
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        grabCursor: true,
        // observer: true,
        // autoplay: {
        //   delay: 1500,
        //   disableOnInteraction: false,
        // },
        autoplay: true,
      },
    }
  },
  methods: {
    mouseEnter(lists) {
      if (lists.length < 3) {
        return;
      }
      this.$refs.mySwiper.swiper.autoplay.stop();
    },
    mouseleave(lists) {
      if (lists.length < 3) {
        return;
      }
      this.$refs.mySwiper.swiper.autoplay.start();
    },
  },
}
</script>

<style lang="scss" scoped>
.content{
  overflow: hidden;
  margin-left: 20px;
  .title {
    //padding-bottom: 3px;
    &:after {
      content: '';
      display: inline-block;
      width: 100%;
      height: 1px;
      background: #79C0F6;
      opacity: 0.2;
    }
    .title-content{
      display: flex;
      height: 22px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #79C0F6;
      line-height: 30px;
      box-sizing: border-box;
      padding-left: 20px;
      .item-name {
        width: 93px;
        height: 26px;
        margin-right: 15px;
      }
    }

  }
  .bottom-content {
    overflow: hidden;
    height: 70px;
    margin-left: 20px;
    .item{
      display: flex;
      .item-name{
        width: 93px;
        height: 26px;
        margin-right: 15px;
      }
      .item-address {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        opacity: 0.85;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

    }
  }
  .swiper-container {
    width: 100%;
    height: 100px;
    .swiper-slide {
      //height: 76px;
      box-sizing: border-box;
    }
    .item {

    }
  }
}
</style>