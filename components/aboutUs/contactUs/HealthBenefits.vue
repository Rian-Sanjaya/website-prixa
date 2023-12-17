<template>
  <section class="benefits-container">
    <div class="benefits-box">
      <div class="icon-box">
        <img src="~/assets/images/contact-us/contact-us-icon.png">
      </div>
      <div class="font-14-20-20 benefit-text-box">
        <div class="contact-text">
          {{ $t('MENU.LIST3.CONTACT_US') }}
        </div>
      </div>
    </div>
    <div class="font-24-48-49 head-text">
      <span class="italic">Manage</span> The <span class="bold">Employee Health Benefits</span> at Your Fingertips
    </div>
    <div class="benefits-content">
      <ul class="card-benefits-container">
        <li v-for="(benefit, idx) in benefits" :key="idx" class="card-box">
          <div
            :class="[
              'card-benefits-box',
              benefit.headline === 'Member Care' ? 'benefit1' : '',
              benefit.headline === 'Sales' ? 'benefit2' : '',
              benefit.headline === 'All other inquiries' ? 'benefit3' : ''
            ]"
            :style="{
              borderColor:
                idx === 0
                  ? '#87B4BF'
                  : idx === 1
                    ? '#7D83B4'
                    : '#DEA7B3'
            }"
          >
            <div class="card-benefits-content">
              <div class="card-benefits">
                <div class="icon-container">
                  <div class="icon-box">
                    <img :src="require(`~/assets/images/contact-us/${benefit.icon}.png`)">
                  </div>
                </div>
                <div
                  v-if="benefit.headline === 'Member Care'"
                  class="font-14-18-18 headline"
                  :style="{
                    color:
                      idx === 0
                        ? '#87B4BF'
                        : idx === 1
                          ? '#7D83B4'
                          : '#DEA7B3'
                  }"
                >
                  {{ $t('ABOUT_US.CONTACT_US.HEADER.HEADLINE1') }}
                </div>
                <div
                  v-if="benefit.headline === 'Sales'"
                  class="font-14-18-18 headline"
                  :style="{
                    color:
                      idx === 0
                        ? '#87B4BF'
                        : idx === 1
                          ? '#7D83B4'
                          : '#DEA7B3'
                  }"
                >
                  {{ $t('ABOUT_US.CONTACT_US.HEADER.HEADLINE2') }}
                </div>
                <div
                  v-if="benefit.headline === 'All other inquiries'"
                  class="font-14-18-18 headline"
                  :style="{
                    color:
                      idx === 0
                        ? '#87B4BF'
                        : idx === 1
                          ? '#7D83B4'
                          : '#DEA7B3'
                  }"
                >
                  {{ $t('ABOUT_US.CONTACT_US.HEADER.HEADLINE3') }}
                </div>
                <div v-if="benefit.headline === 'Member Care'" class="font-12-14-14 description">
                  {{ $t('ABOUT_US.CONTACT_US.HEADER.DESC1_1') }}
                </div>
                <div v-if="benefit.headline === 'Sales'" class="font-12-14-14 description">
                  {{ $t('ABOUT_US.CONTACT_US.HEADER.DESC2_1') }}
                </div>
                <div v-if="benefit.headline === 'All other inquiries'" class="font-12-14-14 description">
                  {{ $t('ABOUT_US.CONTACT_US.HEADER.DESC3_1') }}
                </div>
                <div v-if="benefit.description2" class="font-12-14-14 description">
                  {{ benefit.description2 }}
                </div>
              </div>
              <div class="content-cta">
                <div class="cta-box">
                  <div
                    v-if="benefit.headline === 'Member Care'"
                    :class="[
                      'cta-btn',
                      benefit.headline === 'Member Care' ? 'cta-care' : '',
                      benefit.headline === 'Sales' ? 'cta-sales' : '',
                      benefit.headline === 'All other inquiries' ? 'cta-other' : ''
                    ]"
                    @click="onMailClick"
                  >
                    {{ $t('ABOUT_US.CONTACT_US.HEADER.CTA1_1') }}
                  </div>
                  <div
                    v-if="benefit.headline === 'Sales'"
                    :class="[
                      'cta-btn',
                      benefit.headline === 'Member Care' ? 'cta-care' : '',
                      benefit.headline === 'Sales' ? 'cta-sales' : '',
                      benefit.headline === 'All other inquiries' ? 'cta-other' : ''
                    ]"
                    @click="onMailClick"
                  >
                    {{ $t('ABOUT_US.CONTACT_US.HEADER.CTA2_1') }}
                  </div>
                  <div
                    v-if="benefit.headline === 'All other inquiries'"
                    :class="[
                      'cta-btn',
                      benefit.headline === 'Member Care' ? 'cta-care' : '',
                      benefit.headline === 'Sales' ? 'cta-sales' : '',
                      benefit.headline === 'All other inquiries' ? 'cta-other' : ''
                    ]"
                    @click="onMailClick"
                  >
                    {{ $t('ABOUT_US.CONTACT_US.HEADER.CTA2_1') }}
                  </div>
                </div>
                <!-- <div v-if="benefit.cta2" class="cta-box"> -->
                <div class="cta-box" :style="{ visibility: benefit.cta2 ? 'visible' : 'hidden' }">
                  <div
                    v-if="benefit.headline === 'Member Care'"
                    :class="[
                      'cta-btn',
                      'cta2',
                      idx === 0
                        ? 'idx0'
                        : idx === 1
                          ? 'idx1'
                          : 'idx2'
                    ]"
                    @click="handleWaClick"
                  >
                    {{ $t('ABOUT_US.CONTACT_US.HEADER.CTA1_2') }}
                  </div>
                  <div
                    v-else
                    class="cta-btn cta2"
                    :style="{
                      color:
                        idx === 0
                          ? '#87B4BF'
                          : idx === 1
                            ? '#7D83B4'
                            : '#DEA7B3',
                      borderColor:
                        idx === 0
                          ? '#87B4BF'
                          : idx === 1
                            ? '#7D83B4'
                            : '#DEA7B3'
                    }"
                    @click="handleWaClick"
                  >
                    {{ $t('ABOUT_US.CONTACT_US.HEADER.CTA1_2') }}
                    {{ benefit.cta2 || 'WhatsApp' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      benefits: [
        {
          icon: 'benefit1',
          headline: 'Member Care',
          description1: '24 Hour Service',
          description2: '',
          cta1: 'Email Us',
          cta2: 'WhatsApp',
          parth: ''
        },
        {
          icon: 'benefit2',
          headline: 'Sales',
          description1: 'SUN-FRI 10:00AM-6:00PM Jakarta',
          description2: '',
          cta1: 'Email Us',
          cta2: '',
          parth: ''
        },
        {
          icon: 'benefit3',
          headline: 'All other inquiries',
          description1: 'General marketing, PR, or corporate inquiries',
          description2: '',
          cta1: 'Email Us',
          cta2: '',
          parth: ''
        }
      ]
    }
  },
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
    onMailClick () {
      window.open('mailto:temansehatmu@prixa.ai', '_blank')
    },
    handleWaClick () {
      window.open('https://wa.me/6281380684764', '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.benefits-container {
  padding: 96px 112px;
}

.benefits-box {
  display: flex;
  gap: 16px;

  .icon-box {
    // width: 0.5%;
    width: 32px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .benefit-text-box {
    color: #87B4BF;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
}

.head-text {
  color: #4C4F54;
  font-weight: 300;

  .italic {
    font-style: italic;
  }

  .bold {
    font-weight: 700;
  }
}

.benefits-content {
  margin-top: 40px;

  .card-benefits-container {
    display: flex;
    justify-content: space-around;
    gap: 64px;

    .card-box {
      background: #fff;
      box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);
      width: 33.33%;

      .card-benefits-box {
        border-top: 8px solid;
        height: 100%;

        &.benefit1, &.benefit2, &.benefit3 {
          background: #fff;
          transition: background 0.5s;
        }

        &.benefit1:hover {
          background: #E7F7FB;
        }

        &.benefit2:hover {
          background: #E4E7FF;
        }

        &.benefit3:hover {
          background: #FFEAEE;
        }

        .card-benefits-content {
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 48px;
          height: 100%;

          .card-benefits {
            // height: 244.2px;

            .icon-box {
              width: 29.5%;
              max-width: 96px;

              img {
                width: 100%;
                height: auto;
              }
            }

            .headline {
              margin: 24px 0 8px;
              color: #87B4BF;
              font-weight: 700;
            }

            .description {
              color: #4C4F54;
              font-weight: 400;
            }
          }

          .content-cta {
            display: flex;
            align-items: flex-end;
            gap: 15px;

            .cta-btn {
              width: 128.56px;
              padding: 16px 0;
              text-align: center;
              color: #fff;
              font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
              font-weight: 700;
              display: inline-block;
              border-radius: 8px;
              cursor: pointer;

              &.cta-care {
                background: #87B4BF;
                border: 1px solid;
                transition: all 0.5s;
              }

              &.cta-sales {
                background: #7D83B4;
                border: 1px solid;
                transition: all 0.5s;
              }

              &.cta-other {
                background: #DEA7B3;
                border: 1px solid;
                transition: all 0.5s;
              }

              &.cta-care:hover {
                background: #E7F7FB;
                color: #0146AB;
                border-color: #0146AB;
              }

              &.cta-sales:hover {
                background: #E4E7FF;
                color: #0146AB;
                border-color: #0146AB;
              }

              &.cta-other:hover {
                background: #FFEAEE;
                color: #0146AB;
                border-color: #0146AB;
              }

              &.cta2 {
                background: #fff;
                border: 1px solid;
                transition: background 0.5s;

                &.idx0 {
                  color: #87B4BF;
                  border-color: #87B4BF;

                  &:hover {
                    color: #0146AB;
                    border-color: #0146AB;
                    background: #E7F7FB;
                  }
                }

                &.idx1 {
                  color: #7D83B4;
                  border-color: #7D83B4;

                  &:hover {
                    color: #0146AB;
                    border-color: #0146AB;
                    background: #7D83B4;
                  }
                }

                &.idx2 {
                  color: #DEA7B3;
                  border-color: #DEA7B3;

                  &:hover {
                    color: #0146AB;
                    border-color: #0146AB;
                    background: #DEA7B3;
                  }
                }
              }
            }
          }
        }

        // &.benefit1:hover .card-benefits-content .content-cta .cta-btn.cta2 {
        //   background: #E7F7FB;
        // }
      }
    }
  }
}

@media screen and (max-width: 1189px) {
  .benefits-content {
    .card-benefits-container {
      .card-box {
        .card-benefits-box {
          .content-cta {
            flex-direction: column;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1061px) {
  .benefits-content {
    .card-benefits-container {
      gap: 32px;

      .card-box {
        // min-width: 236.67px;
      }
    }
  }
}

@media screen and (max-width: 899px) {
  .benefits-content {
    .card-benefits-container {
      gap: 32px;
      flex-direction: column;

      .card-box {
        width: 100%;

        .card-benefits-box {
          .card-benefits-content {
            .card-benefits {
              .icon-box {
                width: 48px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .benefits-container {
    padding: 32px 24px;
  }

  .benefits-content {
    margin-top: 24px;

    .card-benefits-container {
      gap: 32px;
      flex-direction: column;

      .card-box {
        width: 100%;

        .card-benefits-box {
          .card-benefits-content {
            .card-benefits {
              // padding: 24px;

              .icon-box {
                // width: 18%;
                width: 48px;
              }

              // .headline {
              //   font-size: 14px
              // }

              // .description {
              //   font-size: 12px;
              // }
            }
          }

          .content-cta {
            flex-direction: column;

            // .cta-btn {
            //   width: 128.56px;
            //   text-align: center;
              // padding: 16px 0;
            // }
          }
        }
      }
    }
  }
}
</style>
