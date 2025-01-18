import type { Supplier } from "src/services/suppliers"
import type { PrintDetail } from "./print-details"

export type Product = {
	id: number
	name: string
	width: number
	length: number
	meter_square: number
	price_uzs: string | number
	price_usd: string | number
	supplier: Supplier
	print_details: PrintDetail[]
	created_at: string
}

export type ProductForm = {
	name: string
	width: number
	length: number
	meter_square: number
	price_uzs: string | number
	price_usd: string | number
	supplier_id: number
}
