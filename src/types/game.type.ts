export interface IRound {
	id: number
	hash: string
	createdAt: string
	startedAt?: string
}

export interface IRoundStats {
	totalGifts: number
	totalBet: number
	totalTickets: number
}

// TODO: maybe remove
export interface IPlayer {
	id: number
	userId: number
	name: string
	tickets: number
}

export interface IUniquePlayer {
	userId: number
	name?: string
	photoUrl?: string
	tickets: number
}

export interface ISpinPlayer {
	color: string
	photoUrl?: string
}

export interface IWinner {
	id: number
	userId: number
	ticket: number
	fee: number
}

export interface IRoundResponse extends IRound, IRoundStats {
	players?: IUniquePlayer[]
}

export interface IWinnerResponse extends IWinner {}

export interface IAddUserNftRequest {
	userNftId: number
}

export interface IAddUserGiftRequest {
	userGiftId: number
}
