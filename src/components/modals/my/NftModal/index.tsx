import { useIsConnectionRestored, useTonWallet } from '@tonconnect/ui-react'
import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/Button'
import { Loading } from '@/components/ui/Loading'
import { GiftLottie } from '@/components/ui/lottie/GiftLottie'
import { Modal } from '@/components/ui/Modal'
import { useTgData } from '@/hooks/useTgData'
import { useAddWithdrawNft } from '@/pages/MyGiftsPage/hooks/useAddWithdrawNft'
import { IModal } from '@/types/modal.type'
import { IUserNft } from '@/types/user.type'

interface Props extends IUserNft, IModal {}

export const NftModal: FC<Props> = ({
	id,
	title,
	collectibleId,
	lottieUrl,
	modalOpen,
	closeModal,
}) => {
	const { initData } = useTgData()
	const { addWithdrawNft, isPending, isSuccess, isError } =
		useAddWithdrawNft(initData)

	const wallet = useTonWallet()
	const isConnectionRestored = useIsConnectionRestored()

	const onWithdrawClick = () => {
		if (!wallet || !isConnectionRestored) {
			toast.error('Connect wallet first')
			return
		}

		addWithdrawNft({
			userNftId: id,
			destination: wallet.account.address,
		})
	}

	useEffect(() => {
		if (isSuccess) toast.success('success')
	}, [isSuccess])

	useEffect(() => {
		if (isError) toast.error('error')
	}, [isError])

	return (
		<Modal modalOpen={modalOpen} closeModal={closeModal}>
			<div className='relative flex flex-col items-center mt-3 w-full'>
				<div className='flex flex-col items-center gap-2 p-2 max-w-48 rounded-xl'>
					<GiftLottie lottieUrl={lottieUrl} />

					<p className='flex items-center justify-between w-full'>
						<span className='font-medium'>{title}</span>

						<span className='text-xs text-gray'>
							#{collectibleId}
						</span>
					</p>
				</div>

				<div className='flex items-center justify-center gap-3 fixed left-0 bottom-5 px-5 w-full text-lg font-semibold'>
					<Button
						className='bg-light-blue rounded-lg w-1/2 px-2 py-3 max-h-[52px]'
						disabled={isPending}
						onClick={onWithdrawClick}
					>
						{isPending ? (
							<Loading className='pt-1 text-white' size={24} />
						) : (
							'Withdraw'
						)}
					</Button>

					<Button
						className='bg-light-blue rounded-lg w-1/2 px-2 py-3 max-h-[52px]'
						disabled={true}
					>
						Bet
					</Button>
				</div>
			</div>
		</Modal>
	)
}
