import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/finances/sale-products")({
	component: RouteComponent
})

function RouteComponent() {
	return <div>Hello "/_layout/finances/sale-products"!</div>
}
