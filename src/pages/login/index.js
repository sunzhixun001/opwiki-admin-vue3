import AuthApi from '@/api/auth'
import {APPID, SECRET} from '@/constant'
import {setToken} from '@/utils/auth'
import './login.less'

export default {
	name: 'Login',
	data () {
		return {
			isLoading: false
		}
	},
	methods: {
		getAccessToken: async function () {
			try {
				this.isLoading = true
				const res = await AuthApi.getAccessToken(APPID,SECRET)
				setToken(res.access_token)
				this.isLoading = false
				this.$router.push('/timeline')
			} catch (error) {
				this.isLoading = false
			}
		},
		onClick: function () {
			this.getAccessToken()
		}
	},
	render () {
		return (
			<div class='login'>
				<div class='form'>
					<a-button type='primary' onClick={this.onClick} loading={this.isLoading}>获取Token</a-button>
				</div>
			</div>
		)
	}
}