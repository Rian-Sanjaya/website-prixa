<template>
  <section class="testimonial-container">
    <div class="testimonial-content">
      <div class="left-container">
        <div class="left-content">
          <div class="testimonial-box">
            <div class="icon-box">
              <img src="~/assets/images/company-overview/company-overview-icon.png">
            </div>
            <div class="font-14-20-20 testimonial-text-box">
              <div class="testimonial-text">
                {{ $t('ABOUT_US.OVERVIEW.HEADER.COMPANY') }}
              </div>
            </div>
          </div>
          <div class="font-24-48-49 head-text">
            <div class="head-text-1">
              <span class="italic">{{ $t('ABOUT_US.OVERVIEW.HEADER.LINE1_1') }}</span> <span class="bold">{{ $t('ABOUT_US.OVERVIEW.HEADER.LINE1_2') }}.</span>
            </div>
            <div class="head-text-2">
              {{ $t('ABOUT_US.OVERVIEW.HEADER.LINE2_1') }}
            </div>
          </div>
          <div class="subText sub-text">
            {{ $t('ABOUT_US.OVERVIEW.HEADER.DESC') }}
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="youtube-box">
          <iframe
            id="widget2"
            frameborder="0"
            allowfullscreen="true"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="Prixa: Tunjangan Kesehatan Perusahaan yang Optimal #PrixaSekarang"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/sEhS83z3XRM?autoplay=0&amp;mute=0&amp;controls=1&amp;loop=0&amp;origin=https%3A%2F%2Fwww.prixa.ai&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  mounted () {
    // localStorage.setItem('menuActive', '')
    localStorage.setItem('menuOpen', '')
    if (localStorage.getItem('menuActive')) {
      this.$store.commit('setMenuActive', localStorage.getItem('menuActive'))
    }
    if (localStorage.getItem('menuOpen')) {
      this.$store.commit('setMenuOpen', localStorage.getItem('menuOpen'))
    }
    if (localStorage.getItem('menuMobileOpen')) {
      this.$store.commit('setMenuMobileOpen', localStorage.getItem('menuMobileOpen'))
    }
  },
  methods: {
    ...mapMutations({
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen',
      setMenuMobileOpen: 'setMenuMobileOpen'
    })
  }
}
</script>

<style lang="less" scoped>
.testimonial-container {
  padding: 96px 96px 40px;
}

.testimonial-content {
  display: flex;
  justify-content: space-between;
  // gap: 32px;
  overflow: hidden;

  .left-container {
    // width: 50%;
    width: 55%;
    padding: 48px 0 48px 48px;

    .left-content {
      .testimonial-box {
        display: flex;
        gap: 8px;

        .icon-box {
          width: 6.5%;
          min-width: 38.53px;

          img {
            width: 100%;
            height: auto;
          }
        }

        .testimonial-text-box {
          color: #6EB7E4;
          font-weight: 500;
          display: flex;
          align-items: center;
        }
      }

      .head-text {
        color: #4C4F54;
        font-weight: 300;
        margin: 16px 0;

        .head-text-1 {
          span:nth-child(1) {
            font-style: italic;
          }

          span:nth-child(2) {
            font-weight: 700;
          }
        }

        .head-text-2 {
          span:nth-child(1) {
            font-weight: 700;
          }

          span:nth-child(2) {
            font-style: italic;
          }
        }
      }
    }
  }

  .right-container {
    // width: 50%;
    width: 45%;
    padding: 48px 0 48px 48px;
    height: 47vh;

    .youtube-box {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (max-width: 1560px) {
  .testimonial-content {
    .right-container {
      height: 44vh;
    }
  }
}

@media screen and (max-width: 1512px) {
  .testimonial-content {
    .right-container {
      height: 42vh;
    }
  }
}

@media screen and (max-width: 1379px) {
  .testimonial-content {
    .right-container {
      height: 39vh;
    }
  }
}

@media screen and (max-width: 1279px) {
  .testimonial-content {
    .right-container {
      // padding: 48px 48px 48px 0;
      padding: 48px 0 48px 16px;
    }
  }
}

@media screen and (max-width: 1104px) {
  .testimonial-content {
    .right-container {
      height: 34vh;
    }
  }
}

@media screen and (max-width: 768px) {
  .testimonial-container {
    padding: 0 24px;
  }

  .testimonial-content {
    flex-direction: column;
    // gap: 16px;

    .left-container {
      // padding: 0 0 32px;
      padding: 0;
      width: 100%;

      .left-content {
        padding: 0;

        .head-text {
          font-size: clamp(1.45rem, 2.55vw, 2.3rem);
          margin: 8px 0 16px;
        }
      }
    }

    .right-container {
      order: -1;
      padding: 24px 0 0;
      width: 100%;
      margin-bottom: 16px;
      height: 44vh;

      // .youtube-box {
      //   height: 297px;
      // }
    }
  }
}

@media screen and (max-width: 640px) {
  .testimonial-content {
    .right-container {
      height: 36vh;
    }
  }
}

@media screen and (max-width: 540px) {
  .testimonial-content {
    .right-container {
      height: 30vh;
    }
  }
}

@media screen and (max-width: 480px) {
  .testimonial-content {
    .right-container {
      height: 28vh;
    }
  }
}

@media screen and (max-width: 414px) {
  .testimonial-content {
    .right-container {
      height: 24vh;
    }
  }
}

@media screen and (max-width: 390px) {
  .testimonial-content {
    .right-container {
      height: 23vh;
    }
  }
}
</style>
