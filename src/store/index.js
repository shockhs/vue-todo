import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'
import todos from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState({
        paths:['auth']
    })],
    strict: true,
    modules: {
        todos,
        auth
    }
})