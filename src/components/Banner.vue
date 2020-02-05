<template>
  <div class="banner animated bounce">
    <div class="banner-font">
      {{localTxt}}
    </div>
    <div style="color: red;font-size: 25px;">
      武汉加油！中国加油！
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    txt: {
      type: String,
      default: '疫情导航'
    }
  },
  data () {
    return {
      localTxt: this.txt
    }
  },
  watch: {
    txt: function (val) {
      this.localTxt = val
    }
  }
}
</script>>

<style lang="scss">

// copy animated.css
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  animation-name: bounce;
  transform-origin: center bottom;
}

.banner {
  text-align: center;

  .banner-image {
    width: 100%;
    height: auto;
    max-width: 320px;
    max-height: 180px;
  }
  .banner-font {
    font-size: 25px;
    margin-bottom: 10px;
  }
}
</style>
