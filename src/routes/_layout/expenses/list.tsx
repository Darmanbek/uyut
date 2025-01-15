import { createFileRoute } from "@tanstack/react-router"
import { ExpensesTable } from "src/components/screens/expenses"

export const Route = createFileRoute("/_layout/expenses/list")({
	component: ExpensesComponent
})

function ExpensesComponent() {
	return (
		<>
			<ExpensesTable />
		</>
	)
}
