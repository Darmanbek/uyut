import type { Role } from "src/services/shared/roles"

export type User = {
	id: number
	name: string
	phone: string
	role: Role
}
