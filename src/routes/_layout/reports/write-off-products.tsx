import { createFileRoute } from "@tanstack/react-router"
import { WriteOffProductsTable } from "src/components/screens/write-off-products"

export const Route = createFileRoute("/_layout/reports/write-off-products")({
	component: WriteOffProductsComponent
})

function WriteOffProductsComponent() {
	return (
		<>
			<WriteOffProductsTable />
		</>
	)
}
