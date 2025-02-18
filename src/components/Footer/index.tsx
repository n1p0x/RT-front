import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import { ROUTE_DEPOSIT, ROUTE_MY_GIFTS, ROUTE_ROULETTE } from '@/core/routes'
import { MyNftsIcon } from '../ui/icons/footer/MyNftsIcon'
import { RouletteIcon } from '../ui/icons/footer/RouletteIcon'
import { PlusIcon } from '../ui/icons/PlusIcon'

export const Footer: FC = () => {
	const location = useLocation()

	const isActive = (route: string) => !!route.includes(location.pathname)

	return (
		<footer className='flex items-center justify-between w-full h-20 max-h-20 px-5 pt-2 pb-3 fixed bottom-0 bg-blue font-medium'>
			<Link
				to={ROUTE_DEPOSIT}
				className={twMerge(
					'flex flex-col items-center pt-2 w-28 min-w-24 cursor-pointer rounded-lg',
					isActive(ROUTE_DEPOSIT) &&
						'text-light-blue bg-light-blue/15'
				)}
			>
				<PlusIcon
					color={isActive(ROUTE_DEPOSIT) ? '#0097E9' : '#fff'}
				/>

				<span>Deposit</span>
			</Link>

			<Link
				to={ROUTE_ROULETTE}
				className={twMerge(
					'flex flex-col items-center pt-2 w-28 min-w-24 cursor-pointer rounded-lg',
					isActive(ROUTE_ROULETTE) &&
						'text-light-blue bg-light-blue/15'
				)}
			>
				<RouletteIcon isActive={isActive(ROUTE_ROULETTE)} />

				<span>Roulette</span>
			</Link>

			<Link
				to={ROUTE_MY_GIFTS}
				className={twMerge(
					'flex flex-col items-center pt-2 w-28 min-w-24 cursor-pointer rounded-lg',
					isActive(ROUTE_MY_GIFTS) &&
						'text-light-blue bg-light-blue/15'
				)}
			>
				<MyNftsIcon isActive={isActive(ROUTE_MY_GIFTS)} />

				<span>My Gifts</span>
			</Link>
		</footer>
	)
}
