import { FC } from 'react'

import { Button } from '@/components/ui/Button'
import { Loading } from '@/components/ui/Loading'
import { GiftLottie } from '@/components/ui/lottie/GiftLottie'
import { INft } from '@/types/gift.type'

interface Props extends INft {
    isPending: boolean
    onClick: () => void
}

export const Nft: FC<Props> = ({
	title,
	collectibleId,
	lottieUrl,
    isPending,
    onClick
}) => {
	return (
		<div className='flex flex-col items-center gap-2 p-2 max-w-48 bg-dark-gray rounded-xl'>
			<GiftLottie lottieUrl={lottieUrl} />

			<p className='flex items-center justify-between w-full'>
				<span className='font-medium'>{title}</span>

				<span className='text-xs text-gray'>#{collectibleId}</span>
			</p>

			<Button
				className='bg-light-blue rounded-lg w-full font-semibold px-2 py-1 h-8 max-h-8'
				disabled={isPending}
				onClick={onClick}
			>
				{isPending ? (
					<Loading size={14} className='text-white' />
				) : (
					'Deposit'
				)}
			</Button>
		</div>
	)
}
