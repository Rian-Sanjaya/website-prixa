<template>
  <div class="rating-content">
    <div class="x-box" @click="onXClick">
      <img src="~/assets/images/rating/cross.png">
    </div>
    <div class="star-box">
      <div class="star-label">
        How was your experience using the prixa website
      </div>
      <star-rating
        v-model="starRate"
        class="star-rate"
        :star-size="$store.state.screenSize > 768 ? 50 : 25"
        :show-rating="false"
        :rounded-corners="true"
        :padding="$store.state.screenSize > 768 ? 24 : 16"
        @rating-selected="onStarClick"
      />
      <div v-show="errors.stars" class="errors stars">
        {{ errors.stars }}
      </div>
    </div>
    <div class="feedback-box">
      <div class="feedback-label">
        Tell us more about your experience
      </div>
      <div class="textarea-box">
        <textarea v-model="feedback" class="feedback-input" onInput="this.parentNode.dataset.replicatedValue = this.value" />
      </div>
      <div v-show="errors.feedback" class="feedback errors">
        {{ errors.feedback }}
      </div>
    </div>
    <div class="service-box">
      <div class="service-label">
        Would you recommend our service?
      </div>
      <ul class="service-rating-box">
        <li class="no-box">
          <div
            :class="[
              'image-box',
              serviceChoosen === 'No' ? 'choosen' : ''
            ]"
            @click="onServiceClick('No')"
          />
          <div class="label">
            No
          </div>
        </li>
        <li class="maybe-box">
          <div
            :class="[
              'image-box',
              serviceChoosen === 'Maybe' ? 'choosen' : ''
            ]"
            @click="onServiceClick('Maybe')"
          />
          <div class="label">
            Maybe
          </div>
        </li>
        <li class="absolutely-box">
          <div
            :class="[
              'image-box',
              serviceChoosen === 'Absolutely!' ? 'choosen' : ''
            ]"
            @click="onServiceClick('Absolutely!')"
          />
          <div class="label">
            Absolutely!
          </div>
        </li>
      </ul>
      <div v-show="errors.service" class="errors service">
        {{ errors.service }}
      </div>
    </div>
    <div class="submit-box">
      <button class="submit-btn" @click="onSubmitClick">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import { mapMutations } from 'vuex'

export default {
  components: { StarRating },
  data () {
    return {
      starRate: 0,
      feedback: '',
      serviceChoosen: '',
      clientIp: '',
      errors: {}
    }
  },
  mounted () {
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then((res) => {
        this.clientIp = res.ip
      })
  },
  methods: {
    ...mapMutations[{
      setRatingPopupShow: 'setRatingPopupShow',
      setRatingTimeout: 'setRatingTimeout',
      setAlreadyRating: 'setAlreadyRating'
    }],
    capitalizeFirstLetter (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    onSubmitClick () {
      let service = 0
      if (this.serviceChoosen === 'No') {
        service = 1
      } else if (this.serviceChoosen === 'Maybe') {
        service = 2
      } else if (this.serviceChoosen === 'Absolutely!') {
        service = 3
      }

      const payload = {
        stars: this.starRate,
        feedback: this.feedback,
        service,
        ip_address: this.clientIp
      }

      this.$axios.$post(`${this.$config.publicApiBaseUrl}/rating`, payload, {
        'Content-type': 'application;json'
      }).then((res) => {
        this.$store.commit('setAlreadyRating', true)
        clearTimeout(this.$store.state.ratingTimeout)
        this.$store.commit('setRatingPopupShow', false)
      }).catch((err) => {
        const res = err.response.data
        this.errors = {}

        if (res.error) {
          const errRes = res.error.split(';')
          errRes.forEach((err) => {
            if (err.slice(0, err.indexOf(':')).includes('feedback')) {
              this.errors.feedback = this.capitalizeFirstLetter('feedback ' + err.slice(10).trim())
            } else if (err.slice(0, err.indexOf(':')).includes('service')) {
              this.errors.service = this.capitalizeFirstLetter('service ' + err.slice(10).trim())
            } else if (err.slice(0, err.indexOf(':')).includes('stars')) {
              this.errors.stars = this.capitalizeFirstLetter('stars ' + err.slice(8).trim())
            }
          })
        } else {
          window.console.log('err: ', err)
        }
      })
    },
    onStarClick () {
      clearTimeout(this.$store.state.ratingTimeout)
    },
    onServiceClick (value) {
      this.serviceChoosen = value
    },
    onXClick () {
      clearTimeout(this.$store.state.ratingTimeout)
      this.$store.commit('setRatingPopupShow', false)
      this.errors = {}
    }
  }
}
</script>

<style lang="less" scoped>
.rating-content {
  position: fixed;
  z-index: 1062;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 592px;
  // height: 300px;
  background: #fff;
  border-radius: 6px;
  padding: 32px;

  .x-box {
    position: absolute;
    top: 16px;
    right: 24px;
    width: 20px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  .star-box {
    margin-bottom: 32px;

    .star-label {
      margin-bottom: 32px;
      font-size: 12px;
      font-weight: 700;
    }

    .star-rate {
      .vue-star-rating {
        margin: 0 auto;
      }
    }

    .errors {
      color: #FF6E5D;
      font-size: 12px;
    }
  }

  .feedback-box {
    margin-bottom: 32px;

    .feedback-label {
      margin-bottom: 8px;
      font-size: 12px;
      font-weight: 700;
    }

    .textarea-box {
      border: 1px solid #d9d9d9;;
      border-radius: 5px;
      // border: none;

      .feedback-input {
        resize: none;
        width: 100%;
        border-radius: 5px;
        height: 100px;
        padding: 16px;
        border-top: none;
        border-left: none;
        border-right: none;
        // border-bottom: 16px solid #fff;
        border-bottom: none;
        color: #4C4F54;

        &:focus-visible {
          outline: none;
        }
      }
    }

    .textarea-box:focus-within {
      outline: -webkit-focus-ring-color auto 1px;
    }

    .errors {
      color: #FF6E5D;
      font-size: 12px;
    }
  }

  .service-box {
    .service-label {
      margin-bottom: 32px;
      font-size: 12px;
      font-weight: 700;
    }

    .service-rating-box {
      display: flex;
      justify-content: space-evenly;

      .no-box, .maybe-box, .absolutely-box {
        .image-box {
          width: 72px;
          height: 72px;
          background-repeat: no-repeat;
          background-size: cover;
          cursor: pointer;
        }

        .label {
          font-size: 12px;
          margin-top: 16px;
          text-align: center;
        }
      }

      .no-box {
        .image-box {
          background-image: url('~/assets/images/rating/no-default.png');

          &:hover {
            background-image: url('~/assets/images/rating/no-hovered.png')
          }

          &:active {
            background-image: url('~/assets/images/rating/no-pressed.png')
          }

          &.choosen {
            background-image: url('~/assets/images/rating/no-pressed.png')
          }
        }
      }

      .maybe-box {
        .image-box {
          background-image: url('~/assets/images/rating/maybe-default.png');

          &:hover {
            background-image: url('~/assets/images/rating/maybe-hovered.png')
          }

          &:active {
            background-image: url('~/assets/images/rating/maybe-pressed.png')
          }

          &.choosen {
            background-image: url('~/assets/images/rating/maybe-pressed.png')
          }
        }
      }

      .absolutely-box {
        .image-box {
          background-image: url('~/assets/images/rating/absolutely-default.png');

          &:hover {
            background-image: url('~/assets/images/rating/absolutely-hovered.png')
          }

          &:active {
            background-image: url('~/assets/images/rating/absolutely-pressed.png')
          }

          &.choosen {
            background-image: url('~/assets/images/rating/absolutely-pressed.png')
          }
        }
      }
    }

    .errors {
      color: #FF6E5D;
      font-size: 12px;
    }
  }

  .submit-box {
    margin-top: 32px;
    text-align: center;

    .submit-btn {
      padding: 16px 24px;
      color: #fff;
      font-size: clamp(0.86rem, 0.927vw, 1rem);
      font-weight: 700;
      background: #0146AB;
      display: inline-block;
      border-radius: 8px;
      cursor: pointer;
      position: relative;
      border: 1px solid #0146AB;
      transition: all 0.5s;
    }

    .submit-btn:hover {
      background: #fff;
      color: #0146AB;
    }
  }
}

@media screen and (max-width: 768px) {
  .rating-content {
    width: 319px;
    padding: 32px 24px;

    .x-box {
      top: 10px;
      right: 10px;
    }

    .service-box {
      .service-rating-box {
        justify-content: space-around;

        .no-box, .maybe-box, .absolutely-box {
          .image-box {
            width: 45px;
            height: 45px;
          }
        }

        .absolutely-box {
          .image-box {
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
.rating-content .star-box .star-rate .vue-star-rating {
  margin: 0 auto;
}

// .rating-content .star-box .star-rate.vue-star-rating {
//   margin: 0 auto;
// }
</style>
