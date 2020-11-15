import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/main.vue'
import Home from './views/home.vue'
import Novel from './views/novel.vue'
import Project from './views/project.vue'
import About from './views/about.vue'

Vue.use(Router)

export default new Router({
	// mode: 'hash',
	mode: 'history',
	routes: [{
		path: '/',
		name: 'main',
		component: Main,
		children: [{
			path: '/',
			name: 'home',
			component: Home,
			//网页title
			meta: {
				title: 'moonlight 渊中月的博客',
			},
		}, {
			path: 'novel',
			name: 'novel',
			component: Novel,
			meta: {
				title: 'moonlight 笔记'
			}
		}, {
			path: 'project',
			name: 'project',
			component: Project,
			meta: {
				title: 'moonlight 我的项目'
			}
		}, {
			path: 'about',
			name: 'about',
			component: About,
			meta: {
				title: 'moonlight 关于'
			}
		}]
	}]
})