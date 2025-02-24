import { axiosBase } from '@/api/interceptors'
import {
	IAddGiftWithdrawRequest,
	IAddNftWithdrawRequest,
	IAddTonWithdrawRequest,
} from '@/types/withdraw.type'

export const WithdrawService = {
	async addTonWithdraw(data: IAddTonWithdrawRequest, initData?: string) {
		const response = await axiosBase.post('/withdraw/ton', data, {
			initData,
		})
		return response.data
	},

	async addNftWithdraw(data: IAddNftWithdrawRequest, initData?: string) {
		const response = await axiosBase.post('/withdraw/nft', data, {
			initData,
		})
		return response.data
	},

	async addGiftWithdraw(data: IAddGiftWithdrawRequest, initData?: string) {
		const response = await axiosBase.post('/withdraw/gift', data, {
			initData,
		})
		return response.data
	},
}
