<template>
  <div class="able-show">
    <!--    <img src="./able.png" alt="">-->
    <OcrRecognition/>
    <uploadImg v-model="imageUrl"/>
    <div class="result">
      <!--      {{ res }}-->
    </div>
  </div>
</template>
<script>
// import {getAdvancedGeneral} from "@/api/baiduAi";
import OcrRecognition from "./components/OcrRecognition.vue";

export default {
  name: "AbleShow",
  components: {OcrRecognition},
  data() {
    return {
      imageUrl: 'http://www.gxwin.cn/img/%E5%85%B4%E9%9A%86%E6%B9%963.jpg',
      resStr: '',
    };
  },
  mounted() {
    // this.getData()
  },
  watch: {
    imageUrl(val) {
      if (val) {
        // this.getData();
      }
    }
  },
  methods: {
    // getData() {
    //   const data = {
    //     image: this.imageUrl,
    //     // url: this.imageUrl,
    //     // baike_num:
    //   }
    //   getAdvancedGeneral(data).then(res => {
    //     this.resStr = res.result[0].keyword;
    //   })
    // },
  }
}
</script>
<style scoped lang="scss">
.able-show {
  padding-top: 30px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
