<template>
  <section class="pd-96 benefit-container">
    <div class="benefit-content">
      <div class="header-text">
        <div class="top-text">
          {{ $t('HOME_BENEFIT_HIGHLIGHT') }}
        </div>
        <div class="bottom-text">
          {{ $t('HOME_BENEFIT_SPILL') }}
        </div>
      </div>
      <div class="benefit-cta">
        <ul class="card-container">
          <li v-for="(cta, idx) in ctas" :key="idx" class="card-box" style="box-shadow: 0px 4px 8px rgb(76 79 84 / 16%)">
            <div class="card-benefit-box">
              <div class="card-benefit">
                <div class="icon-container">
                  <div class="icon-box">
                    <div class="icon">
                      <img :src="require(`~/assets/images/homepage/${cta.icon}.png`)">
                    </div>
                  </div>
                  <div class="text-box">
                    {{ $t('HOME_BENEFIT_' + cta.card) }}
                  </div>
                </div>
                <div class="cta-button-container">
                  <div class="cta-button-box">
                    <a-button class="cta-button" size="large" @click="onSeeMoreClick(cta.text)">
                      {{ $t('SEE_MORE') }}
                    </a-button>
                  </div>
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
import { mapMutations } from 'vuex'

export default {
  name: 'BenefitPage',
  data () {
    return {
      ctas: [
        {
          icon: 'benefit1',
          card: 'CARD1',
          inner: '',
          text: 'Optimized Healthcare for Productive Employees',
          path: ''
        },
        {
          icon: 'benefit2',
          card: 'CARD2',
          inner: 'benefit2-dollar',
          text: 'Monitor and Control your Costs',
          path: ''
        },
        {
          icon: 'benefit3',
          card: 'CARD3',
          inner: '',
          text: 'Reach your Health Benefits Ecosystem',
          path: ''
        },
        {
          icon: 'benefit4',
          card: 'CARD4',
          inner: '',
          text: 'Administration Made Simple and Easy',
          path: ''
        }
      ]
    }
  },
  mounted () {
    localStorage.setItem('menuActive', '')
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
    onSeeMoreClick (text) {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'What We Do')
      if (text === 'Optimized Healthcare for Productive Employees') {
        this.$router.push('/what-we-do/employee-experience')
      } else if (text === 'Monitor and Control your Costs') {
        this.$router.push('/what-we-do/employer-experience')
      } else if (text === 'Reach your Health Benefits Ecosystem') {
        this.$router.push('/what-we-do/partner-ecosystem')
      } else if (text === 'Administration Made Simple and Easy') {
        this.$router.push('/what-we-do/employer-experience')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header-text {
  margin-bottom: 96px;

  .top-text {
    font-size: clamp(1.145rem, 2.55vw, 2.3rem);
    font-weight: 700;
    color: #4C4F54;
    text-align: center;
  }

  .bottom-text {
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

  .card-box {
    box-shadow: 0px 4px 8px rgb(76 79 84 / 16%);
    border-radius: 28px;
    background: #ffffff;
    width: 25%;

    .card-benefit-box {
      padding: 24px;
      height: 100%;

      .card-benefit {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: inherit;

        .icon-box {
          position: relative;
          width: 96px;
          height: 96px;
          margin: 0 auto;

          .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .text-box {
          margin: 32px auto 52px;
          text-align: center;
          color: #4C4F54;
          font-size: calc(1rem + 0.390625vw);
          font-weight: 700;
        }

        .cta-button-box {
          text-align: center;

          .cta-button {
            font-size: 14px;
            font-weight: 700;
            color: #0146AB;
            border-color: #0146AB;
            border-radius: 8px;
            border-width: 2px;
          }

          .cta-button:hover {
            background: #0146AB;
            color: #fff;
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
      // width: 32%;
      width: 31%;
    }
  }
}

@media screen and (max-width: 1279px) {
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
  .benefit-container {
    padding: 32px 24px;
  }
}

@media screen and (max-width: 734px) {
  .benefit-container {
    padding: 32px 24px;
  }

  .header-text {
    margin-bottom: 32px;

    .top-text {
      font-size: clamp(1.45rem, 2.55vw, 2.3rem);
    }
  }

  .card-container {
    .card-box {
      // width: 264px;
      width: 327px;
    }
  }
}
</style>
