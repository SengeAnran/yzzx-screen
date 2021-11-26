<template>
  <div class="left-content">
    <Panel title-name="村落概况">
      <village-overview :village-overview.sync="villageOverview2" />
    </Panel>
    <Panel title-name="历史文化村落保护">
      <village-protection :data="historyData" />
    </Panel>
    <Panel title-name="村景">
      <village-view
        :area-id.sync="areaId"
        :area-name.sync="areaName"
      />
    </Panel>
  </div>
</template>

<script>
import { getVillageOverview, getHisInformation } from "@/api/index";
import VillageOverview from "./components/VillageOverview";
import VillageProtection from "./components/VillageProtection";
import VillageView from "./components/VillageView";
// vuex
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("map");
export default {
  name: "index",
  components: {
    VillageOverview,
    VillageProtection,
    VillageView,
  },
  // props: {
  //   areaId: {
  //     type: Number,
  //     default: null,
  //   },
  // },
  data() {
    return {
      villageOverview: {
        // administrative: 19802,
        // beautiful: 3148,
        // solarTerms: 24,
        // agriculturalHeritage: 12,
        // historyCulture: 390,
      }, //村落概况
      villageOverview2: {},
      villageProtection: {
        // zjpc: "7-9",
        // // bhsqs: 758,
        // bhzjztr: 51709,
        // zjgs: 390,
      },

      historyData: {},
    };
  },
  computed: {
    ...mapGetters(["mapAreaId", "mapAreaName"]),
    areaId() {
      return this.mapAreaId;
    },
    areaName() {
      return this.mapAreaName;
    },
  },
  watch: {
    areaId() {
      this.getData(this.areaId, this.areaName);
    },
  },
  mounted() {
    // console.log(process.env.NODE_ENV)
    // console.log(process.env)
    this.getData(this.areaId, this.areaName);
  },
  methods: {
    getData(areaId, areaName) {
      const data = {
        areaName: areaName,
        areaId: areaId,
      };
      getVillageOverview(data).then((res) => {
        // console.log(res);
        this.villageOverview = res;
        this.setHisInformation(); // 历史文化村落保护
      });

    },

    // 设置历史文化村落保护数据
    setHisInformation() {
      const data = {
        areaName: this.areaName,
        areaId: this.areaId || (this.areaName? null : 33),
      };
      getHisInformation(data).then((res) => {
        this.historyData = res;
        this.villageOverview.administrative = res.administrativeNum;
        console.log(this.villageOverview);
        this.villageOverview2 = this.villageOverview;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.left-content {
  position: absolute;
  top: 59px;
  left: 32px;
  width: 584px;
  min-height: 800px;
}
</style>
