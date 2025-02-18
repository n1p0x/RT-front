import { useMutation } from '@tanstack/react-query'

import { DepositService } from '@/service/deposit.service'
import { IAddNftDepositRequest } from '@/types/deposit.type'

export function useAddNftDeposit(address: string, initData?: string) {
	const {
		mutate: addNftDeposit,
		isPending,
		isSuccess,
		isError,
	} = useMutation({
		mutationKey: ['add-nft-deposit', { address }],
		mutationFn: (data: IAddNftDepositRequest) =>
			DepositService.addNftDeposit(data, initData),
	})

	return { addNftDeposit, isPending, isSuccess, isError }
}
