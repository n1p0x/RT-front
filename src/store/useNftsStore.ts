import { create } from 'zustand'

import { INft } from '@/types/gift.type'

interface INftsStore {
	nfts?: INft[]
	setNfts: (nfts: INft[]) => void
}

export const useNftsStore = create<INftsStore>(set => ({
	setNfts: nfts => set(state => ({ ...state, nfts })),
}))
