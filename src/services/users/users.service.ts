import { api } from "src/api"
import {
	GetParams,
	ParamId,
	Response,
	ResponseSingleData
} from "src/services/shared"
import { User } from "./users.types"

class UsersService {
	get = async (params: GetParams): Promise<Response<User>> => {
		const response = await api.get(`/admins`, { params })
		return response.data
	}

	getById = async (id: ParamId): Promise<ResponseSingleData<User>> => {
		const response = await api.get(`/admins/${id}`)
		return response.data
	}

	create = async (
		form: Record<string, unknown>
	): Promise<ResponseSingleData<User>> => {
		const response = await api.post(`/admins`, form)
		return response.data
	}

	edit = async (
		form: Record<string, unknown>
	): Promise<ResponseSingleData<User>> => {
		const response = await api.put(`/admins/${form.id}`, form)
		return response.data
	}

	delete = async (id: ParamId): Promise<ResponseSingleData<void>> => {
		const response = await api.delete(`/admins/${id}`)
		return response.data
	}
}

export const usersService = new UsersService()
