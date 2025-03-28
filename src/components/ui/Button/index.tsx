import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	className?: string
	children: React.ReactNode
}

export const Button: FC<Props> = ({
	className,
	disabled,
	children,
	onClick,
}) => {
	return (
		<button
			className={twMerge(
				'inline-flex items-center justify-center cursor-pointer disabled:opacity-60 hover:bg-light-blue/20 rounded-xl transition-colors duration-300',
				disabled && 'cursor-default',
				className
			)}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
