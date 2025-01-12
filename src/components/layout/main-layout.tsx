import { Layout } from "antd"
import type { FC, PropsWithChildren } from "react"

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Layout style={{height: "100vh"}}>
			{children}
		</Layout>
	)
}

export { MainLayout }
