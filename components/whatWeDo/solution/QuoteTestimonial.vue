<template>
  <section class="quote-container">
    <div class="quote-content">
      <div class="circle-background-box">
        <div class="circle-background">
          <img src="~/assets/images/solution/circle-quote.png">
        </div>
      </div>
      <div class="quote-box">
        <div class="quote-text">
          &#8220;Swab test di Prixa pelayanannya oke! Fleksibel juga. Lalu permintaan untuk on-site di hari H pun dapat dilakukan. <span style="font-style: italic;">Medical Check Up</span> untuk karyawan baru sangat terbantu oleh adanya Prixa.&#8221;
        </div>
        <div class="quote-source">
          <div class="icon-content">
            <div class="icon-box">
              <img src="~/assets/images/solution/japfa-icon.png">
            </div>
          </div>
          <div class="source-text">
            <div class="source-head-text">
              Yudi Hariyanto
            </div>
            <div class="source-sub-text">
              HR & GA Manager Japfa
            </div>
          </div>
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

// @media screen and (max-width: 896px) {
//   .quote-container {
//     padding: 48px;
//   }
// }

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
}
</style>
