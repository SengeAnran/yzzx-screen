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
    <div class="icon-button">
      <div
        class="item"
        @click="iconOnClick(item, index)"
        :class="{iconActive: activeIndex === index}"
        v-for="(item, index) in iconList"
        :key="index">
        <div class="img" :style="{background:`url('${item.url}')`}"></div>
        <span v-if="activeIndex === index">{{item.type}}</span>
      </div>
    </div>
    <div class="toggle-layer">
      <ul>
        <li v-for="(item, index) in list" :key="`toggle-${index}`">
          <span @click="selectMart(item,index)" :class="{active: item.show}"></span>
          <img :src="item.url" alt="">
          <span>{{item.type}}</span>
        </li>
      </ul>
    </div>
    <div class="icon-numbers">

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import getOption from './number_option';
import getSpotOption from './spot_option';
import option from "./map_option";
const dapuJson = require("./330000_full.json");  //保存的json文件
import {
  getAgritainmentDistribution, // 农家乐数量分布
  getHistoryCultureDistribution, // 历史文化重点保护村数量分布
  getSolarTermDistribution, // 24节气村数量分布
  getAgriculturalHeritageDistribution, // 农业文化遗产地数量分布
  getLocationDistribution, // 打点
} from '@/api/index';
import {getProtectionItem} from "../../../api";

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
          number: 2068,
          unit: '次',
        },
        {
          name: '日访问量',
          number: 57,
          unit: '次'
        },
        {
          name: '招商/招聘发布量',
          number: 110,
          unit: '次'
        },
        {
          name: '应用好评率',
          number: 96,
          unit: '%'
        },
      ],
      list: [
        {
          type: '24节气村',
          show: false,
          url: require('./img/jqc.png'),
        },
        {
          type: '农业文化遗产地',
          show: false,
          url: require('./img/nywhyc.png'),
        },
        {
          type: '历史文化重点保护村',
          show: false,
          url: require('./img/lswhzdbhc.png'),
        },
        {
          type: '农家乐',
          show: false,
          url: require('./img/njl.png'),
        },
      ],
      activeIndex: 6,
      myChart: undefined,
      iconList: [
        {
          type: '24节气村',
          url: require('./img/icon_01.png'),
        },
        {
          type: '农业文化遗产地',
          url: require('./img/icon_02.png'),
        },
        {
          type: '历史文化重点保护村',
          url: require('./img/icon_03.png'),
        },
        {
          type: '农家乐',
          url: require('./img/icon_04.png'),
        },
        {
          type: '历史文化村落保护项目',
          url: require('./img/icon_05.png'),
        },
      ],
    }
  },
  methods: {
    mapEchartsInit() {
      echarts.registerMap('浙江省', dapuJson); //引入地图文件
      this.myChart = echarts.init(this.$refs.map); // 获取展示区域
      this.myChart.setOption(option, true); // 添加配置
    },
    selectMart(item, index) {
      this.list[index].show = !this.list[index].show;
      this.getData();
    },
    async getData() {
      const data = {
        q1: this.list[0].show,
        q2: this.list[1].show,
        q3: this.list[2].show,
        q4: this.list[3].show,
      }
      const res = await getLocationDistribution(data);
      const optionData = {
        data1: [],
        data2: [],
        data3: [],
        data4: [],
      }
      if(res.q1) {
        optionData.data1 = res.q1.map(item => {
          return {
            name: item.name,
            value:[Number(item.areaY), Number(item.areaX)]
          }
        })
      }
      if(res.q2) {
        optionData.data2 = res.q2.map(item => {
          return {
            name: item.name,
            value:[Number(item.areaY), Number(item.areaX)]
          }
        })
      }
      if(res.q3) {
        optionData.data3 = res.q3.map(item => {
          return {
            name: item.name,
            value:[Number(item.areaY), Number(item.areaX)]
          }
        })
      }
      if(res.q4) {
        optionData.data4 = res.q4.map(item => {
          return {
            name: item.name,
            value:[Number(item.areaY), Number(item.areaX)]
          }
        })
      }
      console.log(optionData);
      console.log(getSpotOption(optionData))
      this.myChart.setOption(getSpotOption(optionData),true)
    },
    async getIconData(type) {
      let res
      switch (type) {
        case '24节气村' : { res = await getSolarTermDistribution()} break;
        case '农业文化遗产地' : { res = await getAgriculturalHeritageDistribution() } break;
        case '历史文化重点保护村' : { res = await getHistoryCultureDistribution() } break;
        case '农家乐' : { res = await getAgritainmentDistribution() } break;
        default: { res = await getProtectionItem() } break;
      }
      const data = res.map(item => {
        return{
          name: item.areaName,
          value: item.count,
        }
      })
      console.log(data)
      this.myChart.setOption(getOption(data), true); // 添加配置
    },
    iconOnClick(item, index) {
      this.activeIndex = index;
      this.getIconData(item.type)
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
        text-align: center;
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
        text-align: center;
        margin-left: 20px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.45);
        span {
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #FFFFFF;
          //background: linear-gradient(0deg, #79C0F6 0%, #DCEAF5 100%);
          //-webkit-background-clip: text;
          //-webkit-text-fill-color: transparent;
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
  .icon-button {
    width: 100px;
    height: 200px;
    position: absolute;
    top: 204px;
    left: 24px;
    .item {
      position: relative;
      width: 36px;
      height: 36px;
      background: rgba(121, 192, 246, 0.1);
      border-radius: 18px;
      margin-bottom: 16px;
      cursor: pointer;
      .img {
        position: absolute;
        display: inline-block;
        width: 50px;
        height: 50px;
        left: -7px;
        top: -7px;
        background-size: contain;
      }
    }
    .iconActive {
      width: max-content;
      height: 36px;
      background: #2D7EE7;
      border-radius: 18px;
      span{
        display: inline-block;
        font-size: 18px;
        font-family: Microsoft YaHei;
        color: #FFFFFF;
        margin-left: 40px;
        margin-right: 13px;
        line-height: 36px;
      }
    }
  }
  .toggle-layer {
    position: absolute;
    width: 300px;
    height: 180px;
    //background: #00CE79;
    top: 761px;
    left: 24px;
    z-index: 1000;
    font-size: 18px;
    font-family: Microsoft YaHei;
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        height: 37px;
        line-height: 37px;
        span {
          display: inline-block;
          vertical-align: middle;
          &:nth-of-type(1) {
            width: 16px;
            height: 16px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid #FFFFFF;
            border-radius: 2px;
            margin-right: 5px;
            cursor: pointer;
          }
        }
        .active {
          border: 0;
          background: url("./img/checked-icon.png") no-repeat center !important;
        }
        img{
          vertical-align: middle;
        }
      }
    }

  }
}

</style>