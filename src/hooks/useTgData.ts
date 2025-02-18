import {
	initDataUser,
	retrieveRawInitData,
	useSignal,
} from '@telegram-apps/sdk-react'

export function useTgData(): {
	userId: number
	name?: string
	photoUrl?: string
	initData?: string
} {
	const userInitData = useSignal(initDataUser)
	const initData = retrieveRawInitData()

	return {
		// @ts-ignore
		userId: userInitData?.id,
		name: userInitData?.first_name,
		photoUrl: userInitData?.photo_url,
		initData,
	}
}
