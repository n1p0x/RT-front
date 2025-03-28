export function UserIcon({ width, height }: { width: number; height: number }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			fill='none'
			viewBox='0 0 16 16'
		>
			<path
				fill='currentColor'
				d='M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 12a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v3h12v-3Z'
			/>
		</svg>
	)
}
