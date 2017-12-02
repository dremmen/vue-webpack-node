import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import books from '@/view/books'
import booksList from '@/view/booksList'
import bookContent from '@/view/bookContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'home',
		component: home
    },
    {
		path: '/books/:Id',
		name: 'books',
		component: books
    },
    {
		path: '/booksList',
		name: 'booksList',
		component: booksList
    },
    {
		path: '/bookContent',
		name: 'bookContent',
		component: bookContent
    }
  ]
})
