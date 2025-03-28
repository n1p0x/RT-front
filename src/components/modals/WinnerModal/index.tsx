import { fromNano } from '@ton/core'
import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/Button'
import { TonIcon } from '@/components/ui/icons/TonIcon'
import { WinLottie } from '@/components/ui/lottie/WinLottie'
import { Modal } from '@/components/ui/Modal'
import { useTgData } from '@/hooks/useTgData'
import { useUpdateFee } from '@/pages/MyGiftsPage/hooks/useUpdateFee'
import { IModal } from '@/types/modal.type'

interface Props extends IModal {
	totalBet: number
}

export const WinnerModal: FC<Props> = ({ totalBet, modalOpen, closeModal }) => {
	const { userId, initData } = useTgData()
	const { updateFee, isPending, isSuccess, isError } = useUpdateFee(
		userId,
		initData
	)

	useEffect(() => {
		if (isSuccess) closeModal()
	}, [isSuccess])

	useEffect(() => {
		if (isError) toast.error('not enough funds')
	}, [isError])

	return (
		<Modal
			className='h-[400px]'
			modalOpen={modalOpen}
			closeModal={closeModal}
		>
			<div className='flex flex-col items-center gap-3'>
				<WinLottie />

				<p className='flex flex-col items-center gap-0.5'>
					<span className='flex items-center justify-center gap-0.5 text-xl font-bold'>
						You won gifts worth {fromNano(totalBet)}
						<TonIcon width={16} height={16} />!
					</span>

					<span className='text-gray font-semibold'>
						Collect winning for a small fee
					</span>
				</p>

				<div className='flex flex-col items-center gap-3 w-full px-10'>
					<Button
						className='bg-light-blue rounded-lg w-full font-semibold py-3'
						disabled={isPending}
						onClick={() => updateFee()}
					>
						Pay 5% at TON
					</Button>

					<Button
						className='bg-dark-blue-balance rounded-lg w-full font-semibold py-3'
						onClick={closeModal}
					>
						Pay later
					</Button>
				</div>
			</div>
		</Modal>
	)
}
