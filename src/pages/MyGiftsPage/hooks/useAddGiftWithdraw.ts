import { useMutation, useQueryClient } from '@tanstack/react-query'

import { WithdrawService } from '@/service/withdraw.service'
import { IAddGiftWithdrawRequest } from '@/types/withdraw.type'

export function useAddGiftWithdraw(userId: number, initData?: string) {
	const queryClient = useQueryClient()

	const {
		mutate: addGiftWithdraw,
		isPending,
		isSuccess,
		isError,
	} = useMutation({
		mutationFn: (data: IAddGiftWithdrawRequest) =>
			WithdrawService.addGiftWithdraw(data, initData),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['user-gifts', { userId }],
			})
		},
	})

	return { addGiftWithdraw, isPending, isSuccess, isError }
}
