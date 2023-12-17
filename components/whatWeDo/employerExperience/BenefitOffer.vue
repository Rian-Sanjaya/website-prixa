<template>
  <section class="pd-96 mobile-experience-container">
    <div class="mobile-experience-content">
      <div class="mobile-experience1">
        <div class="left-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/employer-experience/benefit1.png">
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-content">
            <div class="headText head-text">
              {{ $t('EMPLOYER_EXPERIENCE.BENEFIT_OFFER.NOW_HEAD') }}
            </div>
            <div class="subText sub-text">
              {{ $t('EMPLOYER_EXPERIENCE.BENEFIT_OFFER.NOW_DESCRIPTION') }}
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-experience2">
        <div class="left-container">
          <div class="left-content">
            <div class="headText head-text">
              {{ $t('EMPLOYER_EXPERIENCE.BENEFIT_OFFER.SIMPLIFIED_HEAD') }}
            </div>
            <div class="subText sub-text">
              {{ $t('EMPLOYER_EXPERIENCE.BENEFIT_OFFER.SIMPLIFIED_DESCRIPTION') }}
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/employer-experience/benefit2.png">
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-experience3">
        <div class="left-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/employer-experience/benefit3.png">
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-content">
            <div class="headText head-text">
              {{ $t('EMPLOYER_EXPERIENCE.BENEFIT_OFFER.ELIBILITY_HEAD') }}
            </div>
            <div class="subText sub-text">
              {{ $t('EMPLOYER_EXPERIENCE.BENEFIT_OFFER.ELIBILITY_DESCRIPTION') }}
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-experience4">
        <div class="left-container">
          <div class="left-content">
            <div class="headText head-text">
              {{ $t('EMPLOYER_EXPERIENCE.BENEFIT_OFFER.EFFECTIVELY_HEAD') }}
            </div>
            <div class="subText sub-text">
              {{ $t('EMPLOYER_EXPERIENCE.BENEFIT_OFFER.EFFECTIVELY_DESCRIPTION') }}
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/employer-experience/benefit4.png">
            </div>
          </div>
        </div>
      </div><div class="mobile-experience5">
        <div class="left-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/employer-experience/benefit5.png">
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-content">
            <div class="headText head-text">
              {{ $t('EMPLOYER_EXPERIENCE.BENEFIT_OFFER.ACCESS_HEAD') }}
            </div>
            <div class="subText sub-text">
              {{ $t('EMPLOYER_EXPERIENCE.BENEFIT_OFFER.ACCESS_DESCRIPTION') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.mobile-experience-content {
  padding: 0 48px;

  .mobile-experience1, .mobile-experience2, .mobile-experience3, .mobile-experience4, .mobile-experience5 {
    display: flex;
    gap: 80px;
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

  .mobile-experience2, .mobile-experience4 {
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

  .mobile-experience2, .mobile-experience3, .mobile-experience4, .mobile-experience5 {
    margin-top: 72px;
  }
}

@media screen and (max-width: 768px) {
  .mobile-experience-container {
    padding: 32px 24px;
  }

  .mobile-experience-content {
    padding: 0 48px;

    .mobile-experience1, .mobile-experience2, .mobile-experience3, .mobile-experience4, .mobile-experience5 {
      flex-direction: column;
      gap: 16px;

      .left-container {
        width: 100%;

        // .picture-container {
        //   .picture-box {
        //     width: 100%;
        //   }
        // }
      }

      .right-container {
        width: 100%;

        .right-content {
          .sub-text {
            margin-top: 16px;
          }
        }
      }
    }

    .mobile-experience2, .mobile-experience4 {
      .left-container {
        .left-content {
          .sub-text {
            margin-top: 16px;
          }
        }
      }

      .right-container {
        order: -1;

        .picture-box {
          width: 95%;
        }
      }
    }

    .mobile-experience2, .mobile-experience3, .mobile-experience4, .mobile-experience5 {
      margin-top: 48px;
    }
  }
}
</style>
