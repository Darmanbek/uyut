import { createFileRoute } from "@tanstack/react-router"
import { UsersTable } from "src/components/screens/users"

export const Route = createFileRoute("/_layout/employees/users")({
	component: UsersComponent
})

function UsersComponent() {
	return (
		<>
			<UsersTable />
		</>
	)
}
