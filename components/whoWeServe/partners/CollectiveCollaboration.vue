<template>
  <section class="pd-96 collective-container">
    <div class="collective-content">
      <div class="left-container">
        <div class="left-content">
          <div class="collective-box">
            <div class="icon-box">
              <img src="~/assets/images/partners/partners-icon.png">
            </div>
            <div class="font-14-20-20 collective-text-box">
              <div class="collective-text">
                {{ $t('MENU.LIST2.PARTNERS') }}
              </div>
            </div>
          </div>
          <div class="font-24-48-49 head-text">
            <div class="head-text-1">
              {{ $t('WHO_WE_SERVE.PARTNERS.COLLECTIVE.LINE1_1') }} <span>{{ $t('WHO_WE_SERVE.PARTNERS.COLLECTIVE.LINE1_2') }}</span> {{ $t('WHO_WE_SERVE.PARTNERS.COLLECTIVE.LINE1_3') }}
            </div>
            <div class="head-text-2">
              {{ $t('WHO_WE_SERVE.PARTNERS.COLLECTIVE.LINE2_1') }}
            </div>
          </div>
          <div class="font-12-16-16 sub-text">
            {{ $t('WHO_WE_SERVE.PARTNERS.COLLECTIVE.PROVIDE') }}
          </div>
          <div class="register-cta">
            <div class="register-btn-box">
              <div class="register-btn" @click="onRegisterClick">
                {{ $t('WHO_WE_SERVE.PARTNERS.COLLECTIVE.REGISTER') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="picture-container">
          <div class="picture-box">
            <img src="~/assets/images/partners/collective.png">
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
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen',
      setMenuMobileOpen: 'setMenuMobileOpen'
    }),
    onRegisterClick () {
      this.$store.commit('setMenuActive', 'About Us')
      this.$router.push('/about-us/company-register')
    }
  }
}
</script>

<style lang="less" scoped>
.collective-content {
  display: flex;
  padding: 0 48px;
  gap: 64px;

  .left-container {
    width: 55%;

    .collective-box {
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

      .collective-text-box {
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
        font-weight: 700;
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
  .collective-content {
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
  .collective-content {
    gap: 32px;

    .right-container {
      .picture-container {
        .picture-box {
          min-width: 297px;
          max-width: 297px;
          // min-width: 375.75px;
          // max-width: 375.75px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .collective-container {
    padding: 24px 24px 32px;
  }

  .collective-content {
    flex-direction: column;
    gap: 18px;
    padding: 0;

    .left-container {
      width: 100%;

      .collective-box {
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
  .collective-content {
    .left-container {
      .head-text {
        font-size: 24px;
      }

      .sub-text {
        margin-bottom: 24px;
      }
    }
  }
}
</style>
