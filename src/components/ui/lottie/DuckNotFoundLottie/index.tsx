import Lottie from 'react-lottie'

import animationData from '@/assets/sticker/duck.json'

export function DuckNotFoundLottie() {
	return (
		<Lottie
			options={{
				loop: true,
				autoplay: true,
				animationData,
			}}
			width={156}
			height={156}
		/>
	)
}
