<template>
  <section class="partners-container">
    <div class="partners-content">
      <div class="font-20-32-32 head-text">
        {{ $t('HOME_PARTNER_HEADING') }}
      </div>
      <div class="picture-container">
        <div class="picture-box">
          <img src="~/assets/images/company-register/partners.png">
        </div>
      </div>
      <div class="see-more-btn-box">
        <div class="see-more-btn" @click="onSeeMoreClick">
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
      this.$router.push('/who-we-serve/partners')
    }
  }
}
</script>

<style lang="less" scoped>
.partners-container {
  position: relative;
  padding: 48px 96px;
}

.partners-content {
  padding: 0 128px;

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

  .see-more-btn-box {
    margin-top: 48px;
    text-align: center;

    .see-more-btn {
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

    .see-more-btn:hover {
      background: #fff;
      color: #0146AB;
    }
  }
}

@media screen and (max-width: 1280px) {
  // .partners-content {
  //   padding: 0 224px;
  // }
}

@media screen and (max-width: 1119px) {
  // .partners-content {
  //   padding: 0 192px;
  // }
}

@media screen and (max-width: 1023px) {
  .partners-content {
    padding: 0 104px;
  }
}

@media screen and (max-width: 768px) {
  .partners-container {
      padding: 32px 24px;
  }

  .partners-content {
    padding: 0;
  }
}
</style>
