import axios, { CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
}

const axiosBase = axios.create(options)

axiosBase.interceptors.request.use(
	config => {
		if (config.initData) {
			config.headers['Authorization'] = `Tg ${config.initData}`
		}

		return config
	},
	error => error
)

axiosBase.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (error?.response?.status === 404) {
			originalRequest._isRetry = false
			return
		}

		throw error
	}
)

export { axiosBase }
