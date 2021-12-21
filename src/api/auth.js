import reuest from '@/utils/request'

const api = {
	getAccessToken: '/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET'
}

const getAccessToken = () => {
	return reuest({
		url: api.getAccessToken,
		methods: 'GET'
	})
}

export default {
	getAccessToken
}