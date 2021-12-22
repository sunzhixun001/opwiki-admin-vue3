import reuest from '@/utils/request'

const api = {
  databasequery: '/tcb/databasequery'
}

const databasequery = (query) => {
  return reuest({
		url: api.databasequery,
		method: 'POST',
		data: {
			query
		}
	})
}

export default {
	databasequery
}
