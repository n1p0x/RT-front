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
