import React from 'react'
import { TextInput } from 'react-native'
import { useTheme } from '@ui-kitten/components'
import { IconLabelRow, IconRow } from '../../../components/IconRow'

function Pusher({ noOfPushUps }: { noOfPushUps: number }) {
  return <IconLabelRow label={noOfPushUps.toString()} icon="arrowhead-down" />
}

function InputPusher({
  value,
  onChangeText,
}: {
  value: string
  onChangeText: (nextValue: string) => void
}) {
  const theme = useTheme()
  return (
    <IconRow icon="arrowhead-down">
      <TextInput
        keyboardType="number-pad"
        value={value}
        onChangeText={onChangeText}
        caretHidden
        clearTextOnFocus
        maxLength={3}
        returnKeyType="done"
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          borderBottomWidth: 1,
          borderBottomColor: theme['text-basic-color'],
        }}
      ></TextInput>
    </IconRow>
  )
}

export { Pusher, InputPusher }
