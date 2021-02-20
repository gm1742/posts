import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    fetchPosts (state, payload) {
      state.posts = payload
    }
  },
  actions: {
    async  postsList ({commit}, payload) {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();

      commit('fetchPosts', data)
    }
  },
  getters: {
    posts (state) {
      return state.posts
    },
    postById (state) {
      return postId => {
        return state.posts.find(p => p.id == postId)
      }
    }
  }
})
