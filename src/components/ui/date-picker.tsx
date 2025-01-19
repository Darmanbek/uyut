import { CalendarFilled } from "@ant-design/icons"
import {
	DatePicker as AntdDatePicker,
	DatePickerProps as AntdDatePickerProps,
	Space
} from "antd"
import { PickerRef } from "rc-picker/es"
import { forwardRef } from "react"
import { Button } from "src/components/ui/button"

interface DatePickerProps extends AntdDatePickerProps {
	onToday?: () => void
}

const DatePicker = forwardRef<PickerRef, DatePickerProps>(
	({ onToday, ...rest }, ref) => {
		return (
			<Space.Compact>
				<AntdDatePicker
					ref={ref}
					format={{
						format: "DD.MM.YYYY",
						type: "mask"
					}}
					{...rest}
				/>
				<Button
					tooltip={"Сегодня"}
					icon={<CalendarFilled />}
					onClick={onToday}
				/>
			</Space.Compact>
		)
	}
)
DatePicker.displayName = "DatePicker"

export { DatePicker }
