import { fromNano } from '@ton/core'
import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/Button'
import { TonIcon } from '@/components/ui/icons/TonIcon'
import { Loading } from '@/components/ui/Loading'
import { GiftLottie } from '@/components/ui/lottie/GiftLottie'
import { useTgData } from '@/hooks/useTgData'
import { useAddNftGame } from '@/pages/MyGiftsPage/hooks/useAddNftGame'
import { IGift } from '@/types/gift.type'

interface Props extends IGift {}

export const Nft: FC<Props> = ({
	id,
	title,
	collectibleId,
	lottieUrl,
	floor,
	isBet,
}) => {
	const { userId, initData } = useTgData()
	const { addNftGame, isPending, isSuccess, isError } = useAddNftGame(
		userId,
		initData
	)

	const onClick = () => {
		addNftGame({ userNftId: id })
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
				className='flex items-center gap-3 bg-light-blue rounded-lg w-full font-semibold px-2 py-1'
				disabled={isBet || isPending}
				onClick={onClick}
			>
				{isBet ? (
					'In Game'
				) : isPending ? (
					<Loading size={14} className='text-white' />
				) : (
					'Bet'
				)}

				<span className='flex items-center gap-1'>
					<TonIcon width={16} height={16} /> {fromNano(floor)}
				</span>
			</Button>

			<span className='absolute top-0 right-0'>
				<TonIcon width={20} height={20} />
			</span>
		</div>
	)
}
