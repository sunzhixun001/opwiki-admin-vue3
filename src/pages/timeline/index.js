import ItemList from './components/item-list'
import SearchFrom from './components/search-form'

export default {
  name: 'TimeLine',
  components: { ItemList },
  methods: {

  },
  render () {
    return (
      <div>
        <a-breadcrumb>
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>时间线</a-breadcrumb-item>
        </a-breadcrumb>
        <SearchFrom />
        <div>
          <ItemList />
        </div>
      </div>
    )
  }
}