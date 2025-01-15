import type { PrintType } from "src/services/shared/print-types"

export type PrintDetail = {
	id: number
	print_type: PrintType
	meter: number
	print_cost: string
	material_cost: string
}
