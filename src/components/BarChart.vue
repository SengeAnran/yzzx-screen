<template>
  <div class="chart" ref="chart"></div>
</template>
<script>
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
// 引入直角坐标系组件，组件后缀都为 Component
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, BarChart, CanvasRenderer]);

export default {
  name: "BarChart",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      myChart: null,
    };
  },
  watch: {
    data(val) {
      if (val) {
        this.updateData(val);
      }
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const dom = this.$refs.chart;
      this.myChart = echarts.init(dom);
      this.myChart.setOption({
        color: this._transGradientColor("#3B6DE6", "#5B9DFE"),
        grid: {
          top: 20,
          left: 0,
          bottom: 24,
          right: 0,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisLabel: {
            fontFamily: "Microsoft YaHei",
            color: "#fff",
            fontSize: 14,
            opacity: 0.45,
          },
          axisLine: {
            lineStyle: {
              fontSize: 14,
              opacity: 0.45,
            },
          },
          boundaryGap: true,
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
          data: this.data.map((item) => item.name),
        },
        yAxis: {
          type: "value",
          axisLabel: {
            fontFamily: "Microsoft YaHei",
            color: "#fff",
            fontSize: 14,
            opacity: 0.45,
          },
          splitLine: {
            lineStyle: {
              color: "#F0F4FD",
              opacity: 0.1,
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "bar",
            type: "bar",
            barWidth: "12",
            data: this.data,
            label: {
              show: true,
              position: "top",
              fontFamily: "Microsoft YaHei",
              color: "#efefef",
              fontSize: 12,
            },
          },
        ],
      });
    },
    updateData(data) {
      this.myChart.setOption({
        xAxis: {
          gridIndex: 0,
          data: this.data.map((item) => item.name),
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "bar",
            data,
          },
        ],
      });
      this.myChart.resize();
    },

    _transGradientColor(c1, c2) {
      return {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: c1, // 0% 处的颜色
          },
          {
            offset: 1,
            color: c2, // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 420px;
  // ::v-deep {
  //   div {
  //     width: 100% !important;
  //   }
  //   canvas {
  //     width: auto !important;
  //   }
  // }
}
</style>
