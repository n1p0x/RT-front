import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/service/user.service'

export function useUserGifts(userId: number, initData?: string) {
	const { data, isLoading, isFetching } = useQuery({
		queryKey: ['user-gifts', { userId }],
		queryFn: () => UserService.getUserGifts(userId, initData),
	})

	return { data, isLoading, isFetching }
}
