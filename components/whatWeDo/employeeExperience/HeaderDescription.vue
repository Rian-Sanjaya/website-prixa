<template>
  <section class="pd-96 description-container">
    <div class="description-content">
      <div class="left-content">
        <div class="employee-box">
          <div class="icon-box">
            <img src="~/assets/images/employee-experience/header-description-icon.png">
          </div>
          <div class="font-14-20-20 employee-text-box">
            <div class="employee-text">
              {{ $t('MENU.LIST1.EMPLOYEE_EXPERIENCE') }}
            </div>
          </div>
        </div>
        <div class="font-24-48-49 head-text">
          <div class="head-text-1">
            {{ $t('EMPLOYEE_EXPERIENCE.HEADER.BETTER_EXPERIENCE') }}
          </div>
          <div class="head-text-2">
            {{ $t('EMPLOYEE_EXPERIENCE.HEADER.PRODUCTIVE_EMPLOYEE') }}
          </div>
        </div>
        <div class="font-12-16-16 description">
          {{ $t('EMPLOYEE_EXPERIENCE.HEADER.DESCRIPTION') }}
        </div>
      </div>
      <div class="right-content">
        <div class="picture-container">
          <div class="picture-box">
            <img src="~/assets/images/employee-experience/header-description-picture.png">
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
    })
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

    .employee-box {
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

      .employee-text-box {
        color: #7D83B4;
        font-weight: 500;
        display: flex;
        align-items: center;
      }
    }

    .head-text {
      color: #4C4F54;
      font-weight: 300;
      margin: 24px 0 16px;

      .head-text-2 {
        font-weight: 700;
      }
    }

    .description {
      color: #4C4F54;
      font-weight: 400;
      margin-bottom: 24px;
    }
  }

  .right-content {
    width: 35%;

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

@media screen and (max-width: 1131px) {
  .description-content {
    .right-content {

      .picture-container {
        .picture-box {
          min-width: 266.69px;
          max-width: 266.69px;
        }
      }
    }
  }
}

@media screen and (max-width: 980px) {
  .description-content {
    gap: 32px;

    .left-content {
      width: 55%;
    }

    .right-content {
      width: 45%;
    }
  }
}

@media screen and (max-width: 768px) {
  .description-container {
    padding: 32px 24px;
  }

  .description-content {
    flex-direction: column;
    gap: 18px;
    padding: 0;

    .left-content {
      width: 100%;

      .employee-box {
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

    .right-content {
      width: 100%;
      order: -1;

      .picture-container {
        .picture-box {
          width: 58%;
          min-width: unset;
          max-width: unset;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .description-content {
    .left-content {
      .head-text {
        font-size: 24px;
      }
    }

    .right-content {
      .picture-container {
        .picture-box {
          width: 78%;
        }
      }
    }
  }
}
</style>
