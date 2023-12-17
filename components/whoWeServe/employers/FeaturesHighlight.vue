<template>
  <section class="service-container">
    <div class="service-content">
      <div class="service-box feature1">
        <div class="service icon">
          <div class="icon-box">
            <img src="~/assets/images/employers/feature1.png">
          </div>
        </div>
        <div class="description-box">
          <div class="description">
            {{ $t('WHO_WE_SERVE.EMPLOYERS.FEATURES.CURATED') }}
          </div>
        </div>
      </div>
      <div class="service-box feature2">
        <div class="service icon network">
          <div class="icon-box">
            <img src="~/assets/images/employers/feature2.png">
          </div>
        </div>
        <div class="description-box">
          <div class="description">
            {{ $t('WHO_WE_SERVE.EMPLOYERS.FEATURES.DIGITAL') }}
          </div>
        </div>
      </div>
      <div class="service-box feature3">
        <div class="service icon">
          <div class="icon-box">
            <img src="~/assets/images/employers/feature3.png">
          </div>
        </div>
        <div class="description-box">
          <div class="description">
            {{ $t('WHO_WE_SERVE.EMPLOYERS.FEATURES.PATIENT') }}
          </div>
        </div>
      </div>
      <div class="service-box feature4">
        <div class="service icon">
          <div class="icon-box">
            <img src="~/assets/images/employers/feature4.png">
          </div>
        </div>
        <div class="description-box">
          <div class="description">
            {{ $t('WHO_WE_SERVE.EMPLOYERS.FEATURES.ENGAGEMENT') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EmployersFeaturesHighlight'
}
</script>

<style lang="less" scoped>
.service-container {
  padding: 0 96px;
}

.service-content {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: #E2EAF4;
  padding: 56px 96px;
  gap: 64px;

  .service-box {
    display: flex;
    gap: 16px;

    &.feature1 {
      width: 24%;
    }

    &.feature2 {
      width: 26%;
    }

    &.feature3 {
      width: 25%;
    }

    &.feature4 {
      width: 25%;
    }

    .service.icon {
      width: 75%;
      min-width: 56px;
      max-width: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .icon-box {
        width: 100%;

        img {
          width: 100%;
          height: auto;
        }
      }

      &.network {
        width: 60%;
      }
    }

    .description-box {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .description {
        font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
        font-weight: 400;
        color: #4C4F54;
      }
    }
  }
}

// @media screen and (max-width: 1429px) {
@media screen and (max-width: 1495px) {
  .service-content {
    padding: 56px 48px;
    // gap: 32px;

    .service-box.feature2 {
      width: 28%;
    }
  }
}

@media screen and (max-width: 1280px) {
  .service-content {
    padding: 56px 48px;
    gap: 32px;

    .service-box.feature2 {
      width: 28%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .service-content {
    padding: 56px 32px;
    gap: 32px;
  }
}

@media screen and (max-width: 934px) {
  .service-container {
    padding: 0 48px;
  }
}

@media screen and (max-width: 768px) {
  .service-container {
    padding: 0 24px;
  }

  .service-content {
    padding: 16px 24px;
    gap: 16px;
    flex-direction: column;

    .service-box {
      &.feature1 {
        width: 100%;
      }

      &.feature2 {
        width: 100%;
      }

      &.feature3 {
        width: 100%;
      }

      &.feature4 {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .service-content {
    .service-box {
      .service.icon {
        width: 50px;
        min-width: 50px;
        max-width: unset;

        &.network {
          // width: 40px;
          width: 64px;
          min-width: 50px;
        }
      }
    }
  }
}
</style>
