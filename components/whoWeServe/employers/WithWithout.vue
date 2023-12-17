<template>
  <section class="pd-96 without-container">
    <div class="without-content">
      <div class="without-toggle-box">
        <div class="toggle-box">
          <a-radio-group v-model="without" :size="$store.state.screenSize > 480 ? 'large' : 'medium'" @change="handleToggleChange">
            <a-radio-button
              value="without"
              class="without-box"
              :style="{
                background: without === 'without' ? '#E2EAF4' : '#ffffff',
                color: without === 'without' ? '#0146AB' : 'rgba(0, 0, 0, 0.85)',
                fontWeight: without === 'without' ? '700' : '400',
                borderColor: without === 'without' ? '#0146AB' : '#D9D9D9'
              }"
            >
              Without Prixa
            </a-radio-button>
            <a-radio-button
              value="with"
              class="with-box"
              :style="{
                background: without === 'with' ? '#E2EAF4' : '#ffffff',
                color: without === 'with' ? '#0146AB' : 'rgba(0, 0, 0, 0.85)',
                fontWeight: without === 'with' ? '700' : '400',
                borderColor: without === 'with' ? '#0146AB' : '#D9D9D9'
              }"
            >
              With Prixa
            </a-radio-button>
          </a-radio-group>
        </div>
        <div class="empty-box" />
      </div>
      <div class="without1">
        <div class="left-container">
          <div :class="['picture-container', without !== 'without' ? 'hidden' : '']">
            <div class="picture-box">
              <img src="~/assets/images/employers/without1.png">
            </div>
          </div>
          <div :class="['picture-container2', without === 'without' ? 'hidden' : '']">
            <div class="picture-box2">
              <img src="~/assets/images/employers/without2.png">
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-content">
            <div class="headText head-text">
              {{ $t('WHO_WE_SERVE.EMPLOYERS.WITH.GENERATE') }}
            </div>
            <div class="subText sub-text">
              {{ $t('WHO_WE_SERVE.EMPLOYERS.WITH.ASSIST') }}
            </div>
            <div class="partner-cta">
              <div class="partner-btn-box">
                <div class="partner-btn" @click="onSeePartnerClick">
                  See Our Partners
                </div>
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
      without: 'without'
    }
  },
  methods: {
    ...mapMutations({
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen',
      setMenuMobileOpen: 'setMenuMobileOpen'
    }),
    handleToggleChange (e) {
      window.console.log(`checked = ${e.target.value}`)
    },
    onSeePartnerClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'Who We Serve')
      this.$router.push('/who-we-serve/partners')
    }
  }
}
</script>

<style lang="less" scoped>
.without-content {
  padding: 0 48px;

  .without-toggle-box {
    display: flex;
    // gap: 96px;
    gap: 9%;
    justify-content: space-between;
    margin-bottom: 64px;

    .toggle-box {
      width: 50%;
      text-align: center;

      .without-box, .with-box {
        font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px;
        padding-left: 24px;
        padding-right: 24px;
      }
    }

    .empty-box {
      width: 47%;
    }
  }

  .without1 {
    display: flex;
    gap: 9%;
    justify-content: space-between;

    .left-container, .right-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      // padding: 0 120px;
    }

    .left-container {
      width: 50%;
      position: relative;
      overflow: hidden;

      .picture-container {
          display: flex;
          justify-content: center;
          opacity: 1;
          transition: 0.5s ease;

        .picture-box {
          width: 100%;

          img {
            width: 100%;
            height: auto;
          }
        }

        &.hidden {
          transform: translateX(-100%);
          opacity: 0;
        }
      }

      .picture-container2 {
        position: absolute;
        transform: translateX(0);
        opacity: 1;
        transition: 0.5s ease;

        .picture-box2 {
          width: 100%;

          img {
            width: 100%;
            height: auto;
          }
        }

        &.hidden {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    }

    .right-container {
      width: 47%;

      .right-content {
        text-align: center;

        .sub-text {
          margin: 32px 0 48px;
        }

        .partner-btn {
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

        .partner-btn:hover {
          background: #fff;
          color: #0146AB;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .without-container {
    padding: 32px 24px;
  }

  .without-content {
    padding: 0;

    .without-toggle-box {
      padding: 0 60px;
      margin-bottom: 24px;

      .toggle-box {
        width: 100%;
      }

      .empty-box {
        display: none;
      }
    }

    .without1 {
      flex-direction: column;
      gap: 24px;

      .left-container, .right-container {
        width: 100%;
        padding: 0 40px;

        .picture-container2 {
          .picture-box2 {
            width: 96%;
          }
        }

        .right-content {
          .sub-text {
            margin: 16px 0 24px;
          }
        }
      }

      .right-container {
        padding: 0;
      }
    }
  }
}

@media screen and (max-width: 560px) {
  .without-content {
    .without1 {
      .left-container {
        .picture-container2 {
          .picture-box2 {
            width: 93%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .without-content {
    .without-toggle-box {
      .toggle-box {
        .without-box, .with-box {
          padding-left: 16px;
          padding-right: 16px;
        }
      }
    }
  }

  .without1 {
    .left-container {
      .picture-container {
        .picture-box {
          // width: 336px;
          min-width: 259px;
        }
      }
    }
  }
}

@media screen and (max-width: 560px) {
  .without-content {
    .without1 {
      .left-container {
        .picture-container2 {
          .picture-box2 {
            width: 90%;
          }
        }
      }
    }
  }
}
</style>
