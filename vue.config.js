const path = require('path')

const resolve = dir => {
	return path.join(__dirname, dir)
}

const vueConfig = {
	chainWebpack: config => {
		config.resolve.alias.set('@', resolve('src'))
	},
	css: {
		loaderOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
	devServer: {
    proxy: 'https://api.weixin.qq.com'
  }
}

module.exports = vueConfig