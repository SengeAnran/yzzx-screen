<template>
  <div class="box-content">
    <Swiper class="swiper" ref="mySwiper" :options="swiperOption">
      <SwiperSlide v-for="group in Math.ceil(listData.length / 3)" :key="group">
        <section class="item-wrp">
          <div class="item" v-for="index in 3" :key="index">
            <p class="item-img">
              <img :src="listData[(group - 1) * 3 + (index - 1)].img" alt="" />
            </p>
            <p class="item-title">
              {{ listData[(group - 1) * 3 + (index - 1)].name }}
            </p>
            <p class="item-address">
              {{ listData[(group - 1) * 3 + (index - 1)].address }}
            </p>
          </div>
        </section>
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
const LIST_DATA = [
  {
    name: "桃形李",
    address: "浙江省嵊州市金庭镇",
    img: require("./img/taoxingli.png"),
  },
  {
    name: "茭白",
    address: "浙江省衢州市衢江区杜泽镇坎头村",
    img: require("./img/jiaobai.png"),
  },
  {
    name: "胡柚",
    address: "浙江省衢州市常山县青石镇水南村",
    img: require("./img/huyou.png"),
  },
  {
    name: "柑桔",
    address: "浙江省建德市三都镇松口村",
    img: require("./img/ganju.png"),
  },
  {
    name: "茶叶",
    address: "浙江省温州市泰顺县仕阳镇",
    img: require("./img/chaye.png"),
  },
  {
    name: "水果",
    address: "浙江省嘉兴市南湖区凤桥镇",
    img: require("./img/shuiguo.png"),
  },
  {
    name: "青鱼",
    address: "浙江省湖州市南浔区和孚镇新荻村",
    img: require("./img/qingyu.png"),
  },
  {
    name: "黑鱼",
    address: "浙江省湖州市德清县禹越镇",
    img: require("./img/heiyu.png"),
  },
  {
    name: "蔬菜",
    address: "浙江省金华市婺城区罗店镇盘前村",
    img: require("./img/shucai.png"),
  },
  {
    name: "宣莲",
    address: "浙江省金华市武义县柳城畲族镇",
    img: require("./img/xuanlian.png"),
  },
  {
    name: "鱿鱼",
    address: "浙江省舟山市普陀区展茅街道",
    img: require("./img/youyu.png"),
  },
  {
    name: "杨梅",
    address: "浙江省丽水市缙云县舒洪镇仁岸村",
    img: require("./img/yangmei.png"),
  },
];
export default {
  name: "VillageFlavor",
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  // directives: {
  //   swiper: directive,
  // },
  props: {
    areaId: {
      type: Number,
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  data() {
    return {
      listData: LIST_DATA,

      swiperOption: {
        speed: 1000,
        loop: true,
        grabCursor: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "pagination-active",
        },
      },
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.box-content {
  display: flex;
  margin-top: 10px;
  .title {
    margin-top: 10px;
  }
  .swiper {
    width: 524px;
    padding-bottom: 14px;
  }
  .item-wrp {
    display: flex;
    justify-content: space-between;
    .item {
      box-sizing: border-box;
      width: 32%;
      background: #001e4266;
      border-radius: 4px;
      padding: 10px 10px 13px;
      p {
        margin: 0;
        padding: 0;
        line-height: 1;
        margin: 0 auto;
      }
      .item-img {
        width: 148px;
        height: 99px;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 12px;
        & img {
          object-fit: cover;
        }
      }
      .item-title {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #fefefe;
        line-height: 1;
        margin-bottom: 10px;
      }
      .item-address {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #fefefe;
        line-height: 1;
        opacity: 0.65;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  // 按钮样式
  .swiper-pagination {
    bottom: 0px !important;
    ::v-deep .swiper-pagination-bullet {
      width: 7px;
      height: 2px;
      background: #ffffff;
      opacity: 0.4;
      margin: 0 2px;
      border-radius: 1px;
      transition: all 0.25s;
    }
    ::v-deep .pagination-active {
      width: 12px;
      height: 3px;
      background: #ffffff;
      border-radius: 1px;
      opacity: 1;
    }
  }
}
</style>
