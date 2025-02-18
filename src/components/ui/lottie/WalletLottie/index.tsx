import Lottie from 'react-lottie'

import animationData from '@/assets/sticker/wallet.json'

export function WalletLottie() {
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
