import { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Bet } from '@/components/my/bet/Bet'
import { Fee } from '@/components/my/Fee'
import { Tabs } from '@/components/my/Tabs'
import { Withdraw } from '@/components/my/withdraw/Withdraw'
import { Loading } from '@/components/ui/Loading'
import { useTgData } from '@/hooks/useTgData'
import { useUserGifts } from './hooks/useUserGifts'

export const MyGiftsPage: FC = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const tab = searchParams.get('tab')

	const { userId, initData } = useTgData()
	const { data, isLoading } = useUserGifts(userId, initData)

	useEffect(() => {
		if (data && !data.gifts) setSearchParams({ tab: 'bet' })
	}, [data])

	return (
		<div className='px-2 mt-2 mb-24'>
			<Tabs />

			<div className='mt-2'>
				{isLoading ? (
					<Loading className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white' />
				) : data && !data.isAvailable ? (
					<Fee fee={data.fee} />
				) : tab === 'bet' ? (
					<Bet gifts={data?.gifts} nfts={data?.nfts} />
				) : tab === 'withdraw' ? (
					<Withdraw gifts={data?.gifts} nfts={data?.nfts} />
				) : (
					<></>
				)}
			</div>
		</div>
	)
}
