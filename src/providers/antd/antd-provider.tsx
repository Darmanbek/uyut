import { ConfigProvider, theme } from "antd"
import { type  FC, type PropsWithChildren } from "react"
import localeRU from "antd/locale/ru_RU"
import { COLORS } from "src/constants/colors.constants"

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	
	const {
		token
	} = theme.useToken()
	return (
		<ConfigProvider
			locale={localeRU}
			theme={{
				components: {
					Layout: {
						headerHeight: 68,
						headerPadding: 0,
					},
					Menu: {
						subMenuItemBg: "transparent",
						itemHoverBg: token.colorPrimaryBg,
						itemHoverColor: token.colorPrimary,
						itemSelectedBg: token.colorPrimary,
						itemSelectedColor: token.colorWhite,
						colorText: "rgb(90, 96, 127)",
						itemPaddingInline: 10,
						iconMarginInlineEnd: 16,
						itemHeight: 46,
						iconSize: 18,
						collapsedIconSize: 18,
          }
				},
				token: {
					...COLORS
				}
			}}
			typography={{
				style: {
					margin: 0
				}
			}}
			menu={{
				style: {
					borderRight: 0,
				}
			}}
			form={{
				requiredMark: false,
			}}
		>
			{children}
		</ConfigProvider>
	)
}

export { AntdProvider }
