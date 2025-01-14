import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/users")({
	component: UsersComponent
})

function UsersComponent() {
	return <div>Hello "/_layout/users"!</div>
}
