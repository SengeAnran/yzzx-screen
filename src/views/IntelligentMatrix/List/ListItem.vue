<template>
  <div @click="goDetail" class="list-item">
    <template v-if="dataObj.isMore">
      <div class="more">更多......</div>
    </template>
    <template v-else>
      <div class="img">
        <img :src="dataObj.iconUrl" alt="">
      </div>
      <div class="item-right">
        <div class="title">{{ dataObj.name }}</div>
        <div class="tip">{{ dataObj.tip }}</div>
      </div>
    </template>

  </div>
</template>
<script>
export default {
  props: {
    dataObj: Object,
  },
  methods: {
    goDetail() {
      if (this.dataObj.canDetail) {
        this.$router.push({
          path: '/intelligentMatrix/detail',
          query: {
            name: this.dataObj.name,
          }
        })
      } else {
        this.$message.warning('即将上线，敬请期待!')
      }

    }
  }
}
</script>
<style scoped lang="scss">
.list-item {
  float: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  //width: 442px;
  width: calc(33.33% - 24px);
  height: 112px;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(13, 87, 163, 0.16);
  border-radius: 4px;
  margin: 0 24px 24px 0;

  .more {
    flex: 1;
    text-align: center;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 108px;
    letter-spacing: 1px;
    color: #b5b7bd;
  }

  .img {
    width: 117px;
    text-align: center;

    img {
      height: 44px;
      width: 44px;
    }
  }

  .item-right {
    //flex: 1;
    width: 300px;

    .title {
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 1px;
      color: #424656;
    }

    .tip {
      max-width: 100%;
      margin-top: 14px;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 2px;
      color: #b5b7bd;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }

  //&:nth-child(3n + 3) {
  //  margin: 0;
  //}
}
</style>
