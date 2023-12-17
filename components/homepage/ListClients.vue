<template>
  <section class="pd-96 list-clients-container">
    <div class="list-clients-content">
      <div class="left-container">
        <div class="head-text">
          {{ $t('HOME_CLIENT_HEADING') }}
        </div>
        <div class="sub-text">
          {{ $t('HOME_CLIENT_INNER') }}
        </div>
        <div class="cta-button-box">
          <div class="cta-button" @click="onSeeMoreClick">
            {{ $t('SEE_MORE') }}
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="clients-image-box">
          <img src="~/assets/images/homepage/list-clients.png">
        </div>
      </div>
    </div>
    <div class="mobile-content-cta">
      <div class="cta-button-box">
        <div class="cta-button" @click="onSeeMoreClick">
          {{ $t('SEE_MORE') }}
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
      setMenuOpen: 'setMenuOpen'
    }),
    onSeeMoreClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'Who We Serve')
      this.$router.push('/who-we-serve/employers')
    }
  }
}
</script>

<style lang="less" scoped>
.list-clients-content {
  display: flex;
  justify-content: space-between;
  gap: 48px;

  .left-container {
    width: 52%;
    padding-left: 48px;

    .head-text {
      font-size: clamp(1.145rem, 2.55vw, 2.3rem);
      font-weight: 700;
      color: #4C4F54;
    }

    .sub-text {
      font-size: clamp(0.9rem, 1.2vw, 1.145rem);
      font-weight: 400;
      color: #4C4F54;
      margin: 48px 0;
    }

    .cta-button {
      font-size: 14px;
      font-weight: 700;
      background: #0146AB;
      border-radius: 8px;
      color: #ffffff;
      padding: 16px 24px;
      border-radius: 8px;
      display: inline-block;
      cursor: pointer;
      border: 1px solid #0146AB;
      transition: all 0.5s;
    }

    .cta-button:hover {
      background: #fff;
      color: #0146AB;
    }
  }

  .right-container {
    width: 48%;
    padding-right: 48px;

    .clients-image-box {
      text-align: right;
      width: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

.mobile-content-cta {
  display: none;
}

@media screen and (max-width: 768px) {
  .list-clients-content {
    flex-direction: column;
    gap: 0;

    .left-container {
      width: 100%;
      padding-left: 0;
      text-align: center;

      .head-text {
        font-size: clamp(1.45rem, 2.55vw, 2.3rem);
      }

      .sub-text {
        font-size: clamp(0.86rem, 1.2vw, 1.145rem);
        margin: 16px 0 32px;
      }

      .cta-button-box {
        display: none;
      }
    }

    .right-container {
      width: 100%;
      padding-right: 0;
    }
  }

  .mobile-content-cta {
    display: block;
    margin-top: 32px;

    .cta-button-box {
      text-align: center;

      .cta-button {
        font-size: 0.9rem;
        font-weight: 700;
        background: #0146AB;
        color: #ffffff;
        padding: 16px 24px;
        border-radius: 8px;
        display: inline-block;
        cursor: pointer;
        border: 1px solid #0146AB;
        transition: all 0.5s;
      }

      .cta-button:hover {
        background: #fff;
        color: #0146AB;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .list-clients-container {
    padding: 32px 24px;
  }
}
</style>
