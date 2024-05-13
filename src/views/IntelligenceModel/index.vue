<template>
  <div class="intelligence-model">
    <List/>
    <Example/>
  </div>
</template>
<script>
import List from "./List.vue";
import Example from "./Example.vue";

export default {
  name: "IntelligenceModel",
  components: {
    List,
    Example,
  }
}
</script>

<style scoped lang="scss">

</style>
