<template>
  <section
    :class="[
      'header-container',
      isLoadingArticle ? 'loading' : ''
    ]"
  >
    <div v-if="isLoadingArticle" class="header-loading">
      <a-spin />
    </div>
    <div v-if="!isLoadingArticle" class="font-12-14-14 breadcrumb-content">
      blog / {{ article.blog_category?.category_name }} / {{ article.title }}
    </div>
    <div v-if="!isLoadingArticle" class="font-12-14-14 breadcrumb-content-768">
      <!-- &lt; See {{ category[0].toUpperCase() + category.slice(1) }} -->
      &lt; See {{ article.blog_category?.category_name }}
    </div>
    <div v-if="!isLoadingArticle" class="header-content">
      <div class="left-content">
        <div class="font-24-48-49 head-text">
          <!-- <div class="head-text-1">
            5 Tanda Kecemburuan
          </div>
          <div class="head-text-2">
            Sudah Membuat
          </div>
          <div class="head-text-3">
            Hubunganmu Tidak Sehat!
          </div> -->
          <div class="head-text-1">
            {{ article.title }}
          </div>
        </div>
        <div class="font-12-14-14 published">
          <div class="published-text-1">
            Published on {{ publishedDate }}
          </div>
        </div>
      </div>
      <div class="right-content">
        <div class="picture-container">
          <div class="picture-box">
            <!-- <img src="~/assets/images/article/article.png"> -->
            <img :src="article.header_image">
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isLoadingArticle" class="social-media-icon">
      <div class="icon twitter" @click="onSocialClick('https://twitter.com/prixaai')">
        <img src="~/assets/images/article/twitter.png">
      </div>
      <div class="icon facebook" @click="onSocialClick('https://www.facebook.com/pages/category/Medical---health/Prixa-113532773352313/')">
        <img src="~/assets/images/article/facebook.png">
      </div>
      <div class="icon linkedin" @click="onSocialClick('https://id.linkedin.com/company/prixaai')">
        <img src="~/assets/images/article/linkedin.png">
      </div>
    </div>
  </section>
</template>

<script>
// import moment from 'moment'
// import 'moment/locale/id'

export default {
  props: {
    articleId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      article: {},
      categoryName: '',
      publishedDate: '',
      isLoadingArticle: ''
    }
  },
  mounted () {
    this.isLoadingArticle = true
    this.$axios.$get(`${this.$config.publicApiBaseUrl}/blog/${this.articleId}`)
      .then((res) => {
        this.article = res.data
        const year = this.article.created_at.substring(0, 4)
        const month = this.article.created_at.substring(5, 7)
        const date = this.article.created_at.substring(8, 10)
        this.publishedDate = this.$moment(year + month + date).format('MMM DD, YYYY')
        // const pd = moment(year + month + date)
        // pd.locale('id')
        // this.publishedDate = pd.format('MMM DD, YYYY')
        this.isLoadingArticle = false
      })
      .catch((err) => {
        window.console.log('err list: ', err)
        this.isLoadingArticle = false
      })
  },
  methods: {
    onSocialClick (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  padding: 48px 96px 96px;
  background: #E2EAF4;

  .header-loading {
    text-align: center;
  }

  &.loading {
    height: 300px;
  }
}

.breadcrumb-content {
  margin-bottom: 48px;
}

.breadcrumb-content-768 {
  display: none;
}

.header-content {
  display: flex;
  gap: 32px;

  .left-content {
    width: 50%;

    .head-text {
      color: #4C4F54;
      font-weight: 300;

      .head-text-1, .head-text-2 {
        font-style: italic;
        font-weight: 300;
      }

      .head-text-3 {
        font-weight: 700;
      }
    }

    .published {
      margin-top: 16px;
      font-weight: 400;
    }
  }

  .right-content {
    width: 50%;

    .picture-container {
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

.social-media-icon {
  .icon {
    cursor: pointer;
    display: inline-block;
    width: 3%;
    min-width: 32px;

    &.facebook {
      margin: 0 16px;
      position: relative;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

@media screen and (max-width: 1276px) {
  .social-media-icon {
    margin-top: 48px;
  }
}

@media screen and (max-width: 768px) {
  .header-container {
    padding: 32px 24px;
  }

  .breadcrumb-content {
    display: none;
  }

  .breadcrumb-content-768 {
    display: block;
    margin-bottom: 24px;
  }

  .header-content {
    flex-direction: column;
    gap: 16px;

    .left-content {
      width: 100%;

      .published {
        margin-top: 8px;
      }
    }

    .right-content {
      width: 100%;
      order: -1;
    }
  }

  .social-media-icon {
    margin-top: 16px;

    .icon {
      min-width: 20px;

      &.facebook {
        margin: 0 8px;
      }
    }
  }
}
</style>
