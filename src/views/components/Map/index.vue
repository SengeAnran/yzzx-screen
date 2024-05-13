<template>
  <div class="map">
    <div class="statistical-data">
      <div class="item" v-for="(item, index) in statisticalData" :key="index">
        <div class="name">{{ item.name }}</div>
        <div class="number" v-if="item.unit !== '%'">
          <CountUp :num="item.number || 0" />{{ item.unit }}
        </div>
        <div class="number" v-else>
          <span> <CountUp :num="item.number || 0" />{{ item.unit }} </span>
        </div>
      </div>
    </div>
    <div class="address">
      <div class="img" v-if="province">
        <img src="./img/wz.png" alt="" />
      </div>
      <div class="address-name" @click="returnProvince">{{ province }}</div>
      <div v-if="city" class="img">
        <img src="./img/wz.png" alt="" />
      </div>
      <div class="address-name" @click="returnCity">{{ city }}</div>
      <div v-if="area" class="img">
        <img src="./img/wz.png" alt="" />
      </div>
      <div class="address-name">{{ area }}</div>
      <!--      <div v-if="village" class="img">-->
      <!--        <img src="./img/wz.png" alt="">-->
      <!--      </div>-->
      <!--      <div class="address-name">{{ village }}</div>-->
    </div>
    <div class="map-bottom" ref="map"></div>
    <div class="icon-button">
      <div
        class="item"
        @click="iconOnClick(item, index)"
        :class="{ iconActive: activeIndex === index }"
        v-for="(item, index) in iconList"
        :key="index"
      >
        <div class="img" :style="{ background: `url('${item.url}')` }"></div>
        <span v-if="activeIndex === index">{{ item.type }}</span>
      </div>
    </div>
    <div class="toggle-layer" :class="{ iconClickActive: showDim }">
      <ul>
        <li v-for="(item, index) in list" :key="`toggle-${index}`">
          <span
            @click="selectMart(item, index)"
            :class="{ active: item.show }"
          ></span>
          <img v-if="showDim" :src="item.url2" alt="" />
          <img v-else :src="item.url" alt="" />
          <span>{{ item.type }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import getOption from "./number_option";
import getSpotOption from "./spot_option";
import {
  getAgritainmentDistribution, // 农家乐数量分布
  getConlocationDistribution, // （浙农游）（县级）查询位置分布带点位坐标
  getHistoryCultureDistribution, // 历史文化重点保护村数量分布
  getSolarTermDistribution, // 24节气村数量分布
  getAgriculturalHeritageDistribution, // 农业文化遗产地数量分布
  getLocationDistribution, // 打点
  getCitySolarTermDistribution, // （市级以下）24节气村数量分布
  getCityAgriculturalHeritage, // （市级以下）农业文化遗产地数量分布
  getCityHistoryCulture, // （市级以下）历史文化重点保护村数量分布
  getCityAgritainment, // （市级以下）农家乐数量分布
  getCityProtectionItem, // （市级以下）历史文化村落保护项目数量分布
  getConSolarTermDistribution, // （县级以下）24节气村数量分布
  getConAgriculturalHeritage, // （县级以下）农业文化遗产地数量分布
  getConHistoryCulture, // （县级以下）历史文化重点保护村数量分布
  getConAgritainment, // （县级以下）农家乐数量分布
  getConProtectionItem, // （县级以下）历史文化村落保护项目数量分布
} from "@/api/index";
import { getProtectionItem, getTotalStatistic } from "../../../api";
import { getProviceJSON, getCityJSON, getCountyJSON } from "@/api/get-json";
import { mapOption } from "../../../config/mapOption";
import { cityMap } from "../../../config/cityMap";
import { countyMap } from "../../../config/countyMap";
// vuex
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters } = createNamespacedHelpers("map");

export default {
  name: "index",
  data() {
    return {
      province: "浙江省",
      city: "",
      area: "",
      // village: '',

      statisticalData: [
        {
          name: "累计访问量",
          // number: 2068,
          number: 0,
          unit: "次",
        },
        {
          name: "日访问量",
          // number: 57,
          number: 0,
          unit: "次",
        },
        {
          name: "招商/招聘发布量",
          // number: 110,
          number: 0,
          unit: "次",
        },
        {
          name: "应用好评率",
          number: 96,
          unit: "%",
        },
      ],
      list: [
        {
          type: "24节气村",
          show: false,
          url: require("./img/jqc.png"),
          url2: require("./img/jqc2.png"),
        },
        {
          type: "农业文化遗产地",
          show: false,
          url: require("./img/nywhyc.png"),
          url2: require("./img/nywhycd2.png"),
        },
        {
          type: "历史文化重点保护村",
          show: false,
          url: require("./img/lswhzdbhc.png"),
          url2: require("./img/lswhzdbhc2.png"),
        },
        {
          type: "农家乐",
          show: false,
          url: require("./img/njl.png"),
          url2: require("./img/njl2.png"),
        },
      ],
      activeIndex: 6,
      showDim: false, // 左下方按钮文字显示暗淡
      myChart: null, // 实例化echarts
      iconList: [
        {
          type: "24节气村",
          url: require("./img/icon_01.png"),
        },
        {
          type: "农业文化遗产地",
          url: require("./img/icon_02.png"),
        },
        {
          type: "历史文化重点保护村",
          url: require("./img/icon_03.png"),
        },
        {
          type: "农家乐",
          url: require("./img/icon_04.png"),
        },
        {
          type: "历史文化村落保护项目",
          url: require("./img/icon_05.png"),
        },
      ],

      areaId: null, // 获取数据时用的区域id
      cityAreaMap: cityMap.areaMap, //  省行政区划，用于数据的查找，按行政区划查数据
      areaCityMap: cityMap.areaMap1, //  省行政区划，用于数据的查找，按行政区划查数据
      countyAreaMap: countyMap.areaMap, //  省行政区划，用于数据的查找，按行政区划查数据
      mapData: [], // 当前地图上的地区
      option: { ...mapOption.basicOption }, // map的相关配置
      deepTree: [], // 点击地图时push，点返回时pop
      areaName: "浙江省", // 当前地名
      areaCode: "330000", // 当前行政区划
      areaLevel: "province", // 当前级别
      firstLevel: 1, // 1:省级 2：市级 3： 区县级
      firstLevelOpt: {
        1:1,
        2:0,
        3:0,
      }
    };
  },
  computed: {
    ...mapGetters(["mapAreaId", "mapAreaName"]),
  },
  watch: {
  },
  mounted() {
    this.$nextTick(() => {
      this.mapEchartsInit(); // 绘画地图
      this.myChart.on("click", this.echartsMapClick);
      this.setTotalStatistic();
    });
  },
  methods: {
    ...mapMutations(["setAreaId", "setAreaName", "setAreaLevel"]),
    // 初次加载绘制地图
    async mapEchartsInit() {
      // echarts.registerMap('浙江省', dapuJson); //引入地图文件
      this.myChart = echarts.init(this.$refs.map); // 获取展示区域
      if(this.$route.query.areaName) {
        console.log(this.$route.query.areaName);
        if (this.$route.query.areaName in this.cityAreaMap) {
          // 初次加载为市级
          this.province = '';
          this.firstLevel = 2; // 市级
          this.areaName = this.$route.query.areaName;
          this.areaCode = this.cityAreaMap[this.$route.query.areaName];
          this.areaLevel = 'city';
          const data = {
            areaName: this.areaName,
            areaCode: this.areaCode,
            areaLevel: this.areaLevel,
          };
          //如果点击的是11个市，绘制选中地区的二级地图
          this.city = this.$route.query.areaName;
          this.areaId = String(Number(this.areaCode) / 100);
          this.requestGetCityJSON(data);
        } else if (this.$route.query.areaName in this.countyAreaMap) {
          // 初次加载为区县级
          // const cityCode = parseInt(parseInt(this.countyAreaMap[this.$route.query.areaName]) / 100) * 100;
          // const cityName = this.areaCityMap[cityCode];
          // console.log(cityName, cityCode);
          // const res = await getCityJSON(cityCode)
          // console.log(res);
          // this.$echarts.registerMap(cityName, res);
          // let arr = [];
          // for (let i = 0; i < res.features.length; i++) {
          //   let obj = {
          //     name: res.features[i].properties.name,
          //     areaName: res.features[i].properties.name,
          //     areaCode: res.features[i].properties.adcode,
          //     areaLevel: "districts",
          //   };
          //   arr.push(obj);
          // }
          // const cityParams = {
          //   areaName: cityName,
          //   areaCode: cityCode,
          //   areaLevel: 'city',
          // }
          // this.city = cityName;
          // // this.mapData = arr;
          // console.log(arr, cityParams);
          // this.deepTree.push({ mapData: arr, params: cityParams });
          // this.deepTree.push({ mapData: arr, params: cityParams });
          // console.log(this.deepTree);
          this.province = '';
          this.firstLevel = 3; // 区县级
          //  ssssss
          this.areaName = this.$route.query.areaName;
          this.areaCode = this.countyAreaMap[this.$route.query.areaName];
          this.areaLevel = 'districts';
          const data = {
            areaName: this.areaName,
            areaCode: this.areaCode,
            areaLevel: this.areaLevel,
          };
          //如果点击的是区县，绘制选中地区的三级地图
          this.area = this.$route.query.areaName;
          this.areaId = String(Number(this.areaCode));
          this.requestGetCountyJSON(data);
        }
      }
      if (this.areaCode === "330000") {
        this.requestGetProvinceJson();
      }
      // this.myChart.setOption(option, true); // 添加配置
    },
    // 地图点击
    echartsMapClick(params) {
      console.log('点击了');
      if (
        !(this.activeIndex > 4 &&
        this.list.every((item) => {
          return item.show === false;
        }))
      ) {
        this.activeIndex = 5;
        this.list.map((item) => {
          item.show = false;
        })
      }
      if (params.name in this.cityAreaMap) {
        // 点击的为市级
        this.areaName = params.name;
        this.areaCode = this.cityAreaMap[params.name];
        this.areaLevel = 'city';
        const data = {
          areaName: this.areaName,
          areaCode: this.areaCode,
          areaLevel: this.areaLevel,
        };
        //如果点击的是11个市，绘制选中地区的二级地图
        this.city = params.name;
        this.areaId = String(Number(this.areaCode) / 100);
        this.requestGetCityJSON(data);
      } else if (params.name in this.countyAreaMap) {
        // 点击的为区县级
        console.log(params);
        this.areaName = params.name;
        this.areaCode = this.countyAreaMap[params.name];
        this.areaLevel = 'districts';
        const data = {
          areaName: this.areaName,
          areaCode: this.areaCode,
          areaLevel: this.areaLevel,
        };
        //如果点击的是区县，绘制选中地区的三级地图
        this.area = params.name;
        this.areaId = String(Number(this.areaCode));
        this.requestGetCountyJSON(data);
      } else {
        console.log("点击错误");
        // return;
      }
    },
    //绘制浙江省地图
    requestGetProvinceJson() {
      getProviceJSON().then((res) => {
        let arr = [];
        for (let i = 0; i < res.features.length; i++) {
          let obj = {
            name: res.features[i].properties.name,
            areaName: res.features[i].properties.name,
            areaCode: res.features[i].properties.adcode,
            areaLevel: "city",
          };
          arr.push(obj);
        }
        this.mapData = arr;
        this.deepTree.push({
          mapData: arr,
          params: {
            name: "浙江省",
            areaName: "浙江省",
            areaLevel: "province",
            areaCode: "330000",
          },
        });
        this.$emit("map-change", this.deepTree[0].params);
        this._saveMapInfo(this.deepTree[0].params);

        this.setTotalStatistic(); // 设置顶部统计数据
        //注册地图
        this.$echarts.registerMap("浙江省", res);
        //绘制地图
        this.renderMap("浙江省", arr);
      });
    },
    // 加载市级地图
    requestGetCityJSON(params) {
      // console.log(params)
      this.areaLevel = params.areaLevel;
      getCityJSON(params.areaCode).then((res) => {
        this.$echarts.registerMap(params.areaName, res);
        let arr = [];
        for (let i = 0; i < res.features.length; i++) {
          let obj = {
            name: res.features[i].properties.name,
            areaName: res.features[i].properties.name,
            areaCode: res.features[i].properties.adcode,
            areaLevel: "districts",
          };
          arr.push(obj);
        }
        this.mapData = arr;
        this.deepTree.push({ mapData: arr, params: params });
        console.log(this.deepTree);
        this.$emit("map-change", params);
        this._saveMapInfo(params);

        this.setTotalStatistic();

        this.renderMap(params.areaName, arr);
      });
    },
    // 加载区县级地图
    requestGetCountyJSON(params) {
      // console.log(params)
      this.areaLevel = params.areaLevel;
      getCountyJSON(params.areaCode).then((res) => {
        this.$echarts.registerMap(params.areaName, res);
        let arr = [];
        for (let i = 0; i < res.features.length; i++) {
          let obj = {
            name: res.features[i].properties.name,
            areaName: res.features[i].properties.name,
            areaCode: res.features[i].properties.adcode,
            areaLevel: "town",
          };
          arr.push(obj);
        }
        this.mapData = arr;
        this.deepTree.push({ mapData: arr, params: params });
        console.log(this.deepTree);
        this.$emit("map-change", params);
        this._saveMapInfo(params);

        this.setTotalStatistic(); // 设置顶部统计数据

        this.renderMap(params.areaName, arr);
      });
    },
    // 打点
    async selectMart(item, index) {
      this.showDim = false;
      this.activeIndex = 6; // 上面按钮初始化
      this.list[index].show = !this.list[index].show;
      if (
        this.list.every((item) => {
          return item.show === false;
        })
      ) {
        const map = this.deepTree[this.deepTree.length - 1].params.areaName;
        const data = this.deepTree[this.deepTree.length - 1].mapData;
        await this.getData();
        this.renderMap(map, data);
      } else {
        this.getData();
      }
    },
    // 绘制地图
    renderMap(map, data) {
      this.option.series = [
        {
          name: map,
          mapType: map,
          ...mapOption.seriesOption,
          data: data,
        },
      ];
      this.option.geo = {
        map: map,
        ...mapOption.basicOption.geo,
      };
      //渲染地图
      this.myChart.setOption(this.option, true);
    },
    // 返回到省级
    returnProvince() {
      this.deepTree = []; // 层级数组清空
      this.city = "";
      this.area = "";
      this.areaId = null;
      this.areaName = "浙江省";
      this.initIconAndButton();
      this.requestGetProvinceJson();
    },
    returnCity() {
      this.area = "";
      // 改
      console.log(this.deepTree[this.firstLevelOpt[this.firstLevel]]);
      this.areaId = String(Number(this.deepTree[this.firstLevelOpt[this.firstLevel]].params.areaCode) / 100);
      this.areaName = this.deepTree[this.firstLevelOpt[this.firstLevel]].params.areaName;
      this.deepTree.splice(this.firstLevelOpt[this.firstLevel] + 1, 1);
      console.log(this.deepTree);
      this.initIconAndButton();
      this.requestGetCityJSON(this.deepTree[this.firstLevelOpt[this.firstLevel]].params);
    },
    // 获取打点数据
    async getData() {

      let res,data;
      if (this.area) {
        data = {
          q1: this.list[0].show,
          q2: this.list[1].show,
          q3: this.list[2].show,
          q4: this.list[3].show,
          areaName: this.areaName,
        };
        res = await getConlocationDistribution(data);
      } else {
        data = {
          q1: this.list[0].show,
          q2: this.list[1].show,
          q3: this.list[2].show,
          q4: this.list[3].show,
          areaId: this.areaId,
        };
        res = await getLocationDistribution(data);
      }
      const optionData = {
        data1: [],
        data2: [],
        data3: [],
        data4: [],
      };
      if (res.q1) {
        optionData.data1 = res.q1.map((item) => {
          return {
            name: item.name,
            value: [Number(item.areaY), Number(item.areaX)],
          };
        });
      }
      if (res.q2) {
        optionData.data2 = res.q2.map((item) => {
          return {
            name: item.name,
            value: [Number(item.areaY), Number(item.areaX)],
          };
        });
      }
      if (res.q3) {
        optionData.data3 = res.q3.map((item) => {
          return {
            name: item.name,
            value: [Number(item.areaY), Number(item.areaX)],
          };
        });
      }
      if (res.q4) {
        optionData.data4 = res.q4.map((item) => {
          return {
            name: item.name,
            value: [Number(item.areaY), Number(item.areaX)],
          };
        });
      }
        this.myChart.setOption(getSpotOption(optionData, this.areaName), true);
    },

    async getIconData(type) {
      let res;
      if (this.area) {
        const data = {
          areaName: this.areaName,
        };
        // const data2 = {
        //   areaId: this.areaId,
        // };
        switch (type) {
          case "24节气村":
            {
              res = await getConSolarTermDistribution(data);
            }
            break;
          case "农业文化遗产地":
            {
              res = await getConAgriculturalHeritage(data);
            }
            break;
          case "历史文化重点保护村":
            {
              res = await getConHistoryCulture(data);
            }
            break;
          case "农家乐":
            {
              res = await getConAgritainment(data);
            }
            break;
          default:
            {
              res = await getConProtectionItem(data);
            }
            break;
        }
      } else if (this.city) {
        const data = {
          areaId: this.areaId,
        };
        switch (type) {
          case "24节气村":
            {
              res = await getCitySolarTermDistribution(data);
            }
            break;
          case "农业文化遗产地":
            {
              res = await getCityAgriculturalHeritage(data);
            }
            break;
          case "历史文化重点保护村":
            {
              res = await getCityHistoryCulture(data);
            }
            break;
          case "农家乐":
            {
              res = await getCityAgritainment(data);
            }
            break;
          default:
            {
              res = await getCityProtectionItem(data);
            }
            break;
        }
      } else {
        switch (type) {
          case "24节气村":
            {
              res = await getSolarTermDistribution();
            }
            break;
          case "农业文化遗产地":
            {
              res = await getAgriculturalHeritageDistribution();
            }
            break;
          case "历史文化重点保护村":
            {
              res = await getHistoryCultureDistribution();
            }
            break;
          case "农家乐":
            {
              res = await getAgritainmentDistribution();
            }
            break;
          default:
            {
              res = await getProtectionItem();
            }
            break;
        }
      }
      if(res && res.length > 0) {
        const data = res.map((item) => {
          return {
            name: item.areaName,
            value: item.count,
          };
        });
        this.myChart.setOption(getOption(data, this.areaName), true); // 添加配置
      } else {
        console.log('无数据');
        this.renderMap(this.areaName, this.mapData);
      }
    },
    iconOnClick(item, index) {
      this.showDim = true;
      this.list.forEach((item) => {
        item.show = false;
      });
      if (this.activeIndex === index) {
        this.activeIndex = 7;
        const map = this.deepTree[this.deepTree.length - 1].params.areaName;
        const data = this.deepTree[this.deepTree.length - 1].mapData;
        this.renderMap(map, data);
      } else {
        this.activeIndex = index;
        this.getIconData(item.type);
      }
    },
    // 初始化按钮状态
    initIconAndButton() {
      this.showDim = false;
      this.activeIndex = 6; // 上面按钮初始化
      this.list.forEach((item) => {
        item.show = false;
      });
    },

    // 设置顶部统计数据
    setTotalStatistic() {
      getTotalStatistic({ areaId: this.mapAreaId, areaName: this.mapAreaName }).then((res) => {
        this.statisticalData[0].number = res.cumulativeVisits || 0;
        this.statisticalData[1].number = res.dailyVisits || 0;
        this.statisticalData[2].number = res.merchantsRecruitment || 0;
      });
    },

    _saveMapInfo(data) {
      const { areaLevel, areaCode, areaName } = data;
      console.log(areaLevel, areaCode, areaName);
      this.setAreaId(areaCode);
      this.setAreaLevel(areaLevel);
      this.setAreaName(areaName);
    },
  },
};
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
  .statistical-data {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    .item {
      //box-sizing: border-box;
      //padding-left: 20px;
      min-width: 146px;
      height: 97px;
      background: url("./img/fk_bg.png");
      &::before {
        content: "";
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
        color: #ffffff;
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
          font-size: 22px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #ffffff;
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
  .address {
    display: flex;
    margin-left: 44px;
    margin-top: 18px;
    margin-bottom: 30px;
    .img {
      width: 24px;
      margin-right: 7px;
      margin-left: 7px;
      &:nth-of-type(1) {
        margin-left: 0;
      }
    }
    .address-name {
      cursor: pointer;
    }
  }
  .map-bottom {
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
      background: #2d7ee7;
      border-radius: 18px;
      span {
        display: inline-block;
        font-size: 18px;
        font-family: Microsoft YaHei;
        color: #ffffff;
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
            border: 1px solid #ffffff;
            border-radius: 2px;
            margin-right: 5px;
            cursor: pointer;
          }
        }
        .active {
          border: 0;
          background: url("./img/checked-icon.png") no-repeat center !important;
        }
        img {
          vertical-align: middle;
        }
      }
    }
  }
  .iconClickActive {
    color: #ffffff;
    opacity: 0.65;
    img {
      margin-left: 10px;
      margin-right: 12px;
    }
  }
}
</style>
