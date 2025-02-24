import { FC } from 'react'

import { TonIcon } from '@/components/ui/icons/TonIcon'
import { IPlayer } from '@/types/roulette.type'

interface Props {
	total: number
	players: IPlayer[]
}

export const Wheel: FC<Props> = ({ total, players }) => {
	const radius = 140 // Радиус окружности
	let currentAngle = 0 // Начальный угол

	// Функция для генерации пути дуги
	const getArcPath = (startAngle: number, endAngle: number) => {
		const startX = radius + radius * Math.cos(startAngle)
		const startY = radius + radius * Math.sin(startAngle)
		const endX = radius + radius * Math.cos(endAngle)
		const endY = radius + radius * Math.sin(endAngle)
		const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1

		return `M ${radius} ${radius} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`
	}

	return (
		<div className='flex items-center justify-center relative border-4 border-dark-blue rounded-full'>
			<div className='flex items-center justify-center absolute'>
				<img
					src='/center.png'
					alt=''
					width={150}
					height={150}
					className='w-[300px] h-[300px]'
				/>

				<p className='flex items-center justify-center gap-1 absolute font-bold text-xl'>
					<span>{total}</span>
					<TonIcon width={15} height={15} />
				</p>
			</div>

			<svg width={radius * 2} height={radius * 2}>
				{players.map((player, index) => {
					const angle = player.chance * 2 * Math.PI
					const startAngle = currentAngle
					const endAngle = currentAngle + angle
					const midAngle = startAngle + angle / 2

					const textX = radius + radius * 0.7 * Math.cos(midAngle)
					const textY = radius + radius * 0.7 * Math.sin(midAngle)

					currentAngle = endAngle

					return (
						<g key={index}>
							<path
								d={getArcPath(startAngle, endAngle)}
								fill={`hsl(${
									50 + (index + 1) * 150
								}, 75%, 40%)`}
								stroke='#1F2B39'
								strokeWidth='3'
							/>

							<text
								x={textX}
								y={textY}
								textAnchor='middle'
								fill='white'
								fontSize='12'
							>
								{player.name}
							</text>
						</g>
					)
				})}
			</svg>
		</div>
	)
}
