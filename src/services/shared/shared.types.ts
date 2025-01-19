type FinanceByDate = {
	date: string
	total: number | string
}

type FinanceByToday = {
	date: string
	total_amount_uzs: number | string
	total_amount_usd: number | string
	total_count: number
}

type FinanceDate = "year" | "month" | "days"

type FinanceType = "amount" | "count"

type FinancePriceType = "uzs" | "usd"

export type {
	FinanceByDate,
	FinanceByToday,
	FinanceDate,
	FinanceType,
	FinancePriceType
}
