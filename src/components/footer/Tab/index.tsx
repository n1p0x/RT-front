import { FC } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface Props {
	route: string
	isActive: boolean
	children: React.ReactNode
}

export const Tab: FC<Props> = ({ route, isActive, children }) => {
	return (
		<Link
			to={route}
			className={twMerge(
				'flex flex-col items-center pt-2 w-28 min-w-24 cursor-pointer rounded-lg hover:bg-light-blue/15 transition-colors duration-200',
				isActive && 'text-light-blue bg-light-blue/15'
			)}
		>
			{children}
		</Link>
	)
}
