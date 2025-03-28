import { Address, beginCell, toNano } from '@ton/core'
import { CHAIN, SendTransactionRequest } from '@tonconnect/ui-react'

import { axiosBase } from '@/api/interceptors'
import { INftsResponse, IUserGiftsResponse } from '@/types/gift.type'

export const GiftService = {
	async getNfts(wallet: string, initData?: string) {
		const response = await axiosBase.get<INftsResponse>(
			`/gift/nft/${wallet}`,
			{
				initData,
			}
		)
		return response.data
	},

	async getUserGifts(userId: number, initData?: string) {
		const response = await axiosBase.get<IUserGiftsResponse>(
			`/gift/user/${userId}`,
			{
				initData,
			}
		)
		return response.data
	},

	createNftTx(sender: string, nftAddress: string): SendTransactionRequest {
		const body = beginCell()
			.storeUint(0x5fcc3d14, 32)
			.storeUint(0, 64)
			.storeAddress(Address.parse(import.meta.env.VITE_ADMIN_WALLET))
			.storeAddress(Address.parse(sender))
			.storeUint(0, 1)
			.storeCoins(1)
			.storeUint(0, 1)
			.endCell()

		return {
			network: import.meta.env.IS_TESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
			validUntil: Math.floor(Date.now() / 1000) + 360,
			messages: [
				{
					address: nftAddress,
					amount: toNano('0.05').toString(),
					payload: body.toBoc().toString('base64'),
				},
			],
		}
	},
}
