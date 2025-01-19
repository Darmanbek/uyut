import { api } from "src/api"
import {
	FinanceByDate,
	FinanceByToday,
	FinanceDate,
	GetParams,
	ResponseData
} from "src/services/shared"

class SaleProductsService {
	getByDate = async (
		type: FinanceDate,
		params: GetParams
	): Promise<ResponseData<FinanceByDate>> => {
		const response = await api.get(`/sales-products-by-${type}`, { params })
		return response.data
	}

	getByToday = async (
		params: GetParams
	): Promise<ResponseData<FinanceByToday>> => {
		const response = await api.get(`/sales-products-by-today`, { params })
		return response.data
	}
}

export const saleProductsService = new SaleProductsService()
