<template>
<div class="content">
<!--  <div  class="item" v-for="(item, index) in listData" :key="item.name" >-->
<!--    <div class="item-left">-->
<!--      <div class="item-img" v-show="index < 3">-->
<!--        {{index+1}}-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="item-name">{{item.name}}</div>-->
<!--  </div>-->
  <div
      @mouseenter="mouseEnter(listData)"
      @mouseleave="mouseleave(listData)">
    <swiper ref="mySwiper"
            :options="swiperOption"
            v-if="listData.length > 3">
      <swiper-slider v-for="(item, index) in listData" :key="item.name">
        <div class="item">
          <div class="item-left">
            <div class="item-img" :style="{
              background: `url(${require('./img/d_' +
               (index+1) +
               '.png')})`
            }" v-if="index < 3">
              {{index+1}}
            </div>
            <div class="item-img" v-else>
              {{index+1}}
            </div>
          </div>
          <div class="item-name">{{item.name}}</div>
        </div>
      </swiper-slider>
    </swiper>
    <div v-else class="item" v-for="(item, index) in listData" :key="item.name" >
      <div class="item-left">
        <div class="item-img" v-if="index < 3">
          {{index+1}}
        </div>
      </div>
      <div class="item-name">{{item.name}}</div>
    </div>
  </div>
</div>
</template>

<script>
import swiper from '@/components/Swiper';
import SwiperSlider from '@/components/SwiperSlider';
export default {
  name: "MostBeautifulVillage",
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
    margin-top: 20px;
    .item{
      display: flex;
      .item-left{
        width: 24px;
        height: 26px;
        margin-right: 15px;
        .item-img {
          width: 24px;
          height: 26px;
          text-align: center;
          font-size: 16px;
          font-family: DINPro;
          font-weight: bold;
          color: #FFFFFF;
        }
      }
      .item-name {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        opacity: 0.85;
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