<template>
  <div class="box-content">
    <div class="small-title title">二十四节气活动举办进度</div>
    <div class="percentage">
<!--      <CountUp :num="percentage || 0"/>-->
      {{percentage}}%
    </div>
    <div class="schedule-content">
      <div class="number">{{completionSchedule}}</div>
      <div class="bg-img"><img src="./img/jd_bg.png" alt=""></div>
      <div class="jd-img">
        <div class="jd-img-content" :style="{left:`${shiftLeft}px`}">
          <img src="./img/jd_img.png" alt="">
        </div>
      </div>
      <div class="number">{{allSchedule}}</div>
    </div>
    <div class="popular-activities">
      <div class="content-title">人气活动</div>
      <div class="content-title-right">共{{popularActivities}}条</div>
    </div>
    <div class="content">
      <div class="item" v-for="(item, index) in popularActList" :key="index">
        <div class="content-img">
          <img :src="item.imgs[0].url" alt="">
        </div>
        <div class="item-content">
          <div class="item-title">{{item.title}}</div>
          <div class="item-address">举办地：{{item.address}}</div>
          <div class="item-time">举办时间：{{item.time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VillageInterest",
  props: {
    areaId: {
      type: Number
    }
  },
  data() {
    return {
      // percentage: 62,
      allSchedule: 24,
      completionSchedule: 20,
      popularActivities: 24,
      popularActList: [
        {
          title: '白露|赴一场象山海边的司机送',
          address: '某某县某某村',
          time: '2021年8月31日',
          imgs: [
            {
              url: require('./img/cs_img1.jpeg'),
              type: 'img'
            },
            {
              url: require('./img/cs_img2.jpeg'),
              type: 'img'
            },
          ]
        },
      ],
    }
  },
  computed: {
    percentage() {
      return Number((this.completionSchedule / this.allSchedule * 100).toFixed(2));
    },
    shiftLeft() {
      return -(419 - this.completionSchedule / this.allSchedule * 419);
    }
  }
}
</script>

<style lang="scss" scoped>
.box-content {
  position: relative;
  .title {
    margin-top: 17px;
  }
  .percentage{
    position: absolute;
    left: 259px;
    top: 0;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    line-height: 30px;
    background: linear-gradient(0deg, #79C0F6 0%, #DCEAF5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    span {
      background: linear-gradient(0deg, #79C0F6 0%, #DCEAF5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .schedule-content{
    margin-top: 20px;
    display: flex;
    .number{
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: bold;
    }
    .bg-img{
      margin-top: auto;
      margin-bottom: auto;
      width: 480px;
      height: 18px;
    }
    .jd-img {
      position: absolute;
      left: 53px;
      top: 58px;
      width: 419px;
      height: 18px;
      overflow: hidden;
      .jd-img-content{
        position: absolute;
      }
    }
  }
  .popular-activities {
    display: flex;
    margin-top: 20px;
    .content-title {
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 24px;
      margin-right: 14px;
    }
    .content-title-right{
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 24px;
      opacity: 0.65;
    }
  }
  .content {
    margin-top: 15px;
    width: 524px;
    height: 160px;
    background: #011230;
    border-radius: 4px;
    overflow: hidden;

    .item {
      width: 524px;
      height: 160px;
      display: flex;
      padding: 12px 0 12px 12px;
      box-sizing: border-box;
      .content-img {
        overflow: hidden;
        width: 231px;
        height: 136px;
        margin-right: 26px;
        img {
          width: 231px;
          height: 136px;
          border-radius: 2px;
        }
      }
      .item-content {
        width: 203px;
        display: flex;
        flex-direction: column;
        .item-title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 24px;
          margin-bottom: 28px;
          margin-top: 18px;
        }
        .item-address {
          margin-bottom: 14px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 24px;
          opacity: 0.65;

        }
        .item-time {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 24px;
          opacity: 0.65;
        }
      }
    }
  }
}
</style>