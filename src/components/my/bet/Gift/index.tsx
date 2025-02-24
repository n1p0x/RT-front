import { FC } from 'react'

import { Button } from '@/components/ui/Button'
import { GiftIcon } from '@/components/ui/icons/GiftIcon'
import { GiftLottie } from '@/components/ui/lottie/GiftLottie'
import { IUserGift } from '@/types/user.type'

interface Props extends IUserGift {}

export const Gift: FC<Props> = ({ id, title, collectibleId, lottieUrl }) => {
	const onClick = () => {}

	return (
		<div className='flex flex-col items-center gap-2 p-2 max-w-48 bg-dark-gray rounded-xl relative'>
			<GiftLottie lottieUrl={lottieUrl} />

			<p className='flex items-center justify-between w-full'>
				<span className='font-medium'>{title}</span>

				<span className='text-xs text-gray'>#{collectibleId}</span>
			</p>

			<Button
				className='bg-light-blue rounded-lg w-full font-semibold px-2 py-1'
				onClick={onClick}
			>
				Bet
			</Button>

			<span className='absolute top-0 right-0'>
				<GiftIcon color='#0097E9' />
			</span>
		</div>
	)
}
