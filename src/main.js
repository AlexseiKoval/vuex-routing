import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import Vuex from 'vuex'
Vue.use(Vuex)

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);


const store = new Vuex.Store({
  state: {
    posts: [],
    isAuthenticated: false
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  },
  mutations: {
    setAuthenticated(state) {
      state.isAuthenticated = true
    },
    setposts(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async getdata(ctx) {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()
      ctx.commit('setposts', posts)
    }
  }
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  if (to.name !== 'Login' && !store.state.isAuthenticated) {
    next({ name: 'Login' })
  }
  else next()
})


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
