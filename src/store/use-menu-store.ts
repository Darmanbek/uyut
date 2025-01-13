import { create } from "zustand"

interface IMenuStore {
	collapsed: boolean
	toggleCollapsed: () => void
}

const useMenuStore = create<IMenuStore>()(
	(set) => ({
		collapsed: false,
		toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed }))
	})
)

export { useMenuStore }
