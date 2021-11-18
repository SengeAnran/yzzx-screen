<template>
  <div class="box-content">
    <div class="top-item item">
      <div class="item-title">行政村</div>
      <div class="item-number">
        <span> <CountUp :num="villageOverview.administrative || 0" /> </span>个
      </div>
    </div>
    <!-- <div class="top-item item">
      <div class="item-title">美丽乡村</div>
      <div class="item-number">
        <span>
          <CountUp  :num="villageOverview.beautiful || 0" />
        </span>个
      </div>
    </div> -->
    <div class="top-item item">
      <div class="item-title">二十四节气村</div>
      <div class="item-number">
        <span> <CountUp :num="villageOverview.solarTerms || 0" /> </span>个
      </div>
    </div>
    <div class="bottom-item item">
      <div class="item-title">农业文化遗产地</div>
      <div class="item-number">
        <span>
          <CountUp :num="villageOverview.agriculturalHeritage || 0" /> </span
        >个
      </div>
    </div>
    <div class="bottom-item item">
      <div class="item-title">历史文化重点保护村</div>
      <div class="item-number">
        <span> <CountUp :num="villageOverview.historyCulture || 0" /> </span>个
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VillageOverview",
  props: {
    villageOverview: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.box-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  .item {
    margin-top: 20px;
    box-sizing: border-box;
    padding: 14px 20px;
    .item-title {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 30px;
      opacity: 0.85;
    }
    .item-number {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.45);
      line-height: 30px;
      //opacity: 0.45;
      span {
        font-size: 22px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        line-height: 30px;
        color: white;
        //background: linear-gradient(0deg, #79C0F6 0%, #DCEAF5 100%);
        //-webkit-background-clip: text;
        //-webkit-text-fill-color: transparent;
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
  // .top-item {
  //   width: 164px;
  //   height: 80px;
  //   background: url("./img/d_jx.png") no-repeat 100% 100%;
  // }
  .top-item,
  .bottom-item {
    width: 254px;
    height: 80px;
    background: url("./img/c_jx.png") no-repeat 100% 100%;
  }
}
</style>
