import { createFileRoute, Outlet } from "@tanstack/react-router"
import { MainLayout, Header, InnerLayout, Sidebar, MainContent } from "src/components/layout"

export const Route = createFileRoute("/_layout")({
	component: LayoutComponent
})

function LayoutComponent() {
	return (
		<MainLayout>
			<Header />
			<InnerLayout>
				<Sidebar />
				<MainContent>
					<Outlet />
				</MainContent>
			</InnerLayout>
		</MainLayout>
	
	)
}
