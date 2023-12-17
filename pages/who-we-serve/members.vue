<template>
  <div class="section-wrapper members-wrapper">
    <WhoWeServeMembersHeaderTestimonialVideo />
    <WhoWeServeMembersServicesDescription />
    <WhoWeServeMembersClientServe />
    <WhatWeDoEmployeeExperienceLatestNews />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('TITLE_MEMBER')
    }
  }
}
</script>
