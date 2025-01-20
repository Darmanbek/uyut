import { createFileRoute } from "@tanstack/react-router"
import { ProductsForm, ProductsTable } from "src/components/screens/products"

export const Route = createFileRoute("/_layout/store/products/")({
	component: ProductsComponent
})

function ProductsComponent() {
	return (
		<>
			<ProductsForm />
			<ProductsTable />
		</>
	)
}
