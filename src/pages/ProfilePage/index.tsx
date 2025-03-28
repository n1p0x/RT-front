import { fromNano } from '@ton/core'
import { FC } from 'react'

import { Share } from '@/components/profile/Share'
import { EarnIcon } from '@/components/ui/icons/EarnIcon'
import { GameIcon } from '@/components/ui/icons/GameIcon'
import { ProfileIcon } from '@/components/ui/icons/ProfileIcon'
import { StatsIcon } from '@/components/ui/icons/StatsIcon'
import { TonIcon } from '@/components/ui/icons/TonIcon'
import { UserIcon } from '@/components/ui/icons/UserIcon'
import { Loading } from '@/components/ui/Loading'
import { useTgData } from '@/hooks/useTgData'
import { useUserProfile } from './hooks/useUserProfile'

export const ProfilePage: FC = () => {
	const { userId, username, name, photoUrl, initData } = useTgData()
	const { data, isLoading } = useUserProfile(userId, initData)

	return isLoading ? (
		<Loading className='text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
	) : data ? (
		<div className='flex flex-col items-center gap-3 mt-5 px-5'>
			<div className='flex flex-col items-center gap-3 w-full'>
				<div className='flex items-center justify-center shrink-0 overflow-hidden rounded-full w-[100px] h-[100px]'>
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
				</div>

				<span className='font-semibold text-2xl'>
					{name ?? username ?? userId}
				</span>
			</div>

			<div className='flex items-center justify-start gap-3 bg-dark-blue w-full rounded-xl p-3'>
				<TonIcon width={24} height={24} />

				<p className='flex flex-col items-start'>
					<span className='text-[14px] leading-[18px] text-gray'>
						Your $TON Balance
					</span>

					<span className='flex items-center gap-1 font-medium'>
						{(+fromNano(data.balance)).toFixed(2)}
					</span>
				</p>
			</div>

			<div className='flex flex-col items-start w-full gap-3'>
				<span className='flex items-center gap-1 font-semibold text-light-blue'>
					<StatsIcon />
					Statistics
				</span>

				<div className='grid grid-cols-3 items-start justify-between gap-2 self-stretch'>
					<div className='flex flex-col gap-1 bg-dark-blue p-3 rounded-xl'>
						<span className='flex items-center gap-1 font-semibold text-gray text-xs'>
							<UserIcon width={16} height={16} />
							Refs
						</span>

						<span className='flex items-center align-middle font-medium text'>
							{data.refs}
						</span>
					</div>

					<div className='flex flex-col gap-1 bg-dark-blue p-3 rounded-xl'>
						<span className='flex items-center gap-1 font-semibold text-gray text-xs'>
							<EarnIcon />
							Refs Earn
						</span>

						<span className='flex items-center align-middle font-medium'>
							{(data.earned / 10 ** 9).toFixed(2)}
						</span>
					</div>

					<div className='flex flex-col gap-1 bg-dark-blue p-3 rounded-xl'>
						<span className='flex items-center gap-1 font-semibold text-gray text-xs'>
							<GameIcon />
							Games
						</span>

						<span className='flex items-center align-middle font-medium'>
							{data.games}
						</span>
					</div>
				</div>
			</div>

			<Share />
		</div>
	) : (
		<span>User not found</span>
	)
}
