import { Layout } from "antd"
import { type  FC, PropsWithChildren } from "react"

const MainContent: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Layout.Content
				style={{
					padding: 24,
					margin: 0,
					minHeight: 280,
					overflowX: "hidden",
					overflowY: "auto"
				}}
			>
				{children}
			</Layout.Content>
		</>
	)
}

export { MainContent }
