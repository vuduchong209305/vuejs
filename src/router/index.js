import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Md5 from '@/components/Md5'
import Base64 from '@/components/Base64'
import SHA256 from '@/components/SHA256'
import AES from '@/components/AES'
import BMI from '@/components/BMI'

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
			name: 'Md5',
			component: Md5
	    },
	    {
			path: '/ma-hoa-base64-online',
			name: 'Base64',
			component: Base64
	    },
	    {
			path: '/ma-hoa-sha256-online',
			name: 'SHA256',
			component: SHA256
	    },
	    {
			path: '/ma-hoa-aes-online',
			name: 'AES',
			component: AES
	    },
	    {
			path: '/tinh-chi-so-bmi',
			name: 'BMI',
			component: BMI
	    }
  	]
})
