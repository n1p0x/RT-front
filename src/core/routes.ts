import { ComponentType } from 'react'

import { DepositPage } from '@/pages/DepositPage'
import { MyGiftsPage } from '@/pages/MyGiftsPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { RoulettePage } from '@/pages/RoulettePage'

interface Route {
	path: string
	Component: ComponentType
	title?: string
	icon?: JSX.Element
}

export const ROUTE_DEPOSIT = '/deposit'
export const ROUTE_ROULETTE = '/roulette'
export const ROUTE_MY_GIFTS = '/my'
export const ROUTE_PROFILE = '/profile'

export const routes: Route[] = [
	{ path: ROUTE_DEPOSIT, Component: DepositPage },
	{ path: ROUTE_ROULETTE, Component: RoulettePage },
	{ path: ROUTE_MY_GIFTS, Component: MyGiftsPage },
	{ path: ROUTE_PROFILE, Component: ProfilePage },
]
