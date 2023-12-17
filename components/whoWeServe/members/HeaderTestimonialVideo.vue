<template>
  <section class="pd-96 testimonial-container">
    <div class="testimonial-content">
      <div class="left-container">
        <div class="left-content">
          <div class="testimonial-box">
            <div class="icon-box">
              <img src="~/assets/images/members/members-icon.png">
            </div>
            <div class="font-14-20-20 testimonial-text-box">
              <div class="testimonial-text">
                {{ $t('MENU.LIST2.MEMBERS') }}
              </div>
            </div>
          </div>
          <div class="font-24-48-49 head-text">
            <div class="head-text-1">
              {{ $t('WHO_WE_SERVE.MEMBERS.HEADER.LINE1_1') }} <span>{{ $t('WHO_WE_SERVE.MEMBERS.HEADER.LINE1_2') }}</span> {{ $t('WHO_WE_SERVE.MEMBERS.HEADER.LINE1_3') }} <span>{{ $t('WHO_WE_SERVE.MEMBERS.HEADER.LINE1_4') }}</span>
            </div>
            <div class="head-text-2">
              <span>{{ $t('WHO_WE_SERVE.MEMBERS.HEADER.LINE2_1') }}</span> <span>{{ $t('WHO_WE_SERVE.MEMBERS.HEADER.LINE2_2') }}</span>
            </div>
          </div>
          <div class="psekarang-cta">
            <div class="psekarang-btn-box">
              <div class="psekarang-btn" @click="onDownloadPrixa">
                {{ $t('WHO_WE_SERVE.MEMBERS.HEADER.DOWNLOAD') }}
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
    }),
    onDownloadPrixa () {
      const expression = /(Mac|iPhone|iPod|iPad)/i

      if (expression.test(navigator?.userAgentData?.platform || navigator?.platform || 'unknown')) {
        window.open('https://apps.apple.com/my/app/prixa/id6444787199', '_blank')
      } else {
        window.open('https://play.google.com/store/apps/details?id=ai.prixa.aso', '_blank')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.testimonial-content {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  overflow: hidden;

  .left-container {
    width: 50%;
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
        margin: 16px 0 56px;

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

      .psekarang-btn {
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

      .psekarang-btn:hover {
        background: #fff;
        color: #0146AB;
      }
    }
  }

  .right-container {
    width: 50%;
    padding: 48px;

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
    gap: 16px;

    .left-container {
      padding: 0 0 32px;
      width: 100%;

      .left-content {
        padding: 0;

        .head-text {
          font-size: clamp(1.45rem, 2.55vw, 2.3rem);
          margin: 8px 0 24px;
        }
      }
    }

    .right-container {
      order: -1;
      padding: 24px 0 0;
      width: 100%;

      .youtube-box {
        height: 297px;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .testimonial-content {
    .right-container {
      .youtube-box {
        height: 185px;
      }
    }
  }
}
</style>
