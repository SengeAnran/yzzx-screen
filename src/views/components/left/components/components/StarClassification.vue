<template>
  <div class="TalentType">
    <pie-chart :color="color" :is-percent="false" />
  </div>
</template>

<script>
import PieChart from './PieChart';
// import { getPersonTypeTrend } from '@/api/Overview/Innovation/api';
export default {
  components: {
    PieChart,
  },
  data() {
    return {
      // title: '人才类型\n分布',
      color: ['#5B9DFE', '#03C3FF', '#00DCA6', '#FFD6AF'],
      chartData: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      // getPersonTypeTrend()
      //   .request()
      //   .then((json) => {
      //     const total = json.map((item) => item.rcsl).reduce((m, n) => m + n);
      //     json.map((item) => {
      //       item.name = item.rclx;
      //       item.value = item.rcsl;
      //       item.percent = item.value / total * 100 + '%';
      //     });
      //     this.chartData = json;
      //   });
    },
  },
};
</script>
<style lang="scss" scoped>
.TalentType {
  width: 100%;
  height: 100%;
  & > div {
    height: 100%;
  }
}
</style>
