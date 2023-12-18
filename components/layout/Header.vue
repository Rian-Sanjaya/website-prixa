<template>
  <div class="header-wrapper" :class="{ 'is-hidden': !showHeader}">
    <div class="navigation-mobile">
      <div class="logo-hamburger-container">
        <div class="logo-container">
          <div class="logo-box" @click="handleLogoClick">
            <img src="~/assets/images/navbar/LOGO PRIXA 1.png">
          </div>
        </div>
        <div class="lang-ham-container">
          <div class="language-box">
            <a-radio-group v-model="language" size="small">
              <a-radio-button
                value="id"
                class="in-box"
                :style="{
                  background: language === 'id' ? '#E2EAF4' : '#ffffff',
                  color: language === 'id' ? '#0146AB' : 'rgba(0, 0, 0, 0.85)',
                  fontWeight: language === 'id' ? '700' : '400',
                  borderColor: language === 'id' ? '#0146AB' : '#D9D9D9'
                }"
                @click="$i18n.locale = 'id'"
              >
                ID
              </a-radio-button>
              <a-radio-button
                value="en"
                class="en-box"
                :style="{
                  background: language === 'en' ? '#E2EAF4' : '#ffffff',
                  color: language === 'en' ? '#0146AB' : 'rgba(0, 0, 0, 0.85)',
                  fontWeight: language === 'en' ? '700' : '400',
                  borderColor: language === 'en' ? '#0146AB' : '#D9D9D9'
                }"
                @click="$i18n.locale = 'en'"
              >
                EN
              </a-radio-button>
            </a-radio-group>
          </div>
          <div class="hamburger-container">
            <div :class="['hamburger-box', hamburgerState === 'open' ? 'open' : '']" @click="handleHamburgerClick">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-mobile-drawer-container">
      <a-drawer
        width="100%"
        class="header-mobile-drawer"
        :placement="placement"
        :closable="false"
        :visible="visible"
        @close="onCloseMenuMobile"
      >
        <div class="header">
          <div class="close-box" @click="onCloseMenuMobile">
            <img src="~/assets/images/navbar/mobile-close.png">
          </div>
        </div>
        <div class="menu-container">
          <div class="menu-box">
            <ul class="menu-list">
              <li
                :class="[
                  'menu-item',
                  menuMobileOpenComputed === 'What We Do' ? 'open' : '',
                  menuActiveComputed === 'What We Do' ? 'active' : ''
                ]"
              >
                <div class="top-text" @click="handleMenuMobileLabelClick('What We Do')">
                  <span>{{ $t('MENU.LIST1.WHAT_WE_DO') }}</span>
                  <span>
                    <!-- <font-awesome-icon
                      icon="angle-down"
                      class="menu-icon"
                    /> -->
                    <a-icon type="down" class="menu-icon" />
                  </span>
                </div>
                <ul class="submenu">
                  <li class="submenu-item" @click="handleMenuMobileClick('What We Do', '/what-we-do/our-solution')">
                    <div class="submenu-item-box">
                      <div class="icon-container">
                        <div class="icon-box">
                          <img src="~/assets/images/navbar/our-solution.png">
                        </div>
                      </div>
                      <div class="menu-text">
                        <NuxtLink to="/what-we-do/our-solution">
                          {{ $t('MENU.LIST1.OUR_SOLUTION') }}
                        </NuxtLink>
                      </div>
                    </div>
                  </li>
                  <li class="submenu-item" @click="handleMenuMobileClick('What We Do', '/what-we-do/employee-experience')">
                    <div class="submenu-item-box">
                      <div class="icon-container">
                        <div class="icon-box">
                          <img src="~/assets/images/navbar/employee-experience.png">
                        </div>
                      </div>
                      <div class="menu-text">
                        <NuxtLink to="/what-we-do/employee-experience">
                          {{ $t('MENU.LIST1.EMPLOYEE_EXPERIENCE') }}
                        </NuxtLink>
                      </div>
                    </div>
                  </li>
                  <li class="submenu-item" @click="handleMenuMobileClick('What We Do', '/what-we-do/employer-experience')">
                    <div class="submenu-item-box">
                      <div class="icon-container">
                        <div class="icon-box">
                          <img src="~/assets/images/navbar/employer-experience.png">
                        </div>
                      </div>
                      <div class="menu-text">
                        <NuxtLink to="/what-we-do/employer-experience">
                          {{ $t('MENU.LIST1.EMPLOYER_EXPERIENCE') }}
                        </NuxtLink>
                      </div>
                    </div>
                  </li>
                  <li class="submenu-item" @click="handleMenuMobileClick('What We Do', '/what-we-do/partner-ecosystem')">
                    <div class="submenu-item-box">
                      <div class="icon-container">
                        <div class="icon-box">
                          <img src="~/assets/images/navbar/partner-ecosystem.png">
                        </div>
                      </div>
                      <div class="menu-text">
                        <NuxtLink to="/what-we-do/partner-ecosystem">
                          {{ $t('MENU.LIST1.PARTNER_ECOSYSTEM') }}
                        </NuxtLink>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                :class="[
                  'menu-item',
                  menuMobileOpenComputed === 'Who We Serve' ? 'open' : '',
                  menuActiveComputed === 'Who We Serve' ? 'active' : ''
                ]"
              >
                <div class="top-text" @click="handleMenuMobileLabelClick('Who We Serve')">
                  <span>{{ $t('MENU.LIST2.WHO_WE_SERVE') }}</span>
                  <span>
                    <!-- <font-awesome-icon
                      icon="angle-down"
                      class="menu-icon"
                    /> -->
                    <a-icon type="down" class="menu-icon" />
                  </span>
                </div>
                <ul class="submenu">
                  <li class="submenu-item" @click="handleMenuMobileClick('Who We Serve', '/who-we-serve/members')">
                    <div class="submenu-item-box">
                      <div class="icon-container">
                        <div class="icon-box">
                          <img src="~/assets/images/navbar/members.png">
                        </div>
                      </div>
                      <div class="menu-text">
                        <NuxtLink to="/who-we-serve/members">
                          {{ $t('MENU.LIST2.MEMBERS') }}
                        </NuxtLink>
                      </div>
                    </div>
                  </li>
                  <li class="submenu-item" @click="handleMenuMobileClick('Who We Serve', '/who-we-serve/employers')">
                    <div class="submenu-item-box">
                      <div class="icon-container">
                        <div class="icon-box">
                          <img src="~/assets/images/navbar/employers.png">
                        </div>
                      </div>
                      <div class="menu-text">
                        <NuxtLink to="/who-we-serve/employers">
                          {{ $t('MENU.LIST2.EMPLOYERS') }}
                        </NuxtLink>
                      </div>
                    </div>
                  </li>
                  <li class="submenu-item" @click="handleMenuMobileClick('Who We Serve', '/who-we-serve/partners')">
                    <div class="submenu-item-box">
                      <div class="icon-container">
                        <div class="icon-box">
                          <img src="~/assets/images/navbar/partners.png">
                        </div>
                      </div>
                      <div class="menu-text">
                        <NuxtLink to="/who-we-serve/partners">
                          {{ $t('MENU.LIST2.PARTNERS') }}
                        </NuxtLink>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                :class="[
                  'menu-item',
                  menuMobileOpenComputed === 'About Us' ? 'open' : '',
                  menuActiveComputed === 'About Us' ? 'active' : ''
                ]"
              >
                <div class="top-text" @click="handleMenuMobileLabelClick('About Us')">
                  <span>{{ $t('MENU.LIST3.ABOUT_US') }}</span>
                  <span>
                    <!-- <font-awesome-icon
                      icon="angle-down"
                      class="menu-icon"
                    /> -->
                    <a-icon type="down" class="menu-icon" />
                  </span>
                </div>
                <ul class="submenu">
                  <li class="submenu-item" @click="handleMenuMobileClick('About Us', '/about-us/company-overview')">
                    <div class="submenu-item-box">
                      <div class="icon-container">
                        <div class="icon-box">
                          <img src="~/assets/images/navbar/company-overview.png">
                        </div>
                      </div>
                      <div class="menu-text">
                        <NuxtLink to="/about-us/company-overview">
                          {{ $t('MENU.LIST3.COMPANY_HISTORY') }}
                        </NuxtLink>
                      </div>
                    </div>
                  </li>
                  <li class="submenu-item" @click="handleMenuMobileClick('About Us', '/about-us/career')">
                    <div class="submenu-item-box">
                      <div class="icon-container">
                        <div class="icon-box">
                          <img src="~/assets/images/navbar/career.png">
                        </div>
                      </div>
                      <div class="menu-text">
                        <NuxtLink to="/about-us/career">
                          {{ $t('MENU.LIST3.CAREER') }}
                        </NuxtLink>
                      </div>
                    </div>
                  </li>
                  <li class="submenu-item" @click="handleMenuMobileClick('About Us', '/about-us/contact-us')">
                    <div class="submenu-item-box">
                      <div class="icon-container">
                        <div class="icon-box">
                          <img src="~/assets/images/navbar/contact-us.png">
                        </div>
                      </div>
                      <div class="menu-text">
                        <NuxtLink to="/about-us/contact-us">
                          {{ $t('MENU.LIST3.CONTACT_US') }}
                        </NuxtLink>
                      </div>
                    </div>
                  </li>
                  <li class="submenu-item" @click="handleMenuMobileClick('About Us', '/about-us/company-register')">
                    <div class="submenu-item-box">
                      <div class="icon-container">
                        <div class="icon-box">
                          <img src="~/assets/images/navbar/company-register.png">
                        </div>
                      </div>
                      <div class="menu-text">
                        <NuxtLink to="/about-us/company-register">
                          {{ $t('MENU.LIST3.COMPANY_REGISTER') }}
                        </NuxtLink>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                :class="[
                  'menu-item',
                  menuMobileOpenComputed === 'News' ? 'open' : '',
                  menuActiveComputed === 'News' ? 'active' : ''
                ]"
              >
                <div class="top-text" @click="handleMenuMobileNewsClick('News')">
                  <!-- <span>News & Insight</span>
                  <span>
                    <font-awesome-icon
                      icon="angle-down"
                      class="menu-icon"
                    />
                  </span> -->
                  <!-- <NuxtLink to="/latest-news"> -->
                  <NuxtLink to="/news-insights/blog">
                    {{ $t('MENU.LIST4.NEWS_INSIGHT') }}
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="cta-container">
          <div class="user-login-btn">
            User Login
          </div>
          <div class="prixa-sekarang-btn-box">
            <div class="prixa-sekarang-btn" @click="onRegisterClickMenuMobile">
              {{ $t('MENU.LIST5.REGISTER') }}
            </div>
          </div>
        </div>
      </a-drawer>
    </div>
    <div class="navigation-container">
      <div>
        <div class="logo-container" @click="handleLogoClick">
          <img src="~/assets/images/navbar/LOGO PRIXA 1.png">
        </div>
      </div>
      <div class="menu-container">
        <div class="menu-box">
          <ul class="menu-list">
            <li
              :class="[
                'menu-item',
                menuOpenComputed === 'What We Do' ? 'open' : '',
                menuActiveComputed === 'What We Do' ? 'active' : ''
              ]"
            >
              <div class="top-text" @click="handleMenuLabelClick('What We Do')">
                <span>{{ $t('MENU.LIST1.WHAT_WE_DO') }}</span>
                <!-- <span><font-awesome-icon :icon="['fas', 'angle-down']" /></span> -->
                <span>
                  <!-- <font-awesome-icon
                    icon="angle-down"
                    class="menu-icon"
                  /> -->
                  <a-icon type="down" class="menu-icon" />
                </span>
              </div>
              <ul class="submenu">
                <li class="submenu-item" @click="handleMenuClick('What We Do', '/what-we-do/our-solution')">
                  <div class="icon-container">
                    <div class="icon-box">
                      <img src="~/assets/images/navbar/our-solution.png">
                    </div>
                  </div>
                  <div class="menu-text">
                    <NuxtLink to="/what-we-do/our-solution">
                      {{ $t('MENU.LIST1.OUR_SOLUTION') }}
                    </NuxtLink>
                  </div>
                </li>
                <li class="submenu-item" @click="handleMenuClick('What We Do', '/what-we-do/employee-experience')">
                  <div class="icon-container">
                    <div class="icon-box">
                      <img src="~/assets/images/navbar/employee-experience.png">
                    </div>
                  </div>
                  <div class="menu-text">
                    <NuxtLink to="/what-we-do/employee-experience">
                      {{ $t('MENU.LIST1.EMPLOYEE_EXPERIENCE') }}
                    </NuxtLink>
                  </div>
                </li>
                <li class="submenu-item" @click="handleMenuClick('What We Do', '/what-we-do/employer-experience')">
                  <div class="icon-container">
                    <div class="icon-box">
                      <img src="~/assets/images/navbar/employer-experience.png">
                    </div>
                  </div>
                  <div class="menu-text">
                    <NuxtLink to="/what-we-do/employer-experience">
                      {{ $t('MENU.LIST1.EMPLOYER_EXPERIENCE') }}
                    </NuxtLink>
                  </div>
                </li>
                <li class="submenu-item" @click="handleMenuClick('What We Do', '/what-we-do/partner-ecosystem')">
                  <div class="icon-container">
                    <div class="icon-box">
                      <img src="~/assets/images/navbar/partner-ecosystem.png">
                    </div>
                  </div>
                  <div class="menu-text">
                    <NuxtLink to="/what-we-do/partner-ecosystem">
                      {{ $t('MENU.LIST1.PARTNER_ECOSYSTEM') }}
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </li>
            <li
              :class="[
                'menu-item',
                menuOpenComputed === 'Who We Serve' ? 'open' : '',
                menuActiveComputed === 'Who We Serve' ? 'active' : ''
              ]"
            >
              <div class="top-text" @click="handleMenuLabelClick('Who We Serve')">
                <span>{{ $t('MENU.LIST2.WHO_WE_SERVE') }}</span>
                <span>
                  <!-- <font-awesome-icon
                    icon="angle-down"
                    class="menu-icon"
                  /> -->
                  <a-icon type="down" class="menu-icon" />
                </span>
              </div>
              <ul class="submenu">
                <li class="submenu-item" @click="handleMenuClick('Who We Serve', '/who-we-serve/members')">
                  <div class="icon-container">
                    <div class="icon-box">
                      <img src="~/assets/images/navbar/members.png">
                    </div>
                  </div>
                  <div class="menu-text">
                    <NuxtLink to="/who-we-serve/members">
                      {{ $t('MENU.LIST2.MEMBERS') }}
                    </NuxtLink>
                  </div>
                </li>
                <li class="submenu-item" @click="handleMenuClick('Who We Serve', '/who-we-serve/employers')">
                  <div class="icon-container">
                    <div class="icon-box">
                      <img src="~/assets/images/navbar/employers.png">
                    </div>
                  </div>
                  <div class="menu-text">
                    <NuxtLink to="/who-we-serve/employers">
                      {{ $t('MENU.LIST2.EMPLOYERS') }}
                    </NuxtLink>
                  </div>
                </li>
                <li class="submenu-item" @click="handleMenuClick('Who We Serve', '/who-we-serve/partners')">
                  <div class="icon-container">
                    <div class="icon-box">
                      <img src="~/assets/images/navbar/partners.png">
                    </div>
                  </div>
                  <div class="menu-text">
                    <NuxtLink to="/who-we-serve/partners">
                      {{ $t('MENU.LIST2.PARTNERS') }}
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </li>
            <li
              :class="[
                'menu-item',
                menuOpenComputed === 'About Us' ? 'open' : '',
                menuActiveComputed === 'About Us' ? 'active' : ''
              ]"
            >
              <div class="top-text" @click="handleMenuLabelClick('About Us')">
                <span>{{ $t('MENU.LIST3.ABOUT_US') }}</span>
                <span>
                  <!-- <font-awesome-icon
                    icon="angle-down"
                    class="menu-icon"
                  /> -->
                  <a-icon type="down" class="menu-icon" />
                </span>
              </div>
              <ul class="submenu">
                <li class="submenu-item" @click="handleMenuClick('About Us', '/about-us/company-overview')">
                  <div class="icon-container">
                    <div class="icon-box">
                      <img src="~/assets/images/navbar/company-overview.png">
                    </div>
                  </div>
                  <div class="menu-text">
                    <NuxtLink to="/about-us/company-overview">
                      {{ $t('MENU.LIST3.COMPANY_HISTORY') }}
                    </NuxtLink>
                  </div>
                </li>
                <li class="submenu-item" @click="handleMenuClick('About Us', '/about-us/career')">
                  <div class="icon-container">
                    <div class="icon-box">
                      <img src="~/assets/images/navbar/career.png">
                    </div>
                  </div>
                  <div class="menu-text">
                    <NuxtLink to="/about-us/career">
                      {{ $t('MENU.LIST3.CAREER') }}
                    </NuxtLink>
                  </div>
                </li>
                <li class="submenu-item" @click="handleMenuClick('About Us', '/about-us/contact-us')">
                  <div class="icon-container">
                    <div class="icon-box">
                      <img src="~/assets/images/navbar/contact-us.png">
                    </div>
                  </div>
                  <div class="menu-text">
                    <NuxtLink to="/about-us/contact-us">
                      {{ $t('MENU.LIST3.CONTACT_US') }}
                    </NuxtLink>
                  </div>
                </li>
                <li class="submenu-item" @click="handleMenuClick('About Us', '/about-us/company-register')">
                  <div class="icon-container">
                    <div class="icon-box">
                      <img src="~/assets/images/navbar/company-register.png">
                    </div>
                  </div>
                  <div class="menu-text">
                    <NuxtLink to="/about-us/company-register">
                      {{ $t('MENU.LIST3.COMPANY_REGISTER') }}
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </li>
            <li
              :class="[
                'menu-item',
                menuOpenComputed === 'News' ? 'open' : '',
                menuActiveComputed === 'News' ? 'active' : ''
              ]"
            >
              <div class="top-text" @click="handleMenuNewsClick('News')">
                <!-- <span>News & Insight</span>
                <span>
                  <font-awesome-icon
                    icon="angle-down"
                    class="menu-icon"
                  />
                </span> -->
                <!-- <NuxtLink to="/coming-soon"> -->
                <NuxtLink to="/news-insights/blog">
                  {{ $t('MENU.LIST4.NEWS_INSIGHT') }}
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-container">
        <div class="language-box">
          <a-radio-group v-model="language" size="small">
            <a-radio-button
              value="id"
              class="in-box"
              :style="{
                background: language === 'id' ? '#E2EAF4' : '#ffffff',
                color: language === 'id' ? '#0146AB' : 'rgba(0, 0, 0, 0.85)',
                fontWeight: language === 'id' ? '700' : '400',
                borderColor: language === 'id' ? '#0146AB' : '#D9D9D9'
              }"
              @click="$i18n.locale = 'id'"
            >
              ID
            </a-radio-button>
            <a-radio-button
              value="en"
              class="en-box"
              :style="{
                background: language === 'en' ? '#E2EAF4' : '#ffffff',
                color: language === 'en' ? '#0146AB' : 'rgba(0, 0, 0, 0.85)',
                fontWeight: language === 'en' ? '700' : '400',
                borderColor: language === 'en' ? '#0146AB' : '#D9D9D9'
              }"
              @click="$i18n.locale = 'en'"
            >
              EN
            </a-radio-button>
          </a-radio-group>
        </div>
        <div class="user-login-box">
          <a href="/" class="user-login-text">
            User Login
          </a>
        </div>
        <div class="action-box">
          <a-button size="large" class="action-button" @click="onRegisterClick">
            {{ $t('MENU.LIST5.REGISTER') }}
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'LayoutHeader',
  data () {
    return {
      language: this.$i18n.locale,
      hamburgerState: '',
      visible: false,
      placement: 'right',
      screenWidth: 0,
      lastScrollTop: 0,
      showHeader: true
    }
  },
  computed: {
    menuActiveComputed () {
      return this.$store.state.menuActive
    },
    menuOpenComputed () {
      return this.$store.state.menuOpen
    },
    menuMobileOpenComputed () {
      return this.$store.state.menuMobileOpen
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleScreenResize)
    window.addEventListener('scroll', this.handleWindowScroll)
    this.handleScreenResize()
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
  destroyed () {
    window.removeEventListener('resize', this.handleScreenResize)
    window.removeEventListener('scroll', this.handleWindowScroll)
  },
  methods: {
    ...mapMutations({
      setScreenSize: 'setScreenSize',
      setMenuActive: 'setMenuActive',
      setMenuOpen: 'setMenuOpen',
      setMenuMobileOpen: 'setMenuMobileOpen'
    }),
    handleWindowScroll () {
      this.$store.commit('setMenuOpen', '')
      // const scrollTop = window.scrollY || document.documentElement.scrollTop
      // if (scrollTop < 0 || scrollTop < 78) {
      //   return
      // }
      // this.showHeader = scrollTop < this.lastScrollTop
      // this.lastScrollTop = scrollTop
    },
    handleScreenResize () {
      const width = window.innerWidth
      this.$store.commit('setScreenSize', width)
      if (width >= 1024 && this.visible) {
        this.visible = false
      }
    },
    handleLogoClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', '')
      this.$router.push('/')
    },
    handleLanguageChange (e) {
      window.console.log(`checked = ${e.target.value}`)
    },
    onRegisterClick () {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'About Us')
      this.$router.push('/about-us/company-register')
    },
    onRegisterClickMenuMobile () {
      this.visible = false
      this.$store.commit('setMenuMobileOpen', 'About Us')
      const heightPx = '148px'
      const root = document.documentElement
      root.style.setProperty(
        '--li-menu-mobile-height',
        heightPx
      )
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', 'About Us')
      this.$router.push('/about-us/company-register')
    },
    onCloseMenuMobile () {
      this.visible = false
    },
    handleHamburgerClick () {
      if (this.hamburgerState === 'open') {
        // this.hamburgerState = ''
        this.visible = false
      } else {
        // this.hamburgerState = 'open'
        this.visible = true
      }
    },
    handleMenuLabelClick (name) {
      if (this.menuOpenComputed === name) {
        this.$store.commit('setMenuOpen', '')
      } else {
        this.$store.commit('setMenuOpen', name)
      }
    },
    handleMenuClick (name, link) {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', name)

      if (link) {
        this.$router.push(link)
      }
    },
    handleMenuNewsClick (name) {
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', name)
    },
    handleMenuMobileLabelClick (name) {
      if (this.menuMobileOpenComputed === name) {
        this.$store.commit('setMenuMobileOpen', '')
      } else {
        this.$store.commit('setMenuMobileOpen', name)
        let heightPx = 0
        if (name === 'What We Do') {
          heightPx = '160.75px'
        } else if (name === 'Who We Serve') {
          heightPx = '120.56px'
        } else if (name === 'About Us') {
          heightPx = '148px'
        }
        const root = document.documentElement
        root.style.setProperty(
          '--li-menu-mobile-height',
          heightPx
        )
      }
    },
    handleMenuMobileClick (name, link) {
      this.$store.commit('setMenuActive', name)
      this.visible = false
      if (link) {
        this.$router.push(link)
      }
    },
    handleMenuMobileNewsClick (name) {
      this.$store.commit('setMenuMobileOpen', name)
      this.$store.commit('setMenuOpen', '')
      this.$store.commit('setMenuActive', name)
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.header-wrapper {
  padding: 16px 48px;
  position: fixed;
  left: 0;
  width: 100%;
  transform: translateY(0);
  transition: transform 0.5s ease;
  background: #fff;
  z-index: 101;

  &.is-hidden {
    transform: translateY(-100%);
  }
}

.navigation-mobile {
  display: none;

  .logo-hamburger-container {
    display: flex;
    justify-content: space-between;

    .logo-container {
      flex: 1;

      .logo-box {
        // width: 38%;
        width: 116px;
        cursor: pointer;

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .lang-ham-container {
      display: flex;
      gap: 20px;

      .language-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .hamburger-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .hamburger-box {
        // width: 45px;
        // height: 32px;
        width: 22px;
        height: 20px;
        position: relative;
        margin: auto 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
      }

      .hamburger-box span {
        display: block;
        position: absolute;
        // height: 3px;
        height: 4px;
        width: 100%;
        background: #000;
        border-radius: 3px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
      }

      .hamburger-box span:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
      }

      .hamburger-box span:nth-child(2) {
        // top: 13px;
        top: 8px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
      }

      .hamburger-box span:nth-child(3) {
        // top: 26px;
        top: 16px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
      }

      .hamburger-box.open span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 0px;
        left: 4px;
      }

      .hamburger-box.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
      }

      .hamburger-box.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        // top: 32px;
        top: 16px;
        left: 4px;
      }

      // .right-container {
      //   display: flex;
      //   align-items: center;

      //   .language-box {
      //     margin-right: 32px;

      //     .in-box, .en-box {
      //       border: 1px solid;
      //       padding-left: 10px;
      //       padding-right: 10px;
      //       font-size: 0.8rem;
      //     }

      //     .in-box {
      //       border-radius: 2px 0 0 2px;
      //     }

      //     .en-box {
      //       border-radius: 0 2px 2px 0;
      //     }
      //   }

      //   .action-box {
      //     .action-button {
      //       background: #0146AB;
      //       border-radius: 8px;
      //       font-size: 1rem;
      //       font-weight: 700;
      //       color: #ffffff;
      //       padding-left: 24px;
      //       padding-right: 24px;
      //     }
      //   }
      // }
    }
  }
}

.menu-mobile-wrapper {
  display: none;

  .menu-mobile {
    display: none;
    visibility: hidden;
    opacity: 0;

    &.open {
      display: block;
      visibility: visible;
      opacity: 1;
    }
  }
}

.navigation-container {
  display: flex;
  justify-content: space-between;

  .logo-container {
    width: 116px;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
    }
  }

  .menu-container {
    flex: 1;

    .menu-box {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin-left: 96px;
    }

    .menu-list {
      display: flex;

      .menu-item {
        margin-right: 31px;
        font-weight: 400;
        font-size: clamp(0.86rem, 1.11vw, 1.145rem);;
        line-height: 24px;

        a {
          color: #4C4F54;
        }

        .top-text {
          cursor: pointer;

          .menu-icon {
            transition: 0.5s ease;
            margin-left: 4px;
            font-size: 1rem;
            color: #0146AB;
          }
        }

        &.open {
          color: #0146AB;

          .top-text {
            font-weight: 700;
          }

          .top-text .menu-icon {
            transform: rotate(-180deg);
          }
        }

        &.active {
          color: #0146A8;

          .top-text {
            font-weight: 700;
          }
        }

        .nuxt-link-exact-active {
          color: #0146AB;
        }
      }
    }

    .menu-list .menu-item .submenu {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      transition: all 0.5s ease;
      padding-top: 6px;
      background: #fff;
      box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
      border-radius: 2px;

      .submenu-item {
        display: flex;
        padding: 8px 16px;
        gap: 8px;
        cursor: pointer;

        .icon-container {
          width: 24px;

          .icon-box {
            width: 100%;

            img {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }

    .menu-list .menu-item.open > .submenu {
      visibility: visible;
      opacity: 1;

      .submenu-item:hover {
        background: #E2EAF4;

        .menu-text a {
          color: #0146AB;
        }
      }
    }
  }

  .right-container {
    display: flex;
    align-items: center;

    .language-box {

      .in-box, .en-box {
        border: 1px solid;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 0.8rem;
      }

      .in-box {
        border-radius: 2px 0 0 2px;
      }

      .en-box {
        border-radius: 0 2px 2px 0;
      }
    }

    .user-login-box {
      margin: 0 24px;

      .user-login-text {
        font-size: 0.85rem;
        font-weight: 700;
        color: #0146AB;
      }
    }

    .action-box {
      .action-button {
        background: #0146AB;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 700;
        color: #ffffff;
        padding-left: 24px;
        padding-right: 24px;
      }

      .action-button:hover {
        background: #fff;
        border: 1px solid #0146AB;
        color: #0146AB;
      }
    }
  }
}

@media screen and (max-width: 1211px) {
  .navigation-container {
    .menu-container {
      flex: 1;

      .menu-box {
        margin-left: 64px;
      }
    }
  }
}

// @media screen and (max-width: 1133px) {
@media screen and (max-width: 1163px) {
  .navigation-container {
    .menu-container {
      flex: 1;

      .menu-box {
        margin-left: 30px;
      }
    }
  }
}

@media screen and (max-width: 1116px) {
  .navigation-container {
    .menu-container {
      flex: 1;

      .menu-box {
        margin-left: 16px;
      }
    }
  }
}

@media screen and (max-width: 1096px) {
  .navigation-container {
    .right-container {
      .user-login-box {
        margin: 0 16px;
      }

      .action-box {
        .action-button {
          font-size: 0.86rem;
        }
      }
    }
  }
}

@media screen and (max-width: 1055px) {
  .navigation-container {
    .menu-container {
      .menu-list {
        .menu-item {
          margin-right: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .header-wrapper {
    padding: 16px 24px;
  }

  .navigation-mobile {
    display: block;
  }

  .menu-mobile-wrapper {
    display: block;
  }

  .navigation-container {
    display: none;
  }
}
</style>

<style lang="less">
:root {
  --li-menu-mobile-height: 0;
}

.header-mobile-drawer {
  .ant-drawer-body {
    padding: 16px 0;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    padding: 0 24px;
    margin-top: 4px;

    .close-box {
      cursor: pointer;
      width: 32px;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .menu-list {
    .menu-item {
      .top-text {
        padding: 16px 24px;
        font-size: 1.29rem;
        font-weight: 400;
        cursor: pointer;
        color: #4C4F54;

        .menu-icon {
          color: #0146AB;
          margin-left: 8px;
          transition: 0.5s ease;
        }

        a {
          color: #4C4F54;
        }

        .nuxt-link-exact-active {
          color: #0146AB;
          font-weight: 700;
        }
      }

      .submenu {
        opacity: 0;
        height: 0;
        overflow: hidden;
        transition: all 0.5s ease;

        .submenu-item {
          padding: 0 24px;

          .submenu-item-box {
            display: flex;
            padding: 8px;
            grid-gap: 8px;
            gap: 8px;
            cursor: pointer;

            .icon-container {
              width: 24px;

              .icon-box {
                width: 100%;

                img {
                  width: 100%;
                  height: auto;
                }
              }
            }

            .menu-text {
              a {
                color: #4C4F54;
              }

              .nuxt-link-exact-active {
                color: #0146AB;
              }
            }
          }
        }

        .submenu-item:hover {
          background: #E2EAF4;

          .submenu-item-box {
            .menu-text {
              a {
                color: #0146AB;
              }
            }
          }
        }
      }

      &.open {
        .top-text {
          color: #0146AB;
          font-weight: 700;

          .menu-icon {
            transform: rotate(-180deg);
          }
        }

        .submenu {
          opacity: 1;
          height: var(--li-menu-mobile-height);
        }
      }

      &.active {
        .top-text {
          color: #0146AB;
          font-weight: 700;
        }
      }
    }
  }

  .cta-container {
    padding: 0 24px;
    margin-top: 8px;

    .user-login-btn {
      background: #FFFFFF;
      border: 1px solid #0146AB;
      color: #0146AB;
      border-radius: 8px;
      display: inline-block;
      padding: 12px 24px;
      cursor: pointer;
      margin: 16px 0;
      font-size: 14px;
      font-weight: 700;;
      transition: all 0.5s;
    }

    .user-login-btn:hover {
      background: #0146AB;
      color: #fff;
    }

    .prixa-sekarang-btn-box {
      .prixa-sekarang-btn {
        background: #0146AB;
        border-radius: 8px;
        color: #fff;
        display: inline-block;
        padding: 16px 24px;
        cursor: pointer;
        transition: all 0.5s;
        border: 1px solid #0146AB;
      }

      .prixa-sekarang-btn:hover {
        background: #fff;
        color: #0146AB;
      }
    }
  }
}
</style>
