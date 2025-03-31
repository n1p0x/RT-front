import {
    isTMA,
    LaunchParams,
    mockTelegramEnv,
    retrieveLaunchParams,
} from '@telegram-apps/sdk-react'

if (import.meta.env.DEV) {
	await (async () => {
		if (isTMA()) {
			return
		}

		let lp: LaunchParams | undefined
		try {
			lp = retrieveLaunchParams()
		} catch (e) {
			const initDataRaw = new URLSearchParams([
				[
					'user',
					JSON.stringify({
						id: 6165565929,
						first_name: 'Andrew',
						last_name: 'Rogue',
						username: 'rogue',
						language_code: 'en',
						is_premium: true,
						allows_write_to_pm: true,
					}),
				],
				[
					'hash',
					'9a41a25878a43ec968d63d724b31da98e794f477cd999ade62f581c6d74cc4ec',
				],
				['auth_date', '1716922846'],
				['start_param', 'debug'],
				['chat_type', 'sender'],
				['chat_instance', '8428209589180549439'],
				['signature', '6fbdaab833d39f54518bd5c3eb3f511d035e68cb'],
			]).toString()

			mockTelegramEnv({
				launchParams: {
					tgWebAppThemeParams: {
						accentTextColor: '#6ab2f2',
						bgColor: '#17212b',
						buttonColor: '#5288c1',
						buttonTextColor: '#ffffff',
						destructiveTextColor: '#ec3942',
						headerBgColor: '#17212b',
						hintColor: '#708499',
						linkColor: '#6ab3f3',
						secondaryBgColor: '#232e3c',
						sectionBgColor: '#17212b',
						sectionHeaderTextColor: '#6ab3f3',
						subtitleTextColor: '#708499',
						textColor: '#f5f5f5',
					},
					tgWebAppStartParam: 'debug',
					tgWebAppData: initDataRaw.toString(),
					tgWebAppVersion: '8',
					tgWebAppPlatform: 'tdesktop',
				},
			})
		}
        console.log(lp)
	})()
}
