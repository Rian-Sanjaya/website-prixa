<template>
  <section class="clients-container">
    <div class="clients-content">
      <div class="font-20-32-32 head-text">
        {{ $t('WHO_WE_SERVE.EMPLOYERS.CLIENTS.CLIENTS') }}
      </div>
      <div class="picture-container">
        <div class="picture-box">
          <img src="~/assets/images/contact-us/our-clients.png">
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
      this.$router.push('/who-we-serve/employers')
    }
  }
}
</script>

<style lang="less" scoped>
.clients-container {
  position: relative;
  padding: 48px 96px;
}

.clients-content {
  // padding: 0 64px;
  padding: 0 96px;

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
  // .clients-content {
  //   padding: 0 224px;
  // }
}

@media screen and (max-width: 1119px) {
  // .clients-content {
  //   padding: 0 192px;
  // }
}

@media screen and (max-width: 1024px) {
  // .clients-content {
  //   padding: 0 160px;
  // }
}

@media screen and (max-width: 768px) {
  .clients-container {
      padding: 32px 24px;
  }

  .clients-content {
    padding: 0;
  }
}
</style>
