<template>
  <div class="json-res">
    <json-viewer
        :value="jsonData"
        :expand-depth="4"
        :copyable="true"
        sort
        @copied="onCopy"
    ></json-viewer>
  </div>
</template>
<script>
export default {
  props: {
    jsonData: Object,
  },
  name: "JsonRes",
  methods: {
    onCopy() {
      // console.log(e)
    }
  }
}
</script>
<style scoped lang="scss">

</style>
