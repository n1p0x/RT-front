import TonWeb from 'tonweb'

const httpApiUrl = import.meta.env.VITE_IS_TESTNET
	? 'https://testnet.toncenter.com/api/v2/jsonRPC'
	: 'https://toncenter.com/api/v2/jsonRPC'

const provider = new TonWeb.HttpProvider(httpApiUrl, {
	apiKey: import.meta.env.VITE_IS_TESTNET
		? import.meta.env.VITE_TONCENTER_API_KEY_TESTNET
		: import.meta.env.VITE_TONCENTER_API_KEY,
})

const tonweb = new TonWeb(provider)

export async function getWalletBalance(address: string): Promise<string> {
	const balance = await provider.getBalance(address)

	return tonweb.utils.fromNano(balance)
}
