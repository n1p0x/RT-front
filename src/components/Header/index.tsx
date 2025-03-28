import { fromNano } from '@ton/core'
import { TonConnectButton } from '@tonconnect/ui-react'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { DepositModal } from '@/components/modals/header/DepositModal'
import { WithdrawModal } from '@/components/modals/header/WithdrawModal'
import { Button } from '@/components/ui/Button'
import { MinusIcon } from '@/components/ui/icons/MinusIcon'
import { PlusIcon } from '@/components/ui/icons/PlusIcon'
import { ProfileIcon } from '@/components/ui/icons/ProfileIcon'
import { TonIcon } from '@/components/ui/icons/TonIcon'
import { ROUTE_PROFILE } from '@/core/routes'
import { useUser } from '@/hooks/user/useUser'
import { useTgData } from '@/hooks/useTgData'

export const Header: FC = () => {
	const [depositModalOpen, setDepositModalOpen] = useState<boolean>(false)
	const [withdrawModalOpen, setWithdrawModalOpen] = useState<boolean>(false)

	const { userId, photoUrl, initData } = useTgData()
	const { data } = useUser(userId, initData)

	return (
		<>
			<header className='flex items-center justify-between w-full h-14 px-2 sticky top-0 bg-dark-blue font-bold z-50'>
				<div className='flex items-center gap-2'>
					<Link
						to={ROUTE_PROFILE}
						className='flex items-center justify-center shrink-0 overflow-hidden rounded-full w-8 h-8'
					>
						{photoUrl ? (
							<div className='border-2 border-gray'>
								<img
									src={photoUrl}
									alt='user-photo'
									width={100}
									height={100}
									className='h-full w-full'
								/>
							</div>
						) : (
							<ProfileIcon className='w-full h-full' />
						)}
					</Link>

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
				</div>

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
