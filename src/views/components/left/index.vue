<template>
  <div class="left-content">
    <Panel title-name="村落概况">
      <village-overview :village-overview="villageOverview" />
    </Panel>
    <Panel title-name="历史文化村落保护">
      <village-protection :village-protection="villageProtection" />
    </Panel>
    <Panel title-name="村景">
      <village-view :area-id.sync="areaId" />
    </Panel>
  </div>
</template>

<script>
import { getVillageOverview } from "@/api/index";
import VillageOverview from "./components/VillageOverview";
import VillageProtection from "./components/VillageProtection";
import VillageView from "./components/VillageView";
export default {
  name: "index",
  components: {
    VillageOverview,
    VillageProtection,
    VillageView,
  },
  props: {
    areaId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      villageOverview: {}, //村落概况
      villageProtection: {
        zjpc: "7-9",
        // bhsqs: 758,
        bhzjztr: 51709,
        zjgs: 390,
      }, //村落概况
    };
  },
  watch: {
    areaId() {
      this.getData(this.areaId);
    },
  },
  mounted() {
    console.log(process.env.NODE_ENV)
    console.log(process.env)
    this.getData(this.areaId);
  },
  methods: {
    getData(areaId) {
      const data = {
        areaId: areaId,
      };
      getVillageOverview(data).then((res) => {
        // console.log(res)
        this.villageOverview = res;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.left-content {
  position: absolute;
  top: 59px;
  left: 32px;
  width: 584px;
  min-height: 800px;
}
</style>
