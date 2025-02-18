import { FC, useEffect, useState } from 'react'
import Lottie from 'react-lottie'

interface Props {
	lottieUrl: string
}

export const GiftLottie: FC<Props> = ({ lottieUrl }) => {
	const [animationData, setAnimationData] = useState()

	useEffect(() => {
		const fetchLottieJson = async () => {
			const response = await fetch(lottieUrl)

			setAnimationData(await response.json())
		}

		fetchLottieJson()
	}, [])

	return (
		<div className='rounded-xl overflow-hidden'>
			<Lottie
				options={{
					loop: true,
					autoplay: true,
					animationData,
				}}
				width={169}
				height={169}
			/>
		</div>
	)
}
