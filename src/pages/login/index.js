import AuthApi from '@/api/auth'
import './login.less'

export default {
	name: 'Login',
	data () {
		return {
			isLoading: false
		}
	},
	methods: {
		onClick: async function () {
			this.isLoading = true
			const res = await AuthApi.getAccessToken()
			console.log(res)
			this.isLoading = false
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