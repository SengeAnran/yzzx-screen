<template>
  <div class="detail-page">
    <section class="img-box">
      <img src="./img.png" alt="">
      <div class="text">
        <div class="title">{{ name }}</div>
        <div class="tip">这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述
          这是一段文字描述这是一段文字描述这是一段文字描述
        </div>
      </div>
    </section>
    <div class="nav">
      <div
          v-for="(item, index) in navList"
          @click="changeActive(index)"
          :key="item"
          class="nav-item"
          :class="{active: activeIndex === index}"
      >{{ item }}
      </div>
    </div>
    <AbleShow v-if="activeIndex === 0"/>
    <ApplicationScenarios v-if="activeIndex === 1"/>
  </div>
</template>
<script>
import AbleShow from "./AbleShow.vue";
import ApplicationScenarios from "./ApplicationScenarios.vue";

export default {
  components: {
    AbleShow,
    ApplicationScenarios,
  },
  data() {
    return {
      name: this.$route.query.name || '',
      navList: [
        '功能演示',
        '应用场景'
      ],
      activeIndex: 0,
    }
  },
  methods: {
    changeActive(index) {
      this.activeIndex = index;
    }
  }
}
</script>


<style scoped lang="scss">
.img-box {
  position: relative;
  height: 480px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .text {
    position: absolute;
    top: 30%;
    transform: translateY(-50%);
    left: 166px;
    color: white;

    .title {
      font-size: 52px;
      font-weight: bold;
    }

    .tip {
      width: 798px;
      font-size: 18px;
      margin-top: 48px;
    }


  }
}

.nav {
  height: 74px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eaecf1;

  .nav-item {
    cursor: pointer;
    height: 100%;
    line-height: 74px;
    margin: 0 36px;

  }

  .active {

    border-bottom: 2px solid #1d80ff;
  }
}
</style>
