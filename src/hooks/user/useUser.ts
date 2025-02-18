import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/service/user.service'

export function useUser(userId: number, initData?: string) {
	const { data, isError } = useQuery({
		queryKey: ['user', { userId }],
		queryFn: () => UserService.getUser(userId, initData),
	})

	return { data, isError }
}
