<template>
  <div class="personnel-training">
    <div class="left">
      <div class="title">这是一句标题</div>
      <div class="tip">这是一段文字描述这是一段文字描述</div>
    </div>
    <div class="list">
      <div class="btns">
        <div
            v-for="(item, index) in tapList"
            @click="changeActive(index)"
            :key="index"
            class="btn"
            :class="{active: activeIndex === index}"
        >{{ item }}
        </div>
      </div>
      <div class="list-box">
        <div
            v-for="(i, index) in dataList"
            :key="index"
            class="list-item"
        >
          <div class="name">{{ i.title }}</div>
          <div class="time">{{ i.time }}</div>
        </div>
      </div>
      <div class="more">更多></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonnelTraining",
  data() {
    return {
      tapList: ['通知公告', '要闻动态'],
      activeIndex: 0,
      dataList: [
        {
          title: '这是一条要闻动态这是一条要闻动态这是一条要闻动态这是一条要闻动态',
          time: '2024-03-22'
        },
        {
          title: '这是一条要闻动态',
          time: '2024-03-22'
        },
        {
          title: '这是要闻动态',
          time: '2024-03-22'
        },
        {
          title: '这是一条最新的要闻动态',
          time: '2024-03-22'
        },
        {
          title: '这是要闻动态这是要闻动态',
          time: '2024-03-22'
        },
        {
          title: '这是一条要闻动态这是一条要闻动态这是一条要闻动态这是一条要闻动态',
          time: '2024-03-22'
        },
        {
          title: '这是一条要闻动态',
          time: '2024-03-22'
        },
        {
          title: '这是要闻动态',
          time: '2024-03-22'
        },
        {
          title: '这是一条最新的要闻动态',
          time: '2024-03-22'
        },
        {
          title: '这是要闻动态这是要闻动态',
          time: '2024-03-22'
        },

      ]
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
.personnel-training {
  display: flex;
  height: calc(100vh - 71px);

  .left {
    width: 56%;
    background: url("./bg.png") no-repeat center center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 72px;
      font-weight: bold;
      color: #ffffff;
      margin-top: 122px;
    }

    .tip {
      font-size: 36px;
      line-height: 108px;
      color: #ffffff;
    }
  }

  .list {
    flex: 1;
    margin: 24px;
    padding: 24px 51px 31px 33px;
    background-color: #ffffff;
    box-shadow: 0px 0px 32px 0px rgba(13, 87, 163, 0.16);
    border-radius: 4px;

    .btns {
      display: flex;

      .btn {
        cursor: pointer;
        text-align: center;
        line-height: 32px;
        width: 112px;
        height: 32px;
        font-size: 18px;
        border-radius: 16px;
      }

      .active {
        background-color: #1b8bff;
        color: #ffffff;
      }
    }

    .list-box {
      .list-item {
        cursor: pointer;
        height: 20px;
        line-height: 20px;
        margin: 25px auto;
        position: relative;
        display: flex;
        justify-content: space-between;
        padding-left: 30px;
        font-size: 16px;

        &::before {
          position: absolute;
          left: 0;
          top: 4px;
          content: '';
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #1b8bff;
        }

        .name {
          width: 397px;
          overflow: hidden;
          text-overflow: ellipsis; // 当文本溢出包含元素时发生的事情
          white-space: nowrap;
        }

        .time {
          color: rgba(66, 70, 86, 0.5);
        }
      }
    }

    .more {
      cursor: pointer;
      float: right;
      font-size: 16px;
      color: #1b8bff;
    }
  }
}

</style>
