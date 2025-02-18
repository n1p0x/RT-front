import { useMutation } from '@tanstack/react-query'

import { WithdrawService } from '@/service/withdraw.service'
import { IAddNftWithdrawRequest } from '@/types/withdraw.type'

export function useAddWithdrawNft(initData?: string) {
	const {
		mutate: addWithdrawNft,
		isPending,
		isSuccess,
		isError,
	} = useMutation({
		mutationFn: (data: IAddNftWithdrawRequest) =>
			WithdrawService.addNftWithdraw(data, initData),
	})

	return { addWithdrawNft, isPending, isSuccess, isError }
}
