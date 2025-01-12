import { HomeOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons"
import { ConfigProvider, Layout, Menu, type MenuProps, theme } from "antd"
import * as React from "react"
import { type  FC } from "react"

const items2: MenuProps["items"] = [
	HomeOutlined, LaptopOutlined, NotificationOutlined,
	HomeOutlined, LaptopOutlined, NotificationOutlined,
	HomeOutlined, LaptopOutlined, NotificationOutlined,
	HomeOutlined, LaptopOutlined, NotificationOutlined,
	HomeOutlined, LaptopOutlined, NotificationOutlined,
	HomeOutlined, LaptopOutlined, NotificationOutlined,
	HomeOutlined, LaptopOutlined, NotificationOutlined,
	HomeOutlined, LaptopOutlined, NotificationOutlined,
	HomeOutlined, LaptopOutlined, NotificationOutlined,
].map(
	(icon, index) => {
		const key = String(index + 1)
		
		return {
			key: `Sub${key}`,
			icon: React.createElement(icon),
			label: `Subnav ${key}`
		}
	}
)

const Sidebar: FC = () => {
	const {
		token: { colorBgLayout, padding, colorBorder }
	} = theme.useToken()
	return (
		<>
			<Layout.Sider
				width={270}
				style={{ background: colorBgLayout, borderRight: `1px solid ${colorBorder}` }}
			>
				<nav style={{
					height: "100%",
					padding: padding,
					overflowX: "hidden",
					overflowY: "auto"
				}}>
					<ConfigProvider
						theme={{
							components: {
								Menu: {
									itemBorderRadius: 8
								}
							}
						}}
					>
						<Menu
							mode={"inline"}
							theme={"light"}
							defaultSelectedKeys={["1"]}
							defaultOpenKeys={["sub1"]}
							style={{ height: "100%", borderRight: 0, background: colorBgLayout }}
							items={items2}
						/>
					</ConfigProvider>
				</nav>
			</Layout.Sider>
		</>
	)
}

export { Sidebar }
