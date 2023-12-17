<template>
  <div class="footer-wrapper">
    <section class="content">
      <div class="top-content">
        <div class="content-container">
          <div class="prixa-box">
            <div class="logo">
              <div class="logo-box" @click="handleLogoClick">
                <img src="~/assets/images/footer/LOGO PRIXA 2.png">
              </div>
            </div>
            <div class="description">
              <div class="address">
                <span>PT Pintar Data Group FX Sudirman 7th Floor, Unit 5 Jl. Jenderal Sudirman</span>
              </div>
              <div class="address1">
                <span>Jakarta 10270 Indonesia</span>
              </div>
              <div v-if="$store.state.screenSize > 1168" class="phone-email">
                <span>{{ $t('UTILS.PHONE') }}: +62 21-29924563</span><span style="margin: 0 16px">|</span><span>{{ $t('UTILS.EMAIL') }}: <a href="mailto:temansehatmu@prixa.ai" target="_blank">temansehatmu@prixa.ai</a></span>
              </div>
              <div v-else class="phone-email">
                <div>{{ $t('UTILS.PHONE') }}: +62 21-29924563</div>
                <div>{{ $t('UTILS.EMAIL') }}: <a href="mailto:temansehatmu@prixa.ai" target="_blank">temansehatmu@prixa.ai</a></div>
              </div>
              <div class="social-media-icon">
                <div class="icon instagram" @click="onInstagramClick">
                  <img src="~/assets/images/footer/instagram.png">
                </div>
                <div class="icon linkedin" @click="onLinkedinClick">
                  <img src="~/assets/images/footer/linkedin.png">
                </div>
                <div class="icon youtube" @click="onYoutubeClick">
                  <img src="~/assets/images/footer/youtube.png">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sitemap-container">
          <div class="sitemap-links">
            <div class="sitemap1">
              <div class="top-text">
                {{ $t('MENU.LIST1.WHAT_WE_DO') }}
              </div>
              <ul>
                <li @click="handleMenuClick('What We Do')">
                  <NuxtLink to="/what-we-do/our-solution">
                    {{ $t('MENU.LIST1.OUR_SOLUTION') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('What We Do')">
                  <NuxtLink to="/what-we-do/employee-experience">
                    {{ $t('MENU.LIST1.EMPLOYEE_EXPERIENCE') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('What We Do')">
                  <NuxtLink to="/what-we-do/employer-experience">
                    {{ $t('MENU.LIST1.EMPLOYER_EXPERIENCE') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('What We Do')">
                  <NuxtLink to="/what-we-do/partner-ecosystem">
                    {{ $t('MENU.LIST1.PARTNER_ECOSYSTEM') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="sitemap2">
              <div class="top-text">
                {{ $t('MENU.LIST2.WHO_WE_SERVE') }}
              </div>
              <ul>
                <li @click="handleMenuClick('Who We Serve')">
                  <NuxtLink to="/who-we-serve/members">
                    {{ $t('MENU.LIST2.MEMBERS') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('Who We Serve')">
                  <NuxtLink to="/who-we-serve/employers">
                    {{ $t('MENU.LIST2.EMPLOYERS') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('Who We Serve')">
                  <NuxtLink to="/who-we-serve/partners">
                    {{ $t('MENU.LIST2.PARTNERS') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="sitemap3">
              <div class="top-text">
                {{ $t('MENU.LIST3.ABOUT_US') }}
              </div>
              <ul>
                <li @click="handleMenuClick('About Us')">
                  <NuxtLink to="/about-us/company-overview">
                    {{ $t('MENU.LIST3.COMPANY_HISTORY') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('About Us')">
                  <NuxtLink to="/about-us/career">
                    {{ $t('MENU.LIST3.CAREER') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('About Us')">
                  <NuxtLink to="/about-us/contact-us">
                    {{ $t('MENU.LIST3.CONTACT_US') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('About Us')">
                  <NuxtLink to="/about-us/company-register">
                    {{ $t('MENU.LIST3.COMPANY_REGISTER') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="sitemap-links1">
            <div class="sitemap4" />
            <div class="sitemap5">
              <div class="top-text">
                {{ $t('MENU.LIST4.NEWS_INSIGHT') }}
              </div>
              <ul>
                <li @click="handleMenuClick('News')">
                  <!-- <NuxtLink to="/latest-news"> -->
                  <NuxtLink to="/news-insights/blog">
                    Blog
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="sitemap6">
              <ul>
                <li @click="handleMenuClick('')">
                  <NuxtLink to="/terms-conditions">
                    {{ $t('MENU.LIST6.TNC') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('')">
                  <NuxtLink to="/privacy-policy">
                    {{ $t('MENU.LIST6.PP') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="sitemap-container-734">
          <div class="sitemap-links">
            <div class="sitemap1">
              <div class="top-text">
                {{ $t('MENU.LIST1.WHAT_WE_DO') }}
              </div>
              <ul>
                <li @click="handleMenuClick('What We Do')">
                  <NuxtLink to="/what-we-do/our-solution">
                    {{ $t('MENU.LIST1.OUR_SOLUTION') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('What We Do')">
                  <NuxtLink to="/what-we-do/employee-experience">
                    {{ $t('MENU.LIST1.EMPLOYEE_EXPERIENCE') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('What We Do')">
                  <NuxtLink to="/what-we-do/employer-experience">
                    {{ $t('MENU.LIST1.EMPLOYER_EXPERIENCE') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('What We Do')">
                  <NuxtLink to="/what-we-do/partner-ecosystem">
                    {{ $t('MENU.LIST1.PARTNER_ECOSYSTEM') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="sitemap2">
              <div class="top-text">
                {{ $t('MENU.LIST2.WHO_WE_SERVE') }}
              </div>
              <ul>
                <li @click="handleMenuClick('Who We Serve')">
                  <NuxtLink to="/who-we-serve/members">
                    {{ $t('MENU.LIST2.MEMBERS') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('Who We Serve')">
                  <NuxtLink to="/who-we-serve/employers">
                    {{ $t('MENU.LIST2.EMPLOYERS') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('Who We Serve')">
                  <NuxtLink to="/who-we-serve/partners">
                    {{ $t('MENU.LIST2.PARTNERS') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="sitemap-links1">
            <div class="sitemap3">
              <div class="news">
                <div class="top-text">
                  {{ $t('MENU.LIST4.NEWS_INSIGHT') }}
                </div>
                <ul>
                  <li @click="handleMenuClick('News')">
                    <!-- <NuxtLink to="/latest-news"> -->
                    <NuxtLink to="/news-insights/blog">
                      Blog
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="terms">
                <ul>
                  <li @click="handleMenuClick('')">
                    <NuxtLink to="/terms-conditions">
                      {{ $t('MENU.LIST6.TNC') }}
                    </NuxtLink>
                  </li>
                  <li @click="handleMenuClick('')">
                    <NuxtLink to="/privacy-policy">
                      {{ $t('MENU.LIST6.PP') }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sitemap4">
              <div class="top-text">
                {{ $t('MENU.LIST3.ABOUT_US') }}
              </div>
              <ul>
                <li @click="handleMenuClick('About Us')">
                  <NuxtLink to="/about-us/company-overview">
                    {{ $t('MENU.LIST3.COMPANY_HISTORY') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('About Us')">
                  <NuxtLink to="/about-us/career">
                    {{ $t('MENU.LIST3.CAREER') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('About Us')">
                  <NuxtLink to="/about-us/contact-us">
                    {{ $t('MENU.LIST3.CONTACT_US') }}
                  </NuxtLink>
                </li>
                <li @click="handleMenuClick('About Us')">
                  <NuxtLink to="/about-us/company-register">
                    {{ $t('MENU.LIST3.COMPANY_REGISTER') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-content">
        <div class="mobile-application">
          <span class="icon app-store" @click="onAppStoreClick"><img src="~/assets/images/footer/appstore.png"></span>
          <span class="icon google-play" @click="onGooglePlayClick">
            <img src="~/assets/images/footer/googleplay.png">
          </span>
        </div>
      </div>
    </section>
    <section class="copyright">
      <div class="copyright-text">
        <span>&copy;</span>
        <span>2022 Prixa.ai. {{ $t('MENU.LIST7.RESERVED') }}.</span>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'LayoutFooter',
  methods: {
    ...mapMutations({
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen'
    }),
    onMailClick () {
      window.open('"mailto:temansehatmu@prixa.ai', '_blank')
    },
    onInstagramClick () {
      window.open('https://www.instagram.com/prixa.ai/', '_blank')
    },
    onLinkedinClick () {
      window.open('https://id.linkedin.com/company/prixaai', '_blank')
    },
    onYoutubeClick () {
      window.open('https://www.youtube.com/channel/UCN81lcKjIOZ3zvpJuT5HAxA/videos', '_blank')
    },
    onAppStoreClick () {
      window.open('https://apps.apple.com/my/app/prixa/id6444787199', '_blank')
    },
    onGooglePlayClick () {
      window.open('https://play.google.com/store/apps/details?id=ai.prixa.aso', '_blank')
    },
    handleLogoClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', '')
      this.$router.push('/')
    },
    handleMenuClick (name) {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', name)
    }
  }
}
</script>

<style lang="less" scoped>
.footer-wrapper {
  .content {
    background: #E2EAF4;
    padding: 186px 96px 48px;
    background-image: url('~/assets/images/footer/background.png');
    background-position: center top 40px;
    background-repeat: no-repeat;
    background-size: cover;

    .top-content {
      display: flex;
      justify-content: space-between;
      gap: 32px;

      .content-container {
        width: 50%;

        .prixa-box {
          width: 100%;

          .logo {
            margin-bottom: 16px;

            .logo-box {
              // width: 60%;
              width: 33%;
              cursor: pointer;

              img {
                width: 100%;
                height: auto;
              }
            }
          }

          .description {
            font-size: 1.145rem;
            font-weight: 400;
            color: #4C4F54;

            .phone-email {
              margin: 16px 0 24px;
            }

            .social-media-icon {
              .icon {
                cursor: pointer;
                display: inline-block;
                width: 5%;
                min-width: 32px;

                &.linkedin {
                  margin: 0 8px;
                  position: relative;
                  bottom: 2px;
                }

                img {
                  width: 100%;
                  height: auto;
                }
              }
            }
          }
        }
      }

      .sitemap-container {
        width: 50%;

        .sitemap-links, .sitemap-links1 {
          display: flex;
          justify-content: space-between;
          font-size: 1.145rem;
          font-weight: 400;
          gap: 32px;

          .sitemap1 {
            width: 35%;
          }

          .sitemap2 {
            width: 30%;
          }

          .sitemap3 {
            width: 35%;
          }

          .sitemap4 {
            width: 35%;
          }

          .sitemap5 {
            width: 30%;
          }

          .sitemap6 {
            width: 35%;

            ul {
              margin-top: 8px;
            }
          }

          .top-text {
            font-weight: 700;
            color: #0146AB;
            margin-bottom: 16px;
          }

          ul li {
            margin-bottom: 8px;

            a {
              color: #4C4F54;
            }
          }
        }

        .sitemap-links1 {
          margin-top: 24px;
        }
      }
      .sitemap-container-734 {
        display: none;
      }
    }

    .bottom-content {
      margin-top: 32px;

      .mobile-application {
        display: flex;
        gap: 24px;

        .icon {
          display: block;
          cursor: pointer;

          &.app-store {
            width: 15%;
            min-width: 198px;
          }

          &.google-play {
            width: 13%;
            min-width: 171.59px;
          }

          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }

  .copyright {
    padding: 28px 0;
    text-align: center;
    background: #0146AB;

    .copyright-text {
      display: inline-block;
      color: #FFFFFF;
      font-weight: 300;
      font-size: 1.145rem;
      line-height: 24px;
    }
  }
}

// @media screen and (max-width: 896px) {
//   .footer-wrapper {
//     .content {
//       padding: 186px 48px 48px;
//     }
//   }
// }

@media screen and (max-width: 768px) {
  .footer-wrapper {
    .content {
      padding: 111px 24px 32px;

      .top-content {
        flex-direction: column;

        .content-container {
          width: 100%;

          .prixa-box {
            .logo {
              .logo-box {
                width: 32%;

                img {
                  width: 100%;
                  height: auto;
                }
              }
            }

            .description {
              font-size: clamp(0.86rem, 1.2vw, 1.145rem);
            }
          }
        }

        .sitemap-container {
          width: 100%;
          margin-top: 44px;
        }
      }

      .bottom-content {
        .mobile-application {
          gap: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 734px) {
  .footer-wrapper {
    .content {
      background-image: url('~/assets/images/footer/background734.png');
      background-position: center top 32px;

      .top-content {
        .sitemap-container {
          display: none;
        }

        .sitemap-container-734 {
          display: block;
          width: 100%;
          margin-top: 44px;

          .sitemap-links, .sitemap-links1 {
            display: flex;
            justify-content: space-between;
            font-weight: 400;
            gap: 32px;
            font-size: 0.85rem;

            .sitemap1, .sitemap2, .sitemap3, .sitemap4 {
              width: 50%;
            }

            .top-text {
              font-weight: 700;
              color: #0146AB;
              margin-bottom: 16px;
            }

            ul li {
              margin-bottom: 8px;

              a {
                color: #4C4F54;
              }
            }
          }

          .sitemap-links1 {
            margin-top: 24px;

            .sitemap3 {
              .terms {
                margin-top: 24px;
              }
            }
          }
        }
      }

      .bottom-content {
        .mobile-application {
          .icon {
            &.app-store {
              width: 37%;
              min-width: 126.53px;
              max-width: 198px;
            }

            &.google-play {
              width: 33%;
              min-width: 112.86px;
              max-width: 171.59px;
            }
          }
        }
      }
    }

    .copyright {
      .copyright-text {
        font-size: 0.72rem;
      }
    }
  }
}
</style>
