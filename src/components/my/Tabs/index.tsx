import { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Tab } from '@/components/ui/Tab'

export const Tabs: FC = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const tab = searchParams.get('tab')

	useEffect(() => {
		if (searchParams.get('tab') === null) setSearchParams({ tab: 'gifts' })
	}, [searchParams, setSearchParams])

	return (
		<div className='grid grid-cols-2 items-center justify-center gap-1 p-2 bg-blue rounded-xl'>
			<Tab tab='Gifts' value='gifts' isActive={tab === 'gifts'} />

			<Tab tab='NFTs' value='nfts' isActive={tab === 'nfts'} />
		</div>
	)
}
