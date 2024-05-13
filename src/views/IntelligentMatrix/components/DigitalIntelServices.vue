<template>
  <div class="able-list">
    <BaseLine @click="goPage" :data-obj="line1"/>
    <BaseLine @click="goPage" :data-obj="line2"/>
    <BaseLine @click="goList" :data-obj="line3"/>
    <BaseLine @click="goList" :data-obj="line4"/>
    <div class="line-tow">
      <el-row :gutter="24">
        <el-col :span="15">
          <el-row :gutter="24">
            <el-col :span="14" style="margin-bottom: 24px">
              <BaseLine :data-obj="line5" line-height="20px"/>
            </el-col>
            <el-col :span="10">
              <BaseLine :data-obj="line6" line-height="20px"/>
            </el-col>
          </el-row>
          <el-row>
            <BaseLine :data-obj="line7"/>
          </el-row>
        </el-col>
        <el-col :span="9">
          <special-line @click="goPage2" :data-obj="specialLine"/>
        </el-col>
      </el-row>
    </div>
    <BaseLine :data-obj="line8" line-height="20px"/>
  </div>
</template>
<script>
import BaseLine from "./BaseLine.vue";
import SpecialLine from "./SpecialLine.vue";
import {line1, line2, line3, line4, line5, line6, line7, line8, specialLine} from "./contanst";

export default {
  name: "DigitalIntelServices",
  components: {BaseLine, SpecialLine},
  data() {
    return {
      line1: line1,
      line2: line2,
      line3: line3,
      line4: line4,
      line5: line5,
      line6: line6,
      line7: line7,
      line8: line8,
      specialLine: specialLine,
    }
  },
  mounted() {
  },
  methods: {
    goList() {
      this.$router.push({path: '/intelligentMatrix/list'});

    },
    goPage() {
      this.$router.push({path: '/smartScene'});
    },
    goPage2() {
      this.$router.push({path: '/intelligenceModel'});
    }
  }
}
</script>

<style scoped lang="scss">
.able-list {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  //.line {
  //  height: 96px;
  //  //&:nth-child(n+2) {
  //  //  margin-top: 20px;
  //  //}
  //}

  .line-tow {
    height: 216px;
  }
}
</style>
