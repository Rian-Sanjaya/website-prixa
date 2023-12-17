<template>
  <div class="section-wrapper home-wrapper">
    <HomepageSliderBanner />
    <HomepageBenefit />
    <HomepageTestimonialVideo />
    <HomepageListClients />
    <HomepageListPartners />
    <HomepageHealthServices />
    <HomepageLatestNews />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  transition: 'fade',
  head () {
    return {
      title: this.$t('TITLE_HOMEPAGE')
    }
  }
}
</script>
