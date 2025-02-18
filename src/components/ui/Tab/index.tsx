import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import { Button } from '../Button'

interface Props {
	tab: string
	value: string
	isActive: boolean
}

export const Tab: FC<Props> = ({ tab, value, isActive }) => {
	const [_, setSearchParams] = useSearchParams()

	return (
		<Button
			className={twMerge(
				'flex items-center justify-center px-1 py-2 cursor-pointer font-medium text-gray rounded-lg',
				isActive && 'text-light-blue bg-light-blue/15'
			)}
			onClick={() => setSearchParams({ tab: value })}
		>
			{tab}
		</Button>
	)
}
