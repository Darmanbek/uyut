import { createFileRoute } from "@tanstack/react-router"
import { SalesProductsTable } from "src/components/screens/sales-products"

export const Route = createFileRoute("/_layout/sales/products")({
	component: ProductsComponent
})

function ProductsComponent() {
	return <SalesProductsTable />
}
