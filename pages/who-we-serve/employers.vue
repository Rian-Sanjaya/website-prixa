<template>
  <div class="section-wrapper employers-wrapper">
    <WhoWeServeEmployersCTARegister />
    <WhoWeServeEmployersFeaturesHighlight />
    <WhoWeServeEmployersWithWithout />
    <WhoWeServeEmployersAnalyticSupport />
    <WhoWeServeEmployersClients />
    <WhoWeServeEmployersHealthServices />
    <WhatWeDoEmployeeExperienceLatestNews />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('TITLE_EMPLOYER')
    }
  }
}
</script>
