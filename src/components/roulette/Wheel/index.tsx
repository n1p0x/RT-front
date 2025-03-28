import { TonIcon } from '@/components/ui/icons/TonIcon'
import { IUniquePlayer } from '@/types/game.type'
import { FC } from 'react'

interface Props {
	totalBet: string
	totalTickets: number
	players?: IUniquePlayer[]
}

export const Wheel: FC<Props> = ({ totalBet, totalTickets, players }) => {
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

	const isSinglePlayer =
		players?.length === 1 && players[0].tickets === totalTickets

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

				<p className='flex items-center justify-center gap-0.5 absolute font-bold text-lg'>
					<span>{totalBet}</span>
					<TonIcon width={15} height={15} />
				</p>
			</div>

			<svg width={radius * 2} height={radius * 2}>
				{totalTickets && players && players.length > 0 ? (
					isSinglePlayer ? (
						<g>
							<circle
								cx={radius}
								cy={radius}
								r={radius}
								fill='hsl(200, 75%, 40%)'
								stroke='#1F2B39'
								strokeWidth='3'
							/>

							<text
								x={radius + radius * 0.7 * Math.cos(30)}
								y={radius + radius * 0.7 * Math.sin(30)}
								textAnchor='middle'
								fill='white'
								className='font-medium text-lg'
							>
								{players[0].name}
							</text>
						</g>
					) : (
						players.map((player, index) => {
							const angle =
								(player.tickets / totalTickets!) * 2 * Math.PI
							const startAngle = currentAngle
							const endAngle = currentAngle + angle
							const midAngle = startAngle + angle / 2

							const textX =
								radius + radius * 0.7 * Math.cos(midAngle)
							const textY =
								radius + radius * 0.7 * Math.sin(midAngle)

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
										className='font-medium text-[12px]'
									>
										{player.name ?? `Player ${index + 1}`}
									</text>
								</g>
							)
						})
					)
				) : (
					// Если нет игроков или totalTickets, рисуем синий круг
					<circle cx={radius} cy={radius} r={radius} fill='#0097E9' />
				)}
			</svg>
		</div>
	)
}
