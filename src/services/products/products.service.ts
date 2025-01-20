import { api } from "src/api"
import type {
	GetParams,
	ParamId,
	Response,
	ResponseData,
	ResponseSingleData
} from "../shared"
import type { PrintDetail } from "./print-details"
import type { Product, ProductForm } from "./products.types"

class ProductsService {
	get = async (params: GetParams): Promise<Response<Product>> => {
		const response = await api.get("/products", { params })
		return response.data
	}
	getById = async (id: ParamId): Promise<ResponseSingleData<Product>> => {
		const response = await api.get(`/products/${id}`)
		return response.data
	}
	getPrintDetailById = async (
		id: ParamId
	): Promise<ResponseData<PrintDetail>> => {
		const response = await api.get(`/products/${id}/print-types`)
		return response.data
	}
	create = async (form: ProductForm): Promise<ResponseData<PrintDetail>> => {
		const response = await api.post(`/products`, form)
		return response.data
	}
	createPrintDetailById = async (
		id: ParamId,
		form: ProductForm
	): Promise<ResponseSingleData<PrintDetail>> => {
		const response = await api.post(`/products/${id}/print-detail`, form)
		return response.data
	}
}

export const productsService = new ProductsService()
