import { createFileRoute } from "@tanstack/react-router"
import { DebtorsTable } from "src/components/screens/debtors"

export const Route = createFileRoute("/_layout/reports/debtors")({
	component: DebtorsComponent
})

function DebtorsComponent() {
	return (
		<>
			<DebtorsTable />
		</>
	)
}
