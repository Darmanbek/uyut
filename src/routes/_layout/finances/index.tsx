import { createFileRoute, redirect } from "@tanstack/react-router"
import { ROUTES } from "src/config/routes.config"

export const Route = createFileRoute("/_layout/finances/")({
	component: IndexComponent,
	beforeLoad: () => {
		throw redirect({
			href: ROUTES.FINANCES_COMING_PRODUCTS,
			replace: true
		})
	}
})

function IndexComponent() {
	return redirect({
		href: ROUTES.FINANCES_COMING_PRODUCTS,
		replace: true
	})
}
