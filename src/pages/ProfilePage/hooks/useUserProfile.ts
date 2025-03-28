import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/service/user.service'

export function useUserProfile(userId: number, initData?: string) {
	const { data, isLoading } = useQuery({
		queryKey: ['user-profile', { userId }],
		queryFn: () => UserService.getUserProfile(userId, initData),
	})

	return { data, isLoading }
}
