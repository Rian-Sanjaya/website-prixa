<template>
  <section class="mobile-experience-container">
    <div class="mobile-experience-content">
      <div class="mobile-experience1">
        <div class="left-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/employee-experience/mobile-experience1.png">
            </div>
            <div class="picture-box-375">
              <img src="~/assets/images/employee-experience/mobile-experience1-375.png">
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-content">
            <div class="headText head-text">
              {{ $t('EMPLOYEE_EXPERIENCE.MOBILE_EXPERIENCE.IN_YOUR_HAND') }}
            </div>
            <div class="subText sub-text">
              {{ $t('EMPLOYEE_EXPERIENCE.MOBILE_EXPERIENCE.ON_OUR_MOBILE') }}
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-experience2">
        <div class="left-container">
          <div class="left-content">
            <div class="headText head-text">
              {{ $t('EMPLOYEE_EXPERIENCE.MOBILE_EXPERIENCE.NO_NEED_WORRY') }}
            </div>
            <div class="subText sub-text">
              {{ $t('EMPLOYEE_EXPERIENCE.MOBILE_EXPERIENCE.YOU_CAN_CONTACT') }}
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/employee-experience/mobile-experience2.png">
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-experience3">
        <div class="left-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/employee-experience/mobile-experience3.png">
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-content">
            <div class="headText head-text">
              {{ $t('EMPLOYEE_EXPERIENCE.MOBILE_EXPERIENCE.INTEGRATION_PROCESS') }}
            </div>
            <div class="subText sub-text">
              {{ $t('EMPLOYEE_EXPERIENCE.MOBILE_EXPERIENCE.API_INTEGRATION') }}
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-experience4">
        <div class="left-container">
          <div class="left-content">
            <div class="headText head-text">
              {{ $t('EMPLOYEE_EXPERIENCE.MOBILE_EXPERIENCE.WISELY') }}
            </div>
            <div class="subText sub-text">
              {{ $t('EMPLOYEE_EXPERIENCE.MOBILE_EXPERIENCE.SPEND_ENERGY') }}
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/employee-experience/mobile-experience4.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.mobile-experience-container {
  padding: 96px 96px 0;
}

.mobile-experience-content {
  padding: 0 48px;

  .mobile-experience1, .mobile-experience2, .mobile-experience3, .mobile-experience4 {
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

        .picture-box, .picture-box-375 {
          width: 100%;

          img {
            width: 100%;
            height: auto;
          }
        }

        .picture-box-375 {
          display: none;
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

  .mobile-experience2, .mobile-experience3, .mobile-experience4 {
    margin-top: 72px;
  }
}

@media screen and (max-width: 768px) {
  .mobile-experience-container {
    padding: 32px 24px 0;
  }

  .mobile-experience-content {
    padding: 0;

    .mobile-experience1, .mobile-experience2, .mobile-experience3, .mobile-experience4 {
      flex-direction: column;
      gap: 16px;

      .left-container {
        width: 100%;

        .picture-container {
          .picture-box-375 {
            display: block;
            width: 95%;
          }
        }
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

    .mobile-experience1 {
      .left-container {
        .picture-container {
          .picture-box {
            display: none;
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

    .mobile-experience2, .mobile-experience3, .mobile-experience4 {
      margin-top: 48px;
    }
  }
}
</style>
