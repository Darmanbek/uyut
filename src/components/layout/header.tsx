import { MenuOutlined } from "@ant-design/icons"
import {
	Button,
	Flex,
	Layout,
	Space,
	theme
} from "antd"
import { type  FC, PropsWithChildren } from "react"
import { Logo } from "src/components/shared/logo"
import { useMenuStore } from "src/store/use-menu-store"
import { ProfileAvatar } from "./header/profile-avatar"


const Header: FC<PropsWithChildren> = () => {
	const toggleCollapsed = useMenuStore(
		state => state.toggleCollapsed
	)
	
	const {
		token: { colorBgContainer, boxShadowSecondary, paddingLG }
	} = theme.useToken()
	return (
		<>
			<Layout.Header style={{
				display: "flex",
				alignItems: "center",
				backgroundColor: colorBgContainer,
				boxShadow: boxShadowSecondary,
				zIndex: 100
			}}>
				<Flex
					align={"center"}
					style={{ flexBasis: 270, paddingLeft: paddingLG, paddingRight: paddingLG }}
				>
					<Logo />
				</Flex>
				<Flex
					justify={"space-between"}
					flex={1}
					style={{ paddingLeft: paddingLG, paddingRight: paddingLG }}
				>
					<Space>
						<Button
							type={"text"}
							onClick={toggleCollapsed}
							icon={<MenuOutlined />}
						/>
					</Space>
					<Space>
						<ProfileAvatar />
					</Space>
				</Flex>
			</Layout.Header>
		</>
	)
}

export { Header }
