import { useMutation, useQueryClient } from '@tanstack/react-query'

import { GameService } from '@/service/game.service'

export function useUpdateFee(userId: number, initData?: string) {
	const queryClient = useQueryClient()

	const {
		mutate: updateFee,
		isPending,
		isSuccess,
		isError,
	} = useMutation({
		mutationFn: () => GameService.updateFee(userId, initData),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['user', { userId }],
			})
			queryClient.invalidateQueries({
				queryKey: ['user-gifts', { userId }],
			})
		},
	})

	return { updateFee, isPending, isSuccess, isError }
}
