import { Button as AntdButton, ButtonProps, ConfigProvider, theme } from "antd"
import { forwardRef } from "react"

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { token } = theme.useToken()
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: props.color || token.colorPrimary
				}
			}}>
			<AntdButton ref={ref} type={"primary"} {...props} />
		</ConfigProvider>
	)
})
Button.displayName = "Button"

export { Button }
