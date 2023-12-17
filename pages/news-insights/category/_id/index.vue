<template>
  <div class="section-wrapper category-wrapper">
    <NewsInsightsCategoryHeaderDescription :category-id="$route.params.id" />
    <NewsInsightsCategoryListNews :category-id="$route.params.id" />
    <NewsInsightsCategoryWellKnown />
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
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
