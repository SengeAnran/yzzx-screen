<template>
  <div @click="$emit('click')" class="line">
    <div class="title" v-html="dataObj.title"></div>
    <div class="item-list">
      <div v-for="(item, index) in dataObj.itemList" :key="index" class="item">
        <template v-if="item.textList && item.textList.length > 0">
          <div class="text-list" v-for="i in item.textList" :key="i">
            {{ i }}
          </div>
        </template>
        <template v-else>
          {{ item.text }}
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataObj: Object,
    lineHeight: {
      type: String,
      default: '0.2rem',
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
    height: 216px;
    background-image: linear-gradient(90deg, #1d7cff 0%, #13c6ff 100%);
    border-radius: 4px;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 96px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: #ffffff;
    text-align: center;
    padding-top: 22px;
    //vertical-align: center;
  }

  .item-list {
    font-size: 14px;
    //padding: 28px 0;
    //line-height: 40px;
    flex: 1;
    flex-direction: column;
    display: flex;

  }

  .item {
    flex: 1;
    height: 67px;
    position: relative;
    text-align: center;
    padding: 0 10px;
    line-height: 67px;
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
      //left: 0;
      top: 0;
      width: 90%;
      height: 2px;
      background-color: #eaecf1;
      display: inline-block;
      //background: gainsboro;
    }

    .text-list {
      &:nth-child(n+2)::before {
        position: absolute;
        margin: 0 auto;
        content: '';
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        width: 2px;
        height: 40px;
        background-color: #eaecf1;
        display: inline-block;
        //background: gainsboro;
      }
    }
  }
}
</style>
