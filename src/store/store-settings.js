const state = {
  settings: {
    showStatusCard: true,
    showRecommendationsCard: true,
    hideShowCardsDialog: false
  }
}

const mutations = {

}

const actions = {

}

const getters = {
  settings: (state) => {
    return state.settings
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
