import {
	Button as AntdButton,
	ButtonProps as AntdButtonProps,
	ConfigProvider,
	theme,
	Tooltip
} from "antd"
import { forwardRef } from "react"

interface ButtonProps extends AntdButtonProps {
	tooltip?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ tooltip, ...rest }, ref) => {
		const { token } = theme.useToken()
		return (
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: rest.color || token.colorPrimary
					}
				}}>
				<Tooltip title={tooltip}>
					<AntdButton ref={ref} type={"primary"} {...rest} />
				</Tooltip>
			</ConfigProvider>
		)
	}
)
Button.displayName = "Button"

export { Button }
