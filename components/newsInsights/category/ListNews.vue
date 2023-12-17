<template>
  <section class="pd-96 list-news-container">
    <div class="search-container">
      <div class="search-box">
        <input v-model="searchKeyword" type="text" class="search-input" placeholder="Search Article" @keyup.enter="onSearchEnter">
        <div class="search-btn" @click="onSearchButtonClick">
          Search
        </div>
        <div class="category-container">
          <div
            :class="[
              'category-box',
              categoryOpen ? 'open' : ''
            ]"
            @click="handleCategoryClick"
          >
            <span class="text">Category</span>
            <span class="angle-down">
              <font-awesome-icon
                icon="angle-down"
                class="category-icon"
              />
            </span>
          </div>
          <ul
            :class="[
              'category-menu',
              categoryOpen ? 'open' : ''
            ]"
          >
            <li v-for="cat in categories" :key="cat.category_id" class="menu-item">
              <div class="menu-text" @click="onCategoryClick(cat.category_id)">
                {{ cat.category_name }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="category-container-598">
      <div
        :class="[
          'category-box',
          categoryOpen ? 'open' : ''
        ]"
        @click="handleCategoryClick"
      >
        <span class="text">Category</span>
        <span class="angle-down">
          <font-awesome-icon
            icon="angle-down"
            class="category-icon"
          />
        </span>
      </div>
      <ul
        :class="[
          'category-menu',
          categoryOpen ? 'open' : ''
        ]"
      >
        <li v-for="cat in categories" :key="cat.category_id" class="menu-item">
          <div class="menu-text" @click="onCategoryClick(cat.category_id)">
            {{ cat.category_name }}
          </div>
        </li>
      </ul>
    </div>
    <div v-if="isLoadingNews" class="list-loading">
      <a-spin />
    </div>
    <div v-if="!isLoadingNews" class="news-content">
      <div v-show="news.length === 0" class="empty-news">
        <div class="image-box">
          <img src="~/assets/images/blog/empty-news.png">
        </div>
        <div class="description-box">
          <div class="font-16-32-32 desc-header">
            Result Not Found
          </div>
          <div class="font-12-16-16 sub-desc">
            Please try again with another keywords or maybe use generic term
          </div>
        </div>
      </div>
      <ul class="card-container">
        <li v-for="nw in news" :key="nw.blog_id" class="card-box">
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
    <div v-if="!isLoadingNews && news.length > 0" class="pagination-container">
      <a-pagination :current="current" :page-size="pagination.per_page" :total="pagination.total_rows" show-less-items @change="onChangePagination" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      news: [],
      pagination: {
        page: 1,
        per_page: 9,
        total_rows: 9
      },
      current: 1,
      categoryOpen: false,
      searchKeyword: '',
      categories: [],
      isLoadingNews: false,
      isLooadingCategory: false
    }
  },
  mounted () {
    this.isLoadingNews = true
    this.$axios.$get(`${this.$config.publicApiBaseUrl}/blog/active?page=1&limit=9&category_id=${this.categoryId}`)
      .then((res) => {
        this.news = res.data.result
        this.pagination = res.data.pagination
        this.current = this.pagination.page
        this.isLoadingNews = false
      })
      .catch((err) => {
        window.console.log('err list: ', err)
        this.news = []
        this.isLoadingNews = false
      })

    this.isLooadingCategory = true
    this.$axios.$get(`${this.$config.publicApiBaseUrl}/blog/category`)
      .then((res) => {
        this.categories = res.data.result
        this.isLooadingCategory = false
      })
      .catch((err) => {
        window.console.log(err)
        this.categories = []
        this.isLooadingCategory = false
      })
  },
  methods: {
    onChangePagination (current) {
      this.isLoadingNews = true
      this.$axios.$get(`${this.$config.publicApiBaseUrl}/blog/active?page=${current}&limit=9`)
        .then((res) => {
          this.news = res.data.result
          this.pagination = res.data.pagination
          this.current = this.pagination.page
          this.isLoadingNews = false
        })
        .catch((err) => {
          window.console.log('err list: ', err)
          this.news = []
          this.isLoadingNews = false
        })
    },
    onSearchEnter () {
      this.onSearchButtonClick()
    },
    onSearchButtonClick () {
      this.isLoadingNews = true
      this.$axios.$get(`${this.$config.publicApiBaseUrl}/blog/active?page=1&limit=9&category_id=${this.categoryId}&title=${this.searchKeyword}`)
        .then((res) => {
          this.news = res.data.result
          this.pagination = res.data.pagination
          this.current = this.pagination.page
          this.isLoadingNews = false
        })
        .catch((err) => {
          window.console.log('err list: ', err)
          this.news = []
          this.isLoadingNews = false
        })
    },
    handleCategoryClick () {
      this.categoryOpen = !this.categoryOpen
      this.searchKeyword = ''
    },
    onCategoryClick (id) {
      this.categoryOpen = false
      this.$router.push(`/news-insights/category/${id}`)
    },
    onReadPostClick (headline) {
      this.$router.push(`/news-insights/article/${headline}`)
    }
  }
}
</script>

<style lang="less" scoped>
.list-news-container {
  position: relative;

  .list-loading {
    text-align: center;
  }

  &.loading {
    height: 300px;
  }
}

.search-container {
  position: absolute;
  top: -54px;
  left: 96px;
  right: 96px;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);

  .search-box {
    display: flex;

    .search-input {
      padding: 16px 12px;
      border: 1px solid #D9D9D9;
      border-radius: 8px;
      color: #4C4F54;
      font-weight: 400;
      flex: 1;
    }

    .search-btn {
      // display: inline-block;
      padding: 16px 52px;
      background: #0146AB;
      color: #ffffff;
      border-radius: 8px;
      cursor: pointer;
      font-size: calc(0.578rem + 0.390625vw);
      font-weight: 700;
      border: 1px solid #0146AB;
      margin: 0 24px;
    }

    .category-container {
      // position: relative;

      .category-box {
        padding: 16px 24px;
        border: 1px solid #0146AB;
        border-radius: 8px;
        color: #0146AB;
        cursor: pointer;

        .text {
          font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
          font-weight: 500;
        }

        .angle-down {
          margin-left: 8px;

          .category-icon {
            transition: 0.5s ease;
          }
        }

        &.open {
          .angle-down {
            .category-icon {
              transform: rotate(-180deg);
            }
          }
        }
      }

      .category-menu {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        z-index: 8;
        width: -webkit-fill-available;
        padding-top: 6px;
        background: #fff;
        box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
        border-radius: 2px;
        transition: all 0.5s ease;

        .menu-item {
          padding: 8px 16px;
          color: #4C4F54;

          &:hover {
            background: #E2EAF4;
            color: #0146AB;
            cursor: pointer;
          }
        }

        &.open {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
}

.category-container-598 {
  display: none;
  width: 128px;
  margin-bottom: 32px;

  .category-box {
    padding: 16px 24px;
    border: 1px solid #0146AB;
    border-radius: 8px;
    color: #0146AB;
    cursor: pointer;

    .text {
      font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
      font-weight: 500;
    }

    .angle-down {
      margin-left: 8px;

      .category-icon {
        transition: 0.5s ease;
      }
    }

    &.open {
      .angle-down {
        .category-icon {
          transform: rotate(-180deg);
        }
      }
    }
  }

  .category-menu {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: 8;
    width: 128px;
    padding-top: 6px;
    background: #fff;
    box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    transition: all 0.5s ease;

    .menu-item {
      padding: 8px 16px;
      color: #4C4F54;

      &:hover {
        background: #E2EAF4;
        color: #0146AB;
        cursor: pointer;
      }
    }

    &.open {
      visibility: visible;
      opacity: 1;
    }
  }
}

.empty-news {
  text-align: center;
  padding: 32px 0 0;

  .image-box {
    width: 45%;
    margin: 0 auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  .description-box {
    .desc-header {
      font-weight: 700;
      color: #4C4F54;
      margin: 32px 0 16px;
    }

    .sub-desc {
      font-weight: 400;
      color: #4C4F54;
    }
  }
}
.card-container {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;

  .card-box {
    border-radius: 8px 8px 4px 4px;
    box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);
    width: 32%;
    // cursor: pointer;
    background: #fff;
    margin-bottom: 24px;

    &:nth-child(7), &:nth-child(8), &:nth-child(9) {
      margin-bottom: unset;
    }

    .news-background {
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

.pagination-container {
  text-align: center;
  margin-top: 56px;
}

@media screen and (max-width: 1669px) {
  .card-container {
    .card-box {
      width: 31.8%;
    }
  }
}

@media screen and (max-width: 1582px) {
  .card-container {
    .card-box {
      width: 31.7%;
    }
  }
}

@media screen and (max-width: 1497px) {
  .card-container {
    .card-box {
      width: 31.6%;
    }
  }
}

@media screen and (max-width: 1422px) {
  .card-container {
    .card-box {
      width: 31.5%;
    }
  }
}

@media screen and (max-width: 1355px) {
  .card-container {
    .card-box {
      width: 31.4%;
    }
  }
}

@media screen and (max-width: 1294px) {
  .card-container {
    .card-box {
      width: 31.3%;
    }
  }
}

@media screen and (max-width: 1240px) {
  .card-container {
    .card-box {
      width: 31.2%;
    }
  }
}

@media screen and (max-width: 1191px) {
  .card-container {
    .card-box {
      width: 31.1%;
    }
  }
}

@media screen and (max-width: 1146px) {
  .card-container {
    .card-box {
      width: 31%;
    }
  }
}

@media screen and (max-width: 1105px) {
  .card-container {
    .card-box {
      width: 30.9%;
    }
  }
}

@media screen and (max-width: 1068px) {
  .card-container {
    .card-box {
      width: 30.8%;
    }
  }
}

@media screen and (max-width: 1033px) {
  .card-container {
    .card-box {
      width: 30.7%;
    }
  }
}

@media screen and (max-width: 1001px) {
  .card-container {
    .card-box {
      width: 30.6%;
    }
  }
}

@media screen and (max-width: 972px) {
  .card-container {
    .card-box {
      width: 30.5%;
    }
  }
}

@media screen and (max-width: 944px) {
  .card-container {
    .card-box {
      width: 30.4%;
    }
  }
}

@media screen and (max-width: 918px) {
  .card-container {
    .card-box {
      width: 30.3%;
    }
  }
}

@media screen and (max-width: 894px) {
  .card-container {
    .card-box {
      width: 30.2%;
    }
  }
}

@media screen and (max-width: 872px) {
  .card-container {
    .card-box {
      width: 30.1%;
    }
  }
}

@media screen and (max-width: 851px) {
  .card-container {
    .card-box {
      width: 30%;
    }
  }
}

@media screen and (max-width: 831px) {
  .list-news-container {
    padding: 96px 24px 32px;
  }

  .search-container {
    left: 24px;
    right: 24px;
  }

  .card-container {
    flex-wrap: nowrap;
    flex-direction: column;

    .card-box {
      width: 100%;
      margin-bottom: unset;
    }
  }
}

@media screen and (max-width: 598px) {
  .search-container {
    .search-box {
      .search-btn {
        margin: 0 0 0 24px;
        display: none;
      }

      .category-container {
        display: none;
      }
    }
  }

  .category-container-598 {
    display: block;
  }
}
</style>
