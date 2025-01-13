import { Role } from "src/services/shared/shared.types"


export type LoginForm = {
	phone: string
	password: string
	remember: boolean
}

export type LoginData = {
	phone: string
	token: string
}

export type Profile = {
	id: number
	name: string
	phone: string
	role: Role
}
