<template>
<div class="content">
  <div
      @mouseenter="mouseEnter(listData)"
      @mouseleave="mouseleave(listData)">
    <swiper ref="mySwiper"
            :options="swiperOption"
            v-if="listData.length > 3">
      <swiper-slider v-for="(item, index) in listData" :key="item.name">
        <div class="item">
          <div class="item-left">
            <div class="item-img" v-show="index < 3">
              {{index+1}}
            </div>
          </div>
          <div class="item-name">{{item.name}}</div>
        </div>
      </swiper-slider>
    </swiper>
    <div v-else class="item" v-for="(item, index) in listData" :key="item.name" >
      <div class="item-left">
        <div class="item-img" v-show="index < 3">
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
  data() {
    return {
      listData: [
        {
          name: '秀山岛景区'
        },
        {
          name: '鹿栏晴沙景区'
        },
        {
          name: '双石合璧'
        },
        {
          name: '雁荡山'
        },
        {
          name: '千岛湖'
        },
        {
          name: '西塘古镇'
        },
        {
          name: '莫干山'
        },
        {
          name: '嵊泗列岛'
        },
        {
          name: '仙都景区'
        },
        {
          name: '浙东大峡谷'
        },

      ],
      swiperOption: {
        direction: 'vertical',
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 16,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        // autoplay: true,
      },
    }
  },
  methods: {
    mouseEnter(lists) {
      if (lists.length < 3) {
        return;
      }
      this.swiper.autoplay.stop();
    },
    mouseleave(lists) {
      if (lists.length < 3) {
        return;
      }
      this.swiper.autoplay.start();
    },
  },
}
</script>

<style lang="scss" scoped>
  .content{
    margin-top: 20px;
    .item{
      display: flex;
      &:nth-of-type(1) {
        .item-img{
          background: url("../img/dy.png");
        }
      }
      &:nth-of-type(2) {
        .item-img{
          background: url("../img/dr.png");
        }
      }
      &:nth-of-type(3) {
        .item-img{
          background: url("../img/ds.png");
        }
      }
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
  }
</style>