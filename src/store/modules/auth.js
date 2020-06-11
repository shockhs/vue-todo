import fbs from '../../firebase/firebase'

const state = {
    userId: null,
    is_authenticated: false
}


const getters = {
    currentUser: state => state
}

const actions = {
    async registerUser({ commit }, obj) {
        const { email, password } = obj
        await fbs.auth().createUserWithEmailAndPassword(email, password)
            .then(res => commit('setUser', res.user.uid))

    },
    async loginUser({ commit }, obj) {
        const { email, password } = obj
        await fbs.auth().signInWithEmailAndPassword(email, password)
            .then(res => commit('setUser', res.user.uid))
    },
    async logoutUser({ commit }) {
        await fbs.auth().signOut().then(() => commit('setDefault'))
    },
    async setAuthStatus({ commit }) {
        fbs.auth().onAuthStateChanged((user) => {
            if (user) {
                commit('setUser', user.uid)
            } else {
                commit('setDefault')
            }
        })
    }
}


const mutations = {
    setUser: (state, id) => { state.userId = id; state.is_authenticated = true },
    setDefault: (state) => { state.userId = null; state.is_authenticated = false }
}


export default {
    state,
    getters,
    actions,
    mutations
}


