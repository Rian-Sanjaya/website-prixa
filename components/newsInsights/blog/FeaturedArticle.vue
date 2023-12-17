<template>
  <section
    :class="[
      'pd-96',
      'featured-container',
      isLoadingFeatured && isLoadingTopStories ? 'loading' : ''
    ]"
  >
    <div class="circle-featured-top">
      <img src="~/assets/images/blog/circle-top-left.png">
    </div>
    <div class="circle-featured-top-right">
      <img src="~/assets/images/blog/circle-top-right.png">
    </div>
    <div class="circle-featured-bottom">
      <img src="~/assets/images/blog/circle-bottom.png">
    </div>
    <div class="circle-featured-top-right-768">
      <img src="~/assets/images/blog/circle-top-right-768.png">
    </div>
    <div class="circle-featured-bottom-768">
      <img src="~/assets/images/blog/circle-bottom-768.png">
    </div>
    <div v-if="isLoadingFeatured && isLoadingTopStories" class="featured-loading">
      <a-spin />
    </div>
    <div v-else class="featured-content">
      <div v-if="featured.length > 0" class="left-container">
        <div class="left-content">
          <div class="font-14-16-16 head-label">
            Featured Article
          </div>
          <div class="featured-articles">
            <ul class="card-container">
              <li v-for="nw in featured" :key="nw.blog_id" class="card-box">
                <div class="news-background">
                  <div class="image-box" @click="onReadPostClick(nw.blog_id)">
                    <!-- <img :src="require(`~/assets/images/blog/${nw.image}.png`)"> -->
                    <img :src="nw.header_image">
                  </div>
                </div>
                <div class="news-description-box">
                  <div class="news-description">
                    <div class="news-category-box" @click="onCategoryClick(nw.blog_category?.category_id)">
                      <div class="news-category">
                        {{ nw.blog_category?.category_name }}
                      </div>
                    </div>
                    <div class="news-published">
                      <span>Published on</span>
                      <span>{{ $moment(nw.created_at.substring(0,4) + nw.created_at.substring(5,7) + nw.created_at.substring(8,10)).format('MMM DD, YYYY') }}</span>
                    </div>
                    <div class="news-headline" @click="onReadPostClick(nw.blog_id)">
                      {{ nw.title }}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="stories.length > 0" class="right-container">
        <div class="font-14-16-16 head-label">
          Top Stories
        </div>
        <div class="top-stories">
          <ul class="card-story">
            <li v-for="(st, idx) in stories" :key="st.bloc_id" class="story-box">
              <div class="font-14-16-16 title">
                {{ st.title }}
              </div>
              <div class="font-12-14-14 desc">
                {{ st.excerpt }}
              </div>
              <div class="font-12-14-14 read-box" @click="onReadPostClick(st.blog_id)">
                <div class="read-text">
                  Read Post
                </div>
                <div class="read-vector">
                  <img src="~/assets/images/blog/read-post.png">
                </div>
              </div>
              <div v-if="idx !== stories.length - 1" class="divider" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
// import moment from 'moment'

export default {
  data () {
    return {
      featured: [
        {
          blog_id: '01',
          category_id: '',
          category_name: 'Health',
          title: 'Potensi Masalah dalam Penggunaan AI Komersial bagi MedTech',
          created_at: 'March 15, 2023',
          header_image: ''
        },
        {
          blog_id: '02',
          category_id: '',
          category_name: 'Health',
          title: 'Peran Data dan Analitik Dapat Meningkatkan Produktivitas Perusahaan Healthtech',
          created_at: 'March 8, 2023',
          header_image: ''
        }
      ],
      stories: [
        {
          blog_id: '01',
          title: '5 Tanda kecemburuan sudah membuat hubunganmu tidak sehat!',
          content: 'Kecemburuan adalah reaksi alami yang pernah dialami semua orang ketika pasangannya lebih suka dengan sesuatu atau orang lain.'
        },
        {
          blog_id: '02',
          title: '5 Tanda kecemburuan sudah membuat hubunganmu tidak sehat!',
          content: 'Kecemburuan adalah reaksi alami yang pernah dialami semua orang ketika pasangannya lebih suka dengan sesuatu atau orang lain.'
        },
        {
          blog_id: '03',
          title: '5 Tanda kecemburuan sudah membuat hubunganmu tidak sehat!',
          content: 'Kecemburuan adalah reaksi alami yang pernah dialami semua orang ketika pasangannya lebih suka dengan sesuatu atau orang lain.'
        }
      ],
      isLoadingFeatured: false,
      isLoadingTopStories: false
    }
  },
  mounted () {
    // localStorage.setItem('menuActive', '')
    localStorage.setItem('menuOpen', '')
    if (localStorage.getItem('menuActive')) {
      this.$store.commit('setMenuActive', localStorage.getItem('menuActive'))
    }
    if (localStorage.getItem('menuOpen')) {
      this.$store.commit('setMenuOpen', localStorage.getItem('menuOpen'))
    }
    if (localStorage.getItem('menuMobileOpen')) {
      this.$store.commit('setMenuMobileOpen', localStorage.getItem('menuMobileOpen'))
    }

    this.isLoadingFeatured = true
    this.$axios.$get(`${this.$config.publicApiBaseUrl}/blog/active?featured=1&limit=2`)
      .then((res) => {
        this.featured = res.data.result
        this.isLoadingFeatured = false
      })
      .catch((err) => {
        window.console.log('featured err: ', err)
        this.featured = []
        this.isLoadingFeatured = false
      })

    this.isLoadingTopStories = true
    this.$axios.$get(`${this.$config.publicApiBaseUrl}/blog/latest`)
      .then((res) => {
        this.stories = res.data.result.slice(0, 3)
        this.isLoadingTopStories = false
      })
      .catch((err) => {
        window.console.log('top articles err: ', err)
        this.stories = []
        this.isLoadingTopStories = false
      })
  },
  methods: {
    ...mapMutations({
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen',
      setMenuMobileOpen: 'setMenuMobileOpen'
    }),
    onReadPostClick (headline) {
      this.$router.push(`/news-insights/article/${headline}`)
    },
    onCategoryClick (id) {
      this.categoryOpen = false
      this.$router.push(`/news-insights/category/${id}`)
    }
  }
}
</script>

<style lang="less" scooped>
.featured-container {
  background: #E2EAF4;
  position: relative;

  .circle-featured-top, .circle-featured-top-right, .circle-featured-bottom {
    position: absolute;

    img {
      width: 100%;
      height: auto;
    }
  }

  .circle-featured-top {
    top: 0;
    left: 20%;
    width: 22%;
  }

  .circle-featured-top-right {
    top: 0;
    right: 0;
    width: 16%;
  }

  .circle-featured-bottom {
    bottom: 0;
    left: 0;
    width: 13%;
  }

  .circle-featured-top-right-768, .circle-featured-bottom-768 {
    display: none;
    position: absolute;

    img {
      width: 100%;
      height: auto;
    }
  }

  .circle-featured-top-right-768 {
    top: 0;
    right: 0;
    width: 28%;
  }

  .circle-featured-bottom-768 {
    top: 350px;
    left: 0;
    width: 24%;
  }

  .featured-loading {
    text-align: center;
  }

  &.loading {
    height: 300px;
  }
}

.featured-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  // gap:31px;
  overflow: hidden;

  .left-container {
    width: 70%;

    .left-content {
      .head-label {
        color: #4C4F54;
        font-weight: 700;
        margin-bottom: 32px;
      }

      .card-container {
        display: flex;
        justify-content: space-between;
        gap: 31px;

        .card-box {
          border-radius: 8px 8px 4px 4px;
          box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);
          width: 50%;
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
    }
  }

  .right-container {
    width: 30%;
    padding-left: 31px;

    .head-label {
      color: #4C4F54;
      font-weight: 700;
      margin-bottom: 32px;
    }

    .card-story {
      .story-box {
        .title {
          color: #4C4F54;
          font-weight: 700;
        }

        .desc {
          color: #000000;
          font-weight: 400;
          margin: 8px 0 16px;
        }

        .read-box {
          display: flex;
          color: #0146AB;
          font-weight: 700;

          .read-text {
            cursor: pointer;
          }

          .read-vector {
            width: 16px;
            cursor: pointer;

            img {
              width: 100%;
              height: auto;
            }
          }
        }

        .divider {
          margin: 16px 0;
          height: 2px;
          background: #fff;
          border: 1px solid #fff;
          border-radius: 8px;
        }
      }
    }
  }
}

@media screen and (max-width: 831px) {
  .featured-container {
    padding: 24px 32px 96px;

    .circle-featured-top, .circle-featured-top-right, .circle-featured-bottom {
      display: none;
    }

    .circle-featured-top-right-768, .circle-featured-bottom-768 {
      display: block;
    }
  }

  .featured-content {
    flex-direction: column;
    gap: 32px;

    .left-container {
      width: 100%;

      .left-content {
        .head-label {
          font-size: 20px;
        }

        .featured-articles {
          .card-container {
            flex-direction: column;
            gap: 32px;

            .card-box {
              width: 100%;
            }
          }
        }
      }
    }

    .right-container {
      width: 100%;
      padding-left: 0;

      .head-label {
        font-size: 20px;
      }
    }
  }
}
</style>
