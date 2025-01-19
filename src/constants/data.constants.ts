import { FinancePriceType, FinanceType } from "src/services/shared"

type FinanceTypesData = {
	label: string
	value: FinanceType
}

type FinancePriceTypesData = {
	label: string
	value: FinancePriceType
}

const financeTypesData: FinanceTypesData[] = [
	{
		label: "Общая сумма",
		value: "amount"
	},
	{
		label: "Общее количество",
		value: "count"
	}
]

const financePriceTypesData: FinancePriceTypesData[] = [
	{
		label: "UZS",
		value: "uzs"
	},
	{
		label: "USD",
		value: "usd"
	}
]

export { financeTypesData, financePriceTypesData }
