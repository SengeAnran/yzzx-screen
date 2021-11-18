<template>
  <div class="box-content">
    <div class="content-top">
      <div class="item">
        <div class="item-title">在建批次</div>
        <div class="item-number">
          <span> {{ villageProtection.zjpc }} </span>批
        </div>
      </div>
      <div class="item">
        <div class="item-title">保护资金总投入</div>
        <div class="item-number">
          <span> <CountUp :num="villageProtection.bhzjztr || 0" /> </span>万元
        </div>
      </div>
      <div class="item">
        <div class="item-title">在建个数</div>
        <div class="item-number">
          <span> <CountUp :num="villageProtection.zjgs || 0" /> </span>个
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <div class="small-title bottom-title">
        保护成效监测
      </div>
      <div class="bottom-content">
        <section class="chart-wrp">
          <div class="chart-item">
            <h4>规划评审（4-9批）</h4>
            <pie-chart
              class="chart"
              :list="auditData"
              :is-percent="false"
              legendLeft="52%"
            />
          </div>
          <div class="chart-item">
            <h4>验收评价（1-6批）</h4>
            <pie-chart
              class="chart"
              :list="evaluateData"
              :is-percent="false"
              legendLeft="52%"
            />
          </div>
        </section>

        <section class="summary-wrp">
          <ImgText colorType="claret" :num="protectionEffectiveness.ljl || 0" />
          <ImgText colorType="yellow" :num="protectionEffectiveness.yj || 0" />
          <ImgText colorType="green" :num="protectionEffectiveness.yj2 || 0" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import ImgText from "./components/ImgText.vue";
import PieChart from "@/components/PieChart";
const pieLabels = ["优秀", "良好", "合格", "不合格"];

export default {
  name: "VillageProtection",
  components: { ImgText, PieChart },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // protectionEffectiveness: {
      //   ljl: 1,
      //   yj: 4,
      //   yj2: 239,
      // },
      // 规划评审
      // auditData: [
      //   { name: "优秀", value: 58 },
      //   { name: "良好", value: 159 },
      //   { name: "合格", value: 16 },
      //   { name: "不合格", value: 7 },
      // ],
      // 验收评价
      // evaluateData: [
      //   { name: "优秀", value: 125 },
      //   { name: "良好", value: 107 },
      //   { name: "合格", value: 7 },
      //   { name: "不合格", value: 4 },
      // ],
    };
  },
  computed: {
    villageProtection() {
      const { data } = this;
      return {
        zjpc: data.batchesConstruction || "",
        bhzjztr: Number(data.totalProtectionFunds),
        zjgs: Number(data.numberConstruction),
      };
    },
    protectionEffectiveness() {
      const { data } = this;
      return {
        ljl: Number(data.redAlert),
        yj: Number(data.yellowWarning),
        yj2: Number(data.greenWarning),
      };
    },
    auditData() {
      const {
        excellentReview: a,
        wellReviewed: b,
        qualified: c,
        unqualifiedReview: d,
      } = this.data;
      const arr = [a, b, c, d];
      return arr.map((item, i) => {
        return {
          name: pieLabels[i],
          value: item || 0,
        };
      });
    },
    evaluateData() {
      const {
        excellentAcceptance: a,
        goodAcceptance: b,
        acceptancePass: c,
        acceptanceFailed: d,
      } = this.data;
      const arr = [a, b, c, d];
      return arr.map((item, i) => {
        return {
          name: pieLabels[i],
          value: item || 0,
        };
      });
    },
  },
};
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
      .item-title {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        line-height: 30px;
        opacity: 0.85;
      }
      .item-number {
        margin-top: 12px;
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
          //background: linear-gradient(0deg, #79c0f6 0%, #dceaf5 100%);
          //-webkit-background-clip: text;
          //-webkit-text-fill-color: transparent;
          display: inline-block;
          margin-right: 5px;
        }
      }
    }
  }
  .content-bottom {
    margin-top: 18px;
    .bottom-title {
      margin-bottom: 20px;
      line-height: 1;
    }
    .bottom-content {
      .chart-wrp {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .chart-item {
          width: 46%;
          & h4 {
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
            line-height: 1;
          }
          .chart {
            height: 144px;
          }
        }
      }
      .summary-wrp {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
