<template>
  <div>
    <el-container>
      <el-header>
        <Navigation @showIframe="showIframe($event)" />
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
        <!--dashboard-->
        <el-row class="dashboard" justify="center">
          <el-col>
            <a class="squre" @click="goTo">
              <div class="value">
                {{diagTotalQuantity}}
              </div>
              <div class="chineseWord">确诊</div>
            </a>
          </el-col>
          <el-col>
            <a class="squre" @click="goTo">
              <div class="value">{{suspTotalQuantity}}</div>
              <div class="chineseWord">疑似</div>
            </a>
          </el-col>
          <el-col>
            <a class="squre" @click="goTo">
              <div class="value">
                {{recvTotalQuantity}}
                <!-- <img v-if="isUp" src="../assets/up.png" style="width: 10%;" />
                <img v-else src="../assets/down.png" style="width: 10%;" /> -->
              </div>
              <div class="chineseWord">治愈</div>
            </a>
          </el-col>
          <el-col>
            <a class="squre" @click="goTo">
              <div class="value">
                {{deathTotalQuantity}}
                <!-- <img v-if="isUp" src="../assets/up.png" style="width: 10%;" />
                <img v-else src="../assets/down.png" style="width: 10%;" /> -->
              </div>
              <div class="chineseWord">死亡</div>
            </a>
          </el-col>
        </el-row>
        <!-- 实时疫情 -->
        <iframe
          v-if="showIframeFlag"
          id="show-iframe"
          frameborder="0"
          scrolling="yes"
          style="background-color:transparent; position：absolute;width: 100%;
          height:100%; top: 0;left:0;bottom:0;"
          :src="url"
        />
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
      <el-footer height="35px">created by 五侠</el-footer>
    </el-container>
    <scroll-to-top v-if="scrollElement" :scrollElement="scrollElement" />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Banner from '@/components/Banner.vue'
import Navigation from '@/components/Navigation.vue'
import MainContainer from '@/components/Main.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import { getNcovStats } from '@/api/api'

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
      isUp: false,
      diagTotalQuantity: 0,
      suspTotalQuantity: 0,
      recvTotalQuantity: 0,
      deathTotalQuantity: 0,
      url: 'https://iflow.uc.cn/webview/article/newspecial.html?uc_biz_str=S%3Acustom%7CC%3Aiflow_ncmt&aid=3804775841868884355&cid=100&uc_param_str=lodndseiwifrvesvntgi&sm_article_id=3804775841868884355&uc_h5_page_name=iflowspecial&feiyan=1&feiyan_jump=-3&zzd_from=uc-iflow&dl_type=2&app=uc-iflow&recoid=17286224574374631545&activity=1&activity2=1&pagetype=share'
    }
  },
  mounted () {
    this.scrollElement = this.$refs.main.$el
    this.getNcovStats()
  },
  methods: {
    showIframe (flag) {
      this.showIframeFlag = flag
    },
    goTo () {
      this.$router.push({ path: '/statistics' })
    },
    getNcovStats () {
      const dataQuery = {}
      dataQuery.region_id = '1'
      dataQuery.start_date = ''
      dataQuery.end_date = ''
      getNcovStats(dataQuery).then(response => {
        const { result } = response
        const i = result.length - 1
        if (i >= 0) {
          this.diagTotalQuantity = result[i].diag_total_quantity
          this.suspTotalQuantity = result[i].susp_total_quantity
          this.recvTotalQuantity = result[i].recv_total_quantity
          this.deathTotalQuantity = result[i].death_total_quantity
        }
      })
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
 .dashboard {
      display: -webkit-flex;
      /* Safari */
      display: flex;
      flex-direction: row;
      margin-top: 2vw;
      // width: 100%;
      justify-content: space-between;
      // justify-content: center;
      align-items: center;     /* 垂直居中 */
      margin-left: 12vw;
      margin-right: 12vw;
      text-align: center
    }
    .squre {
      // width: 380px;
      // max-width: 80%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      max-height: 150px;
      @media screen {
        height: 10vw;
        margin-bottom: 2vw;
        margin-left: 1.5vw;
        margin-right: 1.5vw;
        border-radius: 1vw;
      }
      // padding: 45px 0 35px 40px;
      background: -webkit-gradient(linear,right top,left top,from(#4eadf1),to(#6a96f0));
      background: linear-gradient(270deg,#4eadf1,#6a96f0);
      color: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: end;
      -ms-flex-align: end;
      flex-direction: column;
    }
    .value {
      font-size: 3vw;
      // line-height: 40px;
      margin-bottom: 4px;
    }
    .chineseWord {
      font-size: 2vw;
      // line-height: 22px;
    }
    .englishWord {
      font-size: 2vw;
      line-height: 22px;
    }
</style>
