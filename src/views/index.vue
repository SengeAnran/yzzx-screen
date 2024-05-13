<template>
  <div class="home">
    <app-title/>
    <left :areaId="areaId"></left>
    <right :areaId="areaId"></right>
    <Map @map-change="mapChange"></Map>
    <app-bottom v-if="false"/>
  </div>
</template>

<script>
// import { getAgritainmentDistribution } from "@/api/index";
import config from '../utils/config';

import left from "./components/left";
import right from "./components/right";
import Map from "./components/Map";
import AppBottom from "../components/AppBottom";
import AppTitle from "../components/AppTitle";
export default {
  name: "Home",
  components: {
    left,
    right,
    Map,
    AppBottom,
    AppTitle,
  },
  data() {
    return {
      areaId: 1,
    };
  },
  beforeRouteEnter(to, from, next){
    console.log(to);
    if (!to.query.userId && config.isLogin){
      //*//
      window.open('https://szsn.zjagri.cn/sso/logout?redirectUri=https://jqy.zjagri.cn/api/screen/login', '_self', '');
    } else {
      window.localStorage.setItem('userId', to.query.userId);
    }
    next();
  },
  mounted() {
    // getAgritainmentDistribution().then((res) => {
    //   console.log(res);
    // });
  },
  methods: {
    mapChange(data) {
      if (data.areaLevel === 'city') {
        this.areaId = Number(data.areaCode)/100;
      } else if ( data.areaLevel === 'province') {
        this.areaId = null
      }
      else {
        this.areaId = Number(data.areaCode);
      }
      console.log( this.areaId)
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 1920px;
  height: 1080px;
  position: relative;
  user-select: none;
  //background: url(../assets/img/dp_bg.png) no-repeat 100% 100%;
  background: #022A4D;
}
</style>
