import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { GiftIcon } from '@/components/ui/icons/GiftIcon'
import { PlusIcon } from '@/components/ui/icons/PlusIcon'
import { RouletteIcon } from '@/components/ui/icons/RouletteIcon'
import { ROUTE_DEPOSIT, ROUTE_MY_GIFTS, ROUTE_ROULETTE } from '@/core/routes'
import { Tab } from '../Tab'

export const Footer: FC = () => {
	const location = useLocation()

	const isActive = (route: string) => !!route.includes(location.pathname)

	return (
		<footer className='flex items-center justify-between w-full h-20 max-h-20 px-5 pt-2 pb-3 fixed bottom-0 bg-dark-blue font-medium'>
			<Tab route={ROUTE_DEPOSIT} isActive={isActive(ROUTE_DEPOSIT)}>
				<PlusIcon
					color={isActive(ROUTE_DEPOSIT) ? '#0097E9' : '#fff'}
				/>
				<span>Deposit</span>
			</Tab>

			<Tab route={ROUTE_ROULETTE} isActive={isActive(ROUTE_ROULETTE)}>
				<RouletteIcon isActive={isActive(ROUTE_ROULETTE)} />
				<span>Roulette</span>
			</Tab>

			<Tab route={ROUTE_MY_GIFTS} isActive={isActive(ROUTE_MY_GIFTS)}>
				<GiftIcon
					color={isActive(ROUTE_MY_GIFTS) ? '#0097E9' : '#fff'}
				/>
				<span>My Gifts</span>
			</Tab>
		</footer>
	)
}
