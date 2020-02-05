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
        <p>以下内容收集自网络，如有版权问题，请联系：qiaorong_945#126.com(将#替换为@)</p>
        <el-row>
          <p>1.这两天河南村长大喇叭喊话火了，村民不听劝硬核喊话，真是有个性</p>
          <video class="video" src="https://vdept.bdstatic.com/416d465a73356c464b4a6c726b50684b/4c70424b7a7a4a59/b01146faecd69c5c5b4c439bef4e17a6ae1066ba39e04ebf915c266d37c6dac39a593b439b080968fbe687ce1b3dbd6494603e10fcace6f276777d3003e2cf32.mp4?auth_key=1580821962-0-0-6dbe0924df383d060ee93323351d594d" poster="https://timgmb01.bdimg.com/timg?haokan&amp;quality=100&amp;wh_rate=0&amp;size=b800_1000&amp;ref=http%3A%2F%2Fwww.baidu.com&amp;sec=1580814762&amp;di=b49ae29909273c7733b05c180bead863&amp;src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F02a12f173fa6a5bf613cf27e71d4c331.jpeg" playsinline="" x5-video-player-type="h5-page" controls="controls"></video>
        </el-row>
        <el-row>
          <p>2.村长大喇叭喊话不好使，书记直接广播开怼，骂人都比村长水平高？</p>
          <video class="video" src="https://vdept.bdstatic.com/413569357065446e67536a7575436542/733554506833674e/49f59172423559dc3f33ee934481d643493597a4836b8822e2675793a4ac15b5df8fd4b80ad7452b2d439c38829ee0f0.mp4?auth_key=1580823586-0-0-6831e89d42c8ad2b74d26e09cccf38a0" poster="https://timgmb.bdimg.com/timg?haokan&amp;quality=100&amp;wh_rate=0&amp;size=b800_1000&amp;ref=http%3A%2F%2Fwww.baidu.com&amp;sec=1580816386&amp;di=cc0f0fef4318ba263df57d0d23cb0c9c&amp;src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F642ef910d093fce8695ad895d863bc12.jpeg" playsinline="" x5-video-player-type="h5-page" controls="controls"></video>
        </el-row>
        <el-row>
          <p>3.已经七天没出门了 眼看就要憋疯了</p>
          <video class="video" src="https://vdept.bdstatic.com/42614e4e70504978337150333148726e/616c72457637624a/56696b399e970f5f80c8c9b3044b66ccd1c6a884bd0cebe26289233178af7272bce3875dc67ccd17e5f46e9555eb4ba47fe5b3150927851674211c4e07a25f49.mp4?auth_key=1580822481-0-0-65aeebfb84c70a2e4429ff19a55ee536" poster="https://timgmb02.bdimg.com/timg?haokan&amp;quality=100&amp;wh_rate=0&amp;size=b800_1000&amp;ref=http%3A%2F%2Fwww.baidu.com&amp;sec=1580815281&amp;di=43f2f93e71ee7c78b9777406cdc12fce&amp;src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F911987feffd0946ab5241833d8b29079.jpeg" playsinline="" x5-video-player-type="h5-page" controls="controls"></video>
        </el-row>
        <el-row>
          <p><a href="https://baijiahao.baidu.com/s?id=1657254750728003785&wfr=spider">4.防控疫情土味宣传标语，“硬核”且幽默，倒数最二张别让老婆看到</a></p>
        </el-row>
        <el-row>
          <p><a href="https://baijiahao.baidu.com/s?id=1657065425727465965&wfr=spider">5.哈哈：看了这些有才“防控疫情”的横幅，感叹高手在民间，还很幽默！</a></p>
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
  name: 'Relax',
  components: {
    Search,
    Banner,
    MainContainer,
    ScrollToTop,
    Navigation
  },
  data () {
    return {
      title: '疫情下的幽默',
      scrollElement: ''
    }
  },
  mounted () {
    this.scrollElement = this.$refs.main.$el
  },
  methods: {
    goBack () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="scss" scoped>
.video {
    object-fit:fill;
    width: 100%;
    height: 100%;
}

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
</style>
