<template>
  <div class="box-content">
    <div>
      <div class="item">
        <p class="item-img">
          <img :src="require('./img/tasty_1.png')" alt="" />
        </p>
        <p class="item-title">桃形李</p>
        <p class="item-address">浙江省嵊州市金庭镇</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VillageFlavor",
  props: {
    areaId: {
      type: Number,
    },
  },
  data() {
    return {
      listData: [
        {
          name: "倭井潭硬糕",
        },
        {
          name: "东沙香干",
        },
        {
          name: "岱山沙洋晒生",
        },
        {
          name: "臭豆腐",
        },
        {
          name: "油闷大虾",
        },
        {
          name: "温州烤全羊",
        },
        {
          name: "羊肉汤",
        },
      ],
      listData2: [
        {
          name: "岱山海盐",
          address: "舟山市岱山县岱东镇沙洋村",
        },
        {
          name: "樟树梨",
          address: "丽水市遂昌县湖山乡福罗淤村",
        },
        {
          name: "黄龙虾米",
          address: "舟山市嵊泗县黄龙乡峙岙村",
        },
        {
          name: "黄龙虾米",
          address: "舟山市嵊泗县黄龙乡峙岙村",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.box-content {
  display: flex;
  margin-top: 20px;
  .title {
    margin-top: 10px;
  }
  .item {
    p {
      margin: 0;
      padding: 0;
    }
    .item-img {
      width: 148px;
      height: 99px;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 12px;
      & img {
        object-fit: cover;
      }
    }
    .item-title {
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #fefefe;
      line-height: 30px;
      margin-bottom: 10px;
    }
    .item-address {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #fefefe;
      line-height: 30px;
      opacity: 0.65;
    }
  }
}
</style>
