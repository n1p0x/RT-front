import { useQuery } from '@tanstack/react-query'

import { GameService } from '@/service/game.service'

export function useWinner(roundId?: number, initData?: string) {
	const { data, isError, refetch } = useQuery({
		queryKey: ['round-winner', { roundId }],
		queryFn: () => GameService.getWinner(roundId, initData),
		enabled: false,
	})

	return { data, isError, refetch }
}
