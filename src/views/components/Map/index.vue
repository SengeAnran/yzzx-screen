<template>
  <div class="map">
    <div class="address">
      <div class="img">
        <img src="./img/wz.png" alt="">
      </div>
      <div class="address-name">{{ province }}</div>
      <div v-if="city" class="img">
        <img src="./img/wz.png" alt="">
      </div>
      <div class="address-name">{{ city }}</div>
      <div v-if="area" class="img">
        <img src="./img/wz.png" alt="">
      </div>
      <div class="address-name">{{ area }}</div>
      <div v-if="village" class="img">
        <img src="./img/wz.png" alt="">
      </div>
      <div class="address-name">{{ village }}</div>
    </div>
    <div class="statistical-data">
      <div class="item" v-for="(item, index) in statisticalData" :key="index">
        <div class="name">{{item.name}}</div>
        <div class="number" v-if="item.unit !== '%'">
          <CountUp :num="item.number || 0"/>{{item.unit}}
        </div>
        <div class="number" v-else>
          <span>
            <CountUp :num="item.number || 0"/>{{item.unit}}
          </span>
        </div>
      </div>
    </div>
    <div class="map-bottom" ref="map"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import option from "./map_option";
const dapuJson = require("./330000_full.json");  //保存的json文件

export default {
  name: "index",
  data() {
    return {
      province: '浙江省',
      city: '',
      area: '',
      village: '',
      statisticalData: [
        {
          name: '累计访问量',
          number: 2000,
          unit: '次',
        },
        {
          name: '日访问量',
          number: 100,
          unit: '次'
        },
        {
          name: '招商/招聘发布量',
          number: 2000,
          unit: '次'
        },
        {
          name: '应用好评率',
          number: 98,
          unit: '%'
        },
      ]
    }
  },
  methods: {
    mapEchartsInit() {
      echarts.registerMap('浙江省', dapuJson); //引入地图文件
      const myChart = echarts.init(this.$refs.map); // 获取展示区域
      myChart.setOption(option, true); // 添加配置
    }
  },
  mounted() {
    this.mapEchartsInit(); // 绘画地图
  }
}
</script>

<style lang="scss" scoped>
.map {
  box-sizing: border-box;
  position: absolute;
  width: 688px;
  height: 985px;
  //background: red;
  left: 616px;
  top: 92px;
  .address{
    display: flex;
    margin-left: 44px;
    margin-top: 27px;
    margin-bottom: 30px;
    .img {
      width: 24px;
      margin-right: 7px;
      margin-left: 7px;
      &:nth-of-type(1) {
        margin-left: 0;
      }
    }
  }
  .statistical-data {
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    .item {
      //box-sizing: border-box;
      //padding-left: 20px;
      min-width: 146px;
      height: 97px;
      background: url("./img/fk_bg.png");
      &::before{
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: rgba(196, 224, 245, 0.4);
      }
      .name {
        margin-left: 20px;
        margin-top: 19px;
        margin-bottom: 18px;
        margin-right: 20px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #FFFFFF;
        opacity: 0.65;
      }
      .number {
        margin-left: 20px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.45);
        span {
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          background: linear-gradient(0deg, #79C0F6 0%, #DCEAF5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          margin-right: 11px;
        }
      }
      &:last-child {
        span {
          margin-right: 0;
        }
      }
    }
  }
  .map-bottom{
    margin-top: 56px;
    width: 100%;
    height: 600px;
    overflow: hidden;
  }
}

</style>