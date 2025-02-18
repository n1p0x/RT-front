import { axiosBase } from '@/api/interceptors'
import {
	IAddGiftWithdrawRequest,
	IAddNftWithdrawRequest,
} from '@/types/withdraw.type'

export const WithdrawService = {
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
