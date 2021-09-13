<template>
<div class="right-content"></div>
</template>

<script>
export default {
  name: "index",
  props: {
    areaId: {
      type: Number
    }
  },
  data() {
    return {
    }
  },
  watch: {
    areaId() {
      console.log('areaId改变了');
    }
  },
}
</script>

<style lang="scss" scoped>
.right-content{
  position: absolute;
  top: 59px;
  right: 32px;
  width: 584px;
  min-height: 800px;
}

</style>