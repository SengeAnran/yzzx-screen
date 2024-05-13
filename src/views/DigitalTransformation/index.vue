<template>
  <div class="digital-transformation">
    <pptShowBox/>
  </div>
</template>
<script>
import pptShowBox from "./pptShowBox.vue";

export default {
  name: "DigitalTransformation",
  components: {
    pptShowBox,
  },
}
</script>

<style scoped lang="scss">
.digital-transformation {
  width: 100%;
  height: calc(100vh - 80px);
}
</style>
