import { create } from 'zustand'

import { IGift } from '@/types/gift.type'

interface IGiftsStore {
	gifts?: IGift[]
	setGifts: (gifts: IGift[]) => void
}

export const useGiftsStore = create<IGiftsStore>(set => ({
	setGifts: gifts => set(state => ({ ...state, gifts })),
}))
