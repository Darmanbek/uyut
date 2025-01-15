import { createFileRoute } from "@tanstack/react-router"
import { SuppliersStable } from "src/components/screens/suppliers"

export const Route = createFileRoute("/_layout/reports/suppliers")({
	component: SuppliersComponent
})

function SuppliersComponent() {
	return (
		<>
			<SuppliersStable />
		</>
	)
}
