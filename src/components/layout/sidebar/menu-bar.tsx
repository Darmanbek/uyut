import { ConfigProvider, Menu, theme } from "antd"
import { type  FC } from "react"
import { menu } from "./menu.data"

const MenuBar: FC = () => {
	const {
		token: { colorBgLayout }
	} = theme.useToken()
	return (
		<>
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
					defaultSelectedKeys={["sub1"]}
					defaultOpenKeys={["sub1"]}
					style={{ height: "100%", borderRight: 0, background: colorBgLayout }}
					items={menu}
				/>
			</ConfigProvider>
		</>
	)
}

export { MenuBar }
