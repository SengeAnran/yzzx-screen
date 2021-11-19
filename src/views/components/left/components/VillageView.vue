<template>
  <div class="box-content">
    <div class="content-left">
      <div class="small-title title">星级分类</div>
      <star-classification :area-id="areaId"></star-classification>
    </div>
    <div class="content-right">
      <div class="small-title title">醉美村景TOP10</div>
      <most-village :list-data="listData" />
    </div>
  </div>
</template>

<script>
import StarClassification from "./components/StarClassification";
import MostVillage from "../../MostVillage";
import { getPrettiestView } from "@/api/index";
export default {
  name: "VillageView",
  props: {
    areaId: {
      type: Number,
    },
  },
  data() {
    return {
      listData: [],
    };
  },
  components: {
    StarClassification,
    MostVillage,
  },
  watch: {
    areaId() {
      this.setPrettiestView();
    },
  },
  mounted() {
    this.setPrettiestView();
  },
  methods: {
    setPrettiestView() {
      getPrettiestView({ areaId: this.areaId }).then((res) => {
        this.listData = res.map((item) => ({ name: item.sceneName }));
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box-content {
  display: flex;
  .title {
    margin-top: 10px;
  }
  .content-left {
    width: 286px;
    height: 149px;
    padding-right: 41px;
    box-sizing: border-box;
  }
  .content-right {
  }
}
</style>
