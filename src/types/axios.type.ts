import 'axios'

declare module 'axios' {
	export interface AxiosRequestConfig {
		initData?: string
	}
}
