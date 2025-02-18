import { TonConnectButton } from '@tonconnect/ui-react'
import { FC, useState } from 'react'

import { DepositModal } from '../modals/header/DepositModal'
import { Button } from '../ui/Button'
import { TonIcon } from '../ui/icons/header/TonIcon'
import { MinusIcon } from '../ui/icons/MinusIcon'
import { PlusIcon } from '../ui/icons/PlusIcon'

export const Header: FC = () => {
	const [depositModalOpen, setDepositModalOpen] = useState<boolean>(false)
	const [withdrawModalOpen, setWithdrawModalOpen] = useState<boolean>(false)

	return (
		<>
			<header className='flex items-center justify-between w-full h-14 px-2 sticky top-0 bg-blue font-bold'>
				<p className='flex items-center gap-3 rounded-full bg-dark-blue-balance px-3 py-2'>
					<span className='flex items-center gap-2'>
						<TonIcon width={16} height={16} /> 0.00
					</span>

					<Button onClick={() => setDepositModalOpen(true)}>
						<PlusIcon color='#fff' />
					</Button>

					<Button onClick={() => setWithdrawModalOpen(true)}>
						<MinusIcon />
					</Button>
				</p>

				<TonConnectButton />
			</header>

			{depositModalOpen && (
				<DepositModal
					modalOpen={depositModalOpen}
					closeModal={() => setDepositModalOpen(false)}
				/>
			)}
		</>
	)
}
