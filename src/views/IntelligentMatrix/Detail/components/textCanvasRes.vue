<template>
  <div class="test-canvas-res">
    <canvas :width="canvasWidth" :height="canvasHeight" ref="myCanvas" class="canvas-box">

    </canvas>
    <div class="tips-list">
      <div v-for="(item, index) in tipsList " :key="index" class="list-item">
        <div class="rect" :style="{background: item.color}"></div>
        <div class="text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: "textCanvasRes",
  props: {
    options: { // 配置
      type: Object,
      default: () => {
        return {
          type: '', //展示类型
          dataList: [], // 展示数据
          showTips: false,
          colors: [], // 不同分类颜色
          typeText: [], // 不同分类颜色对应名称
        }
      }
    }

  },
  data() {
    return {
      canvasWidth: 2360, // 画布宽度
      canvasHeight: 640, // 画布高度
      canvas: null,
      canvasContext: null,
      dataArr: [],
      tipsList: [],
    }
  },
  watch: {
    options: {
      handler: function () {
        this.$nextTick(() => {
          this.handlerData();
        })

      },
      deep: true,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.canvas = this.$refs.myCanvas;
      // console.dir(this.canvas.parentElement)
      this.canvasWidth = this.canvas.parentElement.clientWidth;
      this.canvasHeight = this.canvas.parentElement.clientWidth * 0.27;
      // this.canvas.width = this.canvas.parentElement.clientWidth;
      // this.canvas.height = this.canvas.parentElement.clientWidth * 0.27;
      this.canvasContext = this.canvas.getContext('2d');
      this.canvasContext.textAlign = 'center';
      this.canvasContext.textBaseline = 'middle';
    },
    //  处理数据
    handlerData() {
      const scale = d3.scaleLinear();
      scale.domain([0, 1]).range([16, 70]);
      this.dataArr = this.options.dataList.map(i => {
        return {
          ...i,
          x: 200 + (Math.random() * (this.canvasWidth - 400)).toFixed(0) * 1,
          y: 50 + (Math.random() * (this.canvasHeight - 100)).toFixed(0) * 1,
          color: this.options.colors[i.type],
          fontsize: scale(i.score).toFixed(0) + 'px'
        }
      });
      this.tipsList = this.options.colors.map((item, index) => {
        return {
          color: item,
          text: this.options.typeText[index],
        }
      })
      this.drawText();
    },
    drawText() {
      this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.dataArr.forEach(i => {
        this.canvasContext.font = `${i.fontsize} Arial`;
        this.canvasContext.fillStyle = i.color;
        this.canvasContext.fillText(i.name, i.x, i.y);
      })

    }
  }
}
</script>

<style scoped lang="scss">
.test-canvas-res {
  position: relative;
  //width: 1180px;
  height: 320px;
  background-color: #fff;
  border: 1px solid #eee;

  .tips-list {
    position: absolute;
    right: 30px;
    bottom: 30px;
  }

  .list-item {
    height: 20px;
    display: flex;
    align-items: center;

    .rect {
      width: 7px;
      height: 7px;
      margin-right: 6px;
    }

    .text {
      font-size: 12px;
    }
  }
}
</style>
