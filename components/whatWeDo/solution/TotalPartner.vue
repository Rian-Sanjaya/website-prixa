<template>
  <section class="total-partner-container">
    <div class="total-numbers-container">
      <div class="number-box">
        <div class="number partner-number">
          150+
        </div>
        <div class="text partner-text">
          {{ $t('WHAT_WE_DO.CARD.PARTNER') }}
        </div>
      </div>
      <div class="number-box">
        <div class="number clients-number">
          100+
        </div>
        <div class="text clients-text">
          {{ $t('WHAT_WE_DO.CARD.CLIENT') }}
        </div>
      </div>
      <div class="number-box">
        <div class="number claims-number">
          1.000+
        </div>
        <div class="text claims-text">
          {{ $t('WHAT_WE_DO.CARD.CLAIMS') }}
        </div>
      </div>
      <div class="number-box">
        <div class="number membership-number">
          120.000
        </div>
        <div class="text membership-text">
          {{ $t('WHAT_WE_DO.CARD.MEMBERSHIP') }}
        </div>
      </div>
    </div>
    <div class="total-description">
      <div class="description-left">
        <div class="description">
          {{ $t('WHAT_WE_DO.CARD.DESCRIPTION') }}
        </div>
      </div>
      <div class="description-right">
        <div class="description">
          {{ $t('WHAT_WE_DO.CARD.DESCRIPTION2') }}
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.total-partner-container {
  padding: 0 96px;
}

.total-numbers-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: #E2EAF4;

  .number-box {
    padding: 56px;
    width: 25%;
    text-align: center;

    .number {
      color: #4C4F54;
      font-size: clamp(1rem, 2.118vw, 2.3rem); //14px, 32.0242px, 32.2px
      font-weight: 700;
    }

    .text {
      color: #0146AB;
      font-size: clamp(1rem, 1.322vw, 1.429rem); // 14px, 19.9886px, 20.006px
      font-weight: 500;
    }
  }

  .number-box:nth-child(1) {
    width: 23%;
  }

  .number-box:nth-child(2) {
    width: 23%;
  }

  .number-box:nth-child(3) {
    width: 24%;
  }

  .number-box:nth-child(4) {
    width: 30%;
  }
}

.total-description {
  display: flex;
  gap: 56px;
  padding: 96px 48px;
  color: #4C4F54;
  font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px

  .description-left {
    width: 50%;
  }

  .description-right {
    padding-left: 66px;
    width: 50%;
  }
}

// @media screen and (max-width: 896px) {
//   .total-partner-container {
//     padding: 0 48px;
//   }

//   .total-description {
//     padding: 48px;
//   }
// }

@media screen and (max-width: 768px) {
  .total-partner-container {
    padding: 0 24px;
  }

  .total-numbers-container {
    padding: 16px 0;

    .number-box {
      padding: 0;

      .number {
        font-size: 12px;
        font-weight: 700;
      }

      .text {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }

  .total-description {
    flex-direction: column;
    gap: 24px;
    padding: 32px 0;
    font-size: 12px;

    .description-left {
      width: 100%;
    }

    .description-right {
      width: 100%;
      padding-left: 0;
    }
  }
}
</style>
