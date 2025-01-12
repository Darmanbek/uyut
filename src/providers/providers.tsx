import { type  FC, type PropsWithChildren } from "react"
import { AntdProvider } from "./antd/antd-provider"
import { AuthProvider } from "./auth/auth-provider"

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<AntdProvider>
			<AuthProvider>
				{children}
			</AuthProvider>
		</AntdProvider>
	)
}

export { Providers }
