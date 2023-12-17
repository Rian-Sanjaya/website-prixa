<template>
  <section class="pd-96 header-container">
    <div class="circle-right">
      <img src="~/assets/images/category/circle-right.png">
    </div>
    <div class="circle-right-768">
      <img src="~/assets/images/category/circle-right-768.png">
    </div>
    <div class="header-content">
      <div class="font-24-48-49 category-name">
        <!-- Category: {{ categoryId }} -->
        Category: {{ categoryName }}
      </div>
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
      isLooadingCategory: false,
      categoryName: ''
    }
  },
  mounted () {
    // this.isLoadingNews = true
    // this.$axios.$get(`https://staging-api-web.prixa.ai/blog/active?page=1&limit=9&category_id=${this.categoryId}`)
    //   .then((res) => {
    //     this.news = res.data.result
    //     this.pagination = res.data.pagination
    //     this.current = this.pagination.page
    //     this.isLoadingNews = false
    //   })
    //   .catch((err) => {
    //     window.console.log('err list: ', err)
    //     this.isLoadingNews = false
    //   })

    this.isLooadingCategory = true
    this.$axios.$get(`${this.$config.publicApiBaseUrl}/blog/category`)
      .then((res) => {
        this.categories = res.data.result
        this.isLooadingCategory = false
        const currentCategory = this.categories.filter((cat) => {
          return String(cat.category_id) === this.categoryId
        })
        this.categoryName = currentCategory[0].category_name
      })
      .catch((err) => {
        window.console.log(err)
        this.isLooadingCategory = false
      })
  }
}
</script>

<style lang="less" scoped>
.header-container {
  background: #E2EAF4;
  position: relative;
  overflow: hidden;

  .circle-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 14%;

    img {
      width: 100%;
    }
  }

  .circle-right-768 {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;

    img {
      width: 100%;
    }
  }
}

.category-name {
  color: #4C4F54;
  font-style: italic;
  font-weight: 400;
}

@media screen and (max-width: 831px) {
  .header-container {
    padding: 24px 32px 98px;

    .circle-right {
      display: none;
    }

    .circle-right-768 {
      display: block;
      width: 16%;
    }
  }
}

@media screen and (max-width: 640px) {
  .header-container {
    .circle-right-768 {
      width: 20%;
    }
  }
}
</style>
