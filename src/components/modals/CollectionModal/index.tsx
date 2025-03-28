import { FC } from 'react'

import { Modal } from '@/components/ui/Modal'
import { IModal } from '@/types/modal.type'

interface Props extends IModal {}

export const CollectionModal: FC<Props> = ({ modalOpen, closeModal }) => {
	return (
		<Modal modalOpen={modalOpen} closeModal={closeModal}>
			<div className='flex flex-col items-center gap-3 mt-3 w-full px-5'>
				{/* <p className='flex flex-col items-center gap-0.5'> */}
				<span className='font-bold'>NFTs</span>
				{/* </p> */}
			</div>
		</Modal>
	)
}
