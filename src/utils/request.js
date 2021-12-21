import axios from 'axios'

// axios.defaults.baseURL = 'https://api.weixin.qq.com'

axios.interceptors.response.use(response => {
  const {
		data
	} = response
	if (data) {
		const {errcode, errmsg} = data
		if (errcode === 0) {
			return data
		}
		return Promise.reject(new Error(errmsg))
	}
}, error => {
	return Promise.reject(error)
})

export default axios

