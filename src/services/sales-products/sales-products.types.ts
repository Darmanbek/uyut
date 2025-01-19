import type { Product } from "src/services/products"
import type { PrintDetail } from "src/services/products/print-details"
import type { Client } from "src/services/shared/clients"
import type { PaymentType } from "src/services/shared/payment-types"

export type SalesProduct = {
	id: number
	product: Product
	length: number
	print_detail: PrintDetail[]
	total_cost: string | number
	total_meter_square: number
	payment_type: PaymentType
	client: Client
	file: string
	created_at: string
	updated_at: string
}
