<template>
  <section class="experience-container">
    <div class="headText head-text">
      {{ $t('WHAT_WE_DO.CARD2.EXPERIENCE') }}
    </div>
    <div class="experience-content">
      <ul class="card-experience-container">
        <li v-for="(experience, idx) in experiences" :key="idx" class="card-box">
          <div
            :class="[
              'card-experience-box',
              experience.headline === 'For you and your team' ? 'experience1' : '',
              experience.headline === 'For your employees' ? 'experience2' : '',
              experience.headline === 'Industry-leading partner ecosystem' ? 'experience3' : ''
            ]"
            :style="{
              borderColor:
                idx === 0
                  ? '#87B4BF'
                  : idx === 1
                    ? '#7D83B4'
                    : '#DEA7B3'
            }"
            @click="handleCardClick(experience.headline)"
          >
            <div class="card-experience">
              <div class="icon-container">
                <div class="icon-box">
                  <img :src="require(`~/assets/images/solution/${experience.icon}.png`)">
                </div>
              </div>
              <div
                class="headline"
                :style="{
                  color:
                    idx === 0
                      ? '#87B4BF'
                      : idx === 1
                        ? '#7D83B4'
                        : '#DEA7B3'
                }"
              >
              {{ $t('WHAT_WE_DO.CARD2.' + experience.label + '_HEAD') }}
              </div>
              <div class="description">
                {{ $t('WHAT_WE_DO.CARD2.' + experience.label) }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="big-experience-quote">
      <div class="big-experience-content">
        <div class="circle-background-box">
          <div class="circle-background">
            <img src="~/assets/images/solution/circle-quote.png">
          </div>
        </div>
        <div class="quote-box">
          <div class="quote-text">
            &#8220;{{ $t('WHAT_WE_DO.QUOTE') }}&#8221;
          </div>
          <div class="register-cta">
            <div class="register-btn-box">
              <div class="register-btn" @click="onRegisterClick">
                {{ $t('MENU.LIST5.REGISTER') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      experiences: [
        {
          icon: 'experience1',
          label: 'STREAMLINE',
          headline: 'For you and your team',
          description: 'Streamline your day-to-day with adjudication, eligibility, billing, payments, and partners in one integrated experience.',
          parth: ''
        },
        {
          icon: 'experience2',
          label: 'SIMPLIFIED',
          headline: 'For your employees',
          description: 'Our simplified and intuitive member experience, including navigation and advocacy, actively engages employees in their benefits.',
          parth: ''
        },
        {
          icon: 'experience3',
          label: 'MIXMATCH',
          headline: 'Industry-leading partner ecosystem',
          description: 'Mix and match from partners across medical, dental, vision, pharmacy, and point solutions.',
          parth: ''
        }
      ]
    }
  },
  methods: {
    ...mapMutations({
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen',
      setMenuMobileOpen: 'setMenuMobileOpen'
    }),
    handleCardClick (headline) {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'What We Do')
      if (headline === 'For you and your team') {
        this.$router.push('/what-we-do/employer-experience')
      } else if (headline === 'For your employees') {
        this.$router.push('/what-we-do/employee-experience')
      } else if (headline === 'Industry-leading partner ecosystem') {
        this.$router.push('/what-we-do/partner-ecosystem')
      }
    },
    onRegisterClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'About Us')
      this.$router.push('/about-us/company-register')
    }
  }
}
</script>

<style lang="less" scoped>
.experience-container {
  padding: 96px 96px 254px;
  position: relative;
}

.head-text {
  text-align: center;
}

.experience-content {
  margin-top: 40px;

  .card-experience-container {
    display: flex;
    justify-content: space-around;
    gap: 64px;

    .card-box {
      background: #fff;
      box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);
      width: 33.33%;

      .card-experience-box {
        border-left: 8px solid;
        height: 100%;
        cursor: pointer;

        &.experience1, &.experience2, &.experience3 {
          background: #fff;
          transition: background 0.5s;
        }

        &.experience1:hover {
          background: #E7F7FB;
        }

        &.experience2:hover {
          background: #E4E7FF;
        }

        &.experience3:hover {
          background: #FFEAEE;
        }

        .card-experience {
          padding: 24px 32px;
          transition: background 0.5s;

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
            font-size: 18px;
            font-size: clamp(1rem, 1.191vw, 1.29rem); // 14px, 18.0079px, 18.06px
            font-weight: 700;
          }

          .description {
            color: #4C4F54;
            font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
            font-weight: 400;
          }
        }
      }
    }
  }
}

.big-experience-quote {
  position: absolute;
  // bottom: -25%;
  bottom: -22%;
  padding-right: 96px;
  z-index: 1;

  .big-experience-content {
    width: 100%;
    position: relative;

    .circle-background-box {
      position: absolute;
      right: 0;
      opacity: 0.8;

      .circle-background {
        width: 100%;

        img {
          width: 100%;
          height: auto;;
          border-radius: 0 16px 0 0;
        }
      }
    }

    .quote-box {
      padding: 48px;
      background: #55B9E4;
      border-radius: 16px;
      box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);
      color: #fff;

      .quote-text {
        margin-bottom: 24px;
        font-size: clamp(1.145rem, 2.118vw, 2.3rem); //16.03px, 32.0242px, 32.2px
        font-weight: 700;
        position: relative;
        z-index: 1;
      }

      .register-btn {
        padding: 16px 24px;
        color: #0146AB;
        font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
        font-weight: 700;
        background: #fff;
        display: inline-block;
        border-radius: 8px;
        cursor: pointer;
        border: 1px solid #fff;
        transition: all 0.5s;
      }

      .register-btn:hover {
        background: #55B9E4;
        border: 1px solid #0146AB;
      }
    }
  }

}

@media screen and (max-width: 1669px) {
  .big-experience-quote {
    bottom: -25%;
  }
}

@media screen and (max-width: 1315px) {
  .big-experience-quote {
    bottom: -23%;
  }
}

@media screen and (max-width: 1008px) {
  .experience-container {
    padding-bottom: 230px;
  }

  .experience-content {
    margin-top: 24px;

    .card-experience-container {
      gap: 32px;
      flex-direction: column;

      .card-box {
        width: 100%;

        .card-experience-box {
          .card-experience {
            padding: 24px;

            .headline {
              font-size: 14px
            }

            .description {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .big-experience-quote {
    bottom: -13%;
  }
}

// @media screen and (max-width: 896px) {
//   .experience-container {
//     padding: 48px 48px 230px;
//   }

//   .big-experience-quote {
//     padding-right: 48px;
//   }
// }

@media screen and (max-width: 768px) {
  .experience-container {
    padding: 32px 24px 118px;
  }

  .head-text {
    font-size: 20px;
  }

  .experience-content {
    margin-top: 24px;

    .card-experience-container {
      gap: 32px;
      flex-direction: column;

      .card-box {
        width: 100%;

        .card-experience-box {
          .card-experience {
            padding: 24px;

            .headline {
              font-size: 14px
            }

            .description {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .big-experience-quote {
    padding-right: 24px;
    // bottom: -152px;
    bottom: -106px;

    .big-experience-content {
      .circle-background-box {
        right: -168px;

        .circle-background {
          width: 50%;
        }
      }

      .quote-box {
        padding: 24px;

        .quote-text {
          font-size: 16px;
        }

        .register-btn {
          font-size: 12px;
        }
      }
    }
  }
}

@media screen and (max-width: 613px) {
  .big-experience-quote {
    bottom: -132px;
  }
}

@media screen and (max-width: 517px) {
  .experience-container {
    padding-bottom: 140px;
  }
}

@media screen and (max-width: 416PX) {
  .experience-container {
    padding: 32px 24px 146px;
  }

  .big-experience-quote {
    bottom: -150px;
  }
}

@media screen and (max-width: 382PX) {
  .experience-container {
    padding: 32px 24px 170px;
  }

  .big-experience-quote {
    bottom: -152px;
  }
}
</style>
