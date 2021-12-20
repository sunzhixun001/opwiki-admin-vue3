export default {
  render () {
		return (
			<div>
				<a-layout>
					<a-layout-sider width="200" style={{background: '#fff'}}>
					<a-menu
						theme="dark"
						mode="inline"
						// v-model:selectedKeys="selectedKeys2"
						// v-model:openKeys="openKeys"
						style={{ height: '100%', borderRight: 0 }}
					>
						<a-sub-menu title="子菜单">
							{/* <template v-slot:title>
								<span>
									subnav 3
								</span>
							</template> */}
							<a-menu-item key="1">时间线</a-menu-item>
							<a-menu-item key="2">人物</a-menu-item>
						</a-sub-menu>
					</a-menu>
					</a-layout-sider>
					<a-layout>
						<a-layout-header>Header</a-layout-header>
						<a-layout-content>
							<router-view></router-view>
						</a-layout-content>
						<a-layout-footer>Footer</a-layout-footer>
					</a-layout>
				</a-layout>
			</div>
		)
	}
}