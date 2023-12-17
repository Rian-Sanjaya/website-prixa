<template>
  <section class="career-container">
    <div class="career-content-box">
      <div class="circle-career-top">
        <img src="~/assets/images/career/circle-career-top.png">
      </div>
      <div class="career-content">
        <div class="left-container">
          <div class="left-content">
            <div class="career-box">
              <div class="icon-box">
                <img src="~/assets/images/career/career-icon.png">
              </div>
              <div class="font-14-20-20 career-text-box">
                <div class="career-text">
                  {{ $t('MENU.LIST3.CAREER') }}
                </div>
              </div>
            </div>
            <div class="font-24-48-49 head-text">
              <div class="head-text-1">
                {{ $t('ABOUT_US.CAREER.HEADER.LINE1_1') }} <span>{{ $t('ABOUT_US.CAREER.HEADER.LINE1_2') }}</span> {{ $t('ABOUT_US.CAREER.HEADER.LINE1_3') }}
              </div>
              <div class="head-text-2">
                <span>{{ $t('ABOUT_US.CAREER.HEADER.LINE2_1') }}</span> {{ $t('ABOUT_US.CAREER.HEADER.LINE2_2') }} <span>{{ $t('ABOUT_US.CAREER.HEADER.LINE2_3') }}</span>
              </div>
            </div>
            <div class="register-cta">
              <div class="register-btn-box">
                <div class="register-btn" @click="onSeePositionClick">
                  See Positions
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/career/header-description.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="why-content">
      <div class="circle-career-bottom">
        <img src="~/assets/images/career/circle-career-bottom.png">
      </div>
      <div class="why">
        <div class="headText head-text">
          {{ $t('ABOUT_US.CAREER.HEADER.WORKING') }}
        </div>
        <div class="subText sub-text">
          {{ $t('ABOUT_US.CAREER.HEADER.AWARE') }}
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
    onSeePositionClick () {
      window.open('https://id.linkedin.com/company/prixaai/jobs', '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
// .career-container {
//   padding: 0 0 96px;
// }

.career-content-box {
  padding: 0 96px;
  background: #E5E6EA;
  position:relative;

  .circle-career-top {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 12%;

    img {
      width: 100%;
      height: auto;
    }
  }
}

.career-content {
  display: flex;
  padding: 0 48px;
  gap: 64px;
  position: relative;
  z-index: 1;

  .left-container {
    // width: 55%;
    width: 51%;
    padding: 96px 0;

    .career-box {
      display: flex;
      gap: 16px;

      .icon-box {
        width: 6.5%;
        min-width: 38.53px;

        img {
          width: 100%;
          height: auto;
        }
      }

      .career-text-box {
        color: #7D83B4;
        font-weight: 500;
        display: flex;
        align-items: center;
      }
    }

    .head-text {
      color: #4C4F54;
      font-weight: 300;
      margin: 16px 0 16px;

      span {
        font-style: italic;
      }

      .head-text-2 {
        span:first-child {
          font-weight: 700;
        }

        span {
          font-style: normal;
          font-weight: 700;
        }
      }
    }

    .sub-text {
      color: #4C4F54;
      font-weight: 400;
      margin-bottom: 32px;
    }

    .register-btn {
      padding: 16px 24px;
      color: #fff;
      font-size: clamp(0.86rem, 0.927vw, 1rem);
      font-weight: 700;
      background: #0146AB;
      display: inline-block;
      border-radius: 8px;
      cursor: pointer;
      border: 1px solid #0146AB;;
      transition: all 0.5s;
    }

    .register-btn:hover {
      background: #E5E6EA;
      color: #0146AB;
    }
  }

  .right-container {
    width: 49%;
    overflow: hidden;

    .picture-container {
      position: relative;

      .picture-box {
        width: 1074.73px;
        position: absolute;
        top: 0px;
        left: -403px;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}

.why-content {
  padding: 0 96px;
  position: relative;

  .circle-career-bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 12%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .why {
    padding: 96px 243px;
    text-align: center;
    position: relative;
    z-index: 1;

    .sub-text {
      margin-top: 16px;
    }
  }
}

@media screen and (max-width: 1164px) {
  .career-content {
    padding: 0 16px;
    gap: 32px;

    .right-container {
      .picture-container {
        .picture-box {
          width: 967px;
          position: absolute;
          top: 0px;
          left: -359px;
        }
      }
    }
  }

  .why-content {
    .why {
      padding: 96px 64px;
    }
  }
}

@media screen and (max-width: 1098px) {
  .career-content {
    padding: 0;
  }

  .why-content {
    .why {
      padding: 96px 48px;
    }
  }
}

@media screen and (max-width: 958px) {
  .career-content-box {
    padding: 0 48px;
  }

  .why-content {
    padding: 0 48px;
  }
}

@media screen and (max-width: 858px) {
  .career-content-box {
    padding: 0 24px;
  }

  .why-content {
    padding: 0 24px;
  }
}

// @media screen and (max-width: 768px) {
@media screen and (max-width: 808px) {
  .career-content-box {
    padding: 0;
  }

  .career-container {
    padding: 0 0 32px;
  }

  .career-content {
    flex-direction: column;
    // gap: 18px;
    gap: 0;
    padding: 0;

    .left-container {
      width: 100%;
      padding: 32px 24px;

      .career-box {
        .icon-box {
          width: 7%;
          min-width: unset;
        }
      }

      .head-text {
        margin-top: 16px;
        font-size: 32px;
      }
    }

    .right-container {
      width: 100%;
      order: -1;

      .picture-container {
        .picture-box {
          width: 100%;
          min-width: unset;
          max-width: unset;
          position: relative;
          left: -20px;
        }
      }
    }
  }

  .why-content {
    padding: 0 24px;

    .why {
      // padding: 32px 32px 0;
      padding: 48px 32px 16px;
    }
  }
}

@media screen and (max-width: 768px) {
  .career-content-box {
    .circle-career-top {
      width: 18%;
    }
  }

  .why-content {
    .circle-career-bottom {
      width: 18%;
    }

    .why {
      padding: 32px 0 0;
    }
  }
}

@media screen and (max-width: 480px) {
  .career-content {
    .left-container {
      .head-text {
        font-size: 24px;
      }
    }
  }
}
</style>
