<template>
  <div class="section-wrapper employer-wrapper">
    <WhatWeDoEmployerExperienceHeaderDescription />
    <WhatWeDoSolutionQuoteTestimonial />
    <WhatWeDoEmployerExperienceBenefitOffer />
    <WhatWeDoEmployerExperienceTestimonialVideo />
    <WhatWeDoEmployerExperienceCardExperience />
    <WhatWeDoEmployeeExperienceLatestNews />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('TITLE_EMPLOYER_EXPERIENCE')
    }
  }
}
</script>
