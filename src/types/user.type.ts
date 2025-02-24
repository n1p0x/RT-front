export interface IUser {
	id: number
	username?: string
	photoUrl?: string
	balance: number
	memo: string
}

export interface IUserGift {
	id: number
	title: string
	collectibleId: number
	lottieUrl: string
}

export interface IUserGifts {
	gifts?: IUserGift[]
	nfts?: IUserGift[]
}

export interface IUserResponse extends IUser {}

export interface IUserGiftsResponse extends IUserGifts {}

export interface IAddUserRequest {
	userId: number
	name?: string
	photoUrl?: string
}

export interface IUpdateUserRequest {
	name?: string
	photoUrl?: string
}
