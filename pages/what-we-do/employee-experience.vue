<template>
  <div class="employee-wrapper">
    <WhatWeDoEmployeeExperienceHeaderDescription />
    <WhatWeDoEmployeeExperienceQuoteTestimonial />
    <WhatWeDoEmployeeExperienceMobileExperience />
    <WhatWeDoEmployeeExperienceMemberFocused />
    <WhatWeDoEmployeeExperienceCardExperience />
    <WhatWeDoEmployeeExperienceLatestNews />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('TITLE_EMPLOYEE_EXPERIENCE')
    }
  }
}
</script>

<style lang="less" scoped>
.employee-wrapper {
  padding-top: 78px;
  overflow: hidden;
}
</style>
