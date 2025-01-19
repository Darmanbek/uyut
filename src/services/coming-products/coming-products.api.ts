import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { useMessage } from "src/hooks/use-message"
import type { FinanceDate, GetParams, ResponseError } from "src/services/shared"
import { comingProductsService } from "./coming-products.service"

const useGetComingProductsByDateQuery = (
	type: FinanceDate,
	params: GetParams
) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => comingProductsService.getByDate(type, params),
		queryKey: ["products", `by-${type}`, ...Object.values(params)],
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

const useGetComingProductsByTodayQuery = (params: GetParams) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => comingProductsService.getByToday(params),
		queryKey: ["products", "by-today", ...Object.values(params)],
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

export { useGetComingProductsByDateQuery, useGetComingProductsByTodayQuery }
