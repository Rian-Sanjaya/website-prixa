<template>
  <div class="section-wrapper members-wrapper">
    <AboutUsCompanyOverviewPoweringHealthcare />
    <AboutUsCompanyOverviewCoreValues />
    <AboutUsCompanyOverviewQuoteTestimonial />
    <AboutUsCompanyOverviewOurClients />
    <WhatWeDoEmployeeExperienceLatestNews />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('TITLE_COMPANY_OVERVIEW')
    }
  }
}
</script>
