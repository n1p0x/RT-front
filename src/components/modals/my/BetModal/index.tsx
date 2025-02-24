import { FC } from 'react'

import { Button } from '@/components/ui/Button'
import { TonIcon } from '@/components/ui/icons/TonIcon'
import { GiftLottie } from '@/components/ui/lottie/GiftLottie'
import { Modal } from '@/components/ui/Modal'
import { IModal } from '@/types/modal.type'
import { IUserGift } from '@/types/user.type'

interface Props extends IUserGift, IModal {}

export const BetModal: FC<Props> = ({
	id,
	title,
	collectibleId,
	lottieUrl,
	modalOpen,
	closeModal,
}) => {
	const onClick = () => {}

	// useEffect(() => {
	// 	if (isSuccess) {
	// 		toast.success('success')
	// 		closeModal()
	// 	}
	// }, [isSuccess])

	// useEffect(() => {
	// 	if (isError) toast.error('error')
	// }, [isError])

	return (
		<Modal
			className='h-[350px]'
			modalOpen={modalOpen}
			closeModal={closeModal}
		>
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

				<div className='flex flex-col items-center gap-3 fixed left-0 bottom-5 px-5 w-full'>
					<p className='flex items-center justify-between w-full'>
						<span className='text-gray'>Withdraw Fee</span>

						<span className='flex items-center gap-2'>
							0.05 <TonIcon width={16} height={16} />
						</span>
					</p>

					<div className='flex items-center justify-center gap-3 text-lg font-semibold w-full'>
						<Button
							className='bg-light-blue rounded-lg w-1/2 px-2 py-3 max-h-[52px]'
							disabled={true}
						>
							Bet
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	)
}
