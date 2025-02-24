import { useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ROUTE_DEPOSIT, routes } from '@/core/routes'
import { useAddUser } from '@/hooks/user/useAddUser'
import { useUser } from '@/hooks/user/useUser'
import { useTgData } from '@/hooks/useTgData'
import { Toaster } from 'react-hot-toast'
import { Footer } from './Footer'
import { Header } from './Header'

export function App() {
	const { userId, name, photoUrl, initData } = useTgData()
	const { isError: isUserError } = useUser(userId, initData)
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

			<Toaster
				position='top-left'
				toastOptions={{
					duration: 2000,
					style: {
						fontWeight: 'bold',
					},
					success: {
						iconTheme: {
							primary: '#171717',
							secondary: '#4AB7EF',
						},
						style: {
							background: '#4AB7EF',
						},
					},
					error: {
						duration: 1500,
						iconTheme: {
							primary: '#171717',
							secondary: '#FF005C',
						},
						style: {
							background: '#FF005C',
						},
					},
				}}
			/>

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
