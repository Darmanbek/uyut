import { createFileRoute } from "@tanstack/react-router"
import { ProductsTable } from "src/components/screens/products"

export const Route = createFileRoute("/_layout/reports/products/")({
	component: ProductsComponent
})

function ProductsComponent() {
	return (
		<>
			<ProductsTable readonly={true} />
		</>
	)
}
