<template>
  <div class="text-orc">
    <div class="tip-text">
      请输入一段想分析的文章：
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
      <el-form-item label="" prop="title">
        <el-input placeholder="请输入标题，最多40个字" maxlength="40" v-model="ruleForm.title" clearable></el-input>
      </el-form-item>
      <el-form-item label="" prop="content">
        <el-input placeholder="请输入文章内容" show-word-limit :rows="10" maxlength="1000" clearable type="textarea"
                  v-model="ruleForm.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">开始检测</el-button>
      </el-form-item>
    </el-form>
    <div class="tip-text">分析结果:</div>
    <TextCanvasRes
        v-if="resDateKey === 'items'"
        :options="options"
    />
    <TextValueRes
        v-if="resDateKey === 'item'"
        :options="options"
    />
  </div>
</template>
<script>
import TextCanvasRes from "./textCanvasRes.vue";
import TextValueRes from "./textValueRes.vue";

export default {
  name: "TextOcrRecognition",
  components: {TextValueRes, TextCanvasRes},
  props: {
    ocrMethod: Function, // 识别api
    otherParams: Object, // 其他参数
    resDateKey: {
      type: String,
      default: 'items'
    },
    exampleInfo: {
      type: Object,
      default: () => {
        return {title: '', content: ''}
      }
    }
  },
  data() {
    return {
      ruleForm: {
        title: '',
        content: ''
      },
      rules: {
        title: [
          {required: true, message: '请输入文章标题', trigger: 'blur'},
          {min: 3, max: 40, message: '长度在 3 到 40 个字符', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '请填写文章内容', trigger: 'blur'}
        ]
      },
      options: {
        type: 'text', //展示类型
        dataList: [], // 展示数据
        firstOne: {},
        showTips: true,
        colors: ['#000', '#999', '#bdbdbd'], // 不同分类颜色
        typeText: ['非常相关', '一般相关', '相关度低'], // 不同分类颜色
      }
    }
  },
  watch: {
    exampleInfo: {
      handler: function (val) {
        this.ruleForm.title = val.title;
        this.ruleForm.content = val.content;
      },
      immediate: true,
      deep: true,
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.postOcrRequest();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    /**
     * 获取识别结果
     */
    postOcrRequest() {
      // this.showScan = true;
      const data = {
        title: this.ruleForm.title,
        content: this.ruleForm.content,
        ...this.otherParams,
      };
      if (this.ocrMethod) {
        this.ocrMethod(data).then(res => {
          console.log(res)
          switch (this.resDateKey) {
            case 'items': // 标签提取
              this.textResHandel(res.items);
              break;
            case 'item': // 文章分类
              this.options.colors = ['#3b85f5', '#74a8f7', '#afccf9'];
              this.classResHandel(res.item);
              break;
            default:
          }
          // this.drawRect();
          // this.showScan = false;
        }).catch(() => {
          // this.showScan = false;
        })
      }

    },
    textResHandel(items) {
      this.options.dataList = items.map(i => {
        return {
          name: i.tag,
          score: i.score,
          type: this.scoreToType(i.score),
        }
      })
    },
    classResHandel(item) {
      Object.keys(item).forEach(i => {
        if (i !== 'lv1_tag_list') {
          item[i].forEach(j => {
            const obj = {
              name: j.tag,
              score: j.score,
              type: this.scoreToType(i.score),
            }
            this.options.dataList.push(obj)
          })
        } else {
          this.options.firstOne = {
            name: item[i][0].tag,
            score: item[i][0].score,
            type: this.scoreToType(i.score),
          }
        }
      })
      // this.options.dataList = item.map(i => {
      //   return {
      //     name: i.tag,
      //     score: i.score,
      //     type: this.scoreToType(i.score),
      //   }
      // })
    },
    scoreToType(score) {
      if (score >= 0.8) {
        return 0;
      } else if (score >= 0.5) {
        return 1;
      } else {
        return 2;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.text-orc {
  width: 1180px;
  margin: 0 auto;
  padding-bottom: 100px;

  .tip-text {
    position: relative;
    margin-bottom: 22px;
    font-size: 18px;
  }
}
</style>
