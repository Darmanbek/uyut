import { createFileRoute } from "@tanstack/react-router"
import { WriteOffProductsTable } from "src/components/screens/write-off-products"

export const Route = createFileRoute("/_layout/expenses/write-off-products")({
	component: WriteOffComponent
})

function WriteOffComponent() {
	return (
		<>
			<WriteOffProductsTable />
		</>
	)
}
