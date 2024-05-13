<template>
  <div class="application-scenarios">
    <div class="list">
      <div
          v-for="(item, index) in dataList"
          @click="activeIndex = index"
          :key="index"
          :class="{active: activeIndex === index}"
          class="list-item"
      >
        {{ item }}
      </div>
    </div>
    <div class="text">
      <div class="title">{{ text.title }}</div>
      <div class="content">{{ text.content }}</div>
    </div>
    <div class="content-img">
      <img src="./content.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "ApplicationScenarios",
  data() {
    return {
      dataList: [
        '这是一个标题',
        '这是一个标题',
        '这是一个标题',
      ],
      text: {
        title: '这是一个标题',
        content: '这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段\n' +
            '文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述\n' +
            '这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段\n' +
            '文字描述这是一段文字描述。',
      },
      activeIndex: 0,
    }
  }
}
</script>

<style scoped lang="scss">
.application-scenarios {
  display: flex;
  padding: 60px 240px;

  .list {
    width: 208px;
    max-height: 340px;
    overflow-y: auto;
    background-color: rgba(234, 236, 241, 0.5);
    font-size: 20px;

    .list-item {
      cursor: pointer;
      color: #7d8292;
      height: 64px;
      line-height: 64px;
      text-align: center;
    }

    .active {
      color: #ffffff;
      background-color: #1d80ff;
    }
  }

  .text {
    flex: 1;
    margin-left: 48px;
    margin-right: 60px;

    .title {
      font-size: 24px;
      line-height: 108px;
      color: #424656;
    }

    .content {
      font-size: 18px;
      line-height: 22px;
      color: #b5b7bd;
    }
  }

  .content-img {
    width: 384px;
    height: 240px;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
}
</style>
