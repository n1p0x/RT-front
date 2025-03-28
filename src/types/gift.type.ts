export interface INft {
	title: string
	collectibleId: number
	address: string
	lottieUrl: string
	collectionId: number
}

export interface INftsResponse {
	nfts: INft[]
}

export interface IGift {
	id: number
	title: string
	collectibleId: number
	lottieUrl: string
	floor: number
	isBet: boolean
}

export interface IUserGifts {
	gifts?: IGift[]
	nfts?: IGift[]
}

export interface IUserGiftsResponse extends IUserGifts {
	isAvailable: boolean
	fee: number
}
