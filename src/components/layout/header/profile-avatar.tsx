import { UserOutlined } from "@ant-design/icons"
import { useRouter } from "@tanstack/react-router"
import {
	Avatar,
	Button,
	ConfigProvider,
	Divider,
	Flex,
	Menu,
	Popover,
	Skeleton,
	Space,
	Typography
} from "antd"
import { useCallback, useEffect, type FC } from "react"
import { ROUTES } from "src/config/routes.config"
import { useAuth } from "src/hooks/use-auth"
import { useGetProfileQuery } from "src/services/login"

const ProfileAvatar: FC = () => {
	const router = useRouter()
	const auth = useAuth()

	const { data: profile, isError, isLoading } = useGetProfileQuery()

	const onLogout = useCallback(() => {
		auth.logout()
		router.invalidate()
	}, [auth, router])

	useEffect(() => {
		if (isError) {
			onLogout()
		}
	}, [isError, onLogout])
	return (
		<>
			<Popover
				trigger={"click"}
				arrow={false}
				styles={{
					body: {
						width: 150
					}
				}}
				placement={"bottomRight"}
				content={
					<Flex vertical={true}>
						<ConfigProvider
							theme={{
								components: {
									Menu: {
										itemHeight: 32,
										iconSize: 16,
										iconMarginInlineEnd: 10
									}
								}
							}}>
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
						<Button onClick={onLogout}>Logout</Button>
					</Flex>
				}>
				<Space style={{ cursor: "pointer" }} align={"center"}>
					<Avatar
						src={"/favicon.png"}
						alt={""}
						draggable={false}
						icon={<UserOutlined />}
					/>
					<Typography.Text>
						{isLoading ? (
							<Skeleton.Input
								active={true}
								style={{ minWidth: 100, width: 100, height: 24 }}
							/>
						) : (
							profile?.data?.name || profile?.data?.role?.name
						)}
					</Typography.Text>
				</Space>
			</Popover>
		</>
	)
}

export { ProfileAvatar }
