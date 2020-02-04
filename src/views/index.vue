<template>
  <div>
    <el-container>
      <el-header>
        <Navigation
        @showIframe="showIframe($event)"
        />
      </el-header>
      <el-main ref="main">
        <el-row>
          <el-col
            :lg="{span: 16, offset: 4}"
            :md="{span: 18, offset: 3}"
            :sm="{span: 20, offset: 2}"
            :xs="{span: 20,offset:2}"
          >
            <Banner />
          </el-col>
          <el-col
            :lg="{span: 16, offset: 4}"
            :md="{span: 18, offset: 3}"
            :sm="{span: 20, offset: 2}"
            :xs="{span: 0}"
          >
            <Search />
          </el-col>
        </el-row>
        <div class="white-line"></div>
        <!-- 实时疫情 -->
        <iframe v-if="showIframeFlag" id="show-iframe" frameborder="0" scrolling="yes" style="background-color:transparent; position：absolute;width: 100%;
          height:100%; top: 0;left:0;bottom:0;" :src="url" />
          <div>
            <!-- <video class="" autoplay="" tabindex="2" mediatype="video" src="https://vdept.bdstatic.com/6d6d4c6b516179797250594b72695854/6572595771644935/e439c3afe0f0e24c6720f64e4ffab3db73b0f1da5f713f48b1541051bb1b0dcc68cf65835cfd6271cf5dd51659c1a3039f89795c48bc21f181050f9a19c73a2a.mp4?auth_key=1580534661-0-0-eb64724c586bcc05b5823db624a7777b" style="position: absolute; top: 0px; left: 0px;"></video> -->
          </div>
        <el-row>
          <el-col
            :lg="{span: 16, offset: 4}"
            :md="{span: 18, offset: 3}"
            :sm="{span: 20, offset: 2}"
            :xs="{span: 22, offset: 1}"
          >
            <MainContainer />
          </el-col>
        </el-row>
      </el-main>
      <el-footer height="35px">created by 五侠
      </el-footer>
    </el-container>
    <scroll-to-top
      v-if="scrollElement"
      :scrollElement="scrollElement"
    />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Banner from '@/components/Banner.vue'
import Navigation from '@/components/Navigation.vue'
import MainContainer from '@/components/Main.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'

export default {
  name: 'Index',
  components: {
    Search,
    Banner,
    MainContainer,
    ScrollToTop,
    Navigation
  },
  data () {
    return {
      search: '',
      select: '',
      scrollElement: '',
      showIframeFlag: false,
      url: 'https://iflow.uc.cn/webview/article/newspecial.html?uc_biz_str=S%3Acustom%7CC%3Aiflow_ncmt&aid=3804775841868884355&cid=100&uc_param_str=lodndseiwifrvesvntgi&sm_article_id=3804775841868884355&uc_h5_page_name=iflowspecial&feiyan=1&feiyan_jump=-3&zzd_from=uc-iflow&dl_type=2&app=uc-iflow&recoid=17286224574374631545&activity=1&activity2=1&pagetype=share'
    }
  },
  mounted () {
    this.scrollElement = this.$refs.main.$el
  },
  methods: {
    showIframe (flag) {
      this.showIframeFlag = flag
    }
  }
}
</script>

<style lang="scss">
.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 50px;

  &.el-footer {
    line-height: 35px;
    background-color: #f2f2f2;
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #666;
    text-align: right;
    padding-right: 20px;
    font-size: 13px;

    & > a {
      text-decoration: none;
      color: #666;
    }
  }
}

.white-line {
  height: 12px;
}

.el-main {
  position: absolute;
  top: 50px;
  bottom: 35px;
  width: 100%;
}
</style>
