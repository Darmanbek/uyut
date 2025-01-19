import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/store/products/$id")({
	component: RouteComponent
})

function RouteComponent() {
	return <div>Hello "/_layout/store/products/$id"!</div>
}
