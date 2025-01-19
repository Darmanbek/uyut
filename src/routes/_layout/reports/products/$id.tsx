import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/reports/products/$id")({
	component: ProductComponent
})

function ProductComponent() {
	return <div>Hello "/_layout/reports/products/$id"!</div>
}
