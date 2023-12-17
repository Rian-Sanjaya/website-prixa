<template>
  <div class="section-wrapper article-wrapper">
    <NewsInsightsArticleHeaderDescription :article-id="$route.params.id" />
    <NewsInsightsArticleContent :article-id="$route.params.id" />
    <NewsInsightsArticleRelatedPost />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      lastScrollTop: 0
    }
  },
  head () {
    return {
      title: this.$t('MENU.LIST4.WELL_KNOWN')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    clearTimeout(this.$store.state.ratingTimeout)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapMutations([{
      setRatingTimeout: 'setRatingTimeout',
      setRatingPopupShow: 'setRatingPopupShow'
    }]),
    handleScroll (e) {
      if (this.$store.state.alreadyRating) { return }

      const scrollTop = window.scrollY || document.documentElement.scrollTop
      if (scrollTop > this.lastScrollTop) {
        const sectionHeight = document.getElementById('__layout').clientHeight - (669 + 82 + 500)

        // scroll down only
        if (scrollTop > sectionHeight) {
          clearTimeout(this.$store.state.ratingTimeout)
          this.$store.commit(
            'setRatingTimeout',
            this.$store.commit('setRatingPopupShow', true)
          )
        }
      }
      this.lastScrollTop = scrollTop < 0 ? 0 : scrollTop
    }
  }
}
</script>
