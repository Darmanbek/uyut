import { App, ConfigProvider, theme } from "antd"
import localeRU from "antd/locale/ru_RU"
import dayjs from "dayjs"
import dayjsEN from "dayjs/locale/en"
// import dayjsUZ from "dayjs/locale/uz-latn"
import dayjsRU from "dayjs/locale/ru"
import { type FC, type PropsWithChildren } from "react"
import { DARK_COLORS, LIGHT_COLORS } from "src/constants/colors.constants"
import { useThemeStore } from "src/store/use-theme-store"

dayjs.locale("ru", {
	...dayjsRU,
	ordinal: dayjsEN.ordinal
})

dayjs.locale("en", {
	...dayjsEN,
	ordinal: dayjsEN.ordinal
})

// dayjs.locale("uz", {
// 	...dayjsUZ,
// 	ordinal: dayjsEN.ordinal
// })

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const { theme: mode } = useThemeStore()
	const isDark = mode === "dark"

	const currentAlgorithm = isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
	const { colorTextMenu, colorTextSelectedMenu, ...restColors } = isDark
		? DARK_COLORS
		: LIGHT_COLORS

	const token = theme.getDesignToken({
		algorithm: currentAlgorithm,
		token: {
			...restColors
		}
	})

	return (
		<ConfigProvider
			locale={localeRU}
			theme={{
				algorithm: currentAlgorithm,
				components: {
					Layout: {
						headerHeight: 68,
						headerPadding: 0
					},
					Menu: {
						subMenuItemBg: "transparent",
						itemHoverBg: token.colorPrimaryBg,
						itemHoverColor: token.colorPrimary,
						itemSelectedBg: token.colorPrimary,
						itemSelectedColor: colorTextSelectedMenu,
						colorText: colorTextMenu,
						darkItemColor: colorTextMenu,
						darkItemSelectedColor: colorTextSelectedMenu,
						darkItemHoverBg: token.colorPrimaryBg,
						darkItemDisabledColor: token.colorTextDisabled,
						darkItemBg: token.colorBgContainer,
						popupBg: token.colorBgContainer,
						darkPopupBg: token.colorBgContainer,
						itemPaddingInline: 10,
						iconMarginInlineEnd: 16,
						itemHeight: 46,
						iconSize: 18,
						collapsedIconSize: 18
					}
				},
				token: {
					...restColors
				}
			}}
			typography={{
				style: {
					margin: 0
				}
			}}
			menu={{
				style: {
					borderRight: 0
				}
			}}
			form={{
				requiredMark: false
			}}>
			<App>{children}</App>
		</ConfigProvider>
	)
}

export { AntdProvider }
