<template>
  <div class="section-wrapper contact-us-wrapper">
    <AboutUsContactUsHealthBenefits />
    <AboutUsContactUsOurClients />
    <WhatWeDoEmployeeExperienceLatestNews />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('TITLE_CONTACT_US')
    }
  }
}
</script>
