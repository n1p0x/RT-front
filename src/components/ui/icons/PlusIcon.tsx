export function PlusIcon({ color }: { color: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			width='20'
			height='20'
			viewBox='0 0 20 20'
		>
			<path
				d='M10.167.25C4.79.25.417 4.624.417 10s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S15.543.25 10.167.25Zm3.75 10.5h-3v3a.75.75 0 0 1-1.5 0v-3h-3a.75.75 0 1 1 0-1.5h3v-3a.75.75 0 0 1 1.5 0v3h3a.75.75 0 0 1 0 1.5Z'
				fill={color}
			/>
		</svg>
	)
}
