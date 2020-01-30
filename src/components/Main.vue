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
  </div>
</template>

<script>
import {
  provinceList, country
} from '@/db/db'
import Block from '@/components/Block.vue'

export default {
  components: { Block },
  data () {
    return {
      provinceList,
      country
    }
  }
}
</script>
