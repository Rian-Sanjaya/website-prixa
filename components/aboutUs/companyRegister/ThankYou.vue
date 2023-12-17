<template>
  <section class="thank-you-container">
    <div class="thank-you-content">
      <div class="image-box">
        <img src="~/assets/images/thank-you/thank-you.png">
      </div>
      <div class="text-content">
        <div class="font-16-32-32 head-text">
          Thank You!
        </div>
        <div class="font-12-16-16 sub-text">
          We have received you message, our team will contact you shortly.
        </div>
        <div class="button-box">
          <button class="back-button" @click="onBackClick">
            Back To Prixa
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

let setTime

export default {
  mounted () {
    clearTimeout(setTime)
    setTime = setTimeout(() => {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', '')
      this.$router.push('/')
      if (this.$store.state.alreadyRating) { return }
      clearTimeout(this.$store.state.ratingTimeout)
      this.$store.commit(
        'setRatingTimeout',
        setTimeout(() => {
          this.$store.commit('setRatingPopupShow', true)
        }, 2000)
      )
    }, 15000)
  },
  destroyed () {
    clearTimeout(setTime)
  },
  methods: {
    ...mapMutations([{
      setRatingTimeout: 'setRatingTimeout',
      setRatingPopupShow: 'setRatingPopupShow',
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen'
    }]),
    onBackClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', '')
      this.$router.push('/')
      if (this.$store.state.alreadyRating) { return }
      clearTimeout(setTime)
      this.$store.commit(
        'setRatingTimeout',
        setTimeout(() => {
          this.$store.commit('setRatingPopupShow', true)
        }, 2000)
      )
    }
  }
}
</script>

<style lang="less" scoped>
.thank-you-container {
  padding: 64px 96px 96px;
}

.thank-you-content {
  .image-box {
    width: 45%;
    min-width: 327px;
    max-width: 594px;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }

  .text-content {
    text-align: center;
    margin: 16px 0 58px;

    .head-text {
      font-weight: 700;
    }

    .sub-text {
      font-weight: 400;
      margin: 16px 0 40px;
    }

    .button-box {
      .back-button {
        padding: 16px 24px;
        color: #fff;
        font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
        font-weight: 700;
        background: #0146AB;
        display: inline-block;
        border-radius: 8px;
        cursor: pointer;
        position: relative;
        border: 1px solid #0146AB;
        transition: all 0.5s;

        &:hover {
          background: #FFF;
          color: #0146AB;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .thank-you-container {
    padding: 32px 24px;
  }
}
</style>
