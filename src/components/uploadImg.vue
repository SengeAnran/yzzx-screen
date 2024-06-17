<template>
  <div class="upload-file">
    <el-upload
        class="upload-demo"
        action=""
        accept=".jpg, .png"
        :limit="1"
        :auto-upload="false"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-change="getFile"
        :file-list="fileList"
        list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt/>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: "uploadImg",
  props: {
    value: String,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  data() {
    return {
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.fileList = [
          {
            name: '',
            url: val,
          }
        ]
      } else {
        this.fileList = [];
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.$emit('change', '')
    },
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    getFile(file, fileList) {
      console.log(file, fileList)
      this.getBase64(file.raw).then(res => {
        console.log(res);
        // const obj = {
        //   name: '资质证明',
        //   url: this.proofImage,
        // }
        this.$emit('change', res)
      })
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        let imgResult = '';
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result;
        }
        reader.onerror = function (err) {
          reject(err);

        }
        reader.onloadend = function () {
          resolve(imgResult);
        }
      })

    }
  }
}
</script>

<style scoped lang="scss">

</style>
