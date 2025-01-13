import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import useNotification from "antd/es/notification/useNotification"
import { loginService } from "src/services/login/login.service"
import type { ResponseError } from "src/services/shared"

export const useGetProfileQuery = () => {
	const [notification] = useNotification()
	return useQuery({
		queryFn: () => loginService.profile(),
		queryKey: ["login"],
		placeholderData: keepPreviousData,
		throwOnError: (error: ResponseError) => {
			notification.error({
				message: error.message,
				description: error?.response?.data?.message
			})
			throw error
		}
	})
}

export const useLoginMutation = () => {
	const [notification] = useNotification()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: loginService.login,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["login"]
			})
			notification.success({
				message: "Success",
				description: "Login successful"
			})
		},
		onError: (error: ResponseError) => {
			notification.error({
				message: error.message,
				description: error?.response?.data?.message
			})
		}
	})
}
