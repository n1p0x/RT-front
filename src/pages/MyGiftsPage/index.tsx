import { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Gifts } from '@/components/my/Gifts'
import { Nfts } from '@/components/my/Nfts'
import { Tabs } from '@/components/my/Tabs'
import { Loading } from '@/components/ui/Loading'
import { useTgData } from '@/hooks/useTgData'
import { useUserGifts } from './hooks/useUserGifts'

export const MyGiftsPage: FC = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const tab = searchParams.get('tab')

	const { userId, initData } = useTgData()
	// @ts-ignore
	const { data, isLoading, isFetching } = useUserGifts(userId, initData)

	useEffect(() => {
		if (data) {
			if (!data.gifts) setSearchParams({ tab: 'nfts' })
		}
	}, [data])

	return (
		<>
			<div className='px-2 mt-2'>
				<Tabs />

				<div className='mt-2'>
					{isLoading ? (
						<Loading className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white' />
					) : tab === 'gifts' ? (
						<Gifts gifts={data?.gifts} />
					) : tab === 'nfts' ? (
						<Nfts nfts={data?.nfts} />
					) : (
						<></>
					)}
				</div>
			</div>

			{/* <NftModal /> */}
		</>
	)
}
