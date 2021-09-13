<template>
<div class="box-content">
  <div class="content-top">
    <div class="item">
      <div class="item-title">在建批次</div>
      <div class="item-number">
        <span>
          {{villageProtection.zjpc}}
        </span>批
      </div>
    </div>
    <div class="item">
      <div class="item-title">保护申请数量</div>
      <div class="item-number">
        <span>
          <CountUp  :num="villageProtection.bhsqs || 0" />
        </span>个
      </div>
    </div>
    <div class="item">
      <div class="item-title">保护资金总投入</div>
      <div class="item-number">
        <span>
          <CountUp  :num="villageProtection.bhzjztr || 0" />
        </span>万元
      </div>
    </div>
  </div>
  <div class="content-bottom"></div>
</div>
</template>

<script>
export default {
  name: "VillageProtection",
  props: {
    villageProtection: {
      type: Object,
      default:() => {},
    }
  }
}
</script>

<style lang="scss" scoped>
.box-content {
  width: 100%;
  .content-top {
    display: flex;
    justify-content: space-between;
    .item {
      //margin-top: 16px;
      box-sizing: border-box;
      padding: 14px 20px;
      .item-title{
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 30px;
        opacity: 0.85;
      }
      .item-number{
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.45);
        line-height: 30px;
        //opacity: 0.45;
        span {
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          line-height: 30px;
          background: linear-gradient(0deg, #79C0F6 0%, #DCEAF5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
  }
  .content-bottom {}
}

</style>