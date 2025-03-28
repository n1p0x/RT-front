import { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Tab } from '@/components/ui/Tab'

export const Tabs: FC = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const tab = searchParams.get('tab')

	useEffect(() => {
		if (searchParams.get('tab') === null) setSearchParams({ tab: 'bet' })
	}, [searchParams, setSearchParams])

	return (
		<div className='grid grid-cols-2 items-center justify-center gap-1 p-2 bg-dark-blue rounded-xl'>
			<Tab tab='Bet' value='bet' isActive={tab === 'bet'} />

			<Tab
				tab='Withdraw'
				value='withdraw'
				isActive={tab === 'withdraw'}
			/>
		</div>
	)
}
