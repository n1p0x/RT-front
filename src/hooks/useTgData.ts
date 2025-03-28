import {
	initDataUser,
	retrieveLaunchParams,
	retrieveRawInitData,
	useSignal,
} from '@telegram-apps/sdk-react'

export function useTgData(): {
	userId: number
	username?: string
	name?: string
	photoUrl?: string
	startParam?: string
	initData?: string
} {
	const userInitData = useSignal(initDataUser)
	const { tgWebAppStartParam } = retrieveLaunchParams()
	const initData = retrieveRawInitData()

	return {
		// @ts-ignore
		userId: userInitData?.id,
		username: userInitData?.username,
		name: userInitData?.first_name,
		photoUrl: userInitData?.photo_url,
		startParam: tgWebAppStartParam,
		initData,
	}
}
