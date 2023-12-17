<template>
  <section class="carousel-container">
    <div class="carousel-content">
      <a-row>
        <a-col :span="12" class="carousel-left">
          <h1 v-html="headline" />
        </a-col>
        <a-col :span="12" class="carousel-right">
          <slick
            ref="slick"
            class="carousel-slide"
            :options="slickOptions"
            @afterChange="handleAfterChange"
          >
            <img v-for="slide in carousel" :key="slide.text" :src="slide.image" class="carousel-image" alt="">
          </slick>
        </a-col>
      </a-row>
      <div class="carousel-blur" />
      <NuxtLink to="/calculatorchb" class="link-register-button">
        {{ $t('MENU.LIST5.SIMULATION') }}
      </NuxtLink>
      <div class="campaigne-container">
        <img :src="campaigne.image" alt="">
        <p v-html="campaigne.text" />
      </div>
    </div>
  </section>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import { mapMutations } from 'vuex'

export default {
  components: { Slick },
  data () {
    return {
      carousel: [
        {
          text: '<span>Leading <i>Employer-Driven</i>\n<b>Healthcare</b></span>',
          image: '/carousel/slider1.png'
        },
        {
          text: '<span>Navigation <i>for</i> <b>Better</b>\nCorporate <b>Health</b>\nBenefits<span>',
          image: '/carousel/slider2.png'
        },
        {
          text: '<span>It&apos;s <i>Time</i> your <b>Health\nBenefits</b> Caught Up</span>',
          image: '/carousel/slider3.png'
        }
      ],
      campaigne: {
        image: '/campaigne/temansehatmu.png',
        text: '<span>Sehat\nSekarang</span>'
      },
      headline: '',
      slickOptions: {
        slidesToShow: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '100px',
        autoplay: true,
        dots: true,
        dotsClass: 'carousel-pagination'
      }
    }
  },
  mounted () {
    if (this.carousel.length > 0) {
      this.headline = this.carousel[0].text
    }
  },
  methods: {
    ...mapMutations({
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen'
    }),
    // onRegisterClick () {
    //   this.$store.commit('setMenuOpen', '')
    //   this.$store.commit('setMenuActive', 'About Us')
    //   this.$router.push('/about-us/company-register')
    // },
    // next () {
    //   this.$refs.slick.next()
    // },
    // prev () {
    //   this.$refs.slick.prev()
    // },
    reInit () {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    },
    // Events listeners
    handleAfterChange (event, slick, currentSlide) {
      // console.log('handleAfterChange', event, slick, currentSlide)
      this.headline = this.carousel[currentSlide].text
    }
    // handleBeforeChange (event, slick, currentSlide, nextSlide) {
    //   console.log('handleBeforeChange', event, slick, currentSlide, nextSlide)
    // },
    // handleBreakpoint (event, slick, breakpoint) {
    //   console.log('handleBreakpoint', event, slick, breakpoint)
    // },
    // handleDestroy (event, slick) {
    //   console.log('handleDestroy', event, slick)
    // },
    // handleEdge (event, slick, direction) {
    //   console.log('handleEdge', event, slick, direction)
    // },
    // handleInit (event, slick) {
    //   console.log('handleInit', event, slick)
    // },
    // handleReInit (event, slick) {
    //   console.log('handleReInit', event, slick)
    // },
    // handleSetPosition (event, slick) {
    //   console.log('handleSetPosition', event, slick)
    // },
    // handleSwipe (event, slick, direction) {
    //   console.log('handleSwipe', event, slick, direction)
    // },
    // handleLazyLoaded (event, slick, image, imageSource) {
    //   console.log('handleLazyLoaded', event, slick, image, imageSource)
    // },
    // handleLazyLoadError (event, slick, image, imageSource) {
    //   console.log('handleLazeLoadError', event, slick, image, imageSource)
    // }
  }
}
</script>
<style lang="less">
.carousel-content {
  position: relative;
  padding-top: 96px;
  padding-bottom: 96px;

  .carousel-left {
    padding: 0 96px;
    vertical-align: middle;

    h1 {
      padding-top: 40px;
      white-space: pre-line;
      font-family: 'Inter';
      font-weight: 300;
      line-height: 75px;
      font-size: 40px;

      b {
        font-weight: 700;
      }
    }
  }

  .carousel-right {
    position: relative;
    .slick-arrow {
      display: none !important;
    }

    .slick-slide {
      margin-left: 30px !important;
      margin-right: 30px !important;
    }

    img {
      margin-left: 20px;
      margin-right: 20px;
    }

    .carousel-pagination {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 100;
      transform: translate(-50%, 250%);

      li {
        float: left;
        list-style-type: none;

        button {
          border-radius: 500px;
          font-size: 0px;
          padding: 5px;
          border: 1px solid transparent;
          margin: 5px;
          background: #ccdaee;
          cursor: pointer;
        }
      }

      li.slick-active {
        button {
          background: #18218a;
        }
      }
    }
  }

  .carousel-blur {
    position: absolute;
    display: inline-block;
    content: ' ';
    top: 0;
    left: calc(50% - 60px);
    bottom: 0;
    padding: 30px;
    z-index: 99;
    box-shadow: 30px 0px 30px #e2eaf4;
  }

  .link-register-button {
    position: absolute;
    display: inline-block;
    background: #0146AB;
    border-radius: 8px;
    color: #fff;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    left: 96px;
    bottom: 0px;
    transform: translateY(-300%);
    border: 1px solid #0146AB;
    transition: all 0.5s;
    font-weight: 700;
  }

  .link-register-button:hover {
    background: #E2EAF4;
    color: #0146AB;
  }

  .campaigne-container{
    padding-left: 96px;
    img {
      float: left;
      vertical-align: middle;
      margin-top: 7.5px;
    }

    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 25px;
      float: left;
      white-space: pre-line;
    }

    p::after {
      float: none;
    }
  }
}

</style>

<style lang="less" scoped>
.carousel-container {
  background: #e2eaf4;
}

@media screen and (max-width: 1024px) {
  .carousel-container {
    display: none !important;
  }
}

// @media screen and (max-width: 1299px) {
//   .card-container {
//     // flex-wrap: wrap
//     gap: 24px

//     .card-box {
//       width: 31%
//     }
//   }
// }

// @media screen and (max-width: 1279px) {
//   .carousel-container {
//     .circle-background {
//       top: 428px
//     }
//   }

//   .card-container {
//     flex-wrap: wrap

//     .card-box {
//       width: 32%
//     }
//   }
// }

// @media screen and (max-width: 1106px) {
//   .card-container {

//     .card-box {
//       width: 46%
//     }
//   }
// }

// @media screen and (max-width: 991px) {
//   .card-container {

//     .card-box {
//       width: 47%
//     }
//   }
// }

// @media screen and (max-width: 768px) {
//   .carousel-container {
//     padding: 0 24px
//   }
// }

// @media screen and (max-width: 734px) {
//   .carousel-container {
//     padding: 32px 24px

//     .carousel-content {
//       padding: 0
//     }
//   }

//   .card-container {

//     .card-box {
//       // width: 264px
//       width: 327px
//     }
//   }
// }

// @media screen and (max-width: 725px) {
//   .carousel-container {
//     .circle-background {
//       top: 1080px
//     }
//   }
// }
</style>
