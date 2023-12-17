<template>
  <section class="pd-96 latest-news-container">
    <div class="circle-background">
      <div class="circle-background-box">
        <img v-if="$store.state.screenSize > 414" src="~/assets/images/solution/circle-latest-news.png">
        <img v-else src="~/assets/images/solution/circle-latest-news-768.png">
      </div>
    </div>
    <div class="header-content">
      <div class="header-text">
        <div class="head-text">
          {{ $t('WHAT_WE_DO.HEADING_NEWS') }}
        </div>
      </div>
    </div>
    <div class="news-content">
      <ul class="card-container">
        <li v-for="nw in news" :key="nw.blog_id" class="card-box">
          <div class="news-background">
            <div class="image-box" @click="onNewsClick(nw.blog_id)">
              <img :src="nw.header_image">
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
              <div class="news-category-box" @click="onCategoryClick(nw.category_id)">
                <div class="news-category">
                  {{ nw.blog_category?.category_name }}
                </div>
              </div>
              <div class="news-published">
                <span>Published on</span>
                <span>{{ $moment(nw.created_at.substring(0, 4) + nw.created_at.substring(5, 7) + nw.created_at.substring(8, 10)).format('MMM DD, YYYY') }}</span>
              </div>
              <div class="news-headline" @click="onNewsClick(nw.blog_id)">
                {{ nw.title }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cta-container">
      <div class="cta-button-box">
        <div class="cta-button" @click="onReadMoreClick">
          {{ $t('UTILS.READ_MORE') }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      news: [
        {
          blog_id: '01',
          category_id: '',
          category_name: 'Health',
          title: 'Kesehatan Mental yang Buruk Mempengaruhi Finansial hingga Pendidikan Seseorang',
          created_at: 'April 5, 2023',
          header_image: 'latest-news-background1'
        },
        {
          blog_id: '02',
          category_id: '',
          category_name: 'Health',
          title: 'Solusi Inovatif Perusahaan dalam Mengontrol Biaya Tunjangan Kesehatan dan Mengelola Kesejahteraan Tempat Kerja',
          created_at: 'March 29, 2023',
          header_image: 'latest-news-background2'
        },
        {
          blog_id: '03',
          category_id: '',
          category_name: 'Health',
          title: 'Kaitan Kecemasan dan Kesepian',
          created_at: 'March 27, 2023',
          header_image: 'latest-news-background3'
        }
      ]
    }
  },
  mounted () {
    this.$axios.$get(`${this.$config.publicApiBaseUrl}/blog/latest`)
      .then((res) => {
        this.news = res.data.result.slice(0, 3)
      })
      .catch((err) => {
        window.console.log('news & insight error: ', err)
        this.news = []
      })
  },
  methods: {
    ...mapMutations({
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen'
    }),
    onReadMoreClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'News')
      this.$router.push('/news-insights/blog')
    },
    onCategoryClick (id) {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'News')
      this.$router.push(`/news-insights/category/${id}`)
    },
    onNewsClick (id) {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'News')
      this.$router.push(`/news-insights/article/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.latest-news-container {
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
  margin-bottom: 48px;

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
    background: #fff;

    .news-background {
      // background-image: url('~/assets/images/homepage/latest-news-background.png');
      // background-repeat: no-repeat;
      // background-size: cover;

      .image-box {
        width: 100%;
        cursor: pointer;

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
        cursor: pointer;
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
        cursor: pointer;
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
      border: 1px solid #0146AB;
      transition: all 0.5s;
    }

    .cta-button:hover {
      background: #E2EAF4;
      color: #0146AB;
    }
  }
}

@media screen and (max-width: 768px) {
  .latest-news-container {
    padding: 32px 24px;
  }

  .header-content {
    margin-bottom: 24px;
  }
}

@media screen and (max-width: 734px) {
  .latest-news-container {
    padding: 32px 24px;
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

@media screen and (max-width: 734px) {
  .latest-news-container {
    .circle-background {
      top: unset;
      bottom: 224px;
    }
  }
}

@media screen and (max-width: 734px) {
  .latest-news-container {
    .circle-background {
      bottom: 270px;
    }
  }
}
</style>
