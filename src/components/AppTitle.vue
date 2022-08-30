<template>
  <div class="AppTitle-root">
    <img src="../assets/img/top_title.png" @click="goHome"/>
    <div v-if="areaName === '浙江省'" class="left-button" @click="goPage">
      浙江乡村大脑
    </div>
    <div v-else class="left-button" @click="goPage">
      浙江乡村大脑·{{areaName}}
    </div>
    <div class="right-button">
      <div class="buttons">
        <div class="btn-item" @click="goPage2">
          <div class="img"><img src="../assets/img/glht.png" alt=""></div>
          <div class="title">管理后台</div>
        </div>
        <div class="btn-item" @click="cancelBind">
          <div class="img"><img src="../assets/img/qxbd.png" alt=""></div>
          <div class="title">取消绑定</div>
        </div>
        <div class="btn-item" @click="goPage3">
          <div class="img"><img src="../assets/img/tcdl.png" alt=""></div>
          <div class="title">退出登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AppTitle",
  data() {
    return {
      areaName: '浙江',
    }
  },
  mounted() {
    this.initTitleName();
  },
  methods: {
    initTitleName() {
      if (this.$route.query.areaName) {
        if (this.$route.query.areaName === "景宁畲族自治县") {
          this.areaName = '景宁县';
        } else {
          this.areaName = this.$route.query.areaName; // 截取地区名称
        }
      }
    },
    goHome() {
      // console.log(location);
      console.log(this.$route.query.areaName);
      window.open(location.href.slice(0,-2),'_self');
    },
    goPage() {
      // window.open('https://szsn.zjagri.cn/view/official/index.html'); // 旧地址
      window.open('https://szsn.zjagri.cn/bg');
    },
    goPage2() {
      // window.open('https://jqy.zjagri.cn/gzjqyxc/#/login'); // 旧地址
      window.open('https://wlxc.zjagri.cn/v2/portal/login');
    },
    goPage3() {
      window.open('https://szsn.zjagri.cn/sso/logout?redirectUri=https://jqy.zjagri.cn/api/screen/login', '_self')
    },
    cancelBind() {
      console.log('cancelBind');
      const params = {
        userId: this.$route.query.userId,
      }
      console.log(params);
      axios.get('https://jqy.zjagri.cn/api/screen/unBind', {params}).then(res => {
        console.log(res);
        window.open(res.data.data, '_self')
      }).catch(err => {
        console.log(err);
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.AppTitle-root {
  //background: #42b983;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  // width: 100%;
  width: 1920px;
  height: 90px;
  //overflow: hidden;
  text-align: center;
  img {
    //width: 120%;
    height: 90px;
    cursor: pointer;
  }
  .left-button {
    box-sizing: border-box;
    position: absolute;
    left: 71px;
    top: 29px;
    min-width: 201px;
    padding: 0 20px 0 51px;
    height: 36px;
    cursor: pointer;
    background: url("../assets/img/left_button3.png") 100% 100% no-repeat;
    background-size: 100% 100%;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #E5F2FF;
    line-height: 36px;
    text-shadow: 0px 4px 4px rgba(20, 36, 51, 0.4);
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 7px;
      left: 21px;
      width: 18px;
      height: 21px;
      background: url("../assets/img/left_button3_icon.png");
    }
  }
  .right-button {
    position: absolute;
    left: 1691px;
    top: 29px;
    width: 159px;
    height: 36px;
    cursor: pointer;
    background: url("../assets/img/right_button2.png") 100% 100% no-repeat;
    background-size: 100% 100%;
    &:hover {
      .buttons {
        display: block;
      }
    }
    .buttons {
      display: none;
      position: absolute;
      top: 37px;
      width: 160px;
      //height: 68px;
      background: rgba(61, 107, 153, 0.6);
      box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 9px 0;

      .btn-item {
        width: 160px;
        display: flex;
        height: 34px;
        line-height: 34px;
        &:hover {
          background: #4595E6;
        }
        .img {
          margin-left: 16px;
          margin-right: 12px;
          margin-top: 3px;
          width: 20px;
          height: 20px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .title {
          font-size: 18px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #E5F2FF;
        }

      }
    }


  }
}
</style>
