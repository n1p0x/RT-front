export interface IUser {
	id: number
	username?: string
	photoUrl?: string
	balance: number
	memo: string
}

export interface IUserProfile {
	balance: number
	refs: number
	earned: number
	games: number
}

export interface IUserResponse extends IUser {}

export interface IUserProfileResponse extends IUserProfile {}

export interface IAddUserRequest {
	userId: number
	name?: string
	photoUrl?: string
	startParam?: string
}

export interface IUpdateUserRequest {
	name?: string
	photoUrl?: string
}
