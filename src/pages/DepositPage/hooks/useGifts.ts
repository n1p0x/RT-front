import { GiftService } from '@/service/gift.service'
import { useQuery } from '@tanstack/react-query'

export function useGifts(username?: string) {
	const { data } = useQuery({
		queryKey: ['gifts'],
		queryFn: () => GiftService.getGifts(username),
	})

	return { data }
}
