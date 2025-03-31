import {
    hapticFeedbackImpactOccurred,
    shareURL,
} from '@telegram-apps/sdk-react'
import { FC } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/Button'
import { CopyIcon } from '@/components/ui/icons/CopyIcon'
import { useTgData } from '@/hooks/useTgData'

export const Share: FC = () => {
	const { userId } = useTgData()

	const onInviteFriendClick = () => {
		if (hapticFeedbackImpactOccurred.isAvailable()) {
			hapticFeedbackImpactOccurred('soft')
		}

		shareURL(
			'',
			`Text!\n\n${import.meta.env.VITE_TMA_URL}?startapp=${userId}`
		)
	}

	const onCopyClick = async () => {
		if (hapticFeedbackImpactOccurred.isAvailable()) {
			hapticFeedbackImpactOccurred('soft')
		}

		await navigator.clipboard.writeText(
			`${import.meta.env.VITE_TMA_URL}?startapp=${userId}`
		)

		toast.success('Copied')
	}

	return (
		<div className='flex items-center gap-3 w-full'>
			<Button
				className='px-2.5 py-3 bg-light-blue rounded-xl text-lg font-semibold w-full'
				onClick={onInviteFriendClick}
			>
				Invite
			</Button>

			<Button
				className='p-3 border border-solid border-white/10 hover:bg-dark-gray rounded-xl'
				onClick={onCopyClick}
			>
				<CopyIcon />
			</Button>
		</div>
	)
}
