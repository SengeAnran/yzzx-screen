<template>
  <div class="home">
    <left :areaId="areaId"></left>
    <right :areaId="areaId"></right>
    <Map></Map>
    <app-bottom/>
  </div>
</template>

<script>
import { getAgritainmentDistribution } from "@/api/index";

import left from "./components/left";
import right from "./components/right";
import Map from "./components/Map";
import AppBottom from "../components/AppBottom";

export default {
  name: "Home",
  components: {
    left,
    right,
    Map,
    AppBottom,
  },
  data() {
    return {
      areaId: 1,
    };
  },
  mounted() {
    getAgritainmentDistribution().then((res) => {
      console.log(res);
    });
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 1920px;
  height: 1080px;
  position: relative;
  user-select: none;
  background: url(../assets/img/dp_bg.png) no-repeat 100% 100%;
}
</style>
