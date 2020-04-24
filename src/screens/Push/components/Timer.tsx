import React from 'react'
import { IconLabelRow } from '../../../components/IconRow'
import { secondsToMinutesSeconds } from '../../../utils/time'

function Timer({ seconds }: { seconds: number }) {
  const time = secondsToMinutesSeconds(seconds)
  return <IconLabelRow label={time} icon="clock-outline"></IconLabelRow>
}

export { Timer }
