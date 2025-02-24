import { beginCell, toNano } from '@ton/core'
import { CHAIN, SendTransactionRequest } from '@tonconnect/ui-react'

import { axiosBase } from '@/api/interceptors'
import { IAddNftDepositRequest } from '@/types/deposit.type'

export const DepositService = {
	async addNftDeposit(data: IAddNftDepositRequest, initData?: string) {
		const response = await axiosBase.post('/deposit/nft', data, {
			initData,
		})
		return response.data
	},

	createTonTx(memo: string, amount: string): SendTransactionRequest {
		const body = beginCell()
			.storeUint(0, 32)
			.storeStringTail(memo)
			.endCell()

		return {
			network: import.meta.env.IS_TESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
			validUntil: Math.floor(Date.now() / 1000) + 360,
			messages: [
				{
					address: import.meta.env.VITE_ADMIN_WALLET,
					amount: toNano(amount).toString(),
					payload: body.toBoc().toString('base64'),
				},
			],
		}
	},
}
