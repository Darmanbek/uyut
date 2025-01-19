import { api } from "src/api"
import type {
	FinanceByDate,
	FinanceByToday,
	FinanceDate,
	GetParams,
	ResponseData
} from "src/services/shared"

class ComingProductsService {
	getByDate = async (
		type: FinanceDate,
		params: GetParams
	): Promise<ResponseData<FinanceByDate>> => {
		const response = await api.get(`/products-by-${type}`, { params })
		return response.data
	}

	getByToday = async (
		params: GetParams
	): Promise<ResponseData<FinanceByToday>> => {
		const response = await api.get(`/products-by-today`, { params })
		return response.data
	}
}

export const comingProductsService = new ComingProductsService()
