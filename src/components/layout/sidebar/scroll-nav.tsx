import { theme } from "antd"
import { type  FC, type PropsWithChildren } from "react"

interface ScrollNavProps {
	collapsed: boolean;
}

const ScrollNav: FC<PropsWithChildren<ScrollNavProps>> = ({ children, collapsed }) => {
	const {
		token: { padding }
	} = theme.useToken()
	return (
		<nav style={{
			height: "100%",
			padding: collapsed ? `${padding}px 8px` : padding,
			overflowX: "hidden",
			overflowY: "auto",
		}}>
			{children}
		</nav>
	)
}

export { ScrollNav }
