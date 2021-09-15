<template>
<div class="box-content">
  <div class="content-left">
    <div class="small-title title">美食排行榜TOP10</div>
    <most-village :list-data="listData"/>
  </div>
  <div class="content-right">
    <div class="small-title title">一村一品</div>
    <one-village-one-product :list-data="listData2"/>
  </div>
</div>
</template>

<script>
import MostVillage from "../../MostVillage";
import OneVillageOneProduct from "./OneVillageOneProduct";
export default {
  name: "VillageFlavor",
  props: {
    areaId: {
      type: Number,
    }
  },
  components: {
    MostVillage,
    OneVillageOneProduct,
  },
  data() {
    return {
      listData: [
        {
          name: '倭井潭硬糕'
        },
        {
          name: '东沙香干'
        },
        {
          name: '岱山沙洋晒生'
        },
        {
          name: '臭豆腐'
        },
        {
          name: '油闷大虾'
        },
        {
          name: '温州烤全羊'
        },
        {
          name: '羊肉汤'
        },
      ],
      listData2: [
        {
          name: '岱山海盐',
          address: '舟山市岱山县岱东镇沙洋村',
        },
        {
          name: '樟树梨',
          address: '丽水市遂昌县湖山乡福罗淤村',
        },
        {
          name: '黄龙虾米',
          address: '舟山市嵊泗县黄龙乡峙岙村',
        },
        {
          name: '黄龙虾米',
          address: '舟山市嵊泗县黄龙乡峙岙村',
        },
      ],
    }
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
    width: 199px;
    height: 149px;
    //padding-right: 41px;
    box-sizing: border-box;
  }
  .content-right {
    .title {
      margin-left: 20px;
    }

  }
}

</style>