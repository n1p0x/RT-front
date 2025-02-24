import { FC } from 'react'

import { DownArrowIcon } from '@/components/ui/icons/DownArrowIcon'
import { UpArrowIcon } from '@/components/ui/icons/UpArrowIcon'
import { IPlayer } from '@/types/roulette.type'

interface Props {
	players: IPlayer[]
}

export const Spin: FC<Props> = ({ players }) => {
	return (
		<div className='flex flex-col items-center gap-5'>
			<div>
				<DownArrowIcon />
			</div>

			<div className='flex items-center justify-center gap-5 w-full'>
				{players.map((player, index) => (
					<div
						className='flex items-center justify-center w-[70px] h-[70px] border-4 rounded-full'
						style={{
							borderColor: `hsl(${
								50 + (index + 1) * 150
							}, 75%, 40%)`,
						}}
					>
						{player.name}
					</div>
				))}
			</div>

			<div>
				<UpArrowIcon />
			</div>
		</div>
	)
}
