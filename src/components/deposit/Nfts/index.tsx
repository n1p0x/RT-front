import {
	useIsConnectionRestored,
	useTonAddress,
	useTonWallet,
} from '@tonconnect/ui-react'
import { FC, useEffect, useState } from 'react'

import { Dropdown } from '@/components/ui/Dropdown'
import { Loading } from '@/components/ui/Loading'
import { DuckNotFoundLottie } from '@/components/ui/lottie/DuckNotFoundLottie'
import { WalletLottie } from '@/components/ui/lottie/WalletLottie'
import { useTgData } from '@/hooks/useTgData'
import { useNfts } from '@/pages/DepositPage/hooks/useNfts'
import { Nft } from '../Nft'

export const Nfts: FC = () => {
	const [collection, setCollections] = useState<string[]>([])

	const wallet = useTonWallet()
	const address = useTonAddress(true)
	const isConnectionRestored = useIsConnectionRestored()

	const { initData } = useTgData()
	const { data, isFetching, isError } = useNfts(
		address,
		initData,
		!!wallet && isConnectionRestored
	)

	useEffect(() => {
		if (data) setCollections(['Plush Pepe'])
	}, [data])

	return wallet && isConnectionRestored ? (
		<>
			<div className='my-2'>
				<Dropdown title='Collection' />
			</div>

			{isFetching ? (
				<Loading className='text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
			) : isError ? (
				<div className='flex flex-col items-center gap-2 w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<DuckNotFoundLottie />

					<span className='text-sm font-semibold text-gray'>
						NFTs not found
					</span>
				</div>
			) : data ? (
				<div className='grid grid-cols-2 gap-2 items-center justify-center'>
					{data.nfts.map((nft, index) => (
						<Nft key={index} {...nft} />
					))}
				</div>
			) : (
				<></>
			)}
		</>
	) : (
		<div className='flex flex-col items-center gap-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<WalletLottie />

			<span className='font-bold text-xl'>Connect your wallet</span>
		</div>
	)
}
