<template>
  <div class="home">
    <left></left>
    <right></right>
    <Map></Map>
  </div>
</template>

<script>
import {getAgritainmentDistribution} from '@/api/index'

import left from './components/left'
import right from './components/right'
import Map from './components/Map'

export default {
  name: 'Home',
  components: {
    left,
    right,
    Map,
  },
  data() {
    return {
      areaId: 1,
    }
  },
  mounted() {
    getAgritainmentDistribution().then(res => {
      console.log(res)
    })
  }
}
</script>
