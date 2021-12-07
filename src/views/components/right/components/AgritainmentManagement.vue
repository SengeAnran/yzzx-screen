<template>
  <div class="box-content">
    <div class="content-top">
      <div class="item" v-for="(item, index) in dataList" :key="index">
        <div class="item-left">
          <div class="img">
            <img :src="item.imgUrl" alt="" />
          </div>
          <div class="name">
            {{ item.name }}
          </div>
        </div>
        <div class="item-right">
          <div class="number">
            <span><CountUp :num="item.number || 0"/></span>
            {{ item.unit }}
          </div>
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <div class="content-bottom-left">
        <div class="item">
          <div class="name">床位数</div>
          <div class="number">
            <count-up :num="bedNumber || 0" />
            个
          </div>
        </div>
        <div class="item">
          <div class="name">餐位数</div>
          <div class="number">
            <count-up :num="mealNumber || 0" />
            个
          </div>
        </div>
      </div>
      <div class="content-bottom-right">
        <star-classification :area-id="areaId"  :area-name.sync="areaName" />
      </div>
    </div>
  </div>
</template>

<script>
import StarClassification from "./StarClassification";
import { getFarmhouseManagement } from "@/api/index";
export default {
  name: "AgritainmentManagement",
  components: {
    StarClassification,
  },
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
      dataList: [
        {
          name: "农家乐总数",
          imgUrl: require("./img/njlzs.png"),
          number: 0,
          unit: "家",
        },
        {
          name: "从业人数",
          imgUrl: require("./img/cyrs.png"),
          number: 0,
          unit: "人",
        },
        {
          name: " 经营收入",
          imgUrl: require("./img/jjsr.png"),
          number: 0,
          unit: "万元",
        },
        {
          name: " 带动农户数",
          imgUrl: require("./img/ddnhs.png"),
          number: 0,
          unit: "户",
        },
      ],
      bedNumber: 300,
      mealNumber: 9800,
    };
  },
  watch: {
    areaId() {
      // console.log('change');
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const data = {
        areaId: this.areaId,
        areaName: this.areaName,
      };
      getFarmhouseManagement(data).then((res) => {
        // let level = 1; // 根据level判断单位
        const unit = ["家", "万人", "亿元", "万户"];
        this.bedNumber = res.query2.bedNum;
        this.mealNumber = res.query2.mealsNum;
        this.dataList[0].number = res.query1;
        this.dataList[1].number = this._normalizeData(res.query2.engagedNum);
        this.dataList[2].number = this._normalizeData(
          Number(Number(res.query2.revenue).toFixed(0))
        );
        this.dataList[3].number = this._normalizeData(res.query2.farmerHouse);

        this.dataList.forEach((item, i) => {
          item.unit = unit[i];
        });
      });
    },

    _normalizeData(val) {
      // 实际情况需根据level判断
      return Number((val / 10000).toFixed(2));
    },
  },
};
</script>

<style lang="scss" scoped>
.box-content {
  margin-top: 11px;
  .content-top {
    display: flex;
    flex-wrap: wrap;
    .item {
      height: 43px;
      width: 50%;
      display: flex;
      .item-left {
        width: 165px;
        display: flex;
        .img {
        }
        .name {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #feffff;
          line-height: 40px;
        }
      }
      .item-right {
        .number {
          white-space: nowrap;

          span {
            //width: 49px;
            font-size: 22px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            font-style: italic;
            color: white;
            //background: linear-gradient(0deg, #a9d4f5 0%, #fafdff 100%);
            //-webkit-background-clip: text;
            //-webkit-text-fill-color: transparent;
            display: inline-block;
            padding-right: 5px;
            margin-right: 4px;
          }
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(254, 255, 255, 0.45);
        }
      }
    }
  }
  .content-bottom {
    display: flex;
    height: 132px;
    .content-bottom-left {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 130px;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1;
        .name {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
          line-height: 30px;
          opacity: 0.85;
        }
        .number {
          span {
            font-size: 24px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #ffffff;
            line-height: 30px;

            background: linear-gradient(0deg, #79c0f6 0%, #dceaf5 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            margin-right: 6px;
          }
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.45);
          line-height: 30px;
        }
      }
    }
    .content-bottom-right {
      width: 394px;
      height: 100%;
    }
  }
}
</style>
