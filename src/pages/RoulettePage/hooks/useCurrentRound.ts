import { useQuery } from '@tanstack/react-query'

import { GameService } from '@/service/game.service'

export function useCurrentRound(initData?: string) {
	const { data, isLoading, isFetching, refetch } = useQuery({
		queryKey: ['round'],
		queryFn: () => GameService.getCurrentRound(initData),
	})

	return { data, isLoading, isFetching, refetch }
}
