<template>
  <div>
    <el-row>
      <el-col
        :span="24"
        class="common-panel"
      >
        <el-row
          class="common-panel-title"
          :class="titleStyle"
        >{{data.title}}</el-row>
        <el-row
          :gutter="10"
          class="common-panel-container"
        >
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6"
            v-for="(item,index) in data.list"
            v-bind:key="item.name"
            class="common-panel-item"
            v-show="index<num"
          >
          <a v-if="item.url && item.url[0] !== '/'" :href="item.url" target="_blank" class="common-panel-item-a">
          <el-card
              shadow="always"
              :class="itemHoverStyle"
            >
              {{item.name}}
            </el-card>
          </a>
          <router-link v-else :to="item.url" class="common-panel-item-a">
            <el-card
              shadow="always"
              :class="itemHoverStyle"
            >
              {{item.name}}
            </el-card>
          </router-link>
          </el-col>
        </el-row>
        <el-link v-if="this.data.list.length > 8" class="show-more" @click="showMore" type="info">{{ txt }}</el-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['data', 'type'],
  computed: {
    titleStyle () {
      return this.type
    },
    itemHoverStyle () {
      return `${this.type}-hover`
    }
  },
  data () {
    return {
      txt: '显示更多...',
      showMoreFlag: false,
      num: 8
    }
  },
  methods: {
    showMore () {
      this.showMoreFlag = !this.showMoreFlag
      if (this.showMoreFlag) {
        this.txt = '隐藏'
        this.num = this.data.list.length
      } else {
        this.txt = '显示更多...'
        this.num = 8
      }
    }
  }
}
</script>

<style lang="scss">
@mixin setBackground($value) {
  background-color: $value;
  color: white;
}

.provinceList {
  @include setBackground(#409eff);
}

.country {
  @include setBackground(#67c23a);
}

.funnyList {
  @include setBackground(#eb2f96);
}

.toolList {
  @include setBackground(#e6a23c);
}

.others {
  @include setBackground(#f56c6c);
}

.studyList {
  @include setBackground(#909399);
}

.provinceList-hover:hover {
  @include setBackground(#409eff);
}

.country-hover:hover {
  @include setBackground(#67c23a);
}

.funnyList-hover:hover {
  @include setBackground(#eb2f96);
}

.toolList-hover:hover {
  @include setBackground(#e6a23c);
}

.others-hover:hover {
  @include setBackground(#f56c6c);
}

.studyList-hover:hover {
  @include setBackground(#909399);
}

.common-panel {
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  .common-panel-title {
    padding-left: 20px;
    line-height: 40px;
  }

  .common-panel-container {
    padding: 20px;

    .common-panel-item {
      margin-bottom: 20px;

      & > a {
        font-size: 14px;
        text-decoration: none;
        text-align: center;
      }
    }
  }
}

.el-card__body {
  padding: 15px 10px !important;
}
.show-more {
  float: right;
  margin-right: 8px;
}
</style>
