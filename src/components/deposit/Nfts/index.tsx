import {
    useIsConnectionRestored,
    useTonAddress,
    useTonConnectUI,
    useTonWallet,
} from '@tonconnect/ui-react'
import { FC, useEffect, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Dropdown } from '@/components/ui/Dropdown'
import { Loading } from '@/components/ui/Loading'
import { DuckNotFoundLottie } from '@/components/ui/lottie/DuckNotFoundLottie'
import { WalletLottie } from '@/components/ui/lottie/WalletLottie'
import { useTgData } from '@/hooks/useTgData'
import { useAddNftDeposit } from '@/pages/DepositPage/hooks/useAddNftDeposit'
import { useNfts } from '@/pages/DepositPage/hooks/useNfts'
import { GiftService } from '@/service/gift.service'
import { useNftsStore } from '@/store/useNftsStore'
import toast from 'react-hot-toast'
import { Nft } from '../Nft'

export const Nfts: FC = () => {
	const [enabled, setEnabled] = useState<boolean>(false)

    const [tonConnectUI] = useTonConnectUI()
	const wallet = useTonWallet()
	const address = useTonAddress(true)
	const isConnectionRestored = useIsConnectionRestored()

	const nfts = useNftsStore(state => state.nfts)
	const setNfts = useNftsStore(state => state.setNfts)

	const { userId, initData } = useTgData()
    const { addNftDeposit, isPending, isSuccess, isError: isDepositError } = useAddNftDeposit(
            initData
        )
	const { data, isFetching, isError, refetch } = useNfts(
		address,
		initData,
		enabled && !!wallet && isConnectionRestored
	)

    const onDepositClick = async (nftAddress: string) => {
        if (!wallet || !isConnectionRestored) return

        try {
            await tonConnectUI.sendTransaction(
                GiftService.createNftTx(wallet.account.address, nftAddress)
            )

            addNftDeposit({
                userId,
                sender: address,
                address: nftAddress,
            })
        } catch (e: any) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (isSuccess) toast.success("success")
    }, [isSuccess])

    useEffect(() => {
        if (isDepositError) toast.success("error")
    }, [isDepositError])

	useEffect(() => {
		if (!nfts) setEnabled(true)
	}, [nfts])

	useEffect(() => {
		if (data) setNfts(data.nfts)
	}, [data])

	return wallet && isConnectionRestored ? (
		<>
			<div className='flex flex-col items-center gap-2 my-2'>
				<Dropdown title='Collection' />

				<Button
					className='bg-light-blue w-full rounded-xl px-3 py-3 font-semibold'
					onClick={() => refetch()}
				>
					Refresh
				</Button>
			</div>

			{isFetching ? (
				<Loading className='text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
			) : isError ? (
				<div className='flex flex-col items-center gap-2 w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<DuckNotFoundLottie />

					<span className='text-sm font-semibold text-gray'>
						NFTs not found
					</span>
				</div>
			) : nfts ? (
				<div className='grid grid-cols-2 gap-2 items-center justify-center'>
					{nfts.map((nft, index) => (
						<Nft key={index} {...nft} isPending={isPending} onClick={() => onDepositClick(nft.address)} />
					))}
				</div>
			) : (
				<></>
			)}
		</>
	) : (
		<div className='flex flex-col items-center gap-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<WalletLottie />

			<span className='font-bold text-xl'>Connect your wallet</span>
		</div>
	)
}
