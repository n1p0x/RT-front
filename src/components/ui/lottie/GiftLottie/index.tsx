import lottie from 'lottie-web/build/player/lottie_light'
import { FC, useEffect, useRef, useState } from 'react'

interface Props {
	lottieUrl: string
}

export const GiftLottie: FC<Props> = ({ lottieUrl }) => {
	const [animationData, setAnimationData] = useState()
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const fetchLottieJson = async () => {
			const response = await fetch(lottieUrl)

			setAnimationData(await response.json())
		}

		fetchLottieJson()
	}, [])

	useEffect(() => {
		if (containerRef.current) {
			const animation = lottie.loadAnimation({
				name: lottieUrl,
				container: containerRef.current,
				renderer: 'svg',
				loop: false,
				autoplay: false,
				animationData,
				rendererSettings: {
					progressiveLoad: true,
				},
			})

			return () => animation.destroy()
		}
	}, [animationData])

	return (
		<div className='rounded-xl overflow-hidden'>
			<div
				ref={containerRef}
				className='w-[169px] h-[169px]'
				onMouseEnter={() => lottie.play(lottieUrl)}
				onMouseLeave={() => lottie.stop(lottieUrl)}
			/>
		</div>
	)
}
