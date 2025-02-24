import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Players } from '@/components/roulette/Players'
import { Spin } from '@/components/roulette/Spin'
import { Wheel } from '@/components/roulette/Wheel'
import { GiftIcon } from '@/components/ui/icons/GiftIcon'
import { TimerIcon } from '@/components/ui/icons/TimerIcon'
import { TonIcon } from '@/components/ui/icons/TonIcon'
import { IPlayer } from '@/types/roulette.type'

export function RoulettePage() {
	const [isWheelVisible, setIsWheelVisible] = useState<boolean>(true)
	const [leftTime, setLeftTime] = useState<number>(120)

	const total = 1000
	const players: IPlayer[] = [
		{ name: 'Игрок 1', chance: 0.55 },
		{ name: 'Игрок 2', chance: 0.05 },
		{ name: 'Игрок 3', chance: 0.1 },
		{ name: 'Игрок 4', chance: 0.1 },
		{ name: 'Игрок 5', chance: 0.1 },
		{ name: 'Игрок 6', chance: 0.1 },
	]

	const variants = {
		initial: { opacity: 0, scale: 0.99 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.95 },
	}

	useEffect(() => {
		const interval = setInterval(
			() => setLeftTime(prev => (prev > 0 ? prev - 1 : 0)),
			1000
		)

		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		if (leftTime === 0) setIsWheelVisible(false)
	}, [leftTime])

	return (
		<div className='flex flex-col items-center gap-1 mt-2 mb-24 overflow-hidden'>
			<div className='grid grid-cols-3 justify-center gap-3 font-semibold px-5'>
				<p className='flex items-center justify-center gap-1 p-2 bg-dark-gray rounded-3xl'>
					<span>{`${Math.floor(leftTime / 60)
						.toString()
						.padStart(2, '0')}:${Math.floor(leftTime % 60)
						.toString()
						.padStart(2, '0')}`}</span>

					<TimerIcon />
				</p>

				<p className='flex items-center justify-center gap-1 p-2 bg-dark-gray rounded-3xl'>
					<span>8 / 100</span> <GiftIcon color='#fff' />
				</p>

				<p className='flex items-center justify-center gap-1 p-2 bg-dark-gray rounded-3xl'>
					<span>{total}</span> <TonIcon width={16} height={16} />
				</p>
			</div>

			<div className='relative flex justify-center items-center h-[300px] max-h-[300px] mb-2'>
				<AnimatePresence
					mode='wait'
					onExitComplete={() =>
						setIsWheelVisible(prev => (prev ? false : true))
					}
				>
					{isWheelVisible ? (
						<motion.div
							key='wheel'
							variants={variants}
							initial='initial'
							animate='animate'
							exit='exit'
							transition={{ duration: 0.5 }}
							className='absolute'
						>
							<Wheel total={total} players={players} />
						</motion.div>
					) : (
						<motion.div
							key='spin'
							variants={variants}
							initial='initial'
							animate='animate'
							exit='exit'
							transition={{ duration: 0.5 }}
							className='absolute'
						>
							<Spin players={players} />
						</motion.div>
					)}
				</AnimatePresence>

				{/* <button
					onClick={() => setIsWheelVisible(prev => !prev)}
					className='absolute bottom-0 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
				>
					Переключить
				</button> */}
			</div>

			<Players players={players} />
		</div>
	)
}
