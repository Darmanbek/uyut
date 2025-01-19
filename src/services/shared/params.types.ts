import type { FinancePriceType, FinanceType } from "./shared.types"

type GetParams = {
	page?: number
	limit?: number
	search?: string
	year?: string
	type?: FinanceType
	price_type?: FinancePriceType
}

type ParamId = number | string | undefined

export type { GetParams, ParamId }
