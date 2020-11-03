import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios

//导入组件
import header from './components/header.vue'
Vue.component('my-header', header)
import footer from './components/footer.vue'
Vue.component('my-footer', footer)

//引入css文件
import './assets/base.css'
import './assets/iconfont.css'

Vue.config.productionTip = false

//动态网页title
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})

// 代码高亮
import Highlight from './assets/highlight'
Vue.use(Highlight)

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
