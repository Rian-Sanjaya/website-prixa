<template>
  <section class="service-container">
    <div class="service-content">
      <div class="service-box service1">
        <div class="service icon">
          <div class="icon-box">
            <img src="~/assets/images/members/service1.png">
          </div>
        </div>
        <div class="description-box">
          <div class="description">
            {{ $t('WHO_WE_SERVE.MEMBERS.SERVICE.DETAILED') }}
          </div>
        </div>
      </div>
      <div class="service-box service2">
        <div class="service icon network">
          <div class="icon-box">
            <img src="~/assets/images/members/service2.png">
          </div>
        </div>
        <div class="description-box">
          <div class="description">
            {{ $t('WHO_WE_SERVE.MEMBERS.SERVICE.NETWORK') }}
          </div>
        </div>
      </div>
      <div class="service-box service3">
        <div class="service icon">
          <div class="icon-box">
            <img src="~/assets/images/members/service3.png">
          </div>
        </div>
        <div class="description-box">
          <div class="description">
            {{ $t('WHO_WE_SERVE.MEMBERS.SERVICE.EXPLORE') }}
          </div>
        </div>
      </div>
      <div class="service-box service4">
        <div class="service icon">
          <div class="icon-box">
            <img src="~/assets/images/members/service4.png">
          </div>
        </div>
        <div class="description-box">
          <div class="description">
            {{ $t('WHO_WE_SERVE.MEMBERS.SERVICE.REACH') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MembersServiceDescription'
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

    &.service1 {
      width: 24%;
    }

    &.service2 {
      width: 28%;
    }

    &.service3 {
      width: 24%;
    }

    &.service4 {
      width: 24%;
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

@media screen and (max-width: 1024px) {
  .service-content {
    padding: 56px 32px;
    gap: 32px;
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
      &.service1 {
        width: 100%;
      }

      &.service2 {
        width: 100%;
      }

      &.service3 {
        width: 100%;
      }

      &.service4 {
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
        min-width: unset;
        max-width: unset;

        &.network {
          width: 40px;
        }
      }
    }
  }
}
</style>
