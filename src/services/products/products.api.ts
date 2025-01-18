import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { useMessage } from "src/hooks/use-message"
import { GetParams, ResponseError } from "../shared"
import { productsService } from "./products.service"

export const useGetProductsQuery = (params: GetParams) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => productsService.get(params),
		queryKey: ["products", ...Object.values(params)],
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
