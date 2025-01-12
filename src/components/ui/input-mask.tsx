import { InputProps } from "antd"
import { ConfigProvider } from "antd"
import { ConfigContext } from "antd/es/config-provider"
import useCSSVarCls from "antd/es/config-provider/hooks/useCSSVarCls"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"
import { FormItemInputContext } from "antd/es/form/context"
import useStyle from "antd/es/input/style"
import useVariant from "antd/es/form/hooks/useVariants"
import clsx from "clsx"
import { forwardRef, useContext } from "react"
import RcInputMask, { Props, type ReactInputMask } from "react-input-mask"

const InputMask = forwardRef<ReactInputMask, Props & InputProps>(
	(props, ref) => {
		const {
			size,
			variant,
			prefix,
			suffix,
			className,
			...rest
		} = props
		
		const {
			getPrefixCls
		} = useContext(ConfigContext)
		const prefixCls = getPrefixCls("input")
		const rootCls = useCSSVarCls(prefixCls)
		const rootSize = useSize<SizeType>(size)
		const [, hashId, cssVarCls] = useStyle(prefixCls, rootCls)
		const [rootVariant] = useVariant("input", variant)
		
		const {
			status: contextStatus,
			hasFeedback,
			feedbackIcon
		} = useContext(FormItemInputContext)
		
		const wrapperClass = (prefix || suffix || hasFeedback) ? clsx(
			`${prefixCls}-affix-wrapper`,
			`${prefixCls}-affix-wrapper${rootSize === "large" ? "-lg" : rootSize === "small" ? "-sm" : ""}`,
			hashId,
			`${prefixCls}-${rootVariant}`,
			contextStatus && `${prefixCls}-status-${contextStatus}`,
			cssVarCls,
			rootCls,
			className
		) : ""
		
		const inputClass = (prefix || suffix || hasFeedback) ? clsx(
			prefixCls,
			`${prefixCls}${rootSize === "large" ? "-lg" : rootSize === "small" ? "-sm" : ""}`,
			hashId
		) : clsx(
			prefixCls,
			`${prefixCls}${rootSize === "large" ? "-lg" : rootSize === "small" ? "-sm" : ""}`,
			hashId,
			`${prefixCls}-${rootVariant}`,
			contextStatus && `${prefixCls}-status-${contextStatus}`,
			cssVarCls,
			rootCls,
			className
		)
		
		const inputProps = {
			className: inputClass,
			maskChar: "",
			ref,
			...rest
		}
		
		if (prefix || suffix || hasFeedback) return (
			<ConfigProvider>
				<span
					className={wrapperClass}
				>
					{prefix && <span className={"ant-input-prefix"}>{prefix}</span>}
					<RcInputMask
						{...inputProps}
					/>
					{(suffix || feedbackIcon) &&
						<span className={"ant-input-suffix"}>{suffix}{feedbackIcon}</span>}
				</span>
			</ConfigProvider>
		)
		return (
			<ConfigProvider>
				<RcInputMask
					{...inputProps}
				/>
			</ConfigProvider>
		)
	}
)
InputMask.displayName = "InputMask"

export { InputMask }
