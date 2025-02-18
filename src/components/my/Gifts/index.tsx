import { openLink } from '@telegram-apps/sdk-react'
import { FC } from 'react'

import { Button } from '@/components/ui/Button'
import { TgIcon } from '@/components/ui/icons/my/TgIcon'
import { DuckNotFoundLottie } from '@/components/ui/lottie/DuckNotFoundLottie'
import { IUserGifts } from '@/types/user.type'

interface Props {
	gifts?: IUserGifts[]
}

export const Gifts: FC<Props> = ({ gifts }) => {
	const onShowClick = () => {}

	return gifts ? (
		<div className='grid grid-cols-2 gap-2 items-center justify-center'>
			{gifts.map((gift, index) => (
				<></>
			))}
		</div>
	) : (
		<div className='flex flex-col items-center gap-2 w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<DuckNotFoundLottie />

			<p className='flex flex-col items-center gap-3 text-sm font-semibold'>
				<span className='text-gray'>
					Write to @user and send your gift
				</span>

				<Button
					className='flex items-center gap-1 text-light-blue p-0.5'
					onClick={() => openLink('https://t.me/n1p0x')}
				>
					<TgIcon /> Send
				</Button>
			</p>
		</div>
	)
}
