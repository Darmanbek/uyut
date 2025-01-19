import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/finances/write-off-products")({
	component: RouteComponent
})

function RouteComponent() {
	return <div>Hello "/_layout/finances/write-off-products"!</div>
}
