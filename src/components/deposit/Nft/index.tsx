import {
	useIsConnectionRestored,
	useTonAddress,
	useTonConnectUI,
	useTonWallet,
} from '@tonconnect/ui-react'
import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/Button'
import { Loading } from '@/components/ui/Loading'
import { GiftLottie } from '@/components/ui/lottie/GiftLottie'
import { useTgData } from '@/hooks/useTgData'
import { useAddNftDeposit } from '@/pages/DepositPage/hooks/useAddNftDeposit'
import { GiftService } from '@/service/gift.service'
import { INft } from '@/types/gift.type'

interface Props extends INft {}

export const Nft: FC<Props> = ({
	title,
	collectibleId,
	address: nftAddress,
	lottieUrl,
}) => {
	const { userId, initData } = useTgData()
	const { addNftDeposit, isPending, isSuccess, isError } = useAddNftDeposit(
		nftAddress,
		initData
	)

	const [tonConnectUI] = useTonConnectUI()
	const wallet = useTonWallet()
	const address = useTonAddress(true)
	const isConnectionRestored = useIsConnectionRestored()

	const onDepositClick = async () => {
		if (!wallet || !isConnectionRestored) return

		try {
			await tonConnectUI.sendTransaction(
				GiftService.createNftTx(wallet.account.address, nftAddress)
			)

			addNftDeposit({
				userId,
				sender: address,
				address: nftAddress,
			})
		} catch (e: any) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (isSuccess) toast.success('success')
	}, [isSuccess])

	useEffect(() => {
		if (isError) toast.error('error')
	}, [isError])

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
				onClick={onDepositClick}
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
