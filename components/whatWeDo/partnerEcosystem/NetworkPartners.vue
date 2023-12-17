<template>
  <section class="pd-96 network-container">
    <div class="network-content">
      <div class="left-content">
        <div class="picture-container">
          <div class="picture-box">
            <img src="~/assets/images/partner-ecosystem/network-partners.png">
          </div>
        </div>
      </div>
      <div class="right-content">
        <div class="headText head-text">
          <div>
            {{ $t('PARTNER_ECOSYSTEM.NETWORK.BEST') }}
          </div>
        </div>
        <div class="subText description">
          <div>
            {{ $t('PARTNER_ECOSYSTEM.NETWORK.SOLUTION') }}
          </div>
        </div>
        <div class="register-cta">
          <div class="register-btn-box">
            <div class="register-btn" @click="onSeePartnerClick">
              {{ $t('PARTNER_ECOSYSTEM.NETWORK.PARTNERS') }}
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
    onSeePartnerClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'Who We Serve')
      this.$router.push('/who-we-serve/partners')
    }
  }
}
</script>

<style lang="less" scoped>
.network-content {
  display: flex;
  padding: 0 48px;
  gap: 12%;

  .left-content {
    width: 45%;

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

  .right-content {
    width: 55%;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    .description {
      margin: 32px 0 48px;
    }

    .register-btn {
      padding: 16px 24px;
      color: #fff;
      font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
      font-weight: 700;
      background: #0146AB;
      display: inline-block;
      border-radius: 8px;
      cursor: pointer;
      border: 1px solid #0146AB;;
      transition: all 0.5s;
    }

    .register-btn:hover {
      background: #fff;
      color: #0146AB;
    }
  }
}

@media screen and (max-width: 768px) {
  .network-container {
    padding: 46px 24px 32px;
  }

  .network-content {
    flex-direction: column;
    gap: 16px;
    padding: 0;

    .left-content {
      width: 80%;
      margin: 0 auto;
      padding: 0 48px;
    }

    .right-content {
      width: 100%;
    }
  }
}

@media screen and (max-width: 480px) {
  .network-content {
    .left-content {
      width: 100%;
    }

    .right-content {
      .description {
        margin: 16px 0 24px;
      }
    }
  }
}
</style>
