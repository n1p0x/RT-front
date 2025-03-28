import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { UserIcon } from '@/components/ui/icons/UserIcon'
import { IUniquePlayer } from '@/types/game.type'

interface Props {
	totalTickets: number
	players?: IUniquePlayer[]
}

export const Players: FC<Props> = ({ totalTickets, players }) => {
	return (
		<div className='flex flex-col items-center gap-2 w-full px-2'>
			<span className='text-gray font-semibold text-lg'>
				{players?.length ?? 0} players
			</span>

			<div className='self-stretch rounded-xl bg-dark-gray'>
				{players ? (
					players.map((player, index) => (
						<div
							key={index}
							className={twMerge(
								'flex items-center justify-between h-16 px-3',
								index < players.length - 1 &&
									'border-b border-white/10'
							)}
						>
							<div className='flex items-center gap-3'>
								{player.photoUrl ? (
									<img
										src={player.photoUrl}
										alt={`user-photo-${player.userId}`}
										className='w-10 h-10 rounded-full border-2'
										style={{
											borderColor: `hsl(${
												50 + (index + 1) * 150
											}, 100%, 40%)`,
										}}
									/>
								) : (
									<div
										className='flex items-center justify-center w-10 h-10 rounded-full border-2'
										style={{
											borderColor: `hsl(${
												50 + (index + 1) * 150
											}, 100%, 40%)`,
										}}
									>
										<UserIcon width={20} height={20} />
									</div>
								)}

								<p className='flex items-center justify-center gap-2'>
									<span className='font-semibold'>
										{player.name ?? `Player ${index + 1}`}
									</span>

									<span
										className='text-[10px] font-medium px-1 rounded-md'
										style={{
											backgroundColor: `hsl(${
												50 + (index + 1) * 150
											}, 100%, 40%)`,
										}}
									>
										{(
											(player.tickets / totalTickets) *
											100
										).toFixed(1)}
										%
									</span>
								</p>
							</div>

							<div
								className='w-9 h-9 rounded-lg'
								style={{
									backgroundColor: `hsl(${
										50 + (index + 1) * 150
									}, 75%, 40%)`,
								}}
							/>
						</div>
					))
				) : (
					<></>
				)}
			</div>
		</div>
	)
}
