<template>
  <div>
    <div class="bind-wrp">
      <h4 class="title">{{ title }}</h4>
      <p class="tips">请输入用户名和密码绑定浙政钉信息！</p>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        class="form"
        label-position="right"
        label-width="0px"
      >
        <el-form-item prop="userName">
          <el-input
            class="input"
            v-model="form.userName"
            placeholder="请输入用户名"
          >
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="input"
            v-model="form.password"
            placeholder="请输入密码"
            type="password"
          >
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item align="right">
          <el-button type="primary" @click.stop.prevent="confirm">
            绑定
          </el-button>
<!--          <el-button @click="cancel">取消</el-button>-->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    title: {
      type: String,
      default: "二十四节气美丽乡村",
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
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
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
  methods: {
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
              location.replace('http://jqy.zjagri.cn/screen/#/')
            } else {
              this.$message({ type: "success", message: res.data.msg });
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
  },
};
</script>
<style lang="scss" scoped>
.dialog-wrp {
  ::v-deep .el-dialog__body {
    padding: 0;
  }
}
.bind-wrp {
  //margin-top: 30%;
  width: 612px;
  min-height: 332px;
  background: #fff;
  // box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 10% auto;
  //margin-top: 30%;

  .title {
    padding-top: 30px;
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    // color: #262626;
    color: #1e8dff;
    line-height: 33px;
    text-align: center;
  }
  .tips {
    text-align: center;
    margin-top: 10px;
    color: #ff8c13;
    font-size: 14px;
  }
  .form {
    padding: 30px 100px 30px;
    .input {
      height: 50px;
      ::v-deep .el-input__inner {
        height: 50px;
        font-size: 18px;
        padding-left: 40px;
      }
      .el-input__icon {
        font-size: 18px;
        margin-left: 6px;
      }
    }
    .el-button {
      font-size: 18px;
    }
  }
}
</style>
