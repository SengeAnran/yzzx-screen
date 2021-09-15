<template>
<div class="right-content">
  <Panel title-name="村趣">
    <village-interest :area-id="areaId"/>
  </Panel>
</div>
</template>

<script>
import VillageInterest from "./components/VillageInterest";
export default {
  name: "index",
  components: {
    VillageInterest,
  },
  props: {
    areaId: {
      type: Number
    }
  },
  data() {
    return {
    }
  },
  watch: {
    areaId() {
      console.log('areaId改变了');
    }
  },
}
</script>

<style lang="scss" scoped>
.right-content{
  position: absolute;
  top: 59px;
  right: 32px;
  width: 584px;
  min-height: 800px;
}

</style>