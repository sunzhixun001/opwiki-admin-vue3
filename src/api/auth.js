import reuest from '@/utils/request'

const api = {
	getAccessToken: '/cgi-bin/token'
}

const getAccessToken = (APPID,SECRET) => {
	return reuest({
		url: api.getAccessToken,
		methods: 'GET',
		params: {
			grant_type: 'client_credential',
			appid: APPID,
			secret: SECRET
		}
	})
}

export default {
	getAccessToken
}