import type { Role } from "src/services/shared/roles"

type User = {
	id: number
	name: string
	phone: string
	role: Role
}

export type { User }
