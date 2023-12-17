<template>
  <section class="analytic-container">
    <div class="analytic-content">
      <div class="analytic">
        <div class="left-container">
          <div class="left-content">
            <div class="headText head-text">
              {{ $t('WHO_WE_SERVE.EMPLOYERS.ANALYTIC.ANALYTIC') }}
            </div>
            <div class="subText sub-text">
              {{ $t('WHO_WE_SERVE.EMPLOYERS.ANALYTIC.OPTIMIZE') }}
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/employers/analytic.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EmployersANALYTICSUPPORT'
}
</script>

<style lang="less" scoped>
.analytic-container {
  padding: 0 96px;
}

.analytic-content {
  padding: 0 64px;

  .analytic {
    display: flex;
    gap: 9%;
    justify-content: space-between;

    .left-container, .right-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .left-container {
      width: 56%;

      .left-content {
        .sub-text {
          margin: 32px 0 0;
        }
      }
    }

    .right-container {
      width: 43%;

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
  }
}

@media screen and (max-width: 768px) {
  .analytic-container {
      padding: 0 24px;
  }

  .analytic-content {
    padding: 0 40px;

    .analytic {
      flex-direction: column;
      gap: 16px;

      .left-container, .right-container {
        width: 100%;
      }

      .left-container {
        padding: 0 16px;

        .left-content {
          .sub-text {
            margin: 16px 0 0;
          }
        }
      }

      .right-container {
        order: -1;
      }
    }
  }
}
</style>
