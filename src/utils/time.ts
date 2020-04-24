function secondsToMinutesSeconds(seconds: number): string {
  if (seconds < 60) return seconds.toString()

  const minutes = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0')

  const rSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0')

  return `${minutes}:${rSeconds}`
}

export { secondsToMinutesSeconds }
