import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    isCollapse: false
}
const actions = {
    setCollapse(context, data) {
        context.commit('setCollapse', data)
    }
}
const mutations = {
    setCollapse(state, data) {
        state.isCollapse = !state.isCollapse
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})