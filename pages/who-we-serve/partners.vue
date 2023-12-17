<template>
  <div class="section-wrapper partners-wrapper">
    <WhoWeServePartnersCollectiveCollaboration />
    <WhoWeServePartnersEngagementContribute />
    <WhoWeServePartnersOurPartners />
    <WhoWeServePartnersLatestNews />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('TITLE_PARTNER')
    }
  }
}
</script>
