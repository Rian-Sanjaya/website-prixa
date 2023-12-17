<template>
  <div class="section-wrapper news-insights-wrapper">
    <NewsInsightsBlogFeaturedArticle />
    <NewsInsightsBlogListNews />
    <NewsInsightsBlogWellKnown />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('MENU.LIST4.NEWS_INSIGHT')
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 831px) {
  .section-wrapper {
    padding-top: 82px;
  }
}
</style>
