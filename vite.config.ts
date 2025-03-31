import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
	base: '/',
	plugins: [
		react(),
		tsconfigPaths(),
		nodePolyfills(),
	],
	server: { host: true },
})
