import { FC, useState } from 'react'

import { ArrowsIcon } from '@/components/ui/icons/ArrowsIcon'

interface Props {
	title: string
}

export const Dropdown: FC<Props> = ({ title }) => {
	const [current, setCurrent] = useState<string>('All')
	const [show, setShow] = useState<boolean>(false)

	const onOptionClick = (option: string) => {
		setCurrent(option)

		setShow(false)
	}

	return (
		<div className='relative w-full'>
			<button
				className='flex items-center justify-between w-full bg-dark-gray rounded-xl px-3 py-1'
				onClick={() => setShow(prev => !prev)}
			>
				<div className='flex flex-col items-start'>
					<span className='text-gray'>{title}</span>
					<span>{current}</span>
				</div>

				<ArrowsIcon />
			</button>

			{show && (
				<div className='w-full bg-dark-gray rounded-b-xl absolute top-14 z-50'>
					<div className='flex flex-col items-center rounded-xl'>
						<span
							className='flex items-center px-3 py-1 w-full font-bold cursor-pointer rounded-xl hover:bg-gray/50 transition-colors duration-300'
							onClick={() => onOptionClick('All')}
						>
							All
						</span>

						<span
							className='flex items-center px-3 py-1 w-full font-bold cursor-pointer rounded-xl hover:bg-gray/50 transition-colors duration-300'
							onClick={() => onOptionClick('Plush Pepe')}
						>
							Plush Pepe
						</span>
					</div>
				</div>
			)}
		</div>
	)
}
