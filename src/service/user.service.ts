import { axiosBase } from '@/api/interceptors'
import {
	IAddUserRequest,
	IUpdateUserRequest,
	IUserProfileResponse,
	IUserResponse,
} from '@/types/user.type'

export const UserService = {
	async getUser(userId: number, initData?: string) {
		const response = await axiosBase.get<IUserResponse>(
			`/user/info/${userId}`,
			{
				initData,
			}
		)
		return response.data
	},

	async getUserProfile(userId: number, initData?: string) {
		const response = await axiosBase.get<IUserProfileResponse>(
			`/user/profile/${userId}`,
			{
				initData,
			}
		)
		return response.data
	},

	async addUser(data: IAddUserRequest, initData?: string) {
		const response = await axiosBase.post('/user/new', data, { initData })
		return response.data
	},

	async updateUser(
		userId: number,
		data: IUpdateUserRequest,
		initData?: string
	) {
		const response = await axiosBase.put(`/user/${userId}`, data, {
			initData,
		})
		return response.data
	},
}
