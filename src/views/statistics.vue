<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col class="navigation-github">
            <a @click="goBack" >返回</a>
          </el-col>
        </el-row>
      </el-header>
      <el-main ref="main">
        <el-row>
          <el-col>
            <Banner
            :txt='title'
            />
          </el-col>
        </el-row>
        <div class="white-line"></div>
        <el-select v-model="dataQuery.region_id" placeholder="请选择您关心的地区" @change="statsChanged">
          <el-option v-for="item in regionList" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
        <el-row style="text-align: center">
            <p class="title">疫情每日<span style="color: red">新增</span>数据</p>
            <section>
                <figure>
                    <v-chart
                        :options="newAdd"
                        :init-options="initOptions"
                        ref="newAdd"
                        theme="ovilia-green"
                        autoresize
                    />
                </figure>
            </section>
            <section>
                <figure>
                    <v-chart
                        :options="newAdd1"
                        :init-options="initOptions"
                        ref="newAdd1"
                        theme="ovilia-green"
                        autoresize
                    />
                </figure>
            </section>
        </el-row>
        <el-row style="text-align: center">
            <p class="title">疫情每日<span style="color: red">总计</span>数据</p>
            <section>
                <figure>
                    <v-chart
                        :options="total"
                        :init-options="initOptions"
                        ref="total"
                        theme="ovilia-green"
                        autoresize
                    />
                </figure>
            </section>
            <section>
                <figure>
                    <v-chart
                        :options="total1"
                        :init-options="initOptions"
                        ref="total1"
                        theme="ovilia-green"
                        autoresize
                    />
                </figure>
            </section>
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
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import { getRegionList, getNcovStats } from '@/api/api'

export default {
  name: 'Statistics',
  components: {
    Search,
    Banner,
    MainContainer,
    ScrollToTop,
    Navigation
  },
  data () {
    return {
      dataQuery: {
        region_id: '',
        start_date: '',
        end_date: ''
      },
      regionList: [],
      title: '疫情数据统计',
      scrollElement: '',
      initOptions: {
        renderer: 'canvas'
      },
      newAdd: {
        noDataLoadingOption: {
          text: '数据统计中...',
          effect: 'bubble',
          effectOption: {
            effect: {
              n: 0
            }
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['确诊增加数量', '疑似增加数量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '确诊增加数量',
            type: 'line',
            smooth: true,
            stack: '确诊增加数量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '疑似增加数量',
            type: 'line',
            smooth: true,
            stack: '疑似增加数量',
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      },
      newAdd1: {
        noDataLoadingOption: {
          text: '数据统计中...',
          effect: 'bubble',
          effectOption: {
            effect: {
              n: 0
            }
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['痊愈增加数量', '死亡增加数量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {type: 'value'},
        series: [
          {
            name: '痊愈增加数量',
            type: 'line',
            smooth: true,
            stack: '痊愈增加数量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '死亡增加数量',
            type: 'line',
            smooth: true,
            stack: '死亡增加数量',
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      },
      total: {
        noDataLoadingOption: {
          text: '数据统计中...',
          effect: 'bubble',
          effectOption: {
            effect: {
              n: 0
            }
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['确诊总量', '疑似总量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '确诊总量',
            type: 'line',
            smooth: true,
            stack: '确诊总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '疑似总量',
            type: 'line',
            smooth: true,
            stack: '疑似总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      },
      total1: {
        noDataLoadingOption: {
          text: '数据统计中...',
          effect: 'bubble',
          effectOption: {
            effect: {
              n: 0
            }
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['痊愈总量', '死亡总量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '痊愈总量',
            type: 'line',
            smooth: true,
            stack: '痊愈总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '死亡总量',
            type: 'line',
            smooth: true,
            stack: '死亡总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      }
    }
  },
  mounted () {
    this.scrollElement = this.$refs.main.$el
    this.getRegionList()
  },
  methods: {
    goBack () {
      this.$router.push({path: '/'})
    },
    randomize () {
      return [0, 0, 0].map(v => {
        return Math.round(300 + Math.random() * 700) / 10
      })
    },
    getRegionList () {
      getRegionList().then(response => {
        const { result } = response
        for (const i of result) {
          this.regionList.push(i)
        }
        this.dataQuery.region_id = 36
        this.getNcovStats()
      })
    },
    getNcovStats () {
      getNcovStats(this.dataQuery).then(response => {
        const { result } = response
        this.newAdd.xAxis.data = []
        this.total.xAxis.data = []
        this.newAdd1.xAxis.data = []
        this.total1.xAxis.data = []
        let diagincreaseQuantity = []
        let diagTotalQuantity = []
        let suspIncreaseQuantity = []
        let suspTotalQuantity = []
        let recvUncreaseQuantity = []
        let recvTotalQuantity = []
        let deathIncreaseQuantity = []
        let deathTotalQuantity = []
        for (const i of result) {
          this.newAdd.xAxis.data.push(i.stat_date)
          this.total.xAxis.data.push(i.stat_date)
          this.newAdd1.xAxis.data.push(i.stat_date)
          this.total1.xAxis.data.push(i.stat_date)
          if (i.diag_increase_quantity.slice(0, 1) === '-') {
            diagincreaseQuantity.push('-')
          } else {
            diagincreaseQuantity.push(i.diag_increase_quantity)
          }
          if (i.diag_total_quantity.slice(0, 1) === '-') {
            diagTotalQuantity.push('-')
          } else {
            diagTotalQuantity.push(i.diag_total_quantity)
          }
          if (i.susp_increase_quantity.slice(0, 1) === '-') {
            suspIncreaseQuantity.push('-')
          } else {
            suspIncreaseQuantity.push(i.susp_increase_quantity)
          }
          if (i.susp_total_quantity.slice(0, 1) === '-') {
            suspTotalQuantity.push('-')
          } else {
            suspTotalQuantity.push(i.susp_total_quantity)
          }
          if (i.recv_increase_quantity.slice(0, 1) === '-') {
            recvUncreaseQuantity.push('-')
          } else {
            recvUncreaseQuantity.push(i.recv_increase_quantity)
          }
          if (i.recv_total_quantity.slice(0, 1) === '-') {
            recvTotalQuantity.push('-')
          } else {
            recvTotalQuantity.push(i.recv_total_quantity)
          }
          if (i.death_increase_quantity.slice(0, 1) === '-') {
            deathIncreaseQuantity.push('-')
          } else {
            deathIncreaseQuantity.push(i.death_increase_quantity)
          }
          if (i.death_total_quantity.slice(0, 1) === '-') {
            deathTotalQuantity.push('-')
          } else {
            deathTotalQuantity.push(i.death_total_quantity)
          }
        }
        this.newAdd.series[0].data = diagincreaseQuantity
        this.newAdd.series[1].data = suspIncreaseQuantity
        this.newAdd1.series[0].data = recvUncreaseQuantity
        this.newAdd1.series[1].data = deathIncreaseQuantity
        this.total.series[0].data = diagTotalQuantity
        this.total.series[1].data = suspTotalQuantity
        this.total1.series[0].data = recvTotalQuantity
        this.total1.series[1].data = deathTotalQuantity
      })
    },
    statsChanged () {
      this.getNcovStats()
    }
  }
}
</script>

<style lang="scss" scoped>

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
  padding: 0    ;
}
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

figure {
  display: inline-block;
  position: relative;
  margin: 2em auto;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 8px;
  box-shadow: 0 0 45px rgba(0, 0, 0, .2);
  padding: 1.5em 2em;
  min-width: calc(40vw + 4em);
  .echarts {
    width: 100%;
    min-width: 400px;
    height: 300px
  }
}

@media (min-width: 980px) {
  figure.half {
    padding: 1em 1.5em;
    min-width: calc(240px + 3em);
    .echarts {
      width: 28vw;
      min-width: 240px;
      height: 180px
    }
  }
}

@media (max-width: 980px) {
  figure {
    width: 85%;
    margin: 1em auto;
    padding: 0 1em;
    border: none;
    border-radius: 0;
    box-shadow: none;
    .echarts {
      width: 100%;
      min-width: 0;
      height: 75vw
    }
  }
}
section {
    text-align: center;
    width: 100%
}
.el-select .el-input__inner  {
  min-width: 150px!important;
}
.title {
  font-size: 1.5vw;
}
</style>
