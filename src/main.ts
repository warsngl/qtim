import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'

import store from './store'
import App from './App.vue'
import './assets/index.css'
import Main from './pages/Main.vue'
import Article from './pages/Article.vue'

const routes=[
  {path:'/', component: Main},
  {path:'/page/:pageId', component: Main},
  {path:'/article/:articleId', component: Article},
]
const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

createApp(App).use(router).use(store).mount('#app')
