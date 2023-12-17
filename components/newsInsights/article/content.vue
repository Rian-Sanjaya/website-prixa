<template>
  <section
    :class="[
      'content-container',
      isLoadingArticle ? 'loading' : ''
    ]"
  >
    <div v-if="isLoadingArticle" class="content-loading">
      <a-spin />
    </div>
    <div v-if="!isLoadingArticle" class="content-main">
      <!-- <div class="text top">
        Kecemburuan adalah reaksi alami yang pernah dialami semua orang ketika pasangannya lebih suka dengan sesuatu atau orang lain. Kecemburuan perlu menjadi perhatian ketika sudah dilakukan secara berlebihan, menganggu kesejahteraan pasangan, dan muncul dari alasan yang tidak rasional.
      </div>
      <div class="text">
        Jangan biarkan, kecenderungan ini mengisi hubunganmu yang selama ini telah dibangun. Simak 5 Tanda kecemburuan sudah membuat hubunganmu tidak sehat!
      </div>
      <div class="text">
        Dilansir dari Verywell Mind, kecemburuan adalah reaksi terhadap ancaman yang dirasakan, baik nyata atau khayalan, terhadap hubungan yang dianggap berharga. Biasanya, rasa cemburu muncul ketika seseorang merasa takut bahwa orang lain sedang mencoba mendekati atau memenangkan kasih sayang dari orang yang dicintai.
      </div>
      <div class="text paragraph">
        Kecemburuan sering datang dengan perasaan lainnya. Karena tidak percaya diri, kamu atau pasangan mungkin juga merasa marah, cemas, dan tertekan. Bahkan, kecemburuan berlebihan juga dapat memicu perilaku berbahaya, termasuk stalking (menguntit) dan kekerasan fisik. Inilah alasan mengapa kecemburuan bisa berdampak sangat buruk bagimu dan hubunganmu.
      </div>
      <div class="text head">
        5 Tanda Kecemburuan Tidak Sehat dalam Hubungan.
      </div>
      <div class="text top">
        Beberapa orang mungkin sulit membedakan kecemburuan yang normal dan yang cenderung tidak sehat. Untuk itu, simak 5 tanda kecemburuan yang tidak sehat di bawah ini!
      </div>
      <div class="text head">
        Kecemburuan digunakan untuk menyalahkan dan memanipulasi
      </div>
      <div class="text top">
        Salah satu tanda bahwa pasangan kamu menunjukkan kecemburuan yang tidak sehat adalah ketika rasa cemburu tersebut digunakan sebagai indikasi bahwa kamu melakukan kesalahan tertentu. Contohnya, saat kamu pergi dengan teman-temanmu dan pasanganmu cemburu dengan salah satu di antara mereka, dia akan menyalahkan kamu karena kamu ikut pergi. Jika pasangan menjadikan kecemburuan sebagai dasar untuk manipulasi kamu, ini juga tanda bahwa kecemburuan tersebut tidak sehat. Mungkin dia akan menuduh bahwa kamu memiliki hubungan dengan orang lain, padahal itu tidak benar. Dikutip dari Psychology Today, ini adalah tanda bahwa pasangan lebih mengutamakan kebutuhan dan perspektif mereka dalam hubungan dan ingin mencoba mengendalikan kamu.
      </div>
      <div class="text head">
        Kecemburuan dijadikan alasan untuk mengisolasi kamu
      </div>
      <div class="text top">
        Kecemburuan tidak lagi wajar jika ini membuat pasangan kamu mengisolasi atau menjauhkan kamu dari keluarga atau teman-teman yang menjadi sistem dukunganmu. Pasangan mungkin mengatakan bahwa orang-orang tersebut tidak baik untukmu dan mengontrol waktumu dengan mereka. Menurut Psychology Today, ini akan meningkatkan risiko pelecehan secara signifikan karena membuat seseorang sulit mendapatkan bantuan orang lain dari hidupnya untuk mendeteksi masalah ini dalam hubungan dan keluar dari hubungan yang tidak sehat tersebut.
      </div>
      <div class="text head">
        Pasangan marah ketika kamu melakukan sesuatu tanpanya
      </div>
      <div class="text top">
        Menghabiskan banyak waktu bersama pasangan memang bisa memperkuat hubungan. Mungkin beberapa orang merasa ada yang tidak lengkap ketika tidak menghabiskan waktu bersama pasangan, dan ini normal. Akan tetapi, jika pasangan kamu marah saat kamu melakukan aktivitas tertentu tanpanya, ini menunjukkan kecemburuan yang berlebihan dan tidak sehat.
      </div>
      <div class="text paragraph">
        Dilansir dari Marriage, hubungan yang bahagia dan sehat memfasilitasi waktu sendiri (me-time) bagi masing-masing orang. Jika kamu berada dalam hubungan yang membuat kamu sulit mendapatkan me-time, kamu mungkin menjadi mudah merasa stres dan cemas. Sudah saatnya kamu komunikasikan hal ini dengan pasanganmu dan beri tahu bahwa perilakunya tidak sehat bagi hubungan kalian.
      </div>
      <div class="text head">
        Kamu sering mengubah perilaku untuk menghindari kecemburuan
      </div>
      <div class="content-image">
        <img src="~/assets/images/article/content-image.png">
      </div>
      <div class="text paragraph">
        Menghadapi kecemburuan yang berlebihan tentunya cepat atau lambat akan membuat kamu lelah secara emosional. Untuk menghindari kecemburuan pasanganmu, kamu mungkin memilih untuk tidak melakukan hal-hal yang akan membuatnya cemburu atau bahkan berbohong untuk menghindari masalah. Perubahan perilaku ini adalah tanda paling awal dari hubungan yang mengendalikan (controlling).
      </div>
      <div class="text head">
        Kecemburuan mengarah pada ancaman
      </div>
      <div class="text">
        Hubungan menjadi sangat tidak sehat atau toxic ketika sudah melibatkan ancaman. Tidak jarang, kecemburuan yang berlebihan bisa mengarah pada ancaman, baik yang melibatkan kekerasan fisik atau halus. Contoh ancaman yang halus adalah ketika pasangan mengancam untuk menyakiti dirinya ketika kamu melakukan suatu hal yang membuat mereka cemburu. Jika hal ini terjadi di hubunganmu, pahamilah bahwa kecemburuan ini sudah sangat tidak sehat dan bahkan berbahaya bagimu.
      </div> -->
      <!-- <div class="text top">
        {{ content }}
      </div> -->
      <div v-html="content" />
      <div class="tags-conatiner">
        <div class="title">
          Tags:
        </div>
        <div class="tag-box">
          <ul class="list-box">
            <li v-for="(tag, idx) in tags" :key="idx" class="list-item">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentPage',
  props: {
    articleId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // tags: ['Kesehatan', 'Psikologi', 'Pasangan', 'Relatiionship', 'Problems'],
      tags: [],
      content: '',
      isLoadingArticle: ''
    }
  },
  mounted () {
    this.isLoadingArticle = true
    this.$axios.$get(`${this.$config.publicApiBaseUrl}/blog/${this.articleId}`)
      .then((res) => {
        this.content = res.data.content
        this.tags = res.data.tags ? res.data.tags : []
        this.isLoadingArticle = false
      })
      .catch((err) => {
        window.console.log('err list: ', err)
        this.isLoadingArticle = false
      })
  }
}
</script>

<style lang="less" scoped>
.content-container {
  padding: 58px 96px;

  .content-loading {
    text-align: center;
  }

  &.loading {
    height: 300px;
  }
}

.content-main {
  padding: 0 96px;

  .text {
    font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px
    font-weight: 400;

    &.paragraph {
      margin-top: 32px;
    }

    &.head {
      margin-top: 32px;
      font-weight: 700;
    }
  }

  .content-image {
    width: 50%;
    margin-top: 32px;

    img {
      width: 100%;
    }
  }

  .tags-conatiner {
    margin-top: 56px;
    display: flex;
    font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
    font-weight: 400;

    .title {
      margin-right: 16px;
    }

    .tag-box {
      .list-box {
        display: flex;

        .list-item {
          padding: 4px 16px;
          background: #CCDAEE;
          margin-right: 8px;
          border-radius: 32px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .content-container {
    padding: 32px 24px;
  }

  .content-main {
    padding: 0;

    .content-image {
      width: 100%;
    }

    .tags-conatiner {
      margin-top: 32px;

      .title {
        margin-right: 8px;
      }

      .tag-box {
        .list-box {
          flex-wrap: wrap;

          .list-item {
            margin-right: 4px;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
}
</style>
