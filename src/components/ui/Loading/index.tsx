import CircularProgress from '@mui/material/CircularProgress'
import { FC } from 'react'

interface Props {
	size?: number
	className?: string
}

export const Loading: FC<Props> = ({ size, className }) => {
	return (
		<div className={className}>
			<CircularProgress size={size} color='inherit' />
		</div>
	)
}
