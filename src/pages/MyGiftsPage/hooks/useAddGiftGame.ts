import { useMutation, useQueryClient } from '@tanstack/react-query'

import { GameService } from '@/service/game.service'
import { IAddUserGiftRequest } from '@/types/game.type'

export function useAddGiftGame(userId: number, initData?: string) {
	const queryClient = useQueryClient()

	const {
		mutate: addGiftGame,
		isPending,
		isSuccess,
		isError,
	} = useMutation({
		mutationFn: (data: IAddUserGiftRequest) =>
			GameService.addUserGift(data, initData),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['user-gifts', { userId }],
			})
		},
	})

	return { addGiftGame, isPending, isSuccess, isError }
}
