import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react'

import { App } from './App'
import { ErrorBoundary } from './ErrorBoundary'

function ErrorBoundaryError({ error }: { error: unknown }) {
	return (
		<div>
			<p>An unhandled error occurred:</p>
			<blockquote>
				<code>
					{error instanceof Error
						? error.message
						: typeof error === 'string'
						? error
						: JSON.stringify(error)}
				</code>
			</blockquote>
		</div>
	)
}

export function Root() {
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: 0,
			},
		},
	})

	return (
		<ErrorBoundary fallback={ErrorBoundaryError}>
			<TonConnectUIProvider
				manifestUrl='https://raw.githubusercontent.com/Kkkasum/lizarts-tonconnect/main/manifest.json'
				uiPreferences={{ theme: THEME.DARK }}
			>
				<QueryClientProvider client={client}>
					<App />
				</QueryClientProvider>
			</TonConnectUIProvider>
		</ErrorBoundary>
	)
}
