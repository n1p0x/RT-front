import { axiosBase } from '@/api/interceptors'
import {
	IAddUserGiftRequest,
	IAddUserNftRequest,
	IRoundResponse,
	IWinnerResponse,
} from '@/types/game.type'

export const GameService = {
	async getCurrentRound(initData?: string) {
		const response = await axiosBase.get<IRoundResponse>(
			'/game/currentRound',
			{
				initData,
			}
		)
		return response.data
	},

	async getRound(initData?: string) {
		const response = await axiosBase.get<IRoundResponse>(`/game/round`, {
			initData,
		})
		return response.data
	},

	async getWinner(roundId?: number, initData?: string) {
		const response = await axiosBase.get<IWinnerResponse>(
			`/game/winner/${roundId}`,
			{
				initData,
			}
		)
		return response.data
	},

	async addUserNft(data: IAddUserNftRequest, initData?: string) {
		const response = await axiosBase.post('/game/nft', data, { initData })
		return response.data
	},

	async addUserGift(data: IAddUserGiftRequest, initData?: string) {
		const response = await axiosBase.post('/game/gift', data, { initData })
		return response.data
	},

	async updateFee(userId: number, initData?: string) {
		const response = await axiosBase.put(
			`/game/fee/${userId}`,
			{},
			{ initData }
		)
		return response.data
	},
}
