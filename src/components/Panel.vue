<template>
  <div class="panel">
    <panel-title :titleName="titleName" />
    <slot></slot>
  </div>
</template>

<script>
import PanelTitle from "./PanelTitle";
export default {
  props: {
    titleName: {
      type: String,
    },
  },
  name: "panel",
  components: { PanelTitle },
};
</script>

<style scoped>
.panel {
  width: 100%;
  background: rgba(121, 192, 246, 0.02);
  border-radius: 8px;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 20px 30px;
  margin-bottom: 16px;
}
</style>
