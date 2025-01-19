import { type MenuTheme } from "antd"
import { EnumTheme } from "src/constants/storage.constants"
import { create } from "zustand"

interface ThemeStore {
	theme: MenuTheme
	toggleTheme: () => void
}

const useThemeStore = create<ThemeStore>()((set) => ({
	theme: EnumTheme.LIGHT,
	toggleTheme: () =>
		set((state) => ({
			theme: state.theme === EnumTheme.LIGHT ? EnumTheme.DARK : EnumTheme.LIGHT
		}))
}))

export { useThemeStore }
