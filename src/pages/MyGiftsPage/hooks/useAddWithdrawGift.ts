import { useMutation } from '@tanstack/react-query'

import { WithdrawService } from '@/service/withdraw.service'
import { IAddGiftWithdrawRequest } from '@/types/withdraw.type'

export function useAddWithdrawGift(initData?: string) {
	const {
		mutate: addWithdrawGift,
		isPending,
		isSuccess,
		isError,
	} = useMutation({
		mutationFn: (data: IAddGiftWithdrawRequest) =>
			WithdrawService.addGiftWithdraw(data, initData),
	})

	return { addWithdrawGift, isPending, isSuccess, isError }
}
