import { Layout, theme } from "antd"
import { type FC } from "react"
import { MenuBar, ScrollNav } from "src/components/layout/sidebar/"
import { useMenuStore } from "src/store/use-menu-store"

const Sidebar: FC = () => {
	const { collapsed } = useMenuStore()

	const { token } = theme.useToken()
	return (
		<>
			<Layout.Sider
				width={270}
				collapsed={collapsed}
				style={{
					background: token.colorBgContainer,
					boxShadow: token.boxShadowSecondary
					// borderRight: `1px solid ${token.colorBorder}`
				}}>
				<ScrollNav collapsed={collapsed}>
					<MenuBar />
				</ScrollNav>
			</Layout.Sider>
		</>
	)
}

export { Sidebar }
