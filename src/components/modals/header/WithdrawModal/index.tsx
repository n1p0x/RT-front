import { fromNano } from '@ton/core'
import {
	useIsConnectionRestored,
	useTonConnectUI,
	useTonWallet,
} from '@tonconnect/ui-react'
import { FC, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/Button'
import { TonIcon } from '@/components/ui/icons/TonIcon'
import { Input } from '@/components/ui/Input'
import { Modal } from '@/components/ui/Modal'
import { useUser } from '@/hooks/user/useUser'
import { useTgData } from '@/hooks/useTgData'
import { IModal } from '@/types/modal.type'

interface Props extends IModal {}

export const WithdrawModal: FC<Props> = ({ modalOpen, closeModal }) => {
	const amountRef = useRef<HTMLInputElement>(null)
	const [balance, setBalance] = useState<string | undefined>(undefined)

	const [tonconnectUI] = useTonConnectUI()
	const wallet = useTonWallet()
	const isConnectionRestored = useIsConnectionRestored()

	const { userId, initData } = useTgData()
	const { data } = useUser(userId, initData)

	const onWithdrawClick = async () => {
		if (!wallet || !isConnectionRestored) {
			tonconnectUI.openModal()
			return
		}

		if (!amountRef.current?.value) {
			toast.error('Enter amount')
			return
		}

		if (balance && +amountRef.current.value > +balance) {
			toast.error('Not enough balance')
			return
		}
	}

	const onBalanceClick = () => {
		if (amountRef.current && balance) amountRef.current.value = balance
	}

	useEffect(() => {
		if (data) setBalance(data.balance.toString())
	}, [data])

	useEffect(() => {
		if (amountRef.current?.value) console.log(amountRef.current.value)
	}, [amountRef.current])

	return (
		<Modal className='h-60' modalOpen={modalOpen} closeModal={closeModal}>
			<div className='flex flex-col items-center gap-3 mt-3 w-full px-5'>
				<p className='flex flex-col items-center gap-0.5'>
					<span className='font-bold'>Withdraw</span>
					<span className='text-gray text-xs'>
						Enter the amount you want to withdraw
					</span>
				</p>

				<div className='relative w-full'>
					<Input
						ref={amountRef}
						type='number'
						placeholder='Amount'
						className='pl-12'
					/>

					<div className='absolute left-0 top-0 p-2.5'>
						<TonIcon width={24} height={24} />
					</div>
				</div>

				{balance && (
					<p className='flex items-center justify-end gap-1 w-full'>
						<span className='text-gray font-medium'>Balance:</span>

						<Button
							className='text-light-blue font-bold px-1'
							onClick={onBalanceClick}
						>
							{fromNano(balance)}
						</Button>
					</p>
				)}
			</div>

			<div className='fixed left-0 bottom-5 px-5 w-full'>
				<Button
					className='bg-light-blue rounded-full px-2 py-3 w-full font-semibold max-h-[52px]'
					disabled={!data}
					onClick={onWithdrawClick}
				>
					{!!wallet && isConnectionRestored
						? 'Withdraw'
						: 'Connect wallet'}
				</Button>
			</div>
		</Modal>
	)
}
