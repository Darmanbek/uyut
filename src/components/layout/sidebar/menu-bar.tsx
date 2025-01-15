import { useLocation, useRouter } from "@tanstack/react-router"
import { ConfigProvider, Menu, theme } from "antd"
import { type FC } from "react"
import { menu } from "./menu.data"

const MenuBar: FC = () => {
	const router = useRouter()
	const { pathname } = useLocation()

	const onSelectMenu = (key: string) => {
		router.navigate({
			href: key
		})
	}

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
				}}>
				<Menu
					mode={"inline"}
					theme={"light"}
					defaultSelectedKeys={[pathname]}
					onSelect={(item) => onSelectMenu(item.key)}
					style={{
						borderRight: 0,
						background: colorBgLayout
					}}
					items={menu}
				/>
			</ConfigProvider>
		</>
	)
}

export { MenuBar }
