<template>
  <div class="TalentType">
    <!-- <pie-chart :list="chartData" :color="color" :is-percent="false" /> -->
    <BarChart :data="chartData" v-if="chartData && chartData.length" />
    <Empty :scale="0.8" v-else />
  </div>
</template>

<script>
// import PieChart from '@/components/PieChart';
import BarChart from "@/components/BarChart";
import { getStarRating } from "@/api/index";
// import { getPersonTypeTrend } from '@/api/Overview/Innovation/api';
export default {
  props: {
    areaId: {
      type: Number,
      default: null,
    },
    areaName: {
      type: String,
      default: "",
    },
  },
  components: {
    // PieChart,
    BarChart,
  },
  data() {
    return {
      // title: '人才类型\n分布',
      color: ["#5B9DFE", "#03C3FF", "#00DCA6", "#FFD6AF", "#FF9E9F"],
      chartData: [],
    };
  },
  watch: {
    areaId() {
      this.loadData();
    },
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      const data = {
        areaId: this.areaId,
        areaName: this.areaName,
      };
      getStarRating(data).then((json) => {
        json.map((item) => {
          item.name = item.typeName;
          item.value = item.num;
        });
        this.chartData = json;
      });
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
