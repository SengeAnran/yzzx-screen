<template>
  <div class="right-content">
    <Panel title-name="村趣">
      <village-interest :area-id="areaId" />
    </Panel>
    <Panel title-name="农家乐经营一件事">
      <agritainment-management :area-id="areaId" />
    </Panel>
    <Panel title-name="人气村品">
      <village-flavor :area-id="areaId" />
    </Panel>
  </div>
</template>

<script>
import VillageInterest from "./components/VillageInterest";
import AgritainmentManagement from "./components/AgritainmentManagement";
import VillageFlavor from "./components/VillageFlavor";
export default {
  name: "index",
  components: {
    VillageInterest,
    AgritainmentManagement,
    VillageFlavor,
  },
  props: {
    areaId: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  watch: {
    areaId() {
      console.log("areaId改变了");
    },
  },
};
</script>

<style lang="scss" scoped>
.right-content {
  position: absolute;
  top: 59px;
  right: 32px;
  width: 584px;
  min-height: 800px;
}
</style>
