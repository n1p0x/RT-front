import { useMutation, useQueryClient } from '@tanstack/react-query'

import { UserService } from '@/service/user.service'
import { IAddUserRequest } from '@/types/user.type'

export function useAddUser(userId: number, initData?: string) {
	const queryClient = useQueryClient()

	const {
		mutate: addUser,
		isPending,
		isSuccess,
		isError,
	} = useMutation({
		mutationFn: (data: IAddUserRequest) =>
			UserService.addUser(data, initData),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['user', { userId }],
			})
		},
	})

	return { addUser, isPending, isSuccess, isError }
}
