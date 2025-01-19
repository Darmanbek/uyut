import { createFileRoute } from "@tanstack/react-router"
import { ExpensesTable } from "src/components/screens/expenses"

export const Route = createFileRoute("/_layout/reports/expenses")({
	component: ExpensesComponent
})

function ExpensesComponent() {
	return (
		<>
			<ExpensesTable />
		</>
	)
}
