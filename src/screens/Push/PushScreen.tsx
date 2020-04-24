import React, { useRef, useEffect, useState } from 'react'
import { Layout, Text, Button, Icon } from '@ui-kitten/components'
import { View } from 'react-native'
import { useTimer } from 'use-timer'

const NextButton = ({
  icon,
  label,
  onPress,
}: {
  icon: string
  label: string
  onPress: () => void
}) => {
  const CIcon = (props: any) => <Icon {...props} name={icon} />
  return (
    <Button
      style={{ marginHorizontal: 40 }}
      accessoryRight={CIcon}
      onPress={onPress}
      appearance="outline"
      size="giant"
      status="success"
    >
      {label}
    </Button>
  )
}

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

const Timer = ({ time }: { time: number }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          paddingRight: 5,
          marginRight: 40,
        }}
      >
        <Icon
          style={{ height: 80, width: 80 }}
          name="clock-outline"
          fill="white"
        />
      </View>

      <Text style={{ flex: 1, paddingLeft: 5, marginLeft: -40 }} category="h1">
        {secondsToMinutesSeconds(time)}
      </Text>
    </View>
  )
}

const Pusher = ({ noOfPushups }: { noOfPushups: number }) => {
  const ref = useRef<Icon<object>>(null)

  useEffect(() => {
    const onDone = () => {
      setTimeout(() => {
        ref.current && ref.current.startAnimation(onDone)
      }, 1500)
    }
    ref.current && ref.current.startAnimation(onDone)
  }, [])

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          paddingRight: 5,
          marginRight: 40,
        }}
      >
        <Icon
          ref={ref}
          style={{ height: 80, width: 80 }}
          name="arrowhead-down"
          fill="white"
          animationConfig={{ cycles: 1 }}
          animation="pulse"
        />
      </View>

      <Text style={{ flex: 1, paddingLeft: 5, marginLeft: -40 }} category="h1">
        {noOfPushups}
      </Text>
    </View>
  )
}

export function PushScreen() {
  const [noOfPushUps, setNoOfPushUps] = useState(20)
  const { time, start, pause, reset, isRunning } = useTimer({
    initialTime: 100,
    timerType: 'DECREMENTAL',
    endTime: 0,
  })

  const onButtonPress = () => {
    reset()
  }

  useEffect(() => {
    start()
  }, [])

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 20,
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <Text category="h1">Push</Text>

        <Text category="h5" appearance="hint">
          20 / 100 completed
        </Text>
      </View>

      {isRunning ? <Timer time={time} /> : <Pusher noOfPushups={noOfPushUps} />}

      <NextButton
        icon={isRunning ? 'arrowhead-right' : 'checkmark'}
        label={isRunning ? 'SKIP' : 'DONE'}
        onPress={onButtonPress}
      />
    </Layout>
  )
}
