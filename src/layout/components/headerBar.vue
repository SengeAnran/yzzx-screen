<template>
  <header class="header-bar">
    <!--    <div @click="goHome" class="logo">数智科技LOGO</div>-->
    <div @click="goHome" class="logo">
      <img :src="require('@/assets/logo.png')" alt="">
    </div>
    <nav>
      <ul>
        <li v-for="(item, index) in navList" :class="{active: activeNavIndex === index}" @click="toPage(item)"
            :key="item.label">{{ item.label }}
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "headerBar",
  data() {
    return {
      navList: [
        {
          label: 'AI智能矩阵',
          path: '/intelligentMatrix',
        },
        {
          label: '数智大模型',
          path: '/intelligenceModel',
        },
        {
          label: '领域智慧场景',
          path: '/smartScene',
        },
        {
          label: '数智要闻',
          path: '/personnelTraining',
        },
        {
          label: '数智化转型',
          path: '/digitalTransformation',
        },
        // {
        //   label: '关于我们',
        //   path: '/aboutUs',
        // },
      ],
    }
  },
  computed: {
    ...mapGetters(['activeNavIndex']),
  },
  methods: {
    // 跳转页面
    toPage(item) {
      if (this.$route.path !== item.path) {
        this.$router.push(item.path);
      }
    },
    goHome() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped lang="scss">
.header-bar {
  z-index: 2000;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  font-size: 20px;
  padding: 0 32px;
  height: 71px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaecf1;

  .logo {

    cursor: pointer;

    img {
      width: 84px;
      height: 50px;
      object-fit: fill;
    }
  }

  ul {
    display: flex;

    li {
      position: relative;
      box-sizing: border-box;
      list-style: none;
      margin: 0 15px;
      padding: 29px 15px;
      cursor: pointer;
      color: #9a9da9;

      &::after {
        visibility: hidden;
        position: absolute;
        bottom: 7px;
        left: 0;
        content: '';
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 4px;
        //background-color: blue;
        background: -webkit-linear-gradient(left, #1d7dff, #13c4ff)
      }
    }

    .active {
      color: #424656;

      &::after {
        visibility: visible;
      }
    }
  }
}
</style>
