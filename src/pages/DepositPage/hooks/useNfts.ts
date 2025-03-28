import { useQuery } from '@tanstack/react-query'

import { GiftService } from '@/service/gift.service'

export function useNfts(wallet: string, initData?: string, enabled?: boolean) {
	const { data, isFetching, isError, refetch } = useQuery({
		queryKey: ['nfts', { wallet }],
		queryFn: () => GiftService.getNfts(wallet, initData),
		enabled,
	})

	return { data, isFetching, isError, refetch }
}
