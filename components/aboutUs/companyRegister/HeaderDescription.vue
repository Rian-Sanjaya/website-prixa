<template>
  <section class="pd-96 register-container">
    <div class="register-content">
      <div class="left-container">
        <div class="left-content">
          <div class="register-box">
            <div class="icon-box">
              <img src="~/assets/images/company-register/register-icon.png">
            </div>
            <div class="font-14-20-20 register-text-box">
              <div class="register-text">
                {{ $t('MENU.LIST3.COMPANY_REGISTER') }}
              </div>
            </div>
          </div>
          <div class="font-12-24-24 description">
            <div class="description-text">
              “{{ $t('ABOUT_US.REGISTER.HEADER.LINE1_1') }} <span class="italic">{{ $t('ABOUT_US.REGISTER.HEADER.LINE1_2') }}</span> {{ $t('ABOUT_US.REGISTER.HEADER.LINE1_3') }} <span class="bold">{{ $t('ABOUT_US.REGISTER.HEADER.LINE1_4') }}</span>. {{ $t('ABOUT_US.REGISTER.HEADER.LINE1_5') }} <span class="italic">{{ $t('ABOUT_US.REGISTER.HEADER.LINE1_6') }}</span> <span class="bold">{{ $t('ABOUT_US.REGISTER.HEADER.LINE1_7') }}</span> {{ $t('ABOUT_US.REGISTER.HEADER.LINE1_8') }} <span class="italic">{{ $t('ABOUT_US.REGISTER.HEADER.LINE1_9') }}</span> {{ $t('ABOUT_US.REGISTER.HEADER.LINE1_10') }} <span class="bold">{{ $t('ABOUT_US.REGISTER.HEADER.LINE1_11') }}</span>.”
            </div>
          </div>
          <div class="youtube-container">
            <div class="youtube-box">
              <iframe
                id="widget2"
                frameborder="0"
                allowfullscreen="true"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                title="Prixa: Tunjangan Kesehatan Perusahaan yang Optimal #PrixaSekarang"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sEhS83z3XRM?autoplay=0&amp;mute=0&amp;controls=1&amp;loop=0&amp;origin=https%3A%2F%2Fwww.prixa.ai&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=1"
              />
            </div>
          </div>
          <!-- <div class="comprehensive-box">
            <div class="font-12-16-16 comprehensive-text">
              &#8220;A comprehensive solution for flexible and integrated health service needs for companies.&#8221;
            </div>
            <div class="quote-source">
              <div class="icon-content">
                <div class="icon-box">
                  <img src="~/assets/images/employer-experience/linkedin.png">
                </div>
              </div>
              <div class="source-text">
                <div class="source-head-text">
                  LinkedIn
                </div>
                <div class="source-sub-text">
                  Head of Global Benefits
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="right-container">
        <div class="register-form-box">
          <div class="font-12-16-16 register-label">
            Register your company by filling out the form below.
          </div>
          <!-- <div v-show="success === true" class="success-submit">
            <div class="success-content">
              <div class="left-container">
                <div class="icon-box">
                  <img src="~/assets/images/company-register/success-icon.png">
                </div>
              </div>
              <div class="right-container">
                <div class="font-12-14-14 head-text">
                  Submitted Successfully!
                </div>
                <div class="font-12-14-14 sub-text">
                  We have received your registration form and will get back to you soon.
                </div>
              </div>
            </div>
          </div> -->
          <form class="form-content" @submit.prevent="register">
            <div class="form-item">
              <div class="item-label">
                <span class="font-12-14-14 required-label">Name</span>
              </div>
              <div class="item-input-box">
                <input v-model="company.name" type="text" class="font-12-14-14 item-input" placeholder="Type your name">
              </div>
              <div class="font-12-14-14 item-error">
                {{ errors.name }}
              </div>
            </div>
            <div class="form-item-row">
              <div class="form-item">
                <div class="item-label">
                  <span class="font-12-14-14 required-label">Email</span>
                </div>
                <div class="item-input-box">
                  <input v-model="company.email" type="text" class="font-12-14-14 item-input" placeholder="Type your email">
                </div>
                <div class="font-12-14-14 item-error">
                  {{ errors.email }}
                </div>
              </div>
              <div class="form-item">
                <div class="item-label">
                  <span class="font-12-14-14 required-label">Phone Number</span>
                </div>
                <div class="item-input-box">
                  <input v-model="company.phone" type="text" class="font-12-14-14 item-input" placeholder="Type your phone number">
                </div>
                <div class="font-12-14-14 item-error">
                  {{ errors.phone }}
                </div>
              </div>
            </div>
            <div class="form-item">
              <div class="item-label">
                <span class="font-12-14-14 required-label">Company</span>
              </div>
              <div class="item-input-box">
                <input v-model="company.company" type="text" class="font-12-14-14 item-input" placeholder="Type your company">
              </div>
              <div class="font-12-14-14 item-error">
                {{ errors.company }}
              </div>
            </div>
            <div class="form-item">
              <div class="item-label">
                <span class="font-12-14-14 required-label">Position</span>
              </div>
              <div class="item-input-box">
                <input v-model="company.position" type="text" class="font-12-14-14 item-input" placeholder="Type your position">
              </div>
              <div class="font-12-14-14 item-error">
                {{ errors.position }}
              </div>
            </div>
            <div class="submit-box">
              <button type="submit" class="submit-btn">
                Register <a-spin v-if="isLoading" class="register-company-btn" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

// const validateName = (name) => {
//   if (!name.length) {
//     return { valid: false, error: 'This field is required' }
//   }
//   return { valid: true, error: null }
// }

// const validateEmail = (email) => {
//   if (!email.length) {
//     return { valid: false, error: 'This field is required' }
//   }
//   if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
//     return { valid: false, error: 'Please type a valid email address' }
//   }
//   return { valid: true, error: null }
// }

// const validatePhone = (phone) => {
//   if (!phone.length) {
//     return { valid: false, error: 'This field is required' }
//   }
//   return { valid: true, error: null }
// }

// const validateCompany = (company) => {
//   if (!company.length) {
//     return { valid: false, error: 'This field is required' }
//   }
//   return { valid: true, error: null }
// }

// const validatePosition = (position) => {
//   if (!position.length) {
//     return { valid: false, error: 'This field is required' }
//   }
//   return { valid: true, error: null }
// }

export default {
  data () {
    return {
      company: {
        name: '',
        email: '',
        phone: '',
        company: '',
        position: ''
      },
      valid: true,
      success: false,
      errors: {},
      isLoading: false

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
  },
  methods: {
    ...mapMutations({
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen',
      setMenuMobileOpen: 'setMenuMobileOpen'
    }),
    capitalizeFirstLetter (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    register () {
      this.isLoading = true

      const payload = {
        name: this.company.name,
        email: this.company.email,
        phone: this.company.phone,
        company: this.company.company,
        position: this.company.position
      }

      this.$axios.$post(`${this.$config.publicApiBaseUrl}/registration`, payload, {
        headers: {
          'Content-type': 'application/json'
        }
      }).then((res) => {
        this.valid = true
        if (this.valid) {
          this.company.name = ''
          this.company.email = ''
          this.company.phone = ''
          this.company.company = ''
          this.company.position = ''
          this.$router.push('/about-us/company-register/thank-you')
        }
      }).catch((err) => {
        clearTimeout(this.$store.state.ratingTimeout)
        const res = err.response.data

        this.errors = {}
        this.valid = true

        if (res.error) {
          const errArr = res.error.split(';')
          errArr.forEach((err) => {
            if (err.slice(0, err.indexOf(':')).includes('name')) {
              this.errors.name = this.capitalizeFirstLetter(err.slice(6).trim())
              if (this.valid) {
                this.valid = false
              }
            } else if (err.slice(0, err.indexOf(':')).includes('email')) {
              this.errors.email = this.capitalizeFirstLetter(err.slice(7).trim())
              if (this.valid) {
                this.valid = false
              }
            } else if (err.slice(0, err.indexOf(':')).includes('phone')) {
              this.errors.phone = this.capitalizeFirstLetter(err.slice(7).trim())
              if (this.valid) {
                this.valid = false
              }
            } else if (err.slice(0, err.indexOf(':')).includes('company')) {
              this.errors.company = this.capitalizeFirstLetter(err.slice(9).trim())
              if (this.valid) {
                this.valid = false
              }
            } else if (err.slice(0, err.indexOf(':')).includes('position')) {
              this.errors.position = this.capitalizeFirstLetter(err.slice(10).trim())
              if (this.valid) {
                this.valid = false
              }
            }
          })
        }
      }).finally((res) => {
        this.isLoading = false
      })
    }
  }
}
</script>

<style lang="less">
.register-company-btn {
  .ant-spin-dot-spin {
    .ant-spin-dot-item {
      // background: #0146AB;
      background: #fff;
    }
  }
}
</style>

<style lang="less" scoped>
.register-container {
  background: #E2EAF4;
}

.register-content {
  display: flex;
  justify-content: space-between;
  gap:56px;
  overflow: hidden;

  .left-container {
    width: 48%;

    .left-content {
      .register-box {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;

        .icon-box {
          width: 6.5%;
          min-width: 38.53px;

          img {
            width: 100%;
            height: auto;
          }
        }

        .register-text-box {
          color: #DEA7B3;
          font-weight: 500;
          display: flex;
          align-items: center;
        }
      }

      .description {
        font-weight: 400;
        color: #4C4F54;
        line-height: 45px;

        .italic {
          font-style: italic;
        }

        .bold {
          font-weight: 700;
        }
      }

      .youtube-container {
        height: 36vh;
        margin: 32px 0;

        .youtube-box {
          width: 100%;
          height: 100%;
        }
      }

      .comprehensive-box {
        .comprehensive-text {
          font-weight: 400;
          color: #4C4F54;
        }

        .quote-source {
          display: flex;
          gap: 8px;
          position: relative;
          z-index: 1;
          margin: 32px 0 0;

          .icon-content {
            display: flex;
            align-items: center;
            width: 8%;

            .icon-box {
              width: 100%;

              img {
                width: 100%;
                height: auto;
              }
            }
          }

          .source-head-text {
            font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px
            font-weight: 700;
          }

          .source-sub-text {
            font-size: 14px;
            font-size: clamp(0.86rem, 0.927vw, 1rem); // 12.04px, 14.0162px, 14px
            font-weight: 400;
          }
        }
      }
    }
  }

  .right-container {
    width: 52%;

    .register-form-box {
      .register-label {
        margin-bottom: 40px;
      }

      .success-submit {
        background: #D9F5E8;
        border: 1px solid #44CD90;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;

        .success-content {
          display: flex;
          gap: 12px;

          .left-container {
            width: 3.9%;
            min-width: 24px;

            .icon-box {
              width: 100%;

              img {
                width: 100%;
                height: auto;
              }
            }
          }

          .right-container {
            width: unset;

            .head-text {
              font-weight: 700;
            }

            .sub-text {
              font-weight: 400;
              margin-top: 8px;
            }
          }
        }
      }

      .form-content {
        margin: 0 0 40px;

        .form-item {
          margin-bottom: 40px;

          .item-label {
            margin-bottom: 8px;
            color: #0146AB;

            .required-label::before {
              content: '*';
              position: relative;
              top: 2px;
              color: #f5222d;
              margin-right: 4px;
            }
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

        .form-item-row {
          display: flex;
          gap: 32px;
          justify-content: space-between;

          .form-item {
            width: 50%;

            .item-label {
              margin-bottom: 8px;

              .required-label::before {
                content: '*';
                position: relative;
                top: 2px;
                color: #f5222d;
                margin-right: 4px;
              }
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
        }

        .submit-box {
          .submit-btn {
            padding: 16px 48px;
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

            .register-company-btn {
              position: absolute;
              margin-left: 8px;
            }
          }

          .submit-btn:hover {
            background: #E2EAF4;
            color: #0146AB;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .register-content {
    flex-direction: column;

    .left-container {
      width: 100%;

      .left-content {
        .youtube-container {
          height: 50vw;
          min-width: 327px;
          min-height: 187.5px;
        }
      }
    }

    .right-container {
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .register-container {
    padding: 32px 24px;
  }

  .register-content {
    flex-direction: column;
    gap: 32px;

    .left-container {
      .left-content {
        .register-box {
          margin-bottom: 8px;
        }

        .description {
          line-height: 24px;
        }

        .youtube-container {
          margin: 16px 0;
        }

        .comprehensive-box {
          .quote-source {
            margin: 16px 0 0;
          }
        }
      }
    }

    .right-container {
      .register-form-box {
        .register-label {
        margin-bottom: 24px;
      }

        .success-submit {
          margin-bottom: 8px;
        }

        .form-content {
          margin: 0 0 8px;

          .form-item {
            margin-bottom: 32px;
          }

          .form-item-row {
            flex-direction: column;
            gap: unset;

            .form-item {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
