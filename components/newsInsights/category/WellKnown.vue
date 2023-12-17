<template>
  <section class="pd-96 well-known-container">
    <div class="circle-well-left">
      <img src="~/assets/images/blog/circle-well-left.png">
    </div>
    <div class="circle-well-right">
      <img src="~/assets/images/blog/circle-well-right.png">
    </div>
    <div class="circle-well-left-768">
      <img src="~/assets/images/blog/circle-well-left-768.png">
    </div>
    <div class="circle-well-right-768">
      <img src="~/assets/images/blog/circle-well-right-768.png">
    </div>
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
  </section>
</template>

<script>
export default {
  data () {
    return {
      subscribeEmail: '',
      isLoading: false,
      errors: {}
    }
  },
  methods: {
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
.well-known-container {
  background: #E2EAF4;
  position: relative;

  .circle-well-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .circle-well-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 12%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .circle-well-left-768 {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 38%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .circle-well-right-768 {
    display: none;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 18%;

    img {
      width: 100%;
      height: auto;
    }
  }
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
          margin-top: 56px;

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

@media screen and (max-width: 831px) {
  .well-known-container {
    padding: 24px 32px;

    .circle-well-left {
      display: none;
    }

    .circle-well-right {
      display: none;
    }

    .circle-well-left-768 {
      display: block;
      width: 30%;
    }

    .circle-well-right-768 {
      display: block;
      width: 16%;
    }
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
</style>
