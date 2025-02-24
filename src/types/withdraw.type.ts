export interface IAddTonWithdrawRequest {
	userId: number
	destination: string
	amount: number
}

export interface IAddNftWithdrawRequest {
	userNftId: number
	destination: string
}

export interface IAddGiftWithdrawRequest {
	userGiftId: number
}
