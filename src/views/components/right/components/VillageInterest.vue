<template>
  <div class="box-content">
    <div class="small-title title">二十四节气活动举办进度</div>
  </div>
</template>

<script>
export default {
  name: "VillageInterest",
  props: {
    areaId: {
      type: Number
    }
  },
}
</script>

<style lang="scss" scoped>
.box-content {
  .title {
    margin-top: 21px;
  }
}
</style>