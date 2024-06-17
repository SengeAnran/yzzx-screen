<template>
  <div class="show-box">
    <iframe
        v-loading="loading"
        id="myIframe"
        ref="myIframe"
        :src="'https://view.officeapps.live.com/op/embed.aspx?src=' + pptUrl"
        frameborder="0"
    >这是嵌入
      <a target="_blank" href="https://office.com">Microsoft Office</a>
      演示文稿，由
      <a target="_blank" href="https://office.com/webapps">Office</a>
      提供支持。
    </iframe>
  </div>
</template>

<script>
// import { getFileInfo } from "@/api/common";

export default {
  name: "pptDialog",
  props: {
    //  文件id
    fileId: {
      type: String,
      default: "", //1749719449021440000
    },
  },
  data() {
    return {
      // title: "三年级-下学期，第1单元 《我的植物朋友》",
      // unit: "",
      // unitList: [
      //   {
      //     name: "单元一",
      //     url: "",
      //   },
      //   {
      //     name: "单元二",
      //     url: "",
      //   },
      //   {
      //     name: "单元三",
      //     url: "",
      //   },
      //   {
      //     name: "单元四",
      //     url: "",
      //   },
      //   {
      //     name: "单元五",
      //     url: "",
      //   },
      // ],
      loading: true,
      pptUrl: "http%3A%2F%2Fvideo%2Ech9%2Ems%3A80%2Fbuild%2F2011%2Fslides%2FTOOL%2D532T%5FSutter%2Epptx&amp;wdAr=1.7777777777777777", //http%3A%2F%2Fvideo%2Ech9%2Ems%3A80%2Fbuild%2F2011%2Fslides%2FTOOL%2D532T%5FSutter%2Epptx&amp;wdAr=1.7777777777777777
    };
  },
  mounted() {
    this.getInfo()
  },
  watch: {
    // fileId(val) {
    //   if (val) {
    //     this.getFileBaseInfo();
    //   }
    // },
  },
  methods: {
    // getFileBaseInfo() {
    //   getFileInfo(this.fileId).then((res) => {
    //     this.pptUrl = res.data.fileUrl;
    //     this.loading = false;
    //   });
    // },
    // getInfo() {
    //   window.setTimeout(() => {
    //     const dom = window.document.querySelector('#myIframe');
    //     console.log(dom);
    //     console.log(dom.contentWindow.document.getElementById('wacframe'));
    //     console.log(dom.contentWindow.document.getElementById('SlideLabel-Medium14'))
    //   }, 2000)
    //
    // }
  },
};
</script>

<style lang="scss" scoped>
.show-box {
  height: 100%;
  width: 100%;
  background-color: #fff;
  //box-shadow: 0px 3px 16px 0px rgba(171, 172, 172, 0.2);
  iframe {
    width: 100%;

    height: 100%;
  }
}
</style>
