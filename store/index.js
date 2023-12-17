export const state = () => ({
  screenSize: 0,
  menuActive: '',
  menuOpen: '',
  menuMobileOpen: '',
  ratingPopupShow: false,
  ratingTimeout: 0,
  alreadyRating: false
})

export const getters = {
  getScreenSize (state) {
    return state.screenSize
  },
  getMenuActive (state) {
    return state.menuActive
  },
  getMenuOpen (state) {
    return state.menuOpen
  },
  getMenuMobileOpen (state) {
    return state.menuMobileOpen
  },
  getRatingPopupShow (state) {
    return state.ratingPopupShow
  },
  getRatingTiimeout (state) {
    return state.ratingTimeout
  },
  getAlreadyRating (state) {
    return state.alreadyRating
  }
}

export const mutations = {
  setScreenSize (state, size) {
    state.screenSize = size
  },
  setMenuActive (state, name) {
    state.menuActive = name
    localStorage.setItem('menuActive', name)
  },
  setMenuOpen (state, name) {
    state.menuOpen = name
    localStorage.setItem('menuOpen', name)
  },
  setMenuMobileOpen (state, name) {
    state.menuMobileOpen = name
    localStorage.setItem('menuMobileOpen', name)
  },
  setRatingPopupShow (state, isShow) {
    state.ratingPopupShow = isShow
  },
  setRatingTimeout (state, val) {
    state.ratingTimeout = val
  },
  setAlreadyRating (state, val) {
    state.alreadyRating = val
  }
}
