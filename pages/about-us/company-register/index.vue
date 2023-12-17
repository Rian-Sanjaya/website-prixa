<template>
  <div class="section-wrapper company-register-wrapper">
    <AboutUsCompanyRegisterHeaderDescription />
    <AboutUsCompanyRegisterOurPartners />
    <WhatWeDoEmployeeExperienceLatestNews />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('TITLE_COMPANY_REGISTER')
    }
  }
}
</script>
