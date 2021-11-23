<template>
  <div class="box-content">
    <section class="amount-wrp">
      <div class="amount">
        <div class="icon">
          <img src="../../../../assets/img/car.png" alt="" />
        </div>
        <div class="desc">
          <span class="desc-num"><CountUp :num="activityAmount" /> </span>
          <span class="desc-con">农耕文化活动举办数量</span>
        </div>
      </div>
    </section>
    <div class="popular-activities">
      <div class="content-title">人气活动</div>
      <div class="content-title-right">共{{ popularActivities }}条</div>
    </div>
    <div class="content">
      <InterestSwiper
        :data="popularActList"
        v-if="popularActList && popularActList.length"
      />
      <Empty v-else />
    </div>
  </div>
</template>

<script>
import InterestSwiper from "./InterestSwiper";
import { getPopularActivities, getActivityNum } from "@/api/index.js";

export default {
  name: "VillageInterest",
  components: { InterestSwiper },
  props: {
    areaId: {
      type: Number,
    },
    areaName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // percentage: 62,
      activityAmount: 0, // 农耕文化活动举办数量

      allSchedule: 24,
      completionSchedule: 20,
      popularActivities: 24,
      popularActList: [],
    };
  },
  watch: {
    areaId() {
      this.getActivityData();
      this.setActivityNum();
    },
  },
  computed: {
    percentage() {
      return Number(
        ((this.completionSchedule / this.allSchedule) * 100).toFixed(2)
      );
    },
    shiftLeft() {
      return -(419 - (this.completionSchedule / this.allSchedule) * 419);
    },
  },
  created() {
    this.getActivityData();
    this.setActivityNum();
  },
  methods: {
    getActivityData() {
      getPopularActivities({ areaId: this.areaId, areaName: this.areaName }).then((res) => {
        this.popularActivities = res.length || 0;
        this.popularActList = res.map((item) => {
          return {
            title: item.activityName,
            address: item.activityAddress,
            addressB:
              item.activityAddress.length > 8
                ? item.activityAddress.slice(0, 7) + "..."
                : item.activityAddress,
            time: item.gmtModified,
            imgs: item.filePath.split(","),
          };
        });
      });
    },

    // 农耕文化举办数量
    setActivityNum() {
      getActivityNum({ areaId: this.areaId, areaName: this.areaName }).then((res) => {
        this.activityAmount = Number(res);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box-content {
  position: relative;
  .title {
    margin-top: 18px;
    line-height: 1;
    font-size: 16px;
  }
  .percentage {
    position: absolute;
    left: 259px;
    top: -7px;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    line-height: 30px;
    background: linear-gradient(0deg, #79c0f6 0%, #dceaf5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    span {
      background: linear-gradient(0deg, #79c0f6 0%, #dceaf5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .schedule-content {
    margin-top: 20px;
    display: flex;
    .number {
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: bold;
    }
    .bg-img {
      margin-top: auto;
      margin-bottom: auto;
      width: 480px;
      height: 18px;
    }
    .jd-img {
      position: absolute;
      left: 53px;
      top: 44px;
      width: 419px;
      height: 18px;
      overflow: hidden;
      .jd-img-content {
        position: absolute;
      }
    }
  }

  .amount-wrp {
    margin-top: 16px;
    .amount {
      width: 528px;
      height: 73px;
      display: flex;
      background: #001e4273;
      border-radius: 8px;
      .icon {
        flex: 1;
        text-align: right;
        & img {
          padding-top: 8px;
        }
      }
      .desc {
        width: 350px;
        padding-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span:first-child.desc-num {
          ::v-deep .num-2 {
            font-size: 22px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #fefefe;
            line-height: 1;
          }
        }
        span:last-child.desc-con {
          margin-top: 8px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #fefefe;
          line-height: 1;
          opacity: 0.65;
        }
      }
    }
  }

  .popular-activities {
    display: flex;
    margin-top: 18px;
    .content-title {
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
      line-height: 24px;
      margin-right: 14px;
    }
    .content-title-right {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 24px;
      opacity: 0.65;
    }
  }
  .content {
    margin-top: 13px;
    width: 524px;
    height: 160px;
    background: rgba(0, 30, 66, 0.45);
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
          color: #ffffff;
          line-height: 24px;
          margin-bottom: 28px;
          margin-top: 18px;
        }
        .item-address {
          margin-bottom: 14px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
          line-height: 24px;
          opacity: 0.65;
        }
        .item-time {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
          line-height: 24px;
          opacity: 0.65;
        }
      }
    }
  }
}
</style>
