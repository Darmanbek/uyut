import { createStyles, css } from "antd-style"

interface StylesSidebarProps {
	collapsed: boolean
}

export const useStylesSidebar = createStyles(({ token }, { collapsed }: StylesSidebarProps) => ({
	nav: css`
		height: 100%;
		padding: ${collapsed ? `${token.padding}px 8px` : `${token.padding}px`};
		overflow-x: hidden;
		overflow-y: auto;

		&,
		&::after,
		&::before {
			transition: all 0.2s;
			scrollbar-color: transparent transparent;

			&:hover {
				scrollbar-color: #eaeaea transparent;
			}
		}

		&:hover {
			scrollbar-color: #eaeaea transparent;
		}
	`
}))
