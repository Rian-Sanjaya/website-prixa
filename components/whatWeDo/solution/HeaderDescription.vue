<template>
  <section class="pd-96 description-container">
    <div class="description-content">
      <div class="left-content">
        <div class="solution-box">
          <div class="icon-box">
            <img src="~/assets/images/solution/header-description.png">
          </div>
          <div class="solution-text-box">
            <div class="solution-text">
              {{ $t('WHAT_WE_DO.HEADER.OUR_SOLUTION') }}
            </div>
          </div>
        </div>
        <div class="head-text">
          <div class="head-text-1">
            {{ $t('WHAT_WE_DO.HEADER.LETS_IMPROVE') }}
          </div>
          <div class="head-text-2">
            {{ $t('WHAT_WE_DO.HEADER.HEALTHCARE') }}
          </div>
        </div>
        <div class="description">
          {{ $t('WHAT_WE_DO.HEADER.DESCRIPTION') }}
        </div>
        <div class="register-cta">
          <div class="register-btn" @click="onRegisterClick">
            {{ $t('MENU.LIST5.REGISTER') }}
          </div>
        </div>
      </div>
      <div class="right-content">
        <div class="picture-container">
          <div class="picture-box">
            <img src="~/assets/images/solution/header-description-picture.png">
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
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'About Us')
      this.$router.push('/about-us/company-register')
    }
  }
}
</script>

<style lang="less" scoped>
.description-content {
  display: flex;
  padding: 0 48px;
  gap: 80px;

  .left-content {
    width: 65%;

    .solution-box {
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

      .solution-text-box {
        color: #6EB7E4;
        font-size: clamp(1rem, 1.323vw, 1.429rem); // 20px
        font-weight: 500;
        display: flex;
        align-items: center;
      }
    }

    .head-text {
      color: #4C4F54;
      font-size: clamp(1.72rem, 3.175vw, 3.5rem); // 24.08px, 48.006px, 49px
      font-weight: 300;
      margin: 24px 0 16px;

      .head-text-2 {
        font-weight: 700;
      }
    }

    .description {
      color: #4C4F54;
      font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px
      font-weight: 400;
      margin-bottom: 24px;
    }

    .register-cta {
      .register-btn {
        display: inline-block;
        padding: 16px 24px;
        background: #0146AB;
        color: #fff;
        border-radius: 8px;
        font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14px, 14px
        font-weight: 700;
        cursor: pointer;
        border: 1px solid #0146AB;
        transition: all 0.5s;
      }

      .register-btn:hover {
        background: #fff;
        color: #0146AB;
      }
    }
  }

  .right-content {
    width: 35%;

    .picture-container {
      // padding-left: 64px;

      .picture-box {
        // width: 357.19px;
        width: 100%;
        min-width: 315px;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}

@media screen and (max-width: 1120px) {
  .description-content {
    gap: 64px;

    .left-content {
      width: 60%;
    }

    .right-content {
      width: 40%;

      .picture-container {

        .picture-box {
          min-width: 295px;
        }
      }
    }
  }
}

@media screen and (max-width: 958px) {
  .description-content {
    .left-content {
      width: 55%;
    }

    .right-content {
      width: 45%;
    }
  }
}

// @media screen and (max-width: 896px) {
//   .description-container {
//     padding: 48px;
//   }
// }

@media screen and (max-width: 875px) {
  .description-content {
    gap: 32px;

    .left-content {
      width: 50%;
    }

    .right-content {
      width: 50%;
    }
  }
}

@media screen and (max-width: 768px) {
  .description-container {
    padding: 24px;
  }

  .description-content {
    flex-direction: column;
    padding: 0;
    gap: 18px;

    .left-content {
      width: 100%;

      .solution-box {
        .icon-box {
          width: 32px;
          min-width: 32px;
        }

        .solution-text-box {
          font-size: 14px;
          font-weight: 700;
        }
      }

      .head-text {
        font-size: 24px;
      }

      .description {
        font-size: 12px;
      }

      .register-cta {
        .register-btn {
          font-size: 12px;
        }
      }
    }

    .right-content {
      width: 100%;
      order: -1;

      .picture-container {
        padding: 0;

        .picture-box {
          width: 255px;
        }
      }
    }
  }
}
</style>
