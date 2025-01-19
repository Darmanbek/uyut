import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/finances/expenses")({
	component: RouteComponent
})

function RouteComponent() {
	return <div>Hello "/_layout/finances/expenses"!</div>
}
