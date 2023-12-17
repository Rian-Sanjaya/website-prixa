<template>
  <section class="quote-container">
    <!-- <div class="quote-content">
      <div class="circle-background-box">
        <div class="circle-background">
          <img src="~/assets/images/circle-quote.png">
        </div>
      </div>
      <div class="quote-box">
        <div class="quote-text">
          &#8220;A comprehensive solution for flexible and integrated health service needs for companies.&#8221;
        </div>
        <div class="quote-source">
          <div class="icon-content">
            <div class="icon-box">
              <img src="~/assets/images/company-overview/quote-icon.png">
            </div>
          </div>
          <div class="source-text">
            <div class="source-head-text">
              James Roring
            </div>
            <div class="source-sub-text">
              CEO of PT. Pintar Data Group
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="total-description">
      <div class="description-left">
        <div class="description">
          Prixa is a pioneer in corporate health benefits through a digital-first approach. With all health services integrated on a single platform, we provide access to more seamless and effective healthcare.
        </div>
      </div>
      <div class="description-right">
        <div class="description">
          With Prixa, you can access various comprehensive digital healthcare services, including AI Symptom Checker, Telemedicine, E-Pharmacy, Laboratory Test Orders, Scheduling / Referrals, Hospitals, Pharmacies, and Laboratories. These services allow users and providers to obtain more manageable, convenient, and efficient health care, both offline and online.
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.quote-container {
  padding: 0 96px;
}

.quote-content {
  position: relative;

  .circle-background-box {
    position: absolute;
    right: 0;
    opacity: 0.8;

    .circle-background {
      width: 100%;

      img {
        width: 100%;
        height: auto;
        border-radius: 0 16px 0 0;
      }
    }
  }
}

.quote-box {
  padding: 48px;
  background: #55B9E4;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);
  color: #fff;

  .quote-text {
    margin-bottom: 24px;
    font-size: clamp(1.145rem, 2.118vw, 2.3rem); //16.03px, 32.0242px, 32.2px
    font-weight: 700;
    position: relative;
    z-index: 1;
  }

  .quote-source {
    display: flex;
    gap: 8px;
    position: relative;
    z-index: 1;

    .icon-content {
      display: flex;
      align-items: center;
      width: 40px;

      .icon-box {
        width: 100%;

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .source-head-text {
      font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px
      font-weight: 700;
    }

    .source-sub-text {
      font-size: 14px;
      font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
      font-weight: 400;
    }
  }
}

.total-description {
  display: flex;
  // gap: 56px;
  gap: 48px;
  // padding: 96px 48px;
  padding: 96px 32px;
  color: #4C4F54;
  font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px

  .description-left {
    width: 50%;
  }

  .description-right {
    // padding-left: 66px;
    padding-left: 74px;
    width: 50%;
  }
}

@media screen and (max-width: 768PX) {
  .quote-container {
    padding: 0 24px;
  }

  .quote-content {
    .circle-background-box {
      right: -168px;

      .circle-background {
        width: 50%;
      }
    }
  }

  .quote-box {
    padding: 24px;

    .quote-text {
      font-size: 16px;
    }

    .quote-source {
      .icon-content {
        .icon-box {
          width: 90%;
        }
      }
      .source-head-text {
        font-size: 12px;
      }

      .source-sub-text {
        font-size: 12px;
      }
    }
  }

  .total-description {
    flex-direction: column;
    gap: 24px;
    // padding: 32px 0;
    padding: 0;
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
