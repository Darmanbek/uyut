import { MenuOutlined, UserOutlined } from "@ant-design/icons"
import {
	Avatar,
	Button,
	ConfigProvider, Divider,
	Flex,
	Layout,
	Menu,
	Popover,
	Space,
	theme,
	Typography
} from "antd"
import * as React from "react"
import { type  FC, PropsWithChildren } from "react"
import { Logo } from "src/components/shared/logo"
import { ROUTES } from "src/config/routes.config"


const Header: FC<PropsWithChildren> = () => {
	const {
		token: { colorBgContainer, boxShadowSecondary, paddingLG }
	} = theme.useToken()
	return (
		<>
			<Layout.Header style={{
				display: "flex",
				alignItems: "center",
				backgroundColor: colorBgContainer,
				boxShadow: boxShadowSecondary
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
							icon={<MenuOutlined />}
						/>
					</Space>
					<Space style={{ display: "flex" }}>
						<Popover
							trigger={"click"}
							arrow={false}
							styles={{
								body: {
									width: 150
								}
							}}
							placement={"bottomRight"}
							content={(
								<Flex vertical={true}>
									<ConfigProvider
										theme={{
											components: {
												Menu: {
													itemHeight: 32
												}
											}
										}}
									>
										<Menu
											mode={"inline"}
											items={[
												{
													key: ROUTES.PROFILE,
													icon: <UserOutlined />,
													label: "My Profile",
													style: {
														paddingLeft: 12,
														paddingRight: 12
													}
												}
											]}
										/>
									</ConfigProvider>
									<Divider style={{ margin: 8 }} />
									<Button>Logout</Button>
								</Flex>
							)}
						>
							<Space style={{ cursor: "pointer" }}>
								<Avatar
									src={"/favicon.png"}
									alt={""}
									draggable={false}
									icon={<UserOutlined />}
								/>
								<Typography.Text>
									Admin
								</Typography.Text>
							</Space>
						</Popover>
					</Space>
				</Flex>
			</Layout.Header>
		</>
	)
}

export { Header }
