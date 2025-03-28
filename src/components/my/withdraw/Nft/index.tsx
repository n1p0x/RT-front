import {
	useIsConnectionRestored,
	useTonAddress,
	useTonConnectUI,
	useTonWallet,
} from '@tonconnect/ui-react'
import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/Button'
import { TonIcon } from '@/components/ui/icons/TonIcon'
import { Loading } from '@/components/ui/Loading'
import { GiftLottie } from '@/components/ui/lottie/GiftLottie'
import { useTgData } from '@/hooks/useTgData'
import { useAddNftWithdraw } from '@/pages/MyGiftsPage/hooks/useAddNftWithdraw'
import { IGift } from '@/types/gift.type'

interface Props extends IGift {}

export const Nft: FC<Props> = ({
	id,
	title,
	collectibleId,
	lottieUrl,
	isBet,
}) => {
	const { userId, initData } = useTgData()
	const { addNftWithdraw, isPending, isSuccess, isError } = useAddNftWithdraw(
		userId,
		initData
	)

	const [tonConnectUI] = useTonConnectUI()
	const wallet = useTonWallet()
	const address = useTonAddress(true)
	const isConnectionRestored = useIsConnectionRestored()

	const onClick = () => {
		if (!wallet || !isConnectionRestored) {
			toast.error('Connect wallet')

			tonConnectUI.openModal()

			return
		}

		addNftWithdraw({
			userNftId: id,
			destination: address,
		})
	}

	useEffect(() => {
		if (isSuccess) toast.success('Nft withdrew successfully')
	}, [isSuccess])

	useEffect(() => {
		if (isError) toast.error('Failed to withdraw nft')
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
				<TonIcon width={20} height={20} />
			</span>
		</div>
	)
}
