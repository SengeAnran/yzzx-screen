<template>
  <div class="intelligent-matrix">
    <div class="top-title">
      <div class="title">AI智能矩阵</div>
      <div class="tip">这是一段能力矩阵这是一段文字描述</div>
    </div>
    <div class="able-box">
      <component :is="currentTabComponent" class="able-left"></component>
      <div @click="goPage" class="able-right">
        <div
            v-for="(item, index) in ableList"
            class="able-item"
            :class="{active: activeIndex === index}"
            :key="index"
        >
          {{ item.name }}
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import {ableList} from "./contanst";
import DigitalIntelServices from "./components/DigitalIntelServices.vue";

export default {
  name: "IntelligentMatrix",
  // components: {DigitalIntelServices},
  data() {
    return {
      ableList: ableList,
      activeIndex: 0,
      currentTabComponent: DigitalIntelServices,
    }
  },
  methods: {
    // 切换能力项
    changeAble(item, index) {
      this.activeIndex = index;
    },
    goPage() {
      this.$router.push({
        path: '/digitalTransformation'
      })
    },
  }
}
</script>

<style scoped lang="scss">
.intelligent-matrix {
  padding: 40px 47px 0;
}

.top-title {
  display: flex;
  align-items: baseline;

  .title {
    font-size: 32px;
    margin-right: 22px;
    font-weight: 400;
  }

  .tip {
    font-size: 18px;
    color: #b5b7bd;
  }
}

.able-box {
  display: flex;
  margin-top: 50px;

  .able-left {
    flex: 1;
  }

  .able-right {
    margin-left: 20px;
    width: 360px;
    text-align: center;
    border-radius: 5px;
    //box-shadow: 0 0 6px #a19797;
    box-shadow: 0px 0px 32px 0px rgba(13, 87, 163, 0.16);

    .able-item {
      position: relative;

      height: 96px;
      line-height: 96px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 18px;
      //&:nth-child(n+1) {
      //  border-top: 1px solid gainsboro;
      //}

      &:nth-child(n+2)::before {
        //position: ;
        margin: 0 auto;
        content: '';
        height: 2px;
        background-color: #eaecf1;
        width: 80%;
        display: block;
        //background: gainsboro;
      }
    }

    .active {
      //background: -webkit-linear-gradient(left, #1d7dff, #13c4ff);
      background-image: linear-gradient(90deg,
          #1d7cff 0%,
          #13c4ff 100%);
      //background: -webkit-linear-gradient(left top, #4b90ed, #53bced);
      //background: linear-gradient(135deg,#fa5a55,#fa994d);
      color: white;

      &::before {
        display: none !important;
      }
    }
  }
}
</style>
