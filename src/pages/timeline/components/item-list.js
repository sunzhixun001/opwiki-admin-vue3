export default {
  name: 'TimeLineItemList',
  data: () => ({
    columns: [
      { title: '内容', dataIndex: 'title'}
    ]
  }),
  computed: {
    dataSource () {
      return this.$store.state.timeline.dataSource
    }
  },
  render () {
    return (
      <div>
        <a-table dataSource={this.dataSource} columns={this.columns}/>
      </div>
    )
  }
}