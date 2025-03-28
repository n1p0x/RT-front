import { FC, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { FeeModal } from '@/components/modals/FeeModal'
import { Button } from '@/components/ui/Button'
import { PlusIcon } from '@/components/ui/icons/PlusIcon'
import { DuckNotFoundLottie } from '@/components/ui/lottie/DuckNotFoundLottie'

interface Props {
	fee: number
}

export const Fee: FC<Props> = ({ fee }) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	return (
		<>
			<div
				className={twMerge(
					'flex flex-col items-center gap-2 w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
					modalOpen && 'blurred'
				)}
			>
				<DuckNotFoundLottie />

				<p className='flex flex-col items-center gap-3 text-sm font-semibold'>
					<span className='text-gray'>
						You must pay comission to play
					</span>

					<Button
						className='gap-1 text-light-blue p-2'
						onClick={() => setModalOpen(true)}
					>
						<PlusIcon color='#0097E9' /> Pay
					</Button>
				</p>
			</div>

			<FeeModal
				fee={fee}
				modalOpen={modalOpen}
				closeModal={() => setModalOpen(false)}
			/>
		</>
	)
}
