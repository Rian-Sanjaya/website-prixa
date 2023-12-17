<template>
  <section class="engagement-container">
    <div class="engagement-content">
      <div class="engagement">
        <div class="left-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/partners/engagement.png">
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-content">
            <div class="headText head-text">
              {{ $t('WHO_WE_SERVE.PARTNERS.ENGAGEMENT.ENGAGEMENT') }}
            </div>
            <div class="subText sub-text">
              {{ $t('WHO_WE_SERVE.PARTNERS.ENGAGEMENT.DIRECT') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnersEngagement'
}
</script>

<style lang="less" scoped>
.engagement-container {
  padding: 0 96px;
}

.engagement-content {
  padding: 0 120px;

  .engagement {
    display: flex;
    gap: 9%;
    justify-content: space-between;

    .left-container, .right-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .left-container {
      width: 40%;

      .picture-container {
          display: flex;
          justify-content: center;

        .picture-box {
          width: 100%;

          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }

    .right-container {
      width: 60%;

      .right-content {
        .sub-text {
          margin-top: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 920px) {
  .engagement-content {
    .engagement {
      .left-container {
        min-width: 182.36px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .engagement-container {
    // padding: 32px 24px;
    padding: 0 24px;
  }

  .engagement-content {
    padding: 0 60px;

    .engagement {
      flex-direction: column;
      gap: 16px;

      .left-container, .right-container {
        width: 100%;

        .left-content {
          .sub-text {
            margin-top: 16px;
          }
        }

        .right-content {
          .sub-text {
            margin-top: 16px;
          }
        }
      }
    }
  }
}

// @media screen and (max-width: 480px) {
//   .engagement-container {

//   }
// }
</style>
