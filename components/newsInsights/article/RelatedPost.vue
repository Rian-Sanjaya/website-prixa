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
          Related Post
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
          </div>
          <div class="news-description-box">
            <div class="news-description">
              <div class="news-category-box">
                <div class="news-category" @click="onCategoryClick(nw.category_id)">
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
    <div class="well-known-container">
      <div class="well-known-content">
        <div class="left-container">
          <div class="left-content">
            <div class="font-20-32-32 head-label">
              Well Known by Prixa
            </div>
            <div class="font-12-16-16 description">
              The groundbreaking insights from the world of healthcare & corporate health benefits are curated by our experts
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="subscribe-form-box">
            <form class="form-content" @submit.prevent="register">
              <div class="form-item">
                <div class="item-label">
                  <span class="font-12-14-14 required-label">Email</span>
                </div>
                <div class="item-input-box">
                  <input v-model="subscribeEmail" type="text" class="font-12-14-14 item-input" placeholder="e.g. email@example.com">
                </div>
                <div class="font-12-14-14 item-error">
                  {{ errors.email }}
                </div>
              </div>
              <div class="subscribe-box">
                <button type="submit" class="subscribe-btn">
                  Subscribe <a-spin v-if="isLoading" class="subscribe-loading" />
                </button>
              </div>
            </form>
          </div>
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
      ],
      subscribeEmail: '',
      isLoading: false,
      errors: {}
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
    onCategoryClick (id) {
      this.$router.push(`/news-insights/category/${id}`)
    },
    onNewsClick (id) {
      this.$router.push(`/news-insights/article/${id}`)
    },
    capitalizeFirstLetter (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    register () {
      if (!this.subscribeEmail) { return }

      this.errors = {}
      this.isLoading = true
      const payload = {
        email: this.subscribeEmail
      }
      this.$axios.$post(`${this.$config.publicApiBaseUrl}/subscription`, payload, {
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(() => {
        })
        .catch((err) => {
          const res = err.response.data
          if (res.error) {
            const errArr = res.error.split(';')
            errArr.forEach((err) => {
              if (err.slice(0, err.indexOf(':')).includes('email')) {
                this.errors.email = this.capitalizeFirstLetter(err.slice(7).trim())
                this.valid = false
              }
            })
          }
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="less" scoped>
.latest-news-container {
  padding: 56px 96px 96px;
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

.well-known-container {
  margin-top: 152px;
  background: #E2EAF4;
}

.well-known-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap:104px;
  overflow: hidden;

  .left-container {
    width: 50%;

    .left-content {
      .head-label {
        color: #4C4F54;
        font-weight: 700;
        margin-bottom: 16px;
      }

      .description {
        color: #4C4F54;
        font-weight: 400;
      }
    }
  }

  .right-container {
    width: 50%;

    .subscribe-form-box {
      .form-content {
        .form-item {
          .item-label {
            margin-bottom: 8px;
            color: #0146AB;

            // .required-label::before {
            //   content: '*';
            //   position: relative;
            //   top: 2px;
            //   color: #f5222d;
            //   margin-right: 4px;
            // }
          }

          .item-input-box{
            .item-input {
              width: 100%;
              padding: 16px 12px;
              border: 1px solid #D9D9D9;
              border-radius: 8px;
              color: #4C4F54;
              font-weight: 400;
            }
          }

          .item-error {
            color: #FF6E5D;
          }
        }

        .subscribe-box {
          margin-top: 40px;

          .subscribe-btn {
            padding: 16px 40px;
            color: #fff;
            font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px;
            font-weight: 700;
            background: #0146AB;
            display: inline-block;
            border-radius: 8px;
            cursor: pointer;
            position: relative;
            border: 1px solid #0146AB;
            transition: all 0.5s;

            .subscribe-loading {
              position: absolute;
              margin-left: 8px;
            }
          }

          .subscribe-btn:hover {
            background: #E2EAF4;
            color: #0146AB;
          }
        }
      }
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

  .well-known-container {
    margin-top: 48px;
  }

  .well-known-content {
    flex-direction: column;
    gap: 24px;

    .left-container {
      width: 100%;
    }

    .right-container {
      width: 100%;
    }
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
</style>
