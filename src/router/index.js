import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Encode from '@/components/Encode'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
	    {
			path: '/',
			name: 'Home',
			component: Home
	    },
	    {
			path: '/ma-hoa-md5-online',
			name: 'Encode',
			component: Encode
	    }
  	]
})
