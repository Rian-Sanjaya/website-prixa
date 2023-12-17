<template>
  <section class="pd-96 ctaregister-container">
    <div class="ctaregister-content">
      <div class="left-container">
        <div class="left-content">
          <div class="ctaregister-box">
            <div class="icon-box">
              <img src="~/assets/images/employers/ctaicon.png">
            </div>
            <div class="font-14-20-20 ctaregister-text-box">
              <div class="ctaregister-text">
                {{ $t('MENU.LIST2.EMPLOYERS') }}
              </div>
            </div>
          </div>
          <div class="font-24-48-49 head-text">
            <div class="head-text-1">
              {{ $t('WHO_WE_SERVE.EMPLOYERS.CTA.LINE1_1') }} <span>{{ $t('WHO_WE_SERVE.EMPLOYERS.CTA.LINE1_2') }}</span>
            </div>
            <div class="head-text-2">
              <span>{{ $t('WHO_WE_SERVE.EMPLOYERS.CTA.LINE2_1') }}</span> <span>{{ $t('WHO_WE_SERVE.EMPLOYERS.CTA.LINE2_2') }}</span>
            </div>
          </div>
          <div class="font-12-16-16 sub-text">
            {{ $t('WHO_WE_SERVE.EMPLOYERS.CTA.DESC') }}
          </div>
          <div class="register-cta">
            <div class="register-btn-box">
              <div class="register-btn" @click="onRegisterClick">
                {{ $t('WHO_WE_SERVE.EMPLOYERS.CTA.REGISTER') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="picture-container">
          <div class="picture-box">
            <img src="~/assets/images/employers/ctaregister.png">
          </div>
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
      setScreenSize: 'setScreenSize',
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen',
      setMenuMobileOpen: 'setMenuMobileOpen'
    }),
    onRegisterClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'About Us')
      this.$router.push('/about-us/company-register')
    }
  }
}
</script>

<style lang="less" scoped>
.ctaregister-content {
  display: flex;
  padding: 0 48px;
  gap: 64px;

  .left-container {
    width: 55%;

    .ctaregister-box {
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

      .ctaregister-text-box {
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
          font-style: italic;
          font-weight: 300;
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
      border: 1px solid #0146AB;
      transition: all 0.5s;
    }

    .register-btn:hover {
      background: #fff;
      color: #0146AB;
    }
  }

  .right-container {
    width: 45%;
    margin: auto 0;

    .picture-container {
      .picture-box {
        width: 100%;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}

@media screen and (max-width: 1131px) {
  .ctaregister-content {
    .right-container {
      .picture-container {
        .picture-box {
          min-width: 375.75px;
          max-width: 375.75px;
        }
      }
    }
  }
}

@media screen and (max-width: 980px) {
  .ctaregister-content {
    gap: 32px;

    .right-container {
      .picture-container {
        .picture-box {
          min-width: 297px;
          max-width: 297px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .ctaregister-container {
    padding: 24px 24px 32px;
  }

  .ctaregister-content {
    flex-direction: column;
    gap: 18px;
    padding: 0;

    .left-container {
      width: 100%;

      .ctaregister-box {
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
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .ctaregister-content {
    .left-container {
      .head-text {
        font-size: 24px;
      }
    }
  }
}
</style>
