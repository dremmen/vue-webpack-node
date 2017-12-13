import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import books from '@/view/books'
import booksList from '@/view/booksList'
import bookContent from '@/view/bookContent'
import doneBooks from '@/view/doneBooks'
import search from '@/view/search'
import login from '@/view/login'
import regist from '@/view/regist'
import person from '@/view/person'
import bookshelf from '@/view/bookshelf'


Vue.use(Router)

export default new Router({
  // mode: 'history',
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
		path: '/booksList/:Id',
		name: 'booksList',
		component: booksList
    },
    {
		path: '/bookContent/:bookId/:bookContentId',
		name: 'bookContent',
		component: bookContent
    },
    {
		path: '/doneBooks',
		name: 'doneBooks',
		component: doneBooks
    },
    {
		path: '/search',
		name: 'search',
		component: search
    },
    {
		path: '/login',
		name: 'login',
		component: login
    },
    {
		path: '/regist',
		name: 'regist',
		component: regist
    },
    {
		path: '/person',
		name: 'person',
		component: person
    },
    {
		path: '/bookshelf',
		name: 'bookshelf',
		component: bookshelf
    }
  ]
})
