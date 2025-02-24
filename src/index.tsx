import { retrieveLaunchParams } from '@telegram-apps/sdk-react'
import { createRoot } from 'react-dom/client'

import { Root } from '@/components/Root.tsx'
import init from '@/core/init.ts'

import './index.css'

import './mockEnv.ts'

const root = createRoot(document.getElementById('root')!)

try {
	init(
		retrieveLaunchParams().tgWebAppStartParam === 'debug' ||
			import.meta.env.DEV
	)

	root.render(
		// <StrictMode>
		<Root />
		// </StrictMode>
	)
} catch (e) {
	console.log(e)
}
