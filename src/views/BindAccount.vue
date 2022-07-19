<template>
  <div class="page">
    <div class="box">
      <div class="bind-wrp">
        <h4 class="title">{{ title }}</h4>
        <!--      <p class="tips">请输入用户名和密码绑定浙政钉信息！</p>-->
        <div>
          <el-form
            ref="form"
            :model="form"
            :rules="rules"
            class="form"
            label-position="right"
            label-width="0px"
          >
            <el-form-item prop="userName">
              <div class="user-name">
                <el-input
                  class="input"
                  v-model="form.userName"
                  placeholder="请输入账号"
                >
                  <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
                </el-input>
              </div>
            </el-form-item>
            <el-form-item prop="password">
              <div class="pass-word">
                <el-input
                  class="input"
                  v-model="form.password"
                  placeholder="请输入密码"
                  type="password"
                >
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="tip">与已有的账号进行绑定，请输入您的账号和密码</div>
            </el-form-item>
            <div class="bind-bottom">
              <button type="primary" @click.stop.prevent="confirm">
                绑定
              </button>
            </div>
          </el-form>
        </div>
      </div>
      <div class="bind-canter">或</div>
      <div class="bind-right" @click="goHome">
        <div class="img">
          <img src="../assets/img/icon_yh.png" alt="">
        </div>
        <div class="label">自动建账号</div>
        <div class="tip">绑定游客账号，仅可浏览驾驶舱</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    title: {
      type: String,
      default: "绑定已有账号",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
      userName: "",
      password: "",
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      areaName: '',
    };
  },
  watch: {
    visible(val) {
      if (val && this.data) {
        this.form.userName = this.data.userName || "";
        this.form.password = this.data.password || "";
      }
    },
  },
  mounted() {
    this.initData();

  },
  methods: {
    initData() {
      if (this.$route.query.areaName) {
        this.areaName = this.$route.query.areaName;
      }
      if (this.$route.query.areaName) {
        this.userName = this.$route.query.username;
      }
      if (this.$route.query.password) {
        this.password = this.$route.query.password;
      }
    },
    confirm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(valid);
          const data = {
            ...this.form,
            zwddUserInfo: {
              employeeCode: this.$route.query.employeeCode,
              accountId:this.$route.query.accountId,
              realmId: this.$route.query.realmId,
            }
          }
          axios.post('https://jqy.zjagri.cn/api/screen/scanBinding',data).then(res => {
            console.log(res);
            if (res.data.code === 0) {
              console.log('replace');
              location.replace('https://jqy.zjagri.cn/screen/#/?areaName=' + this.areaName + '&userId=' + res.data.data);
            } else {
              this.$message({ type: "warning", message: res.data.msg });
            }
          }).catch(err => {
            console.log(err);
          })
        }
      });
    },
    // 登录成功
    loginSuccess(res) {
      console.log(res);
      // console.log(res);
      // setToken(res.token);
      // setLoginType(res.loginType);
      // this.$router.push("/").catch(() => {});
    },
    close() {
      this.$refs.form.resetFields();
      this.$emit("update:visible", false);
    },
    cancel() {
      this.close();
      this.$emit("cancel");
    },
    goHome() {
      console.log('gohome');
      const data = {
        userName: this.userName,
        password: this.password,
        areaId: this.$route.query.areaId,
        zwddUserInfo: {
          employeeCode: this.$route.query.employeeCode,
          accountId:this.$route.query.accountId,
          realmId: this.$route.query.realmId,
        }
      }
      axios.post('https://jqy.zjagri.cn/api/screen/defaultBinding',data).then(res => {
        console.log(res);
        if (res.data.code === 0) {
          location.replace('https://jqy.zjagri.cn/screen/#/?areaName=' + this.areaName + '&userId=' + res.data.data);
        } else {
          this.$message({ type: "success", message: res.data.msg });
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.dialog-wrp {
  ::v-deep .el-dialog__body {
    padding: 0;
  }
}
.page {
  background: #09183C;
  width: 1920px;
  height: 1080px;
  .box {
    padding-top: 181px;
    width: 1094px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    .bind-wrp {
      //padding-top: 181px;
      background: url("../assets/img/login_bg.png") 100% 100% no-repeat;
      //margin-top: 30%;
      width: 518px;
      height: 720px;
      // box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      //margin: 0 auto;
      //margin-top: 30%;

      .title {
        padding-top: 130px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #FEFEFE;
        line-height: 28px;
        text-align: center;
      }
      .tips {
        text-align: center;
        margin-top: 10px;
        color: #ff8c13;
        font-size: 14px;
      }
      .form {
        padding: 30px 71px 30px 71px;
        .user-name {
          &:after {
            content: '';
            display: block;
            width: 380px;
            height: 1px;
            background: #03C3FF;
            //opacity: 0.3;
          }
        }
        .pass-word {
          &:after {
            content: '';
            display: block;
            width: 380px;
            height: 1px;
            background: #03C3FF;
          }
        }
        .input {
          height: 50px;
          ::v-deep .el-input__inner {
            height: 50px;
            font-size: 18px;
            padding-left: 40px;
            background-color: rgba(0, 0, 0, 0);
            border: none;
            color: white;
          }
          .el-input__icon {
            font-size: 18px;
            margin-left: 6px;
          }
        }
        .el-button {
          font-size: 18px;
        }
        .tip {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #FFB642;
          line-height: 30px;
        }
        .bind-bottom {
          margin-top: 60px;
          button {
            width: 380px;
            height: 60px;
            background: #03CDFF;
            opacity: 0.8;
            border: 0;
            font-size: 24px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #F6F6F6;
            line-height: 28px;
          }
        }
      }
    }
    .bind-canter {
      padding-top: 335px;
      text-align: center;
      font-size: 48px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #B0DDFE;
      margin-left: 8px;
      margin-right: 13px;
    }
    .bind-right {
      margin-top: 73px;
      cursor: pointer;
      width: 511px;
      height: 571px;
      background: url("../assets/img/login_02_bg.png") 100% 100% no-repeat;
      text-align: center;
      .img {
        margin-top: 166px;
      }
      .label {
        margin-top: 90px;
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #FFFFFF;
      }
      .tip {
        margin-top: 30px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFB642;
        line-height: 30px;
      }
    }
  }

}

</style>
