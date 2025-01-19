import { theme } from "antd"
import { EChartsOption } from "echarts"
import { financeTypesData } from "src/constants/data.constants"
import {
	FinanceByDate,
	FinancePriceType,
	FinanceType
} from "src/services/shared"
import {
	formatEmpty,
	formatPrice,
	formatPriceUSD,
	formatPriceUZS
} from "src/utils/formatter.utils"

interface ComingProductsByYearOptionProps {
	data?: FinanceByDate[]
	type?: FinanceType
	priceType?: FinancePriceType
}

const useComingProductsByYearOption = ({
	data,
	type,
	priceType
}: ComingProductsByYearOptionProps) => {
	const { token } = theme.useToken()

	const title =
		financeTypesData.find((el) => el.value === type)?.label || "Общая сумма"
	const customFormatPrice =
		type === "count"
			? formatEmpty
			: priceType === "usd"
				? formatPriceUSD
				: formatPriceUZS

	const categories = data?.map((el) => el.date) || []

	const seriesData: EChartsOption["series"] =
		data?.map((el) => ({
			name: title,
			type: "bar",
			barWidth: "50%",
			itemStyle: {
				borderRadius: [token.borderRadius, token.borderRadius, 0, 0]
			},
			label: {
				show: true,
				formatter: (params) => formatPrice(params.value).toString(),
				position: "inside",
				color: token.colorTextLightSolid,
				fontSize: token.fontSize
			},
			data: [el.total]
		})) || []

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
			valueFormatter: (value) => customFormatPrice(value).toString()
		},
		grid: {
			left: "0",
			right: "4%",
			bottom: "3%",
			top: "3%",
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

export { useComingProductsByYearOption }
