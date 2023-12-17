<template>
  <div class="rating-container">
    <!-- <div class="rating-content">
      <div class="star-box">
        Star Box
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'OverlayRating'
}
</script>

<style lang="less" scoped>
.rating-container {
  position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1061;
    opacity: 0.5;
    background: grey;
}

// .star-box {
//   width: 300px;
//   height: 300px;
//   background: #fff;
// }
</style>
