import { FC } from 'react'
import { Link } from 'react-router-dom'

import { PlusIcon } from '@/components/ui/icons/PlusIcon'
import { DuckNotFoundLottie } from '@/components/ui/lottie/DuckNotFoundLottie'
import { ROUTE_DEPOSIT } from '@/core/routes'
import { IUserNft } from '@/types/user.type'
import { Nft } from '../Nft'

interface Props {
	nfts?: IUserNft[]
}

export const Nfts: FC<Props> = ({ nfts }) => {
	return nfts ? (
		<div className='grid grid-cols-2 gap-2 items-center justify-center'>
			{nfts.map((nft, index) => (
				<Nft key={index} {...nft} />
			))}
		</div>
	) : (
		<div className='flex flex-col items-center gap-2 w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<DuckNotFoundLottie />

			<p className='flex flex-col items-center gap-3 text-sm font-semibold'>
				<span className='text-gray'>
					You must deposit NFTs to bet them
				</span>

				<Link
					to={ROUTE_DEPOSIT}
					className='flex items-center gap-1 text-light-blue'
				>
					<PlusIcon color='#0097E9' /> Deposit
				</Link>
			</p>
		</div>
	)
}
