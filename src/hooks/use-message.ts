import { App } from "antd"
import type { ReactNode } from "react"

interface Message {
	message: ReactNode
	description: ReactNode
}

interface MessageInstance {
	info: (message: Message) => void
	error: (message: Message) => void
	warning: (message: Message) => void
	success: (message: Message) => void
}

export const useMessage = () => {
	const { notification } = App.useApp()
	const methods: (keyof MessageInstance)[] = ["success", "error", "info", "warning"]
	const message: MessageInstance = methods.reduce((acc, method) => {
		acc[method] = (message) => notification[method](message)
		return acc as MessageInstance
	}, {} as MessageInstance)

	return { message }
}
