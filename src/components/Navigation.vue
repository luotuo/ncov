<template>
  <div>
    <el-row>
      <el-col class="navigation-github">
        <a @click="showIframe">{{ text }}</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showFlag: false,
      text: '显示实时疫情'
    }
  },
  methods: {
    showIframe () {
      this.showFlag = !this.showFlag
      if (!this.showFlag) {
        this.text = '显示实时疫情'
      } else {
        this.text = '隐藏实时疫情'
      }
      this.$emit('showIframe', this.showFlag)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-github {
  text-align: right;

  .github {
    display: inline-block;
    vertical-align: middle;

    & :hover {
      opacity: 0.8;
    }

    & > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
