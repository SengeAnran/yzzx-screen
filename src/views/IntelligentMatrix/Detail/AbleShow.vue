<template>
  <div class="able-show">
    <div v-if="tabList.length > 0" class="tab-list">
      <div class="tab-item"
           v-for="(item, index) in tabList"
           @click="changeActive(item, index)"
           :class="{active: activeIndex === index}"
           :key="index">
        {{ item.name }}
      </div>
    </div>
    <!--    图片类识别-->
    <ImgOcrRecognition
        v-if="type === 'img'"
        :img-list="imgList"
        :ocr-method="ocrMethod"
        :other-params="otherParams"
        :tap-list="resTapList"
        :tab-index="activeIndex"
        :res-date-key="resDateName"
    />
    <!--    文字类识别-->
    <TextOcrRecognition
        v-else-if="type === 'text'"
        :ocr-method="ocrMethod"
        :other-params="otherParams"
        :res-date-key="resDateName"
        :example-info="exampleInfo"
    />
  </div>
</template>
<script>
import {getIdCard} from "@/api/baiduAi";
import {ableData} from "./contanst";

import ImgOcrRecognition from "./components/ImgOcrRecognition.vue";
import TextOcrRecognition from "./components/TextOcrRecognition.vue";

export default {
  name: "AbleShow",
  components: {TextOcrRecognition, ImgOcrRecognition},
  data() {
    return {
      activeIndex: 0,
      infoData: null,
      tabList: [], // 分类项
      otherParams: {}, // 额外参数
      ocrMethod: getIdCard,  // 识别api
      resDateName: '',  // 识别api
      imgList: [],  // 示例数据
      resTapList: [], // 识别结果栏
      type: 'img', // 识别类型
      exampleInfo: null, // 例子信息
    };
  },
  beforeMount() {
    this.initData();
  },
  mounted() {
    // this.getData()
  },
  watch: {
    imageUrl(val) {
      if (val) {
        // this.getData();
      }
    }
  },
  methods: {
    initData() {
      const name = this.$route.query.name;
      const index = ableData.findIndex(i => i.name === name);
      if (index === -1) {
        return
      }
      this.type = ableData[index].type;
      if (ableData[index].type === 'img') { // 图片识别
        this.infoData = ableData[index];
        this.tabList = ableData[index].tabList;
        this.resTapList = ableData[index].resTapList;
        this.otherParams = ableData[index].otherParams;
        this.ocrMethod = ableData[index].ocrMethod;
        this.resDateName = ableData[index].resDateName;
        if (this.tabList && this.tabList.length > 0) {
          this.imgList = ableData[index].imgList[0];
        } else {
          this.imgList = ableData[index].imgList;
        }
      } else if (ableData[index].type === 'text') { // 文字识别
        this.otherParams = ableData[index].otherParams;
        this.ocrMethod = ableData[index].ocrMethod;
        this.exampleInfo = ableData[index].exampleInfo;
        this.resDateName = ableData[index].resDateName;
      }

    },
    changeActive(item, index) {
      this.activeIndex = index;
      this.otherParams[item.key] = item.value;
      this.imgList = this.infoData.imgList[index];
    }
  }
}
</script>
<style scoped lang="scss">
.able-show {
  padding-top: 30px;
}

.tab-list {
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  height: 32px;
  line-height: 32px;
  position: relative;
  padding-bottom: 20px;
  //border-bottom: 1px solid #eee;
  text-align: center;
  background: #fff;

  .tab-item {
    cursor: pointer;
    font-size: 16px;
    padding: 0 20px;

    &.active {
      font-weight: 600;
    }
  }
}
</style>
