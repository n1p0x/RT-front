import { useQuery } from '@tanstack/react-query'

import { GameService } from '@/service/game.service'

export function useRound(initData?: string) {
	const { data, isLoading, isFetching, refetch } = useQuery({
		queryKey: ['round'],
		queryFn: () => GameService.getRound(initData),
	})

	return { data, isLoading, isFetching, refetch }
}
