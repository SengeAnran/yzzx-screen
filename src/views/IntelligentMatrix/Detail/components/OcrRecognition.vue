<template>
  <div class="ocr-recognition">
    <div class="recognition-scan" :style="{display: showScan ? 'block' : 'none'}"></div>
    <div class="img-content">
      <div class="tech-canvas-container" ref="canvasBox">
        <div class="image-input">
          <div class="image-input-container">
            <input type="text" spallcheck="false" placeholder="请输入网络图片URL"
                   class="image-url">
            <button class="image-button">
              检测
            </button>
            <div class="image-text">或</div>
            <label class="image-local">
              <input type="file" accept="image/png, image/bmp, image/jpg, image/jpeg"
                     class="image-local-input">
              本地上传
            </label>
          </div>
          <div class="image-notice">
            此处仅供功能展示，图片类型支持PNG、JPG、JPEG、BMP，大小不超过8M。该接口实际能力的图片格式及大小要求以接口文档为准
          </div>
        </div>
        <div class="operate">
          <el-tooltip class="" effect="dark" content="放大" placement="bottom">
            <div class="operate-item tooltip" @click="enlarge"></div>
          </el-tooltip>
          <el-tooltip effect="dark" content="缩小" placement="bottom">
            <div class="operate-item tooltip" @click="narrow"></div>
          </el-tooltip>
          <el-tooltip effect="dark" content="自适应" placement="bottom">
            <div class="operate-item tooltip" @click="reduction"></div>
          </el-tooltip>
        </div>
        <canvas width="2934" height="2096" class="img-canvas" ref="myCanvas"></canvas>
      </div>
      <div class="image-select">
        <div v-for="(item, index) in imgList" class="image-select-item" :class="{active: activeIndex === index}"
             @click="changeImg(item, index)"
             :key="index">
          <img :src="item.url" alt="">
        </div>
      </div>
    </div>
    <div class="demo-feedback-json">
      <div>
        <div class="demo-collapse">
          <div class="demo-collapse-item" v-for="(item, index) in tapList"
               @click="changeTabActive(item, index)"
               :class="{tabActive: tabActiveIndex === index}" :key="index">
            {{ item.name }}
          </div>
        </div>
        <div v-for="(item, index) in tapList"
             :class="{active: tabActiveIndex === index}" :key="index"
             class="demo-collapse-item-vTwo">
          <div class="demo-collapse-item-vTwo-cnt">
            <listRes v-if="item.showType === 'list'" :data-list="orcRes"></listRes>
            <JsonRes v-if="item.showType === 'json'" :json-data="jsonData"></JsonRes>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getIdCard} from "@/api/baiduAi";
import listRes from "./listRes.vue";
import JsonRes from "./JsonRes.vue";

export default {
  name: "OcrRecognition",
  components: {
    JsonRes,
    listRes,
  },
  data() {
    return {
      showScan: false,
      activeIndex: 0,
      tabActiveIndex: 0,
      orcImgUrl: '',
      orcRes: [],
      jsonData: [],
      canvasBox: null, // 窗口
      myCanvas: null, // canvas
      myCanvasContext: null, // 上下文
      minScale: 0,// 缩放倍数
      initScale: 1,
      isDragging: !1,
      initialDrag: !0,
      renderIsDone: !1,
      lastX: 0,
      lastY: 0,
      translateX: 0,
      translateY: 0,
      imgList: [
        {
          url: 'https://ai.bdstatic.com/file/3C8C5B451BB4445697730217EC8648E3',
        },
        {
          url: 'https://ai.bdstatic.com/file/96D2F45674F54D4287EB9FBF9E6AB19A',
        },
        {
          url: 'https://ai.bdstatic.com/file/C8124E563BBE4DFE9647ACB7B8B12D0A',
        },
        {
          url: 'https://ai.bdstatic.com/file/0C2E17DA8CBC4C04AF4A6D1E38FC04ED',
        },
        {
          url: 'https://ai.bdstatic.com/file/D348C98B677149C8B95909CFA204BA1C',
        },
      ],
      imgInfo: {
        width: 0,
        height: 0,
      },
      tapList: [
        {
          name: '识别结果',
          showType: 'list',
        },
        // {
        //   name: '请求参数',
        //   showType: 'request',
        // },
        {
          name: 'JSON结果',
          showType: 'json',
        },
      ]
    }
  },
  beforeMount() {
    this.orcImgUrl = this.imgList[0].url;
    this.postOcrRequest();
  },
  mounted() {
    this.myCanvas = this.$refs.myCanvas;
    this.canvasBox = this.$refs.canvasBox;
    this.myCanvasContext = this.$refs.myCanvas.getContext('2d'); // 获取上下文
    this.init();
  },
  methods: {
    /**
     * 初始化
     */
    init() {
      if (this.myCanvasContext) {
        const img = new Image();
        img.src = this.orcImgUrl;
        img.onload = () => {
          //  收集图片数据
          this.imgInfo.height = img.height;
          this.imgInfo.width = img.width;
          //  设置图像drawImage(图像数据，起点x,起点y, ？宽带，？高度)
          this.myCanvasContext.drawImage(img, 0, 0);
          this.setCanvasTransform();
        }
      }
      this.myCanvas.addEventListener("mousedown", ((t) => {
            this.isDragging = !0;
            this.lastX = t.clientX;
            this.lastY = t.clientY;
            this.myCanvas.style.cursor = "grab"
          }
      ));
      this.myCanvas.addEventListener("mousemove", ((t) => {
            if (this.isDragging) {
              this.initialDrag && (this.translateX = -this.imgInfo.width / 2,
                  this.translateY = -this.imgInfo.height / 2, this.initialDrag = !1);
              this.myCanvas.style.cursor = "grabbing";
              const n = t.clientX - this.lastX
                  , r = t.clientY - this.lastY;
              this.translateX += n;
              this.translateY += r;
              this.lastX = t.clientX;
              this.lastY = t.clientY;
              const i = "translate(".concat(this.translateX, "px, ")
                  .concat(this.translateY, "px) scale(").concat(this.minScale, ")");
              this.myCanvas.style.transform = i;
            }
          }
      ));
      this.myCanvas.addEventListener("mouseup", (() => {
            this.isDragging = !1;
            this.myCanvas.style.cursor = "default"
          }
      ));
      this.myCanvas.addEventListener("mouseleave", (() => {
            this.isDragging = !1
          }
      ))
    },
    // 初始化设置缩放位移
    setCanvasTransform() {
      const {width, height} = this.imgInfo;
      const {clientWidth: boxWidth, clientHeight: boxHeight} = this.canvasBox;
      this.minScale = Math.min(boxWidth / width, boxHeight / height);
      this.myCanvas.style.transform = `translate(-50%, -50%) scale(${this.minScale})`
      this.myCanvas.style.cursor = 'default'
    },
    /**
     * 放大
     */
    enlarge() {
      this.minScale = this.minScale * 1.1;
      this.myCanvas.style.transform = `translate(-50%, -50%) scale(${this.minScale})`
    },
    /**
     * 缩小
     */
    narrow() {
      this.minScale = this.minScale * 0.9;
      this.myCanvas.style.transform = `translate(-50%, -50%) scale(${this.minScale})`
    },
    /**
     * 自适应
     */
    reduction() {
      this.setCanvasTransform();
    },
    /**
     *
     * @param item
     * @param index
     */
    changeImg(item, index) {
      this.activeIndex = index;
      this.orcImgUrl = item.url;
      this.postOcrRequest();
      this.init();
    },
    changeTabActive(item, index) {
      this.tabActiveIndex = index;
      // this.orcImgUrl = item.url;

    },
    /**
     * 获取图像识别结果
     */
    postOcrRequest() {
      this.showScan = true;
      const data = {
        image: '',
        url: this.orcImgUrl,
        detect_photo: false,
        detect_risk: true,
        detect_quality: true,
        id_card_side: 'front', //-front：身份证含照片的一 -back：身份证带国徽的一面

      };
      getIdCard(data).then(res => {
        this.orcRes = Object.keys(res.words_result).map(i => {
          return {
            name: i,
            label: res.words_result[i].words,
            location: res.words_result[i].location,
          }
        });
        this.jsonData = {
          words_result: res.words_result,
        }
        this.showScan = false;
      }).catch(() => {
        this.showScan = false;
      })
    }
  }
}
</script>

<style scoped lang="scss">
.ocr-recognition {
  margin: 0 auto;
  position: relative;
  width: 1180px;
  height: 654px;

  .recognition-scan {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
    width: 840px;
    border-bottom: 3px solid #3e88f1;
    animation: scan 1.2s infinite;
    background: linear-gradient(180deg, transparent, #3e88f1);
  }

  .img-content {
    width: 840px;
    float: left;
    height: 100%;

    .tech-canvas-container {
      overflow: hidden;
      position: relative;
      width: 840px;
      height: 524px;
      background: #343434;

      .img-canvas {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform-origin: center;
        -moz-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
      }
    }

    .image-select {
      padding: 20px 0 20px 20px;
      background-color: #ebebeb;
      display: flex;
      justify-content: space-between;

      .image-select-item {
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 144px;
        height: 90px;
        margin-right: 20px;
        cursor: pointer;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          max-height: 100%;
          object-fit: fill;
        }
      }

      .active {
        border: 2px solid #0073eb;
      }

    }
  }

  .demo-feedback-json {
    width: 340px;
    height: 100%;
    float: left;
    padding-left: 20px;
    word-wrap: break-word;
    word-break: break-all;
    background-color: #fafafa;

    .demo-collapse {
      position: relative;
      padding-right: 20px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 42px;

      &::after {
        position: absolute;
        bottom: 0;
        left: -20px;
        content: "";
        width: 340px;
        height: 1px;
        background-color: #e6e6e6;
      }

      .demo-collapse-item {
        position: relative;
        font-size: 14px;
        text-align: center;
        margin-right: 10px;
        min-width: 76px;
        cursor: pointer;
      }

      .tabActive {
        font-weight: 600;

        &::after {
          position: absolute;
          bottom: -11px;
          left: -5px;
          content: "";
          width: 76px;
          height: 2px;
          background-color: #000;
        }
      }


    }

    .active {
      display: block;
    }
  }
}

.image-input {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 20px 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 9;
  background: rgba(0, 0, 0, .5);

  .image-input-container {
    position: relative;
    width: 100%;
    height: 38px;
    font-size: 0;

    .image-url {
      display: inline-block;
      vertical-align: middle;
      height: 38px;
      line-height: 36px;
      color: #ccc;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid #666;
      outline: none;
      background-color: rgba(0, 0, 0, .45)
    }

    .image-button {
      display: inline-block;
      vertical-align: middle;
      height: 38px;
      line-height: 36px;
      color: #ccc;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid #666;
      outline: none;
      background-color: rgba(0, 0, 0, .45)
    }

    .image-text {

    }

    .image-local {
      display: inline-block;
      vertical-align: middle;
      height: 38px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      width: 116px;
      font-size: 16px;
      line-height: 38px;
      text-align: center;
      color: #fff;
      background-color: #0073eb;
      border: none;

      .image-local-input {

        width: 100%;
        height: 100%;
        display: none;
      }
    }
  }

  .image-notice {

  }
}

.image-input .image-input-container .image-button:hover, .image-input .image-input-container .image-local:hover {
  -webkit-box-shadow: unset;
  -moz-box-shadow: unset;
  box-shadow: unset;
  cursor: pointer
}

.image-input .image-input-container .image-url {
  width: 492px;
  font-size: 14px;
  line-height: 36px;
  outline: none;
  text-indent: 11px;
  border-right: 0
}

.image-input .image-input-container .image-button {
  min-width: 116px;
  font-size: 14px
}

.image-input .image-input-container .image-button.image-button-active {
  background-color: #0073eb;
  border-color: #0073eb;
  color: #fff
}

.image-input .image-input-container .image-text {
  display: inline-block;
  vertical-align: middle;
  margin: 0 30px;
  font-size: 16px;
  color: #ccc;
  line-height: 38px;
  background: transparent;
  border: none
}

.image-input .image-input-container .image-local {
  width: 116px;
  font-size: 16px;
  line-height: 38px;
  text-align: center;
  color: #fff;
  background-color: #0073eb;
  border: none
}

.image-input .image-input-container .image-local-input {
  width: 100%;
  height: 100%;
  display: none
}

.image-input .image-notice {
  margin-top: 10px;
  color: #ccc;
  font-size: 12px
}

// 放大缩小
.operate {
  position: absolute;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  background-color: rgba(0, 0, 0, .5)
}

.operate-item {
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  -moz-background-size: cover;
  background-size: cover;
  cursor: pointer
}

.operate-item .el-tooltip__popper.is-dark {
  background: #000;
  color: #fff
}

.operate-item:first-of-type {
  background-image: url(../img/enlarge.png)
}

.operate-item:nth-of-type(2) {
  margin: 0 22px;
  background-image: url(../img/narrow.png)
}

.operate-item:nth-of-type(3) {
  background-image: url(../img/actualSize.png)
}

.operate-item:nth-of-type(4) {
  background-image: url(https://bj.bcebos.com/v1/dataset-bj/platform-guangwang/demo/adaptive.png)
}


.demo-collapse-item-vTwo {
  display: none;
  margin-top: 16px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  .demo-collapse-item-vTwo-cnt {
    display: block;
    box-sizing: border-box;
    max-height: 588px;
    overflow-y: auto;
    padding-bottom: 50px;
  }
}

@keyframes scan {
  0% {
    height: 0;
  }
  100% {
    opacity: 0;
    height: 524px;
  }
}
</style>
