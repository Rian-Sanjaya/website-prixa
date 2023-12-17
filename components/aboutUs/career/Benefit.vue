<template>
  <section class="benefit-container">
    <div class="circle-benefit-top">
      <img src="~/assets/images/career/circle-benefit-top.png">
    </div>
    <!-- <div class="circle-benefit-bottom">
      <img src="~/assets/images/career/circle-benefit-bottom.png">
    </div> -->
    <div class="benefit-content">
      <div class="headText head-text">
        {{ $t('ABOUT_US.CAREER.BENEFIT.BENEFIT') }}
      </div>
      <div class="benefits1">
        <ul class="card-container">
          <li v-for="(benefit, idx) in benefits1" :key="idx" class="card-box">
            <div class="headline-text">
              <div class="icon-container">
                <img :src="require(`~/assets/images/career/${benefit.icon}.png`)">
              </div>
              <div class="desc-text-box">
                <div v-if="benefit.headText === 'Paid'" class="text">
                  {{ $t('ABOUT_US.CAREER.BENEFIT.BENEFIT5') }}
                </div>
                <div v-else-if="benefit.headText === 'Insurance'" class="text">
                  {{ $t('ABOUT_US.CAREER.BENEFIT.BENEFIT2') }}
                </div>
                <div v-else-if="benefit.headText === 'Ownership Program'" class="text">
                  {{ $t('ABOUT_US.CAREER.BENEFIT.BENEFIT4') }}
                </div>
              </div>
            </div>
            <div v-if="benefit.headText === 'Paid'" class="desc-text">
              {{ $t('ABOUT_US.CAREER.BENEFIT.BENEFIT5_DESC') }}
            </div>
            <div v-if="benefit.headText === 'Insurance'" class="desc-text">
              {{ $t('ABOUT_US.CAREER.BENEFIT.BENEFIT2_DESC') }}
            </div>
            <div v-if="benefit.headText === 'Ownership Program'" class="desc-text">
              {{ $t('ABOUT_US.CAREER.BENEFIT.BENEFIT4_DESC') }}
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="benefits2">
        <ul class="card-container">
          <li v-for="(benefit, idx) in benefits2" :key="idx" class="card-box" :style="{ display: benefit.display}">
            <div class="headline-text">
              <div class="icon-container">
                <img :src="require(`~/assets/images/career/${benefit.icon}.png`)">
              </div>
              <div v-if="benefit.headText === 'Schedule'" class="desc-text-box">
                <div class="text">
                  {{ $t('ABOUT_US.CAREER.BENEFIT.BENEFIT4') }}
                </div>
              </div>
              <div v-else-if="benefit.headText === 'Access'" class="desc-text-box">
                <div class="text">
                  {{ $t('ABOUT_US.CAREER.BENEFIT.BENEFIT5') }}
                </div>
              </div>
            </div>
            <div v-if="benefit.headText === 'Schedule'" class="desc-text">
              {{ $t('ABOUT_US.CAREER.BENEFIT.BENEFIT4_DESC') }}
            </div>
            <div v-else-if="benefit.headText === 'Access'" class="desc-text">
              {{ $t('ABOUT_US.CAREER.BENEFIT.BENEFIT5_DESC') }}
            </div>
          </li>
        </ul>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'BenefitSection',
  data () {
    return {
      benefits1: [
        {
          icon: 'benefit1',
          headText: 'Paid',
          desc: 'Paid leave, 12 days per year'
        },
        {
          icon: 'benefit2',
          headText: 'Insurance',
          desc: 'Health insurance covers family with up to 2 children (in addition to BPJS) for permanent employee'
        },
        {
          icon: 'benefit3',
          headText: 'Ownership Program',
          desc: 'Laptop Ownership Program (depends on the level)'
        }
      ]
      // benefits2: [
      //   {
      //     icon: 'benefit4',
      //     headText: 'Schedule',
      //     desc: 'Hybrid Work Schedule'
      //   },
      //   {
      //     icon: 'benefit5',
      //     headText: 'Access',
      //     desc: 'Our Office is just next to Senayan MRT (We are at FX Sudirman)'
      //   }
      // ]
    }
  }
}
</script>

<style lang="less" scoped>
.benefit-container {
  padding: 48px 96px 96px;
  background: #E2EAF4;
  position: relative;

  .circle-benefit-top {
    position: absolute;
    top: 0;
    right: 0;
    width: 12%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .circle-benefit-bottom {
    position: absolute;
    left: 0;
    bottom: 32px;
    width: 12%;

    img {
      width: 100%;
      height: auto;
    }
  }
}

.benefit-content {
  padding: 0 170px;

  .head-text {
    text-align: center;
    margin: 0 0 80px;
    position: relative;
    z-index: 2;
  }

  .benefits1, .benefits2 {
    position: relative;
    z-index: 2;

    .card-container {
      display: flex;
      gap: 32px;

      .card-box {
        width: 33.333%;
        height: 208px;
        background: #CCDAEE;
        border-radius: 16px;
        padding: 24px;

        .headline-text {
          display: flex;
          gap: 16px;

          .icon-container {
            width: 15%;
            min-width: 40px;

            img {
              width: 100%;
              height: auto;
            }
          }

          .desc-text-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
            font-weight: 700;
          }
        }

        .desc-text {
          margin-top: 32px;
        }
      }
    }
  }

  .benefits2 {
    margin-top: 32px;

    .card-container {
      width: 65.58%;
      margin: 0 auto;

      .card-box {
        width: 50%;
      }
    }
  }
}

@media screen and (max-width: 1164px) {
  .benefit-content {
    padding: 0 138px;
  }
}

@media screen and (max-width: 1098px) {
  .benefit-content {
    padding: 0 90px;
  }
}

@media screen and (max-width: 998px) {
  .benefit-content {
    padding: 0 64px;
  }
}

@media screen and (max-width: 958px) {
  .benefit-container {
    padding: 48px;
  }

  .benefit-content {
    padding: 0;
  }
}

@media screen and (max-width: 768px) {
  .benefit-container {
    padding: 24px 24px 32px;

    .circle-benefit-top {
      width: 24%;
    }

    .circle-benefit-bottom {
      bottom: 278px;
      width: 28%;
    }
  }

  .benefit-content {
    .head-text {
      margin: 0 0 24px;
    }

    .benefits1, .benefits2 {
      .card-container {
        flex-direction: column;
        gap: 24px;

        .card-box {
          width: 100%;

          .headline-text {
            gap: 8px;

            .icon-container {
              width: 6%;
            }
          }

          .desc-text {
            margin-top: 16px;
          }
        }
      }
    }

    .benefits2 {
      margin-top: 24px;

      .card-container {
        margin: 0;
        width: 100%;
      }
    }
  }
}
</style>
