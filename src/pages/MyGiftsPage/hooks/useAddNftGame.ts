import { useMutation, useQueryClient } from '@tanstack/react-query'

import { GameService } from '@/service/game.service'
import { IAddUserNftRequest } from '@/types/game.type'

export function useAddNftGame(userId: number, initData?: string) {
	const queryClient = useQueryClient()

	const {
		mutate: addNftGame,
		isPending,
		isSuccess,
		isError,
	} = useMutation({
		mutationFn: (data: IAddUserNftRequest) =>
			GameService.addUserNft(data, initData),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['user-gifts', { userId }],
			})
		},
	})

	return { addNftGame, isPending, isSuccess, isError }
}
