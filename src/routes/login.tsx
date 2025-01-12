import { createFileRoute } from "@tanstack/react-router"
import { LoginForm, LoginLayout } from "src/components/screens/login"

export const Route = createFileRoute("/login")({
	component: LoginComponent
})

function LoginComponent() {
	return (
		<LoginLayout>
			<LoginForm />
		</LoginLayout>
	)
}
