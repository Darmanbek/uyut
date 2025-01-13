import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useMessage } from "src/hooks/use-message"
import { loginService } from "src/services/login/login.service"
import type { ResponseError } from "src/services/shared"

export const useGetProfileQuery = () => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => loginService.profile(),
		queryKey: ["login"],
		placeholderData: keepPreviousData,
		throwOnError: (error: ResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.message
			})
			throw error
		}
	})
}

export const useLoginMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: loginService.login,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["login"]
			})
			message.success({
				message: "Success",
				description: "Login successful"
			})
		},
		onError: (error: ResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.message
			})
		}
	})
}
