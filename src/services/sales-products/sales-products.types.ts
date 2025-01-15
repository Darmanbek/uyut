import { Client } from "src/services/shared/clients"
import { PaymentType } from "src/services/shared/payment-types"
import { PrintType } from "src/services/shared/print-types"
import { Product } from "../products"

export type SalesProduct = {
	id: number
	product: Product
	length: number
	print_type: PrintType[]
	total_cost: string | number
	total_meter_square: number
	payment_type: PaymentType
	client: Client
	file: string
	created_at: string
	updated_at: string
}
