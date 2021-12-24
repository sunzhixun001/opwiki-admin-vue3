
import { defineComponent } from 'vue'
import databaseApi from '@/api/database'
import { getQuery } from '@/utils/database'

import './search-form.less'

const SearchFrom = defineComponent({
  name: 'SearchForm',
  methods: {
    getTimeLine: async function () {
      console.log(this)
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
      <div class='timeline-search-form'>
        <a-button type='primary' onClick={this.onClick}>查询</a-button>
      </div>
    )
  }
})

export default SearchFrom
