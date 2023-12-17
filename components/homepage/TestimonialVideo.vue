<template>
  <section class="testimonial-container">
    <div class="testimonial-content">
      <div class="circle-top-right">
        <img src="~/assets/images/homepage/ellipse-top.png">
      </div>
      <div class="circle-bottom-left">
        <img src="~/assets/images/homepage/ellipse-btm.png">
      </div>
      <div class="left-container">
        <div class="left-content">
          <div class="head-text">
            {{ $t('HOME_TESTIMONIAL_HIGHLIGHT') }}
          </div>
          <div class="sub-text">
            {{ $t('HOME_TESTIMONIAL_INNER') }}
          </div>
          <div class="cta-button-box">
            <a-button class="cta-button" size="large" @click="onFindSolutionClick">
              {{ $t('FIND_SOLUTION') }}
            </a-button>
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
export default {
  methods: {
    onFindSolutionClick () {
      this.$router.push('/calculatorchb')
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

      .sub-text {
        font-size: clamp(0.9rem, 1.2vw, 1.145rem);
        font-weight: 400;
        color: #4C4F54;
        margin: 32px 0;
      }

      .cta-button {
        font-size: 14px;
        font-weight: 700;
        color: #0146AB;
        border-color: #0146AB;
        border-radius: 8px;
        background: #E2EAF4;
      }

      .cta-button:hover {
        color: #fff;
        background: #0146AB;
      }
    }
  }

  .right-container {
    width: 50%;
    padding: 48px;
    z-index: 1;
    height: 420px;

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

    .circle-top-right {
      display: none;
    }

    .left-container {
      padding: 0 24px 24px;
      width: 100%;

      .left-content {
        .head-text {
          font-size: clamp(1.45rem, 2.55vw, 2.3rem);
        }

        .sub-text {
          font-size: clamp(0.86rem, 1.2vw, 1.145rem);
          margin: 16px 0 32px;
        }
      }
    }

    .right-container {
      order: -1;
      padding: 24px 24px 0;
      width: 100%;
      height: 50%;

      // .youtube-box {
      //   height: 297px;
      // }
    }
  }
}

@media screen and (max-width: 734px) {
  .testimonial-container {
    padding: 0 24px;
  }

  .testimonial-content {
    .circle-top-right {
      display: none;
    }

    .right-container {
      .youtube-box {
        height: 185px;
      }
    }
  }
}
</style>
