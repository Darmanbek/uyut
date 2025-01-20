import { MoreOutlined } from "@ant-design/icons"
import { Card, Popover, Segmented, Space, Spin } from "antd"
import dayjs from "dayjs"
import EChartsReact from "echarts-for-react"
import { type FC, useState } from "react"
import { Button } from "src/components/ui/button"
import { DatePicker } from "src/components/ui/date-picker"
import {
	financePriceTypesData,
	financeTypesData
} from "src/constants/data.constants"
import {
	useGetFinancesByDateQuery,
	type FinancePriceType,
	type FinanceType, type FinanceUrl, FinanceDate
} from "src/services/finances"
import {
	useFinancesByDateOption
} from "src/components/screens/finances/hooks/use-finances-by-date-option"

interface FinancesByDateChartProps {
	url: FinanceUrl
	type: FinanceDate
}

const FinancesByDateChart: FC<FinancesByDateChartProps> = ({ url, type }) => {
	const [date, setDate] = useState(dayjs())
	const [valueType, setValueType] = useState<FinanceType>("amount")
	const [priceType, setPriceType] = useState<FinancePriceType>("uzs")
	
	const {
		data: comingProductsByYear,
		isLoading,
		isFetching
	} = useGetFinancesByDateQuery(url, type, {
		type: valueType,
		year: date.format("YYYY"),
		month: date.format("M"),
		price_type: priceType
	})
	
	const option = useFinancesByDateOption({
		type,
		valueType,
		priceType,
		data: comingProductsByYear?.data,
	})
	return (
		<Card
			title={"Приходы за год"}
			extra={
				<Space>
					<DatePicker
						picker={"year"}
						format={{
							format: "YYYY",
							type: "mask"
						}}
						onToday={() => setDate(dayjs())}
						value={date}
						onChange={setDate}
					/>
					<Popover
						placement={"bottomRight"}
						trigger={"click"}
						content={
							<Space direction={"vertical"}>
								<Segmented<FinanceType>
									onChange={setValueType}
									options={financeTypesData}
								/>
								<Segmented<FinancePriceType>
									block={true}
									value={priceType}
									onChange={setPriceType}
									options={financePriceTypesData}
								/>
							</Space>
						}>
						<Button icon={<MoreOutlined />} />
					</Popover>
				</Space>
			}>
			<Spin spinning={isLoading || isFetching}>
				<EChartsReact style={{ minWidth: 0 }} option={option} />
			</Spin>
		</Card>
	)
}

export { FinancesByDateChart }
