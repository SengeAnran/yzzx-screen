<template>
  <div class="line" @click="$emit('click')" :style="{height: height}">
    <div class="title" v-html="dataObj.title"></div>
    <div class="item-list">
      <div v-for="(item, index) in dataObj.itemList" :key="index" class="item" :style="{lineHeight: lineHeight}">
        <template v-if="dataObj.isImg">
          <div class="text" v-html="item.text"></div>
          <img :src="item.imgUrl"/>
          <img :src="item.imgUrl"/>
          <img :src="item.imgUrl"/>
        </template>
        <template v-else>
          {{ item }}
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseLine",
  props: {
    dataObj: Object,
    height: {
      type: String,
      default: '96px',
    },
    lineHeight: {
      type: String,
      default: '40px',
    }
  }
}
</script>


<style scoped lang="scss">
.line {
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 32px 0px rgba(13, 87, 163, 0.16);
  border-radius: 4px;

  .title {
    width: 96px;
    height: 96px;
    background-image: linear-gradient(90deg, #1d7cff 0%, #13c6ff 100%);
    border-radius: 4px;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 29px;

    color: #ffffff;
    text-align: center;
    padding-top: 22px;
    //vertical-align: center;
  }

  .item-list {
    flex: 1;
    display: flex;
    padding: 28px 0;
  }

  .item {
    position: relative;
    flex: 1;
    text-align: center;
    padding: 0 10px;
    //line-height: 40px;
    display: flex;
    justify-content: space-around;

    .text {
      max-width: 127px;
      color: #1c81ff;
    }

    &:nth-child(n+2)::before {
      position: absolute;
      margin: 0 auto;
      content: '';
      left: 0;
      width: 2px;
      height: 40px;
      background-color: #eaecf1;
      display: inline-block;
      //background: gainsboro;
    }
  }
}
</style>
