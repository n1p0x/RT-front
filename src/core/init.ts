import {
	backButton,
	initData,
	init as initSDK,
	mainButton,
	miniApp,
	setDebug,
	viewport,
} from '@telegram-apps/sdk-react'

export default function init(debug: boolean): void {
	setDebug(debug)

	initSDK()

	if (!backButton.isSupported() || !miniApp.isSupported()) {
		throw new Error('ERR_NOT_SUPPORTED')
	}

	backButton.mount()
	mainButton.mount()
	initData.restore()

	void miniApp
		.mount()
		.catch(e =>
			console.error('Something went wrong mounting the miniApp', e)
		)
		.then(() => {
			miniApp.bindCssVars()
		})

	void viewport
		.mount()
		.catch(e =>
			console.error('Something went wrong mounting the viewport', e)
		)
		.then(() => {
			viewport.bindCssVars()
		})
}
