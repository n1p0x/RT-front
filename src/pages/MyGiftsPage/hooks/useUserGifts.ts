import { useQuery } from '@tanstack/react-query'

import { GiftService } from '@/service/gift.service'

export function useUserGifts(userId: number, initData?: string) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['user-gifts', { userId }],
		queryFn: () => GiftService.getUserGifts(userId, initData),
	})

	return { data, isLoading, isError }
}
