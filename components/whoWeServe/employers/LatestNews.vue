<template>
  <section class="latest-news-container">
    <div class="circle-background">
      <div class="circle-background-box">
        <img v-if="$store.state.screenSize > 414" src="~/assets/images/solution/circle-latest-news.png">
        <img v-else src="~/assets/images/solution/circle-latest-news-768.png">
      </div>
    </div>
    <div class="header-content">
      <div class="header-text">
        <div class="head-text">
          {{ $t('HOME_LATEST_NEWS') }}
        </div>
      </div>
    </div>
    <div class="news-content">
      <ul class="card-container">
        <li v-for="nw in news" :key="nw.id" class="card-box">
          <div class="news-background">
            <div class="image-box">
              <img src="~/assets/images/homepage/latest-news-background1.png">
            </div>
            <!-- <div class="news-category">
              <span>Prixa</span>
              <span>{{ nw.category }}</span>
            </div>
            <div class="news-headline">
              {{ nw.headline }}
            </div> -->
          </div>
          <div class="news-description-box">
            <div class="news-description">
              <div class="news-category-box">
                <div class="news-category">
                  {{ nw.category }}
                </div>
              </div>
              <div class="news-published">
                <span>Published on</span>
                <span>{{ nw.published }}</span>
              </div>
              <div class="news-headline">
                {{ nw.headline }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cta-container">
      <div class="cta-button-box">
        <div class="cta-button">
          {{ $t('UTILS.READ_MORE') }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      news: [
        {
          id: '01',
          category: 'Health',
          headline: '5 Tanda Kecemburuan Sudah Membuat Hubunganmu Tidak Sehat!',
          published: '2023-01-19'
        },
        {
          id: '02',
          category: 'Health',
          headline: '5 Tanda Kecemburuan Sudah Membuat Hubunganmu Tidak Sehat!',
          published: '2023-01-19'
        },
        {
          id: '03',
          category: 'Health',
          headline: '5 Tanda Kecemburuan Sudah Membuat Hubunganmu Tidak Sehat!',
          published: '2023-01-19'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.latest-news-container {
  padding: 254px 96px 96px;
  background: #E2EAF4;
  position: relative;

  .circle-background {
    position: absolute;
    right: 0;
    top: 322px;

    .circle-background-box {
      width: 100%;

      img {
        width: 100%;
        height: auto;;
      }
    }
  }
}

.header-content {
  margin-bottom: 96px;

  .header-text {
    .head-text {
      font-size: clamp(1.145rem, 2.55vw, 2.3rem);
      font-weight: 700;
      color: #4C4F54;
      text-align: center;
    }
  }
}

.news-content {
  position: relative;
  z-index: 1;
}

.card-container {
  display: flex;
  justify-content: space-between;
  gap: 32px;

  .card-box {
    border-radius: 8px 8px 4px 4px;
    box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);
    width: 33.33%;
    cursor: pointer;

    .news-background {
      // background-image: url('~/assets/images/homepage/latest-news-background.png');
      // background-repeat: no-repeat;
      // background-size: cover;

      .image-box {
        width: 100%;

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .news-description {
      padding: 16px;
      background: #ffffff;

      .news-category {
        background: #99B5DD;
        border-radius: 4px;
        color: #FFFFFF;
        font-size: 10px;
        font-weight: 400;
        font-style: italic;
        padding: 4px 8px;
        display: inline-block;
      }
      .news-published {
        margin: 12px 0 16px;
        font-size: 10px;
        font-weight: 400;
        color: #000000;
        font-style: italic;
      }

      .news-headline {
        // font-size: clamp(0.9rem, 1.2vw, 1.145rem);
        font-size: calc(0.72rem + 0.390625vw);
        font-weight: 700;
        color: #4C4F54;
      }
    }
  }
}

.cta-container {
  margin-top: 48px;

  .cta-button-box {
    display: flex;
    justify-content: center;

    .cta-button {
      display: inline-block;
      padding: 16px 24px;
      background: #0146AB;
      color: #ffffff;
      border-radius: 8px;
      cursor: pointer;
      font-size: calc(0.578rem + 0.390625vw);
      font-weight: 700;
    }
  }
}

@media screen and (max-width: 1008px) {
  .latest-news-container {
    padding-top: 230px;
  }
}

@media screen and (max-width: 768px) {
  .latest-news-container {
    padding: 156px 32px 24px;
  }
}

@media screen and (max-width: 734px) {
  .latest-news-container {
    padding-top: 184px 24px 32px;

    .circle-background {
      top: unset;
      bottom: 270px;
    }
  }

  .header-content {
    margin-bottom: 24px;

    .header-text {
      .head-text {
        font-size: clamp(1.45rem, 2.55vw, 2.3rem);
      }
    }
  }

  .card-container {
    flex-direction: column;

    .card-box {
      width: 100%;
    }
  }

  .cta-container {
    margin-top: 32px;

    .cta-button-box {
      .cta-button {
        font-size: 0.86rem;
      }
    }
  }
}

@media screen and (max-width: 613px) {
  .latest-news-container {
    padding-top: 164px;
  }
}
</style>
