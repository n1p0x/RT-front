import {
	AnimatePresence,
	motion,
	useAnimate,
	useDragControls,
	useMotionValue,
} from 'framer-motion'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { IModal } from '@/types/modal.type'

interface Props extends IModal {
	children: React.ReactNode
	className?: string
}

export const Modal: FC<Props> = ({
	children,
	className,
	modalOpen,
	closeModal,
}) => {
	const [scope, animate] = useAnimate()

	const y = useMotionValue(0)
	const controls = useDragControls()

	const handleClose = async () => {
		animate(scope.current, {
			opacity: [1, 0],
		})

		const yStart = typeof y.get() === 'number' ? y.get() : 0

		await animate('#drawer', {
			y: [yStart, 200],
		})

		closeModal()
	}

	return (
		<AnimatePresence>
			{modalOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					onClick={handleClose}
					ref={scope}
					className='fixed inset-0 z-[999]'
				>
					<motion.div
						id='drawer'
						className={twMerge(
							'flex flex-col fixed bottom-0 left-0 right-0 top-auto max-h-[450px] w-full pt-5 gap-3 rounded-tl-3xl rounded-tr-3xl border border-white/10 bg-dark-blue',
							className
						)}
						onClick={e => e.stopPropagation()}
						initial={{ y: '100%' }}
						animate={{ y: '0%' }}
						style={{ y }}
						transition={{ ease: 'easeInOut' }}
						drag='y'
						dragControls={controls}
						dragListener={false}
						dragConstraints={{
							top: 0,
							bottom: 0,
						}}
						dragElastic={{
							top: 0,
							bottom: 0.5,
						}}
						onDragEnd={() => {
							if (y.get() >= 20) handleClose()
						}}
					>
						<div
							className='absolute top-0 left-0 right-0 inline-flex justify-center p-3 cursor-grab active:cursor-grabbing'
							onPointerDown={e => {
								controls.start(e)
							}}
						>
							<button className='h-1 w-10 touch-none rounded-full bg-white' />
						</div>

						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
