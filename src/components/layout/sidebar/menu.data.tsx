import {
	BarChartOutlined,
	FolderOutlined,
	HomeOutlined, InboxOutlined, LoginOutlined,
	QuestionCircleOutlined, SettingOutlined, StarOutlined, TeamOutlined,
	UnorderedListOutlined, UserOutlined
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { ROUTES } from "src/config/routes.config"

export const menu: MenuProps["items"] = [
	{
		key: ROUTES.DASHBOARD,
		icon: <HomeOutlined />,
		label: "Dashboard",
	},
	{
		key: ROUTES.ORDERS,
		icon: <UnorderedListOutlined />,
		label: "Orders",
	},
	{
		key: ROUTES.PRODUCTS,
		icon: <QuestionCircleOutlined />,
		label: "Products",
	},
	{
		key: ROUTES.CATEGORIES,
		icon: <FolderOutlined />,
		label: "Categories",
	},
	{
		key: ROUTES.CUSTOMERS,
		icon: <TeamOutlined />,
		label: "Customers",
	},
	{
		key: ROUTES.REPORTS,
		icon: <BarChartOutlined />,
		label: "Reports",
	},
	{
		key: ROUTES.COUPONS,
		icon: <StarOutlined />,
		label: "Coupons",
	},
	{
		key: ROUTES.INBOX,
		icon: <InboxOutlined />,
		label: "Inbox",
	},
	{
		key: ROUTES.AUTH_GROUP,
		type: "group",
		label: "Authentication",
	},
	{
		key: ROUTES.LOGIN,
		icon: <LoginOutlined />,
		label: "Login",
	},
	{
		key: ROUTES.SETTINGS_GROUP,
		type: "group",
		label: "Settings",
	},
	{
		key: ROUTES.PERSONAL_SETTINGS,
		icon: <UserOutlined />,
		label: "Personal Settings",
	},
	{
		key: ROUTES.GLOBAL_SETTINGS,
		icon: <SettingOutlined />,
		label: "Global Settings",
	}
]
