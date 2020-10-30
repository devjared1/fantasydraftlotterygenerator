// import axios from 'axios'
const getters = {
  getSnackbar () {
    return state.snackOpts
  }
}

const actions = {
}

const mutations = {
  setSnackbar (state, val) {
    state.snackOpts = val
  }
}

const state = {
  snackOpts: {
    snackbar: false,
    buttonText: '',
    color: 'success',
    mode: '',
    text: '',
    timeout: -1,
    x: '',
    y: 'bottom'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
