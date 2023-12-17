<template>
  <section class="testimonial-container">
    <div class="testimonial-content">
      <div class="circle-top-right">
        <img src="~/assets/images/homepage/ellipse-top.png">
      </div>
      <div class="circle-bottom-left">
        <img src="~/assets/images/homepage/ellipse-btm.png">
      </div>
      <div class="circle-bottom-left-768">
        <img src="~/assets/images/employer-experience/circle-bottom-left-768.png">
      </div>
      <div class="left-container">
        <div class="left-content">
          <div class="head-text">
            &#8220;{{ $t('EMPLOYER_EXPERIENCE.VIDEO.DESCRIPTION') }}&#8221;
          </div>
          <div class="quote-source">
            <div class="icon-content">
              <div class="icon-box">
                <img src="~/assets/images/employer-experience/linkedin.png">
              </div>
            </div>
            <div class="source-text">
              <div class="source-head-text">
                LinkedIn
              </div>
              <div class="source-sub-text">
                Head of Global Benefits
              </div>
            </div>
          </div>
          <div class="register-cta">
            <div class="register-btn-box">
              <div class="register-btn" @click="onRegisterCompanyClick">
                {{ $t('MENU.LIST5.REGISTER') }}
              </div>
            </div>
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
            src="https://www.youtube.com/embed/jDLuJLoaA_g?autoplay=0&amp;mute=0&amp;controls=1&amp;loop=0&amp;origin=https%3A%2F%2Fwww.prixa.ai&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=1"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<!-- src="https://www.youtube.com/embed/u_Yk0bbjTPU?autoplay=0&amp;mute=0&amp;controls=1&amp;loop=0&amp;origin=https%3A%2F%2Fwww.prixa.ai&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=1" -->
<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen',
      setMenuMobileOpen: 'setMenuMobileOpen'
    }),
    onRegisterCompanyClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'About Us')
      this.$router.push('/about-us/company-register')
    }
  }
}
</script>

<style lang="less" scoped>
.testimonial-container {
  padding: 0 96px;
}

.testimonial-content {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  background: #E2EAF4;
  position: relative;
  overflow: hidden;

  .circle-top-right {
    position: absolute;
    right: 0;
    top: 0;
  }

  .circle-bottom-left {
    position: absolute;
    bottom: -38px;
    opacity: 0.7;
  }

  .circle-bottom-left-768 {
    display: none;
  }

  .left-container {
    width: 50%;
    padding: 48px 0 48px 48px;
    z-index: 1;

    .left-content {
      padding: 16px 0;

      .head-text {
        font-size: clamp(1.145rem, 2.55vw, 2.3rem);
        font-weight: 700;
        color: #4C4F54;
      }

      .quote-source {
        // display: flex;
        visibility: hidden;
        gap: 8px;
        position: relative;
        z-index: 1;
        margin: 24px 0 60px;

        .icon-content {
          display: flex;
          align-items: center;
          width: 8%;

          .icon-box {
            width: 100%;

            img {
              width: 100%;
              height: auto;
            }
          }
        }

        .source-head-text {
          font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px
          font-weight: 700;
        }

        .source-sub-text {
          font-size: 14px;
          font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
          font-weight: 400;
        }
      }

      .register-btn {
        padding: 16px 24px;
        color: #fff;
        font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
        font-weight: 700;
        background: #0146AB;
        display: inline-block;
        border-radius: 8px;
        cursor: pointer;
        border: 1px solid #0146AB;
        transition: all 0.5s;
      }

      .register-btn:hover {
        background: #E2EAF4;
        color: #0146AB;
      }
    }
  }

  .right-container {
    width: 50%;
    padding: 48px;
    z-index: 1;

    .youtube-box {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (max-width: 1279px) {
  .testimonial-content {
    .right-container {
      padding: 48px 48px 48px 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .testimonial-container {
    padding: 0 24px;
  }

  .testimonial-content {
    flex-direction: column;
    gap: 24px;

    .circle-top-right, .circle-bottom-left {
      display: none;
    }

    .circle-bottom-left-768 {
      display: block;
      position: absolute;
      width: 30%;
      bottom: 0;

      img {
        width: 100%;
        height: auto;
      }
    }

    .left-container {
      padding: 0 24px 24px;
      width: 100%;

      .left-content {
        padding: 0;

        .head-text {
          font-size: clamp(1.45rem, 2.55vw, 2.3rem);
        }

        .quote-source {
          margin: 16px 0 24px;

          .icon-content {
            width: 6%;
          }
        }
      }
    }

    .right-container {
      order: -1;
      padding: 24px 24px 0;
      width: 100%;

      .youtube-box {
        height: 297px;
      }
    }
  }
}

@media screen and (max-width: 414px) {
  .testimonial-container {
    padding: 0 24px;
  }

  .testimonial-content {
    .circle-top-right {
      display: none;
    }

    .circle-bottom-left-768 {
      width: 50%;
    }

    .left-container {
      .left-content {
        .quote-source {
          .icon-content {
            width: 12%;
          }
        }
      }
    }

    .right-container {
      .youtube-box {
        height: 185px;
      }
    }
  }
}
</style>
