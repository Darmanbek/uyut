import { AliasToken } from "antd/es/theme/interface"

export const LIGHT_COLORS: Partial<AliasToken> & {
	colorTextMenu?: string
	colorTextSelectedMenu?: string
} = {
	colorBgLayout: "rgb(245, 246, 250)",
	colorPrimary: "rgb(30, 94, 255)",
	borderRadius: 4,
	boxShadowSecondary: "rgba(21, 34, 50, 0.08) 0px 1px 4px 0px",
	boxShadowTertiary: "rgba(103, 116, 142, 0.075) 0 0 16px 0",
	colorTextMenu: "rgb(90, 96, 127)",
	colorTextSelectedMenu: "rgb(255, 255, 255)"
}

export const DARK_COLORS: Partial<AliasToken> & {
	colorTextMenu?: string
	colorTextSelectedMenu?: string
} = {
	colorBgLayout: "rgb(20, 22, 26)", // Тёмный фон с лёгким градиентом в серый.
	colorPrimary: "rgb(77, 144, 255)", // Осветлённый синий, чтобы подчеркнуть контраст.
	borderRadius: 4,
	boxShadowSecondary: "rgba(0, 0, 0, 0.5) 0px 1px 4px 0px", // Тени более насыщенные и глубокие.
	boxShadowTertiary: "rgba(0, 0, 0, 0.6) 0 0 16px 0", // Делаем их более выраженными, чтобы сохранить визуальную глубину.
	colorTextMenu: "rgb(170, 175, 200)", // Светлый оттенок текста, чтобы читабельность была на высоте.
	colorTextSelectedMenu: "rgb(255, 255, 255)"
}

// export const DARK_COLORS: Partial<AliasToken> = {
// 	colorBgLayout: "rgb(245, 246, 250)",
// 	colorPrimary: "rgb(79, 129, 255)",
// 	borderRadius: 4,
// 	boxShadowSecondary: "rgba(21, 34, 50, 0.08) 0px 1px 4px 0px",
// 	boxShadowTertiary: "rgba(103, 116, 142, 0.075) 0 0 16px 0"
// }
