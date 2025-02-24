import { motion } from 'framer-motion'
import { FC, useState } from 'react'

import { IPlayer } from '@/types/roulette.type'

interface Props {
	players: IPlayer[]
}

export const RunningLine: FC<Props> = ({ players }) => {
	const [isRunning, setIsRunning] = useState(false)

	const generateParticipants = () => {
		const totalSlots = 100
		let result: IPlayer[] = []
		players.forEach(player => {
			const slots = Math.round(player.chance * totalSlots)
			result = result.concat(Array(slots).fill(player))
		})

		return result
	}

	const participants = generateParticipants()

	const handleStart = () => {
		setIsRunning(true)

		setTimeout(() => {
			const randomIndex = Math.floor(Math.random() * participants.length)
			console.log(randomIndex)

			setIsRunning(false)
		}, 2000)
	}

	return (
		<motion.div className='flex flex-col items-center'>
			<span className='text-2xl font-bold mb-4'>Бегущая строка</span>

			<button
				onClick={handleStart}
				disabled={isRunning}
				className={`px-4 py-2 bg-blue-500 text-white rounded h-10 w-10 ${
					isRunning
						? 'opacity-50 cursor-not-allowed'
						: 'hover:bg-blue-600'
				}`}
			>
				Старт
			</button>

			<div className='overflow-hidden w-full whitespace-nowrap border border-gray-300 p-2 mt-4'>
				<div
					className={`inline-block ${
						isRunning ? 'animate-[run_5s_linear_infinite]' : ''
					}`}
				>
					{participants.map((p, index) => (
						<span key={index} className='mr-5 text-lg'>
							{p.name}
						</span>
					))}

					{participants.map((p, index) => (
						<span key={`dup-${index}`} className='mr-5 text-lg'>
							{p.name}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	)
}
