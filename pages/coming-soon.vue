<template>
  <section class="section-wrapper soon-wraper">
    <div class="wraper-container">
      <div class="circle-top-container">
        <img src="~/assets/images/coming-soon/circle-top.png">
      </div>
      <div class="circle-bottom-container">
        <img src="~/assets/images/coming-soon/circle-bottom.png">
      </div>
      <div class="pd-96 soon-container">
        <div class="logo-container">
          <div class="logo-box">
            <img src="~/assets/images/coming-soon/LOGO PRIXA 1.png">
          </div>
        </div>
        <div class="main-container">
          <div class="head-text">
            Coming Soon
          </div>
          <div class="font-16-32-32 sub-text">
            Discover The Latest News Only on Prixa Newsletter
          </div>
        </div>
        <div class="social-media-icon">
          <div class="icon instagram" @click="onInstagramClick">
            <img src="~/assets/images/coming-soon/instagram.png">
          </div>
          <div class="icon linkedin" @click="onLinkedinClick">
            <img src="~/assets/images/coming-soon/linkedin.png">
          </div>
          <div class="icon youtube" @click="onYoutubeClick">
            <img src="~/assets/images/coming-soon/youtube.png">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    onInstagramClick () {
      window.open('https://www.instagram.com/prixa.ai/', '_blank')
    },
    onLinkedinClick () {
      window.open('https://id.linkedin.com/company/prixaai', '_blank')
    },
    onYoutubeClick () {
      window.open('https://www.youtube.com/channel/UCN81lcKjIOZ3zvpJuT5HAxA/videos', '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.wraper-container {
  position: relative;

  .circle-top-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 15%;
    min-width: 75px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .circle-bottom-container {
    position: absolute;
    bottom: 0;
    right: 4px;
    width: 21%;

    img {
      width: 100%;
      height: auto;
    }
  }
}

.soon-container {
  background: #E2EAF4;
  text-align: center;

  .logo-container {
    margin-bottom: 215px;

    .logo-box {
      width: 15.5%;
      min-width: 113px;
      margin: 0 auto;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .main-container {
    color: #0146AB;
    margin-bottom: 264px;

    .head-text {
      font-size: clamp(2.9rem, 7.4vw, 8rem); //16px, 111px, 112px
      font-family: 'Poppins', sans-serif;
      font-weight: 900;
    }

    .sub-text {
      font-weight: 500;
    }
  }

  .social-media-icon {
      .icon {
        cursor: pointer;
        display: inline-block;
        width: 3%;
        min-width: 32px;

        &.linkedin {
          margin: 0 8px;
          position: relative;
          bottom: 2px;
        }

        img {
          width: 100%;
          height: auto;
        }
      }
    }
}

@media screen and (max-width: 768px) {
  .soon-container {
    padding: 32px 24px;
  }

  .wraper-container {
    .circle-bottom-container {
      right: -30px;
      min-width: 125px;
    }
  }
}
</style>
