<template>
  <section class="member-focused-container">
    <div class="circle-container">
      <div class="circle-background circle-top-right">
        <img src="~/assets/images/employee-experience/circle-right-member.png">
      </div>
      <div class="circle-background circle-right-375">
        <img src="~/assets/images/employee-experience/circle-right-member-375.png">
      </div>
      <div class="circle-background circle-left">
        <img src="~/assets/images/employee-experience/circle-left-member.png">
      </div>
      <div class="circle-background circle-bottom">
        <img src="~/assets/images/employee-experience/circle-bottom-member.png">
      </div>
      <div class="member-focused-content">
        <div class="left-container">
          <div class="left-content">
            <div class="headText head-text">
              {{ $t('EMPLOYEE_EXPERIENCE.MEMBER_FOCUS.HEADING') }}
            </div>
            <div class="subText sub-text">
              {{ $t('EMPLOYEE_EXPERIENCE.MEMBER_FOCUS.DESCRIPTION') }}
            </div>
            <div class="register-cta">
              <div class="font-12-14-14 register-btn" @click="onRegisterCompanyClick">
                {{ $t('MENU.LIST5.REGISTER') }}
              </div>
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/employee-experience/member-focused.png">
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
  methods: {
    ...mapMutations({
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen',
      setMenuMobileOpen: 'setMenuMobileOpen'
    }),
    onRegisterCompanyClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'About Us')
      this.$router.push('/about-us/company-register')
    }
  }
}
</script>

<style lang="less" scoped>
.member-focused-container {
  padding: 96px 96px 0;
}

.circle-container {
  position: relative;
  overflow: hidden;

  .circle-background {
    position: absolute;
    z-index: 1;

    img {
      width: 100%;
      height: auto;
    }
  }

  .circle-right-375 {
    display: none;
  }

  .circle-top-right {
    right: 0;
  }

  .circle-left {
    top: 100px;
  }

  .circle-bottom {
    left: 36%;
    bottom: 0;
  }
}

.member-focused-content {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  background: #E2EAF4;
  position: relative;
  overflow: hidden;
  padding: 48px 96px;

  .left-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    z-index: 2;

    .left-content {
      color: #4C4F54;

      .sub-text {
        margin: 32px 0 60px;
      }

      .register-cta {
        .register-btn {
          display: inline-block;
          padding: 16px 24px;
          background: #0146AB;
          color: #fff;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid #0146AB;
          transition: all 0.5s;
        }

        .register-btn:hover {
          background: #E2EAF4;
          color: #0146AB;
        }
      }
    }
  }

  .right-container {
    width: 30%;
    z-index: 2;

    .picture-container {

      .picture-box {
        width: 100%;
        // min-width: 315px;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .member-focused-container {
    padding: 32px 24px 0;
  }

  .circle-container {
    .circle-right-375 {
      display: block;
      right: 0;
      bottom: 44px;
      width: 30%;
    }

    .circle-top-right {
      display: none;
    }

    .circle-left {
      width: 30%;
      top: 16px;

      img {
        width: 100%;
        height: auto;
      }
    }

    .circle-bottom {
      display: none;
    }
  }

  .member-focused-content {
    padding: 24px;
    gap: 16px;
    flex-direction: column;

    .left-container {
      width: 100%;

      .left-content {
        .sub-text {
          margin: 16px 0 24px;
        }
      }
    }

    .right-container {
      width: 100%;
      order: -1;

      .picture-container {
        display: flex;
        justify-content: center;

        .picture-box {
          width: 75%;
        }
      }
    }
  }
}
</style>
