<template>
  <div>
    <block
      :data="country"
      type="country"
    ></block>
    <block
      :data="provinceList"
      type="provinceList"
    ></block>
    <!-- <block
      :data="funnyList"
      type="funnyList"
    ></block> -->
  </div>
</template>

<script>
import {
  provinceList, country, funnyList
} from '@/db/db'
import Block from '@/components/Block.vue'

export default {
  components: { Block },
  data () {
    return {
      provinceList,
      country,
      funnyList
    }
  }
}
</script>
