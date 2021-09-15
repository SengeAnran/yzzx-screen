<template>
<div class="box-content">
  <div class="content-left">
    <div class="small-title title">星级分类</div>
    <star-classification :area-id="areaId"></star-classification>
  </div>
  <div class="content-right">
    <div class="small-title title">醉美村景TOP10</div>
    <most-village :list-data="listData"/>
  </div>
</div>
</template>

<script>
import StarClassification from "./components/StarClassification";
import MostVillage from "../../MostVillage";
export default {
  name: "VillageView",
  props: {
    areaId: {
      type: Number,
    }
  },
  data() {
    return {
      listData: [
        {
          name: '秀山岛景区'
        },
        {
          name: '鹿栏晴沙景区'
        },
        {
          name: '双石合璧'
        },
        {
          name: '雁荡山'
        },
        {
          name: '千岛湖'
        },
        {
          name: '西塘古镇'
        },
        {
          name: '莫干山'
        },
        // {
        //   name: '嵊泗列岛'
        // },
        // {
        //   name: '仙都景区'
        // },
        // {
        //   name: '浙东大峡谷'
        // },
      ],
    }
  },
  components: {
    StarClassification,
    MostVillage,
  },
  mounted() {
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