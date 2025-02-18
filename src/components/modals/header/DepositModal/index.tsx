import { useIsConnectionRestored, useTonConnectUI } from '@tonconnect/ui-react'
import { FC } from 'react'

import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { IModal } from '@/types/modal.type'

interface Props extends IModal {}

export const DepositModal: FC<Props> = ({ modalOpen, closeModal }) => {
	const [tonconnectUI] = useTonConnectUI()
	const isConnectionRestored = useIsConnectionRestored()

	const onClick = () => {
		if (!isConnectionRestored) return

		// tonconnectUI.sendTransaction
	}

	return (
		<Modal modalOpen={modalOpen} closeModal={closeModal}>
			<div className='mt-3 w-full px-5'>
				<input type='number' />
			</div>

			<div className='flex items-center justify-center gap-3 fixed left-0 bottom-5 px-5 w-full text-lg font-semibold'>
				<Button
					className='bg-light-blue rounded-lg w-1/2 px-2 py-3 max-h-[52px]'
					onClick={onClick}
				>
					Deposit
				</Button>
			</div>
		</Modal>
	)
}
