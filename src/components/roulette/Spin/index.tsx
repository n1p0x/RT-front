import { FC } from 'react'

import { DownArrowIcon } from '@/components/ui/icons/DownArrowIcon'
import { UpArrowIcon } from '@/components/ui/icons/UpArrowIcon'
import { UserIcon } from '@/components/ui/icons/UserIcon'
import { ISpinPlayer } from '@/types/game.type'

interface Props {
	spinContent: ISpinPlayer[]
}

export const Spin: FC<Props> = ({ spinContent }) => {
	return (
		<div className='flex flex-col items-center gap-2 w-full px-2'>
			<DownArrowIcon />

			<div className='relative w-full h-[120px] bg-dark-blue-balance rounded-xl overflow-hidden'>
				<div className='flex items-center justify-center gap-3 absolute right-0 top-0 bottom-0 spin'>
					{spinContent.map((player, index) => (
						<div
							key={index}
							className='flex items-center justify-center w-[70px] h-[70px] rounded-full border-2 p-0.5'
							style={{
								borderColor: player.color,
							}}
						>
							{player.photoUrl ? (
								<img
									src={player.photoUrl}
									alt={player.color}
									width={70}
									height={70}
									className='rounded-full w-full h-full'
								/>
							) : (
								<UserIcon width={30} height={30} />
							)}
						</div>
					))}
				</div>

				<div className='absolute left-0 h-full w-8 bg-dark-blue-balance' />
				<div className='absolute right-0 h-full w-8 bg-dark-blue-balance' />
			</div>

			<UpArrowIcon />
		</div>
	)
}
