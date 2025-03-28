import { FC, useEffect, useRef } from 'react'

import { IUniquePlayer, IWinner } from '@/types/game.type'

interface Props {
	isSpinning: boolean
	totalTickets: number
	players: IUniquePlayer[]
	winner?: IWinner
}

export const Spin: FC<Props> = ({
	isSpinning: isSpin,
	totalTickets,
	players,
	winner,
}) => {
	const tickerRef = useRef<HTMLDivElement>(null)
	const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

	// Вычисляем шанс и вес
	const weightedPlayers = players.map(player => ({
		...player,
		chance: (player.tickets / totalTickets) * 100,
		weight: Math.max(1, Math.floor(player.tickets / 10)),
	}))

	// Создаем массив контента
	const tickerContent = weightedPlayers
		.map(player => Array(player.weight).fill(player.name))
		.flat()

	useEffect(() => {
		const ticker = tickerRef.current
		if (!ticker) return

		// Очистка предыдущего таймера
		if (animationTimeoutRef.current) {
			clearTimeout(animationTimeoutRef.current)
		}

		if (isSpin && winner) {
			// Находим индекс победителя в массиве контента
			const winnerName =
				players.find(p => p.userId === winner.userId)?.name || ''
			const winnerIndex = tickerContent.findIndex(
				name => name === winnerName
			)

			if (winnerIndex === -1) return

			// Запускаем начальную анимацию
			ticker.style.animation = 'ticker 10s linear 1'

			// Через 10 секунд останавливаем на победителе
			animationTimeoutRef.current = setTimeout(() => {
				const tickerWidth = ticker.offsetWidth
				const containerWidth = ticker.parentElement?.offsetWidth || 0
				const itemWidth = tickerWidth / tickerContent.length

				// Вычисляем позицию для центрирования победителя
				const targetPosition =
					winnerIndex * itemWidth + itemWidth / 2 - containerWidth / 2

				// Останавливаем анимацию и устанавливаем точную позицию
				ticker.style.animation = 'none'
				ticker.style.transform = `translateX(-${targetPosition}px)`
			}, 10000) // 10 секунд
		} else if (isSpin) {
			// Обычная бесконечная анимация если нет победителя
			ticker.style.animation = 'ticker 20s linear infinite'
		} else {
			// Сброс при остановке
			ticker.style.animation = 'none'
			ticker.style.transform = 'translateX(0)'
		}

		// Очистка при размонтировании
		return () => {
			if (animationTimeoutRef.current) {
				clearTimeout(animationTimeoutRef.current)
			}
		}
	}, [isSpin, winner, tickerContent.length, players])

	return (
		<div className='w-full overflow-hidden bg-gray-800 rounded-lg'>
			<div
				ref={tickerRef}
				className='flex whitespace-nowrap text-white'
				style={{ willChange: 'transform' }}
			>
				{tickerContent.map((name, index) => (
					<span
						key={`${name}-${index}`}
						className='px-4 py-2 text-lg font-medium mx-2'
					>
						{name}
					</span>
				))}
				{/* Дублируем контент для плавности начальной анимации */}
				{tickerContent.map((name, index) => (
					<span
						key={`duplicate-${name}-${index}`}
						className='px-4 py-2 text-lg font-medium mx-2'
					>
						{name}
					</span>
				))}
			</div>

			{/* Список игроков */}
			<div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{weightedPlayers.map(player => (
					<div
						key={player.userId}
						className={`p-3 rounded-md ${
							player.userId === winner?.userId
								? 'bg-green-600'
								: 'bg-gray-700'
						}`}
					>
						<p className='text-white font-semibold'>
							{player.name}
						</p>
						<p className='text-gray-300'>
							Tickets: {player.tickets} | Chance:{' '}
							{player.chance.toFixed(2)}%
						</p>
					</div>
				))}
			</div>
		</div>
	)
}
