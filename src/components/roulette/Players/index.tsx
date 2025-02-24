import { IPlayer } from '@/types/roulette.type'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	players: IPlayer[]
}

export const Players: FC<Props> = ({ players }) => {
	return (
		<div className='flex flex-col items-center gap-2 w-full px-2'>
			<span className='text-gray font-semibold text-lg'>
				{players.length} players
			</span>

			<div className='self-stretch rounded-xl bg-dark-gray'>
				{players.map((player, index) => (
					<div
						key={index}
						className={twMerge(
							'flex items-center justify-between h-12 px-3',
							index < players.length - 1 &&
								'border-b border-white/10'
						)}
					>
						<p className='flex items-center justify-center gap-2'>
							<span className='font-semibold'>{player.name}</span>

							<span
								className='text-[10px] font-medium px-1 rounded-md'
								style={{
									backgroundColor: `hsl(${
										50 + (index + 1) * 150
									}, 75%, 40%)`,
								}}
							>
								{(player.chance * 100).toFixed(0)}%
							</span>
						</p>

						<div
							className='w-9 h-9 rounded-lg'
							style={{
								backgroundColor: `hsl(${
									50 + (index + 1) * 150
								}, 75%, 40%)`,
							}}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
