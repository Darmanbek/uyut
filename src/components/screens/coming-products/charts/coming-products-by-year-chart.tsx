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
import { useGetComingProductsByDateQuery } from "src/services/coming-products"
import type { FinancePriceType, FinanceType } from "src/services/shared"
import { useComingProductsByYearOption } from "../hooks/use-coming-products-by-year-option"

const ComingProductsByYearChart: FC = () => {
	const [year, setYear] = useState(dayjs())
	const [type, setType] = useState<FinanceType>("amount")
	const [priceType, setPriceType] = useState<FinancePriceType>("uzs")

	const {
		data: comingProductsByYear,
		isLoading,
		isFetching
	} = useGetComingProductsByDateQuery("year", {
		type,
		year: year.format("YYYY"),
		price_type: priceType
	})

	const option = useComingProductsByYearOption({
		data: comingProductsByYear?.data,
		type,
		priceType
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
						onToday={() => setYear(dayjs())}
						value={year}
						onChange={setYear}
					/>
					<Popover
						placement={"bottomRight"}
						trigger={"click"}
						content={
							<Space direction={"vertical"}>
								<Segmented<FinanceType>
									onChange={setType}
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

export { ComingProductsByYearChart }
