import { fromNano } from '@ton/core'
import { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/Button'
import { TonIcon } from '@/components/ui/icons/TonIcon'
import { Loading } from '@/components/ui/Loading'
import { Modal } from '@/components/ui/Modal'
import { useTgData } from '@/hooks/useTgData'
import { useUpdateFee } from '@/pages/MyGiftsPage/hooks/useUpdateFee'
import { IModal } from '@/types/modal.type'

interface Props extends IModal {
	fee: number
}

export const FeeModal: FC<Props> = ({ fee, modalOpen, closeModal }) => {
	const { userId, initData } = useTgData()
	const { updateFee, isPending, isError } = useUpdateFee(userId, initData)

	useEffect(() => {
		if (isError) toast.error('not enough funds')
	}, [isError])

	return (
		<Modal className='h-40' modalOpen={modalOpen} closeModal={closeModal}>
			<div className='flex flex-col items-center gap-3 fixed left-0 bottom-5 px-5 w-full'>
				<p className='flex items-center justify-between w-full'>
					<span className='text-gray font-medium'>Comission</span>

					<span className='flex items-center gap-2'>
						{fromNano(fee)} <TonIcon width={16} height={16} />
					</span>
				</p>

				<div className='flex items-center justify-center gap-3 text-lg font-semibold w-full'>
					<Button
						className='bg-light-blue rounded-lg w-full px-2 py-3 max-h-[52px]'
						disabled={isPending}
						onClick={() => updateFee()}
					>
						{isPending ? (
							<Loading size={14} className='text-white' />
						) : (
							'Pay'
						)}
					</Button>
				</div>
			</div>
		</Modal>
	)
}
