import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { useMessage } from "src/hooks/use-message"
import { saleProductsService } from "src/services/sale-products/sale-products.service"
import { FinanceDate, GetParams, ResponseError } from "src/services/shared"

const useGetSaleProductsByDateQuery = (
	type: FinanceDate,
	params: GetParams
) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => saleProductsService.getByDate(type, params),
		queryKey: ["sales-products", `by-${type}`, ...Object.values(params)],
		placeholderData: keepPreviousData,
		throwOnError: (error: ResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.message
			})
			throw error
		}
	})
}

const useGetSaleProductsByTodayQuery = (params: GetParams) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => saleProductsService.getByToday(params),
		queryKey: ["sales-products", "by-today", ...Object.values(params)],
		placeholderData: keepPreviousData,
		throwOnError: (error: ResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.message
			})
			throw error
		}
	})
}

export { useGetSaleProductsByDateQuery, useGetSaleProductsByTodayQuery }
