<template>
  <div class="list-page">
    <div class="nav">
      <div v-for="(item, index) in navList" @click="changeActive(index)" :key="index"
           :class="{active: activeIndex === index}" class="nav-item">
        <img :src="activeIndex === index? item.iconActiveUrl : item.iconUrl" alt="">
        <div class="name" v-html="item.name">
        </div>
      </div>
    </div>
    <div class="list-box">
      <list-item
          v-for="(item, index) in dataList"
          :key="index"
          :data-obj="item"
      ></list-item>
    </div>
  </div>
</template>
<script>
import {navList, dataList1, dataList2, dataList3, dataList4} from "./contanst";
import ListItem from "./ListItem.vue";

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      navList: navList,
      dataList: dataList1.concat({isMore: true}),
      activeIndex: 0,
    }
  },
  methods: {
    changeActive(index) {
      this.activeIndex = index;
      switch (index) {
        case 0:
          this.dataList = dataList1.concat({isMore: true});
          break;
        case 1:
          this.dataList = dataList2.concat({isMore: true});
          break;
        case 2:
          this.dataList = dataList3.concat({isMore: true});
          break;
        case 3:
          this.dataList = dataList4.concat({isMore: true});
          break;
      }
    }
  }
}
</script>


<style scoped lang="scss">
.list-page {
  display: flex;
  height: calc(100vh - 71px);

  .nav {
    width: 144px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #eaecf1;

    .nav-item {
      cursor: pointer;
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 20px;
      color: #424656;

      img {
        width: 75px;
        height: 66px;
      }

      .name {
        margin-top: 22px;
      }

      &.active {
        background-color: rgba(234, 236, 241, 0.5);
        box-shadow: inset 0px 0px 10px 0px rgba(64, 64, 64, 0.08);

        .name {
          margin-top: 6px;
        }

        //opacity: 0.5;
      }
    }
  }

  .list-box {
    overflow-y: auto;
    flex: 1;
    padding: 41px 150px 0 192px;
    //display: flex;
    //flex-wrap: wrap;
  }
}
</style>
