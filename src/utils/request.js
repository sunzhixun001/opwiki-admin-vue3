import axios from 'axios'
import { message } from 'ant-design-vue'
import {getToken} from '@/utils/auth'
import { ENVID } from '@/constant'
import router from '@/routers'

// axios.defaults.baseURL = 'https://api.weixin.qq.com'

axios.interceptors.request.use(config => {
	const {method} = config
	if (method.toLocaleUpperCase() === 'POST') {
		config.url = `${config.url}?access_token=${getToken()}`
		config.data.env = ENVID
	}
	console.log(config)
	return config
})

axios.interceptors.response.use(response => {
  const {
		data
	} = response
	if (data) {
		const {errcode, errmsg} = data
		if (!errcode) {
			return data
		} else if (errcode === 42001) {
			router.push('/login')
			return ''
		}
		message.warning(errmsg)
		return Promise.reject(new Error(errmsg))
	}
}, error => {
	return Promise.reject(error)
})

export default axios

