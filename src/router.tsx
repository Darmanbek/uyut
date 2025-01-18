import { QueryClient } from "@tanstack/react-query"
import { createRouter as createTanStackRouter } from "@tanstack/react-router"
import { routerWithQueryClient } from "@tanstack/react-router-with-query"
import { Spin } from "antd"
import { DefaultCatchBoundary } from "src/components/layout/default-catch-boundary"
import { NotFound } from "src/components/layout/not-found"
import { routeTree } from "./routeTree.gen"

// Set up a Router instance
export const createRouter = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnMount: false,
				refetchOnWindowFocus: false,
				staleTime: 36000,
				retry: 1,
				retryDelay: 1000
			}
		}
	})

	return routerWithQueryClient(
		createTanStackRouter({
			routeTree,
			context: {
				queryClient,
				auth: undefined
			},
			defaultPreload: "intent",
			defaultErrorComponent: DefaultCatchBoundary,
			defaultPendingComponent: () => <Spin spinning={true} fullscreen={true} />,
			defaultNotFoundComponent: (props) => <NotFound {...props} />
		}),
		queryClient
	)
}

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof createRouter>
	}
}
