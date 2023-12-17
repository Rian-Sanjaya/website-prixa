<template>
  <section class="services-container">
    <div class="circle-background">
      <img src="~/assets/images/employers/circle-health-service.png">
    </div>
    <div class="services-content">
      <div class="header-text">
        <div class="head-text">
          {{ $t('WHO_WE_SERVE.EMPLOYERS.SERVICES.TRY') }}
        </div>
        <div class="sub-text">
          {{ $t('WHO_WE_SERVE.EMPLOYERS.SERVICES.CHOOSE') }}
        </div>
      </div>
      <div class="services-cta">
        <ul class="card-container">
          <!-- <li v-for="(cta, idx) in ctas" :key="idx" class="card-box" :style="{ background: idx === 2 ? '#0146AB' : '#CCDAEE' }"> -->
          <li v-for="(cta, idx) in ctas" :key="idx" class="card-box" @mouseover="idxHover = idx" @mouseout="idxHover = -1">
            <div class="card-service">
              <div
                class="icon-container"
                :style="{
                  marginTop:
                    idx === 1
                      ? '70px'
                      : idx === 2 || idx === 3
                        ? '68px'
                        : '66px'
                }"
              >
                <div class="icon-box">
                  <img v-if="idx === 0 && idxHover === 0" :src="require(`~/assets/images/homepage/${cta.iconw}.png`)">
                  <img v-else-if="idx === 1 && idxHover === 1" :src="require(`~/assets/images/homepage/${cta.iconw}.png`)">
                  <img v-else-if="idx === 2 && idxHover === 2" :src="require(`~/assets/images/homepage/${cta.iconw}.png`)">
                  <img v-else-if="idx === 3 && idxHover === 3" :src="require(`~/assets/images/homepage/${cta.iconw}.png`)">
                  <img v-else :src="require(`~/assets/images/homepage/${cta.icon}.png`)">
                </div>
              </div>
              <div class="cta-button-box">
                <div
                  v-if="cta.text === 'Lab Test'"
                  class="cta-button"
                  size="large"
                  @click="handleCtaClick(idx)"
                >
                  <span>{{ $t('WHO_WE_SERVE.EMPLOYERS.SERVICES.LAB') }}</span>
                </div>
                <div
                  v-else-if="cta.text === 'Vaccination'"
                  class="cta-button"
                  size="large"
                  @click="handleCtaClick(idx)"
                >
                  <span>{{ $t('WHO_WE_SERVE.EMPLOYERS.SERVICES.VACINATION') }}</span>
                </div>
                <div
                  v-else-if="cta.text === 'Medical Checkup'"
                  class="cta-button"
                  size="large"
                  @click="handleCtaClick(idx)"
                >
                  <span>{{ $t('WHO_WE_SERVE.EMPLOYERS.SERVICES.MEDICAL') }}</span>
                </div>
                <div
                  v-else-if="cta.text === 'Specialist'"
                  class="cta-button"
                  size="large"
                  @click="handleCtaClick(idx)"
                >
                  <span>{{ $t('WHO_WE_SERVE.EMPLOYERS.SERVICES.SPECIALIST') }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      ctas: [
        {
          icon: 'service1',
          iconw: 'service1-white',
          text: 'Lab Test',
          path: ''
        },
        {
          icon: 'service2',
          iconw: 'service2-white',
          text: 'Vaccination',
          path: ''
        },
        {
          icon: 'service3',
          iconw: 'service3-white',
          text: 'Medical Checkup',
          path: ''
        },
        {
          icon: 'service4',
          iconw: 'service4-white',
          text: 'Specialist',
          path: ''
        }
      ],
      idxHover: -1
    }
  },
  methods: {
    handleCtaClick (idx) {
      window.open('https://wa.me/6281380684764', '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.services-container {
  padding: 180px 96px 0;
  background: #E2EAF4;
  position: relative;

  .circle-background {
    position: absolute;
    left: 0;
    top: 0;
    width: 10%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .services-content {
    padding: 48px 0;
    position: relative;
  }
}

.header-text {
  margin-bottom: 32px;

  .head-text {
    font-size: clamp(1.145rem, 2.55vw, 2.3rem);
    font-weight: 700;
    color: #4C4F54;
    text-align: center;
  }

  .sub-text {
    font-size: clamp(0.9rem, 1.2vw, 1.145rem);
    font-weight: 400;
    color: #4C4F54;
    text-align: center;
    margin-top: 16px;
  }
}

.card-container {
  display: flex;
  justify-content: space-around;
  gap: 32px;

  // .card-box:not(:last-child) {
  //   margin-right: 8px;
  // }

  .card-box {
    border-radius: 16px;
    width: 25%;
    background: #CCDAEE;

    .card-service {
      // width: 306px;

      .icon-container {
        margin: 48px 0;

        .icon-box {
          display: inline-block;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          width: 35%;

          img {
            width: 100%;
            height: auto;
          }
        }
      }

      .cta-button-box {
        text-align: center;
        margin-bottom: 48px;

        .cta-button {
          font-size: 14px;
          font-weight: 700;
          color: #0146AB;
          border-color: #0146AB;
          border-radius: 8px;
          background: #CCDAEE;
          border: 1px solid;
          padding: 16px 24px;
          display: inline-block;
          cursor: pointer;
        }
      }
    }

    &:hover {
      background: #0146AB;

      .card-service {
        .cta-button-box {
          .cta-button {
            border-color: unset;
            background: #fff;

            span {
              border-bottom: 1px solid;
              padding-bottom: 1px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1299px) {
  .card-container {
    // flex-wrap: wrap;
    gap: 24px;

    .card-box {
      width: 31%;
    }
  }
}

@media screen and (max-width: 1279px) {
  // .services-container {
  //   .circle-background {
  //     top: 428px;
  //   }
  // }

  .card-container {
    flex-wrap: wrap;

    .card-box {
      width: 32%;
    }
  }
}

@media screen and (max-width: 1106px) {
  .card-container {

    .card-box {
      width: 46%;
    }
  }
}

@media screen and (max-width: 991px) {
  .card-container {

    .card-box {
      width: 47%;
    }
  }
}

@media screen and (max-width: 768px) {
  .services-container {
    padding: 120px 24px 0;

    .circle-background {
      width: 148px;
    }
  }
}

@media screen and (max-width: 734px) {
  .services-container {
    padding: 160px 24px 32px;

    .services-content {
      padding: 0;
    }
  }

  .card-container {

    .card-box {
      // width: 264px;
      width: 327px;
    }
  }
}

// @media screen and (max-width: 725px) {
//   .services-container {
//     .circle-background {
//       top: 1080px;
//     }
//   }
// }

@media screen and (max-width: 414px) {
  .services-container {
    .circle-background {
      width: 128px;
    }
  }
}
</style>
