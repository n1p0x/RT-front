import lottie from 'lottie-web/build/player/lottie_light'
import { useEffect, useRef } from 'react'

export function WalletLottie() {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (containerRef.current) {
			const animation = lottie.loadAnimation({
				container: containerRef.current,
				renderer: 'svg',
				loop: true,
				path: '/sticker/wallet.json',
			})

			return () => animation.destroy()
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className='flex items-center justify-center w-[156px] h-[156px]'
		/>
	)
}
