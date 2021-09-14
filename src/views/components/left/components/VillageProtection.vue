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
  <div class="content-bottom">
    <div class="small-title bottom-title">
      保护成效监测
    </div>
    <div class="bottom-content">
      <div class="bottom-content-left">
        <div class="img-text">
          <div class="img-box yellow">
            <img src="./img/ljl.png">
          </div>
          <div class="number-unit yellow-gradient">
            <span><CountUp  :num="protectionEffectiveness.ljl || 0" /></span>个
          </div>
        </div>
        <div class="img-text">
          <div class="img-box claret" >
            <img src="./img/yj.png">
          </div>
          <div class="number-unit yellow-gradient">
            <span><CountUp  :num="protectionEffectiveness.yj || 0" /></span>个
          </div>
        </div>
        <div class="img-text">
          <div class="img-box greed">
            <img src="./img/yj.png">
          </div>
          <div class="number-unit yellow-gradient">
            <span><CountUp  :num="protectionEffectiveness.yj2 || 0" /></span>个
          </div>
        </div>
      </div>
      <div class="bottom-content-center">
        <div class="item">
          <div class="item-name">规划不合格</div>
          <div class="item-number">
            <span><CountUp  :num="protectionEffectiveness.ghbhg || 0" /></span>个
          </div>
        </div>
        <div class="item">
          <div class="item-name">规划修订</div>
          <div class="item-number">
            <span><CountUp  :num="protectionEffectiveness.ghxd || 0" /></span>个
          </div>
        </div>
        <div class="item">
          <div class="item-name">规划通过</div>
          <div class="item-number">
            <span><CountUp  :num="protectionEffectiveness.ghtg || 0" /></span>个
          </div>
        </div>
        <div class="item">
          <div class="item-name">验收优秀</div>
          <div class="item-number">
            <span><CountUp  :num="protectionEffectiveness.ysyx || 0" /></span>个
          </div>
        </div>
      </div>
      <div class="bottom-content-right">
        <div class="item">
          <div class="item-name">验收不合格</div>
          <div class="item-number">
            <span><CountUp  :num="protectionEffectiveness.ysbhg || 0" /></span>个
          </div>
        </div>
        <div class="item">
          <div class="item-name">验收良好/合格</div>
          <div class="item-number">
            <span><CountUp  :num="protectionEffectiveness.yshg || 0" /></span>个
          </div>
        </div>
      </div>
    </div>
  </div>
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
  },
  data() {
    return {
      protectionEffectiveness: {
        ljl: 0,
        yj: 1,
        yj2: 430,
        ghbhg: 1,
        ghxd: 0,
        ghtg: 389,
        ysyx: 0,
        ysbhg: 0,
        yshg: 21,
      }
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
  .content-bottom {
    .bottom-title{
      margin-bottom: 20px;
    }
    .bottom-content{
      display: flex;
      justify-content: space-between;
      .bottom-content-left{
        height: 149px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .img-text{
          display: flex;
          width: 124px;
          height: 40px;
          background: rgba(246, 185, 128, 0.1);
          border-radius: 20px;
          &:nth-of-type(1){
            background:rgba(255, 109, 110, 0.1);
            span {
              background: linear-gradient(0deg, #F6B980 0%, #F5DCC4 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          &:nth-of-type(2){
            background:rgba(255, 109, 110, 0.1);
            span {
              background: linear-gradient(0deg, #FF6D6E 0%, #FF9999 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          &:nth-of-type(3){
            background:rgba(0, 206, 121, 0.1);
            span {
              background: linear-gradient(0deg, #00CE79 0.146484375%, #A5CFBD 98.2421875%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          .img-box{
            box-sizing: border-box;
            width: 32px;
            height: 32px;
            margin-top: auto;
            margin-bottom: auto;
            border-radius: 50%;
            flex: 1;
            text-align: center;
            padding-top: 7px;
          }
          .number-unit {
            flex: 3;
            text-align: center;
            span {
              display: inline-block;
              margin-right: 7px;
              font-size: 24px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              line-height: 40px;
            }
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: bold;
          }
        }
      }
      .bottom-content-center  {
        width: 160px;
        //height: 174px;
        height: 194px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .item{
          display: flex;
          justify-content: space-between;
          .item-name{
            line-height: 30px;
            opacity: 0.85;
          }
          .item-number{
            line-height: 30px;
            span {
              font-size: 24px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              display: inline-block;
              margin-right: 10px;
            }
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.45);
            line-height: 30px;
          }
          &:nth-of-type(1){
            span {
              background: linear-gradient(0deg, #F6B980 0%, #F5DCC4 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          &:nth-of-type(2){
            span {
              background: linear-gradient(0deg, #FF6D6E 0%, #FF9999 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          &:nth-of-type(3){
            span {
              background: linear-gradient(0deg, #00CE79 0.146484375%, #A5CFBD 98.2421875%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          &:nth-of-type(4){
            span {
              background: linear-gradient(0deg, #00CE79 0.146484375%, #A5CFBD 98.2421875%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }
      .bottom-content-right{
        width: 184px;
        height: 143px;
        //height: 129px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .item{
          display: flex;
          justify-content: space-between;
          .item-name{
            line-height: 30px;
            opacity: 0.85;
          }
          .item-number{
            line-height: 30px;
            span {
              font-size: 24px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              display: inline-block;
              margin-right: 10px;
            }
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.45);
            line-height: 30px;
          }
          &:nth-of-type(1){
            span {
              background: linear-gradient(0deg, #F6B980 0%, #F5DCC4 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          &:nth-of-type(2){
            span {
              background: linear-gradient(0deg, #00CE79 0.146484375%, #A5CFBD 98.2421875%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }
    }
  }
}

</style>