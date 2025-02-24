import { useMutation, useQueryClient } from '@tanstack/react-query'

import { WithdrawService } from '@/service/withdraw.service'
import { IAddNftWithdrawRequest } from '@/types/withdraw.type'

export function useAddNftWithdraw(userId: number, initData?: string) {
	const queryClient = useQueryClient()

	const {
		mutate: addNftWithdraw,
		isPending,
		isSuccess,
		isError,
	} = useMutation({
		mutationFn: (data: IAddNftWithdrawRequest) =>
			WithdrawService.addNftWithdraw(data, initData),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['user-gifts', { userId }],
			})
		},
	})

	return { addNftWithdraw, isPending, isSuccess, isError }
}
