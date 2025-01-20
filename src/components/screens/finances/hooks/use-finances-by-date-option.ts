import { theme } from "antd"
import { EChartsOption } from "echarts"
import { financePriceTypesData, financeTypesData } from "src/constants/data.constants"
import {
	FinanceByDate, FinanceDate,
	FinancePriceType,
	FinanceType
} from "src/services/finances"
import {
	formatPrice
} from "src/utils/formatter.utils"

interface ComingProductsByYearOptionProps {
	data?: FinanceByDate[]
	type?: FinanceDate
	valueType?: FinanceType
	priceType?: FinancePriceType
}

const useFinancesByDateOption = ({
	data,
	type,
	valueType,
	priceType
}: ComingProductsByYearOptionProps) => {
	const { token } = theme.useToken()
	
	const title =
		financeTypesData.find((el) => el.value === type)?.label || "Общая сумма"
	const currency = valueType === "amount" ? financePriceTypesData.find(el => el.value === priceType)?.label || "" : ""
	
	const categories = data?.map((el) => el.date) || []
	
	const seriesData: EChartsOption["series"] = {
		name: title,
		type: "bar",
		barWidth: "50%",
		itemStyle: {
			borderRadius: [token.borderRadius, token.borderRadius, 0, 0]
		},
		label: {
			show: type === "year",
			formatter: (params) => `${formatPrice(params.value)} ${currency}`,
			position: "inside",
			color: token.colorTextLightSolid,
			fontSize: token.fontSize
		},
		data: data?.map((el) => (el.total)) || []
	}
	
	
	const option: EChartsOption = {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "shadow"
			},
			backgroundColor: token.colorBgContainer,
			borderColor: token.colorBorder,
			textStyle: {
				color: token.colorText
			},
			valueFormatter: (value) => formatPrice(value).toString()
		},
		grid: {
			left: "3%",
			right: "4%",
			bottom: "3%",
			top: "0",
			containLabel: true
		},
		xAxis: {
			type: "category",
			data: categories,
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: {
				color: token.colorTextTertiary
			}
		},
		yAxis: {
			type: "value",
			axisLabel: {
				color: token.colorTextTertiary
			},
			splitLine: {
				lineStyle: {
					color: token.colorBorder
				}
			}
		},
		series: seriesData
	}
	return option
}

export { useFinancesByDateOption }
