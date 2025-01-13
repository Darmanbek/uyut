import { RouterProvider } from "@tanstack/react-router"
import { type FC } from "react"
import { useAuth } from "src/hooks/use-auth"
import { createRouter } from "src/router"

const router = createRouter()

const App: FC = () => {
	const auth = useAuth()
	return (
		<>
			<RouterProvider router={router} context={{ auth }} />
		</>
	)
}

export { App }
