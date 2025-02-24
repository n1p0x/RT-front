import { TonConnectButton } from '@tonconnect/ui-react'
import { FC, useState } from 'react'

import { useUser } from '@/hooks/user/useUser'
import { useTgData } from '@/hooks/useTgData'
import { fromNano } from '@ton/core'
import { DepositModal } from '../modals/header/DepositModal'
import { WithdrawModal } from '../modals/header/WithdrawModal'
import { Button } from '../ui/Button'
import { MinusIcon } from '../ui/icons/MinusIcon'
import { PlusIcon } from '../ui/icons/PlusIcon'
import { TonIcon } from '../ui/icons/TonIcon'

export const Header: FC = () => {
	const [depositModalOpen, setDepositModalOpen] = useState<boolean>(false)
	const [withdrawModalOpen, setWithdrawModalOpen] = useState<boolean>(false)

	const { userId, initData } = useTgData()
	const { data } = useUser(userId, initData)

	return (
		<>
			<header className='flex items-center justify-between w-full h-14 px-2 sticky top-0 bg-blue font-bold'>
				<p className='flex items-center gap-3 rounded-full bg-dark-blue-balance px-3 py-2'>
					<span className='flex items-center gap-2'>
						<TonIcon width={16} height={16} />
						{data?.balance
							? (+fromNano(data.balance)).toFixed(2)
							: '0.00'}
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

			{withdrawModalOpen && (
				<WithdrawModal
					modalOpen={withdrawModalOpen}
					closeModal={() => setWithdrawModalOpen(false)}
				/>
			)}
		</>
	)
}
