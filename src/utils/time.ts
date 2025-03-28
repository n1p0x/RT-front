export function getLeftTime(startTime: Date | string, end: number): number {
	const startTimeDate =
		typeof startTime === 'string' ? new Date(startTime) : startTime

	const now = new Date()
	const targetDate = new Date(startTimeDate.getTime() + end)

	const leftTime = (targetDate.getTime() - now.getTime()) / 1000

	return leftTime > 0 ? leftTime : 0
}
