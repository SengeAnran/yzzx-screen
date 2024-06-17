<template>
  <ul class="result-items">
    <li v-for="(item, index) in  dataList" :key="index" class="result-item">
      <span class="result-name">{{ item.name }}</span>
      <span class="result-des">{{ item.label }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: "listRes",
  props: {
    dataList: Array,
  }
}
</script>


<style scoped lang="scss">
.result-item {
  list-style: none;
  padding: 0;
  position: relative;
  margin: 0 0 12px;
  overflow: hidden;
  text-align: left;

  .result-name {
    width: 90px;
  }

  .result-des {
    width: 196px;
  }

  .result-des, .result-name {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    color: #333;
    line-height: 20px;
  }
}
</style>
