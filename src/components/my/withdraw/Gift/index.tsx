import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/Button'
import { GiftIcon } from '@/components/ui/icons/GiftIcon'
import { Loading } from '@/components/ui/Loading'
import { GiftLottie } from '@/components/ui/lottie/GiftLottie'
import { useTgData } from '@/hooks/useTgData'
import { useAddGiftWithdraw } from '@/pages/MyGiftsPage/hooks/useAddGiftWithdraw'
import { IGift } from '@/types/gift.type'

interface Props extends IGift {}

export const Gift: FC<Props> = ({
	id,
	title,
	collectibleId,
	lottieUrl,
	isBet,
}) => {
	const { userId, initData } = useTgData()
	const { addGiftWithdraw, isPending, isSuccess, isError } =
		useAddGiftWithdraw(userId, initData)

	const onClick = () => {
		addGiftWithdraw({
			userGiftId: id,
		})
	}

	useEffect(() => {
		if (isSuccess) toast.success('success')
	}, [isSuccess])

	useEffect(() => {
		if (isError) toast.error('error')
	}, [isError])

	return (
		<div className='flex flex-col items-center gap-2 p-2 max-w-48 bg-dark-gray rounded-xl relative'>
			<GiftLottie lottieUrl={lottieUrl} />

			<p className='flex items-center justify-between w-full'>
				<span className='font-medium'>{title}</span>

				<span className='text-xs text-gray'>#{collectibleId}</span>
			</p>

			<Button
				className='bg-light-blue rounded-lg w-full font-semibold px-2 py-1 h-8 max-h-8'
				disabled={isBet || isPending}
				onClick={onClick}
			>
				{isBet ? (
					'In Game'
				) : isPending ? (
					<Loading size={14} className='text-white' />
				) : (
					'Withdraw'
				)}
			</Button>

			<span className='absolute top-0 right-0'>
				<GiftIcon color='#0097E9' />
			</span>
		</div>
	)
}
