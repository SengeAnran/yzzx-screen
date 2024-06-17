<template>
  <div class="detail">
    <div class="title">{{ detailInfo.title }}</div>
    <div v-if="JSON.stringify(detailInfo) !== '{}'" class="content">
      <img v-if="detailInfo.imgUrl" :src="detailInfo.imgUrl" alt="">
      <template v-else>
        <div v-for="(item, index) in detailInfo.content" :key="index" class="content-item">
          <img v-if="item.imgUrl" :src="item.imgUrl" alt="">
          <div v-else class="text" v-html="item.text"></div>
        </div>
      </template>

    </div>
  </div>
</template>
<script>
import {detail} from "./contanst";

export default {
  name: "detail",
  data() {
    return {
      detailInfo: {},
    }
  },
  beforeMount() {
    this.init();
  },
  methods: {
    init() {
      const index = this.$route.query.index;
      this.detailInfo = detail[index];
    }
  }
}
</script>
<style scoped lang="scss">
.title {
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  padding-top: 30px;
  margin-bottom: 40px;
}

.content {
  display: flex;
  flex-direction: column;
  //align-items: center;
  padding: 10px 150px;
  font-size: 12px;

  .content-item {
    img {
      display: block;
      margin: 30px auto;
      min-width: 500px;

    }

    .text {
      line-height: 150%;
      text-indent: 2em;
      //v-deep::p {
      //
      //}
      p {
        margin: 20px 0;
      }
    }
  }


}
</style>
