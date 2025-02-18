import { axiosBase } from '@/api/interceptors'

export const GiftService = {
	async getGifts(username?: string) {
		if (!username) return

		const response = await axiosBase.get(`/gift/${username}`)
		return response.data
	},
}
