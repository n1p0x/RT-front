import { useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ROUTE_DEPOSIT, routes } from '@/core/routes'
import { useAddUser } from '@/hooks/user/useAddUser'
import { useUser } from '@/hooks/user/useUser'
import { useTgData } from '@/hooks/useTgData'
import { Footer } from './Footer'
import { Header } from './Header'

export function App() {
	const { userId, name, photoUrl, initData } = useTgData()
	const { data, isError: isUserError } = useUser(userId, initData)
	const { addUser, isError } = useAddUser(userId, initData)

	useEffect(() => {
		if (isUserError) {
			addUser({
				userId,
				name,
				photoUrl,
			})
		}
	}, [isUserError])

	useEffect(() => {
		if (isError) console.log('error')
	}, [isError])

	return (
		<>
			<Header />

			<HashRouter>
				<Routes>
					{routes.map(route => (
						<Route key={route.path} {...route} />
					))}

					<Route path='*' element={<Navigate to={ROUTE_DEPOSIT} />} />
				</Routes>

				<Footer />
			</HashRouter>
		</>
	)
}
