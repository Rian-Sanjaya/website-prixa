<template>
  <section class="pd-96 highlight-container">
    <div class="highlight-content">
      <div class="highlight1">
        <div class="left-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/partner-ecosystem/highlight1.png">
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-content">
            <div class="headText head-text">
              {{ $t('PARTNER_ECOSYSTEM.HIGHLIGHT.TAKE') }}
            </div>
            <div class="subText sub-text">
              {{ $t('PARTNER_ECOSYSTEM.HIGHLIGHT.BELIEVE') }}
            </div>
          </div>
        </div>
      </div>
      <div class="highlight2">
        <div class="left-container">
          <div class="left-content">
            <div class="headText head-text">
              {{ $t('PARTNER_ECOSYSTEM.HIGHLIGHT.FIND') }}
            </div>
            <div class="subText sub-text">
              {{ $t('PARTNER_ECOSYSTEM.HIGHLIGHT.WITH') }}
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/partner-ecosystem/highlight2.png">
            </div>
          </div>
        </div>
      </div>
      <div class="highlight3">
        <div class="left-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/partner-ecosystem/highlight3.png">
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-content">
            <div class="headText head-text">
              {{ $t('PARTNER_ECOSYSTEM.HIGHLIGHT.INTEGRATED') }}
            </div>
            <div class="subText sub-text">
              {{ $t('PARTNER_ECOSYSTEM.HIGHLIGHT.INTREGATION') }}
            </div>
          </div>
        </div>
      </div>
      <div class="highlight4">
        <div class="left-container">
          <div class="left-content">
            <div class="headText head-text">
              {{ $t('PARTNER_ECOSYSTEM.HIGHLIGHT.DRIVE') }}
            </div>
            <div class="subText sub-text">
              {{ $t('PARTNER_ECOSYSTEM.HIGHLIGHT.THROUGH') }}
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/partner-ecosystem/highlight4.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.highlight-content {
  padding: 0 120px;

  .highlight1, .highlight2, .highlight3, .highlight4 {
    display: flex;
    // gap: 96px;
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
          margin-top: 32px;
        }
      }
    }
  }

  .highlight2, .highlight4 {
    .left-container {
      width: 60%;

      .left-content {
        .sub-text {
          margin-top: 32px;
        }
      }
    }

    .right-container {
      width: 40%;

      .picture-container {
          display: flex;
          justify-content: center;

        .picture-box {
          width: 80%;

          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }

  .highlight2, .highlight3, .highlight4 {
    margin-top: 65px;
  }
}

@media screen and (max-width: 768px) {
  .highlight-container {
    padding: 0 24px 32px;
  }

  .highlight-content {
    padding: 0 58px;

    .highlight1, .highlight2, .highlight3, .highlight4 {
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

    .highlight2, .highlight4 {
      .right-container {
        order: -1;
      }
    }

    .highlight2, .highlight3, .highlight4 {
      margin-top: 48px;
    }
  }
}
</style>
