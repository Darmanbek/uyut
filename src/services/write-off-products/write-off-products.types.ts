import type { Product } from "../products"

type WriteOffProduct = {
	id: number
	product: Product
	date: string
	name: string
	length: number
	amount: string
	meter_square: number
	created_at: string
	updated_at: string
}

export type { WriteOffProduct }
