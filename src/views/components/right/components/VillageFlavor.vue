<template>
  <div class="module-wrp">
    <div class="box-content" v-if="listData.length">
      <Swiper
        class="swiper"
        ref="mySwiper"
        :options="swiperOption"
        @slideChangeTransitionEnd="slideChangeTransitionEnd"
      >
        <SwiperSlide v-for="(item, i) in listData" :key="i">
          <section class="item-wrp">
            <div class="item">
              <p class="item-img">
                <img :src="getOSSImgResize(item.img,130)" alt="" />
              </p>
              <p class="item-title">
                {{ item.name }}
              </p>
              <p class="item-address">
                {{ item.address }}
              </p>
            </div>
          </section>
        </SwiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </Swiper>
    </div>
    <Empty v-else />
  </div>
</template>

<script>
import { getOSSImgResize } from "@/utils/data"
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
import { getPopSelection } from "@/api/index";

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
    areaName: {
      type: String,
      default: "",
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  data() {
    return {
      listData: [],

      swiperOption: {
        speed: 1000,
        loop: true,
        grabCursor: true,
        autoplay: true,
        slidesPerView: 3,
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "pagination-active",
        },
      },
    };
  },
  watch: {
    areaId() {
      this.setPopSelection();
    },
  },
  created() {
    this.setPopSelection();
  },
  methods: {
    getOSSImgResize(src, h) {
      return getOSSImgResize(src, h);
    },
    slideChangeTransitionEnd() {
      this.swiper.autoplay.start();
    },

    setPopSelection() {
      getPopSelection({ areaId: this.areaId, areaName: this.areaName }).then((res) => {
        this.listData = res.map((item) => {
          return {
            ...item,
            address: item.fullName,
            img: item.filePath,
          };
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.module-wrp {
  height: 180px;
}
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
    // display: flex;
    // justify-content: space-between;
    .item {
      box-sizing: border-box;
      // width: 32%;
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
          width: 100%;
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

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
