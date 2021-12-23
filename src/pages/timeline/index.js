import databaseApi from '@/api/database'
import { getQuery } from '@/utils/database'
import ItemList from './components/item-list'

export default {
  name: 'TimeLine',
  components: { ItemList },
  methods: {
    getTimeLine: async function () {
      const res = await databaseApi.databasequery(getQuery('events'))
      this.$store.commit('timeline/changeState', {
        dataSource: res.data
      })
    },
    onClick: function () {
      this.getTimeLine()
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
        <div>
          <ItemList />
        </div>
      </div>
    )
  }
}