<template>
  <div class="TalentType">
    <pie-chart
      :list="chartData"
      :color="color"
      :title=title
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
    }
  },
  components: {
    PieChart,
  },
  data() {
    return {
      title: '星级\n分类',
      color: ['#5B9DFE', '#03C3FF', '#00DCA6', '#FFD6AF','#FF9E9F'],
      chartData: [
        { name: '5星', value: 26 },
        { name: '4星', value: 94 },
        { name: '3星', value: 620 },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      const data = {
        areaId: this.areaId,
      }
      getFarmhouseManagement(data).then((json) => {
        json.query3.map((item) => {
          item.name = item.lev;
          item.value = item.num;
        });
        console.log(json)
        this.chartData = json.query3;
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
