<template>
  <div class="test-value-res">
    <div class="show-box com-topic-result">
      <div class="first-one"></div>
    </div>
    <div class="topic-legend">
      <div class="com-topic-legend">
        <div class="topic-legend-intro">分值说明</div>
        <div class="topic-legend-tag"><span class="topic-legend-tag-text topic-text-start">0</span> <span
            class="topic-legend-tag-text topic-text-low">0.5</span> <span
            class="topic-legend-tag-text topic-text-middle">0.8</span> <span
            class="topic-legend-tag-text topic-text-end">1</span></div>
        <div class="topic-bar"><span class="topic-legend-bar topic-legend-bar-0">相关度低</span> <span
            class="topic-legend-bar topic-legend-bar-1">一般相关</span> <span
            class="topic-legend-bar topic-legend-bar-2">非常相关</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: "textValueRes",
  props: {
    options: { // 配置
      type: Object,
      default: () => {
        return {
          type: '', //展示类型
          firstOne: {},
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
  // watch: {
  //   options: {
  //     handler: function () {
  //       this.$nextTick(() => {
  //         this.handlerData();
  //       })
  //
  //     },
  //     deep: true,
  //   },
  // },
  mounted() {
    // this.init();
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
.test-value-res {
  position: relative;
  //width: 1180px;
  height: 340px;
  background-color: #fff;
  border: 1px solid #eee;

  .show-box {
    height: 100%;
    position: relative;

    .first-one {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      background: rgba(59, 113, 246, .1);
      border-radius: 50%;
    }
  }

  .com-topic-result .topic-lv2-0 {
    left: 50%;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
    bottom: 280px
  }

  .com-topic-result .topic-lv2-1 {
    left: 680px;
    top: 110px
  }

  .com-topic-result .topic-lv2-1, .com-topic-result .topic-lv2-2 {
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
  }

  .com-topic-result .topic-lv2-2 {
    left: 720px;
    top: 50%
  }

  .com-topic-result .topic-lv2-3 {
    left: 680px;
    top: 230px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
  }

  .com-topic-result .topic-lv2-4 {
    left: 50%;
    top: 280px;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
  }

  .com-topic-result .topic-lv2-5 {
    right: 680px;
    top: 230px
  }

  .com-topic-result .topic-lv2-5, .com-topic-result .topic-lv2-6 {
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
  }

  .com-topic-result .topic-lv2-6 {
    right: 720px;
    top: 50%
  }

  .com-topic-result .topic-lv2-7 {
    right: 680px;
    top: 110px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
  }


  // tips
  .topic-legend {
    position: absolute;
    left: 982px;
    top: 245px;
    width: 168px;
  }

  .com-topic-legend {
    position: relative;
    overflow: hidden
  }

  .com-topic-legend .topic-legend-intro {
    margin-bottom: 10px;
    color: #666;
    font-size: 14px
  }

  .com-topic-legend .topic-legend-tag {
    position: relative;
    height: 12px;
    margin-bottom: 5px
  }

  .com-topic-legend .topic-legend-tag-text {
    position: absolute;
    top: 0;
    font-size: 12px;
    color: #999
  }

  .com-topic-legend .topic-text-low {
    left: 33.3%
  }

  .com-topic-legend .topic-text-low, .com-topic-legend .topic-text-middle {
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    /* transform:translateX(-50%); */
  }

  .com-topic-legend .topic-text-middle {
    left: 66.6%
  }

  .com-topic-legend .topic-text-end {
    right: 0
  }

  .com-topic-legend .topic-bar {
    font-size: 0
  }

  .com-topic-legend .topic-legend-bar {
    display: inline-block;
    vertical-align: top;
    width: 56px;
    color: #999;
    font-size: 12px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 4px
  }

  .com-topic-legend .topic-legend-tag {
    width: 168px
  }

  .com-topic-legend .topic-legend-bar-0 {
    border-top: 4px solid #afccf9;
    text-align: left
  }

  .com-topic-legend .topic-legend-bar-1 {
    border-top: 4px solid #74a8f7;
    text-align: center
  }

  .com-topic-legend .topic-legend-bar-2 {
    border-top: 4px solid #3b85f5;
    text-align: right
  }

}
</style>
