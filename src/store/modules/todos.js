import _ from 'lodash'
import fbs from '../../firebase/firebase'
import store from '../../store'


const state = {
    todos: []
}


const getters = {
    allTodos: state => state.todos
}

const actions = {
    fetchTodos({ commit }) {
        fbs.database().ref(`/todolist/${store.state.auth.userId}`)
            .on('value', list => commit('setTodos', (_.map(list.val(), (val, uid) => { return { ...val, uid } }))));
    },
    async filterTodos({ commit }, event) {
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText)
        let todos = []
        fbs.database().ref(`/todolist/${store.state.auth.userId}`)
            .on('value', list => todos = _.map(list.val(), (val, uid) => { return { ...val, uid } }));
        
        commit('setTodos', todos.slice(0,limit))
    },
    async deleteTodo({ commit }, id) {
        await fbs.database().ref(`/todolist/${store.state.auth.userId}/${id}`)
            .remove()
            .then(() => {
                // fix this
                console.log('Todo deleted', commit);
            })
    },
    async addTodo({ commit }, title) {
        await fbs.database().ref(`/todolist/${store.state.auth.userId}`)
            .push({ "title": title, "status": false })
            .then(() => {
                // fix this
                console.log('Todo added', commit);
            })
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos.reverse()),
    newTodo: (state, todo) => (state.todos = [todo, ...state.todos]),
    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id != id))
}

export default {
    state,
    getters,
    actions,
    mutations
}