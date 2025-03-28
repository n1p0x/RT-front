import { openTelegramLink } from '@telegram-apps/sdk-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/Button'
import { PlusIcon } from '@/components/ui/icons/PlusIcon'
import { TgIcon } from '@/components/ui/icons/TgIcon'
import { DuckNotFoundLottie } from '@/components/ui/lottie/DuckNotFoundLottie'
import { ROUTE_DEPOSIT } from '@/core/routes'
import { IGift } from '@/types/gift.type'
import { Gift } from '../Gift'
import { Nft } from '../Nft'

interface Props {
	gifts?: IGift[]
	nfts?: IGift[]
}

export const Bet: FC<Props> = ({ gifts, nfts }) => {
	return gifts || nfts ? (
		<div className='grid grid-cols-2 gap-2 items-center justify-center'>
			{gifts?.map((gift, index) => (
				<Gift key={index} {...gift} />
			))}

			{nfts?.map((nft, index) => (
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
					className='inline-flex items-center justify-center cursor-pointer disabled:opacity-60 hover:bg-light-blue/20 rounded-xl transition-colors duration-300 gap-1 text-light-blue p-2'
				>
					<PlusIcon color='#0097E9' /> Deposit
				</Link>

				<span className='text-gray'>
					Or write to @n1pox and send your gift
				</span>

				<Button
					className='gap-1 text-light-blue p-2'
					onClick={() => openTelegramLink('https://t.me/n1p0x')}
				>
					<TgIcon /> Send
				</Button>
			</p>
		</div>
	)
}
