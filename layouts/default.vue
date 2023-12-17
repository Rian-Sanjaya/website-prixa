<template>
  <div class="default-wrapper">
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=257344499949249&ev=PageView&noscript=1" /></noscript>
    <OverlayRating :class="['overlay-rating', $store.state.ratingPopupShow ? 'show' : '']" />
    <RatingContent :class="['rating-container', $store.state.ratingPopupShow ? 'show' : '']" />
    <LayoutHeader />
    <Nuxt />
    <LayoutFooter />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  mounted () {
    if (this.$store.state.alreadyRating) { return }
    clearTimeout(this.$store.state.ratingTimeout)
    this.$store.commit(
      'setRatingTimeout',
      setTimeout(() => {
        this.$store.commit('setRatingPopupShow', true)
      }, 120000)
    )
    // this.$store.commit(
    //   'setRatingTimeout',
    //   setTimeout(() => {
    //     this.$store.commit('setRatingPopupShow', true)
    //   }, 3000)
    // )
  },
  destroyed () {
    clearTimeout(this.$store.state.ratingTimeout)
  },
  methods: {
    ...mapMutations[{
      setRatingPopupShow: 'setRatingPopupShow',
      setRatingTimeout: 'setRatingTimeout'
    }]
  }
}
</script>

<style lang="less" scoped>
.default-wrapper {
  min-width: 375px;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;

  .overlay-rating, .rating-container {
    display: none;

    &.show {
      display: block;
    }
  }
}
</style>
