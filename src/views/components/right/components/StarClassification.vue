<template>
  <div class="TalentType">
    <pie-chart
      :list="chartData"
      :color="color"
      :min-title="title"
      showMinTitle
      :total="totalNumber"
      :is-percent="false"
      legend-left="43%"
    />
  </div>
</template>

<script>
import PieChart from '@/components/PieChart';
import { getFarmhouseManagement } from "@/api/index";
export default {
  props: {
    areaId: {
      type: Number,
      default: null
    },
    areaName: {
      type: String,
      default: "",
    },
  },
  components: {
    PieChart,
  },
  data() {
    return {
      title: '农家乐',
      totalNumber: 0,
      color: ['#5B9DFE', '#03C3FF', '#00DCA6', '#FFD6AF','#FF9E9F'],
      chartData: [
        { name: '5星', value: 0 },
        { name: '4星', value: 0 },
        { name: '3星', value: 0 },
      ],
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
    async loadData() {
      this.totalNumber = 0;
      const data = {
        areaId: this.areaId,
        areaName: this.areaName,
      }
      const json = await getFarmhouseManagement(data)
      json.query3.map((item) => {
        this.totalNumber = this.totalNumber + Number(item.num);
        item.name = item.lev;
        item.value = item.num;
      });
      this.chartData = json.query3;
    }
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
