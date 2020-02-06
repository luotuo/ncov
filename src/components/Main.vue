<template>
  <div>
     <block
      :data="toolList"
      type="toolList" >
    </block>
    <block
      :data="others"
      type="others"
    ></block>
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
  provinceList, country, funnyList, others
} from '@/db/db'
import Block from '@/components/Block.vue'

export default {
  components: { Block },
  data () {
    return {
      provinceList,
      country,
      funnyList,
      others,
      toolList: {
        title: '本站',
        list: [
          {
            name: '各省数据统计',
            url: '/statistics'
          },
          {
            name: '疫情下的幽默——乐观主义精神',
            url: '/relax'
          }
        ]
      }
    }
  }
}
</script>
