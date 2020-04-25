import React from 'react'
import { Timer, PushButton, Pusher, InputPusher } from '.'
import { useState, useEffect } from 'react'
import { useTimer } from 'use-timer'

function PusherSteps() {}

PusherSteps.Timer = ({
  onEnd,
  onSkip,
  restTime,
}: {
  onSkip: () => void
  onEnd: () => void
  restTime: number
}) => {
  const { reset, start, time } = useTimer({
    timerType: 'DECREMENTAL',
    initialTime: restTime,
    onTimeOver: onEnd,
    endTime: 0,
  })

  useEffect(() => {
    reset()
    start()
  }, [])

  return (
    <>
      <Timer seconds={time} />
      <PushButton icon="arrowhead-right" label="SKIP" onPress={onSkip} />
    </>
  )
}

PusherSteps.Pusher = ({
  onDone,
  noOfPushUps,
}: {
  onDone: () => void
  noOfPushUps: number
}) => (
  <>
    <Pusher noOfPushUps={noOfPushUps} />
    <PushButton icon="checkmark" label="DONE" onPress={onDone} />
  </>
)

PusherSteps.InputPusher = ({
  onDone,
  noOfPushUps,
}: {
  onDone: (noOfPushUps: number) => void
  noOfPushUps: number
}) => {
  const [totalPushups, setTotalPushups] = useState(noOfPushUps + '+')
  const [tooltip, setTooltip] = useState<undefined | string>()

  const onFinish = () => {
    if (noOfPushUps + '+' === totalPushups) {
      setTooltip('Input total pushups!')
      return
    }

    onDone(Number(totalPushups))
  }

  return (
    <>
      <InputPusher
        value={totalPushups}
        onChangeText={(nextValue) => {
          setTotalPushups(nextValue)
        }}
        tooltip={tooltip}
      />
      <PushButton icon="flag-outline" label="FINISH" onPress={onFinish} />
    </>
  )
}

export { PusherSteps }
