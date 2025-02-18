import { useQuery } from '@tanstack/react-query'

import { NftService } from '@/service/nft.service'

export function useNfts(wallet: string, initData?: string, enabled?: boolean) {
	const { data, isFetching, isError } = useQuery({
		queryKey: ['nfts', { wallet }],
		queryFn: () => NftService.getNfts(wallet, initData),
		enabled,
	})

	return { data, isFetching, isError }
}
