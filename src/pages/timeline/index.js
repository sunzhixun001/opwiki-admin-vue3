import databaseApi from '@/api/database'
import { getQuery } from '@/utils/database'

export default {
  name: 'TimeLine',
  methods: {
    onClick: function () {
      databaseApi.databasequery(getQuery('events'))
    }
  },
  render () {
    return (
      <div>
        <a-breadcrumb>
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>时间线</a-breadcrumb-item>
        </a-breadcrumb>
        <div>
          <a-button type='primary' onClick={this.onClick}>查询</a-button>
        </div>
      </div>
    )
  }
}