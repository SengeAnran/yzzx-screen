<template>
<div class="panel">
  <panel-title :titleName="titleName"/>
  <slot></slot>
</div>
</template>

<script>
import PanelTitle from "./PanelTitle";
export default {
  props: {
    titleName: {
      type: String
    }
  },
  name: "panel",
  components: {PanelTitle}
}
</script>

<style scoped>
.panel {
}
</style>