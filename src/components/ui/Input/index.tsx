import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	className?: string
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
	({ type, disabled, placeholder, className }, ref) => (
		<input
			type={type}
			disabled={disabled}
			placeholder={placeholder}
			ref={ref}
			className={twMerge(
				'h-10 w-full rounded-full py-2 bg-dark-blue-balance',
				className
			)}
		/>
	)
)
