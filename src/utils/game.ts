import { ISpinPlayer, IUniquePlayer, IWinner } from '@/types/game.type'

function shuffle<T>(array: any): T[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

export function getSpinContent(
	players: IUniquePlayer[],
	winner: IWinner,
	totalTickets: number,
	size: number = 100
): ISpinPlayer[] {
	const result = []

	for (let i = 0; i < size; i++) {
		const random = Math.random() * totalTickets
		let sum = 0

		const selectedIndex = players.findIndex(player => {
			sum += player.tickets
			return random <= sum
		})
		const spinPlayer: ISpinPlayer = {
			color: `hsl(${50 + (selectedIndex + 1) * 150}, 100%, 40%)`,
			photoUrl: players[selectedIndex].photoUrl,
		}

		result.push(spinPlayer)
	}

	const shuffledContent = shuffle<ISpinPlayer>(result)

	const winnerIndex = players.findIndex(
		player => player.userId === winner.userId
	)
	shuffledContent[size - 6] = {
		color: `hsl(${50 + (winnerIndex + 1) * 150}, 100%, 40%)`,
		photoUrl: players[winnerIndex].photoUrl,
	}

	return shuffledContent
}
