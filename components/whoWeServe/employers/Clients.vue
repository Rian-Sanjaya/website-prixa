<template>
  <section class="pd-96 clients-container">
    <div class="clients-content">
      <div class="font-20-32-32 head-text">
        {{ $t('WHO_WE_SERVE.EMPLOYERS.CLIENTS.CLIENTS') }}
      </div>
      <div class="picture-container">
        <div class="picture-box">
          <img src="~/assets/images/employers/clients.png">
        </div>
      </div>
    </div>
    <div class="many-more-container">
      <div class="font-12-16-16 many-more-box">
        <hr class="line left"> Many More <hr class="line right">
      </div>
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
            &#8220;{{ $t('WHO_WE_SERVE.EMPLOYERS.CLIENTS.COMPREHENSIVE') }}&#8221;
          </div>
          <div class="register-cta">
            <div class="register-btn-box">
              <div class="register-btn" @click="onRegisterClick">
                {{ $t('WHO_WE_SERVE.EMPLOYERS.CLIENTS.REGISTER') }}
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
  name: 'ClientsPage',
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
.clients-container {
  padding-bottom: 220px;
  position: relative;
}

.clients-content {
  padding: 0 129px;

  .head-text {
    font-weight: 700;
    color: #4C4F54;
    text-align: center;
    margin-bottom: 32px;
  }

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

.many-more-container {
  margin-top: 48px;

  .many-more-box {
    text-align: center;

    .line {
      display: inline-block;
      width: 24px;
      // border: 1px solid #4C4F54;
      border-bottom: 2px;
      border-right: 2px;
      position: relative;
      top: 4px;

      &.left {
        margin-right: 4px;
      }

      &.right {
        margin-left: 4px;
      }
    }
  }
}

.big-experience-quote {
  position: absolute;
  bottom: -5.5%;
  width: 94%;
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
        transition: background 0.5s;
      }

      .register-btn:hover {
        background: #55B9E4;
        border-color: #0146AB;
      }
    }
  }
}

@media screen and (max-width: 1669px) {
  .big-experience-quote {
    bottom: -8%;
  }
}

@media screen and (max-width: 1512px) {
  .big-experience-quote {
    bottom: -9%;
    width: 93%;
  }
}

@media screen and (max-width: 1298px) {
  .many-more-container {
    margin-top: 48px;
    .many-more-box {
      .line {
        top: 2px;
      }
    }
  }

  .big-experience-quote {
    bottom: -10%;
    width: 93%;
  }
}

@media screen and (max-width: 1180px) {
  .clients-content {
    padding: 0 105px;
  }

  .big-experience-quote {
    bottom: -10%;
    width: 92%;
  }
}

@media screen and (max-width: 998px) {
  .big-experience-quote {
    bottom: -11%;
    width: 91%;
  }
}

@media screen and (max-width: 868px) {
  .clients-content {
    padding: 0 81px;
  }

  .big-experience-quote {
    bottom: -12%;
    // width: 93%;
    width: 89%;
  }
}

@media screen and (max-width: 768px) {
  .clients-container {
      padding: 32px 24px 180px;
  }

  .clients-content {
    padding: 0;
  }

  .big-experience-quote {
    width: 94%;
    padding-right: 0;
    bottom: -8%;

    .big-experience-content {
      .circle-background-box {
        width: 44%;
        right: 8px;
      }

      .quote-box {
        padding: 24px;
      }
    }
  }
}

@media screen and (max-width: 678px) {
  .big-experience-quote {
    padding-right: 8px;
    bottom: -9%;
  }
}

@media screen and (max-width: 600px) {
  .big-experience-quote {
    padding-right: 12px;
    bottom: -10%;
  }
}

@media screen and (max-width: 520px) {
  .big-experience-quote {
    bottom: -11%;
  }
}

@media screen and (max-width: 515px) {
  .big-experience-quote {
    padding-right: 15px;
    bottom: -11%;
  }
}

@media screen and (max-width: 467px) {
  .big-experience-quote {
    padding-right: 17px;
    bottom: -13%;
  }
}

@media screen and (max-width: 450px) {
  .big-experience-quote {
    padding-right: 20px;
    bottom: -14%;
  }
}

@media screen and (max-width: 381px) {
  .big-experience-quote {
    padding-right: 23px;
    bottom: -15%;
  }
}
</style>
