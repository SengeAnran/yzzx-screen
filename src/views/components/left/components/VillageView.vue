<template>
<div class="box-content">
  <div class="content-left">
    <div class="small-title title">星级分类</div>
    <star-classification></star-classification>
  </div>
  <div class="content-right">
    <div class="small-title title">醉美村景TOP10</div>
    <most-beautiful-village/>
  </div>
</div>
</template>

<script>
import StarClassification from "./components/StarClassification";
import MostBeautifulVillage from "./components/MostBeautifulVillage";
export default {
  name: "VillageView",
  components: {
    StarClassification,
    MostBeautifulVillage,
  }
}
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